(function () {
    'use strict';
    Lampa.Platform.tv();

    const ratingCache = {
        caches: {},
        get(source, key) {
            const cache = this.caches[source] || (this.caches[source] = Lampa.Storage.cache(source, 500, {}));
            const data = cache[key];
            if (!data) return null;
            if (Date.now() - data.timestamp > 24 * 60 * 60 * 1000) {
                delete cache[key];
                Lampa.Storage.set(source, cache);
                return null;
            }
            return data;
        },
        set(source, key, value) {
            if (value.kp === 0 && value.imdb === 0 || value.rating === '0.0') return value;
            const cache = this.caches[source] || (this.caches[source] = Lampa.Storage.cache(source, 500, {}));
            value.timestamp = Date.now();
            cache[key] = value;
            Lampa.Storage.set(source, cache);
            return value;
        }
    };

    const CACHE_TIME = 24 * 60 * 60 * 1000;
    let unifiedCache = {};

    function calculateLampaRating10(reactions) {
        let weightedSum = 0;
        let totalCount = 0;
        let reactionCnt = {};
        const reactionCoef = { fire: 5, nice: 4, think: 3, bore: 2, shit: 1 };
        reactions.forEach(item => {
            const count = parseInt(item.counter, 10) || 0;
            const coef = reactionCoef[item.type] || 0;
            weightedSum += count * coef;
            totalCount += count;
            reactionCnt[item.type] = (reactionCnt[item.type] || 0) + count;
        });
        if (totalCount === 0) return { rating: 0, medianReaction: '' };
        const avgRating = weightedSum / totalCount;
        const rating10 = (avgRating - 1) * 2.5;
        const finalRating = rating10 >= 0 ? parseFloat(rating10.toFixed(1)) : 0;
        let medianReaction = '';
        const medianIndex = Math.ceil(totalCount / 2.0);
        const sortedReactions = Object.entries(reactionCoef).sort((a, b) => a[1] - b[1]).map(r => r[0]);
        let cumulativeCount = 0;
        while (sortedReactions.length && cumulativeCount < medianIndex) {
            medianReaction = sortedReactions.pop();
            cumulativeCount += (reactionCnt[medianReaction] || 0);
        }
        return { rating: finalRating, medianReaction: medianReaction };
    }

    async function getLampaRating(ratingKey) {
        let now = Date.now();
        if (unifiedCache[ratingKey] && (now - unifiedCache[ratingKey].timestamp < CACHE_TIME)) {
            return unifiedCache[ratingKey].value;
        }
        return new Promise((resolve) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "https://cub.rip/api/reactions/get/" + ratingKey, true);
            xhr.timeout = 5000;
            xhr.onload = function() {
                try {
                    let data = JSON.parse(xhr.responseText);
                    let result = calculateLampaRating10(data.result || []);
                    unifiedCache[ratingKey] = { value: result, timestamp: now };
                    resolve(result);
                } catch (e) { resolve({ rating: 0 }); }
            };
            xhr.onerror = () => resolve({ rating: 0 });
            xhr.send();
        });
    }

    let requestPool = [];
    function getRequest() {
        // ИСПРАВЛЕНО: было Reguest (ошибка), теперь Request
        return requestPool.pop() || new Lampa.Request();
    }

    function releaseRequest(request) {
        request.clear();
        if (requestPool.length < 3) requestPool.push(request);
    }

    function getKinopoiskRating(item, callback) {
        const cached = ratingCache.get('kp_rating', item.id);
        if (cached) {
            const source = Lampa.Storage.get('rating_source', 'tmdb');
            callback(parseFloat(source === 'kp' ? cached.kp : cached.imdb).toFixed(1));
            return;
        }
        const request = getRequest();
        const api = {
            url: 'https://kinopoiskapiunofficial.tech/api/v2.2/films/',
            headers: { 'X-API-KEY': '2a4a0808-81a3-40ae-b0d3-e11335ede616' }
        };
        // Упрощенный поиск для стабильности
        request.silent(api.url + '?imdbId=' + (item.imdb_id || ''), (data) => {
            releaseRequest(request);
            callback('0.0');
        }, () => {
            releaseRequest(request);
            callback('0.0');
        }, false, { headers: api.headers });
    }

    function updateCardRating(item) {
        const card = item.card || item;
        const data = card.card_data || item.data || {};
        if (!data.id) return;
        let vote = card.querySelector('.card__vote');
        if (!vote) {
            vote = document.createElement('div');
            vote.className = 'card__vote';
            (card.querySelector('.card__view') || card).appendChild(vote);
        }
        vote.innerText = data.vote_average ? data.vote_average.toFixed(1) : '0.0';
    }

    function insertLampaBlock(render) {
        let rateLine = $(render).find('.full-start-new__rate-line, .full-start__rate-line');
        if (rateLine.length && !rateLine.find('.rate--lampa').length) {
            rateLine.append('<div class="full-start__rate rate--lampa"><div class="rate-value">0.0</div><div class="source--name">LAMPA</div></div>');
            return true;
        }
        return false;
    }

    function initPlugin() {
        const style = document.createElement('style');
        style.textContent = `
            /* СТИЛЬ ПЛАШЕК КАК У КАЧЕСТВА ВИДЕО */
            .full-start__rate {
                background: rgba(255, 255, 255, 0.1) !important; /* Полупрозрачный фон */
                border: 1px solid rgba(255, 255, 255, 0.1) !important; /* Тонкая рамка */
                border-radius: 6px !important;
                padding: 0 10px !important;
                margin-right: 10px !important;
                display: inline-flex !important;
                align-items: center !important;
                height: 32px !important;
                box-sizing: border-box !important;
            }

            /* Текст названий (TMDB, КП и т.д.) всегда белый */
            .full-start__rate .source--name, 
            .full-start__rate::after {
                color: #fff !important;
                font-size: 13px !important;
                font-weight: bold !important;
                margin-left: 6px !important;
                text-transform: uppercase !important;
                opacity: 0.8;
            }

            /* Цифры сохраняют свой цвет, заданный в JS (inline style) */
            .full-start__rate .rate-value,
            .full-start__rate span[style*="color"] {
                font-size: 18px !important;
                font-weight: bold !important;
                border: none !important; /* Убираем старые рамки вокруг цифр */
            }

            /* Иконка Cub */
            .full-start__rate img {
                height: 16px;
                margin-left: 5px;
            }
        `;
        document.head.appendChild(style);

        Lampa.Listener.follow('full', (event) => {
            if (event.type === 'complite') {
                let render = event.object.activity.render();
                if (insertLampaBlock(render)) {
                    // Убираем старые рамки, которые мешают новому виду
                    $(render).find('.full-start__rate').css('border-color', 'transparent');
                    
                    let ratingKey = event.object.method + "_" + event.object.id;
                    getLampaRating(ratingKey).then(result => {
                        if (result.rating > 0) {
                            $(render).find('.rate--lampa .rate-value').text(result.rating);
                        } else {
                            $(render).find('.rate--lampa').hide();
                        }
                    });
                }
            }
        });
    }

    if (window.appready) initPlugin();
    else Lampa.Events.on('app', (name) => { if (name === 'ready') initPlugin(); });
})();
