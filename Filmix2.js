(function () {
    'use strict';

    var TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/h100';
    var CACHE_TTL = 30 * 24 * 60 * 60 * 1000;
    var titleCache = Lampa.Storage.get("title_cache_uk_bold") || {};

    // 1. СТИЛИЗАЦИЯ (Цвет как на скриншоте KP/Lampa)
    var style = '<style id="studio-logos-combined-style">' +
        '.studio-logos-container { display: flex; gap: 8px; margin-top: 10px; margin-bottom: 5px; }' +
        '.rate--studio.studio-logo { ' +
            'display: inline-flex; align-items: center; vertical-align: middle; ' +
            'padding: 4px 12px !important; background: transparent !important; ' +
            'border: 1px solid rgba(173, 255, 47, 0.4); border-radius: 10px; ' + // Зеленая рамка
            'transition: all 0.2s ease; height: 32px; cursor: pointer; ' +
        '}' +
        '.rate--studio.studio-logo.focus { ' +
            'background: rgba(173, 255, 47, 0.15) !important; ' +
            'border: 1px solid #adff2f; transform: scale(1.05); ' + // Яркая рамка в фокусе
        '}' +
        '.rate--studio.studio-logo img { ' +
            'max-height: 22px !important; max-width: 100px; object-fit: contain; ' +
            'filter: brightness(0) invert(1); ' + // Делает логотипы читаемыми (белыми)
        '}' +
        '.studio-logo-text { font-size: 0.75em; font-weight: bold; color: #adff2f !important; }' +
    '</style>';

    if (!$('#studio-logos-combined-style').length) {
        $('body').append(style);
    }

    function getStudioLogosHtml(movie) {
        var html = '';
        if (movie && movie.production_companies) {
            movie.production_companies.slice(0, 3).forEach(function (co) {
                var content = co.logo_path
                    ? '<img src="' + TMDB_IMAGE_URL + co.logo_path + '" title="' + co.name + '">'
                    : '<span class="studio-logo-text">' + co.name + '</span>';

                html += '<div class="rate--studio studio-logo selector" data-id="' + co.id + '" data-name="' + co.name + '">' +
                    content +
                    '</div>';
            });
        }
        return html;
    }

    function renderCombinedTitle(title, movie) {
        var render = Lampa.Activity.active().activity.render();
        if (!render) return;

        $(".plugin-uk-title-combined", render).remove();

        var logosHtml = getStudioLogosHtml(movie);
        if (!logosHtml) return;

        var html = '<div class="plugin-uk-title-combined">' +
                '<div class="studio-logos-container">' + logosHtml + '</div>' +
            '</div>';

        var target = $(".full-start-new__title", render);
        if(!target.length) target = $(".full-start__title", render);
        
        target.after(html);

        $('.rate--studio', render).on('hover:enter', function () {
            var id = $(this).data('id');
            var name = $(this).data('name');
            if (id) {
                Lampa.Activity.push({
                    url: 'movie', id: id, title: name, component: 'company', source: 'tmdb', page: 1
                });
            }
        });

        // 2. ИСПРАВЛЕНИЕ ФОКУСА: 
        // Мы добавляем кнопки в коллекцию, но НЕ заставляем контроллер переключаться на них принудительно.
        setTimeout(function() {
            var current = Lampa.Controller.enabled();
            if (current && current.name === 'full_start') {
                // Добавляем наши логотипы в общий список селекторов карточки
                current.collection = render.find('.selector'); 
            }
        }, 100);
    }

    function startPlugin() {
        Lampa.Listener.follow('full', function (e) {
            if ((e.type === 'complite' || e.type === 'complete') && e.data.movie) {
                var card = e.data.movie;
                var now = Date.now();
                var cache = titleCache[card.id];

                if (cache && now - cache.timestamp < CACHE_TTL) {
                    renderCombinedTitle(cache.uk, card);
                } else {
                    var type = card.first_air_date ? "tv" : "movie";
                    Lampa.Api.sources.tmdb.get(type + "/" + card.id + "?append_to_response=translations", {}, function (data) {
                        var tr = data.translations ? data.translations.translations : [];
                        var found = tr.find(function (t) {
                            return t.iso_3166_1 === "UA" || t.iso_639_1 === "uk";
                        });

                        var uk = found ? (found.data.title || found.data.name) : (card.title || card.name);
                        titleCache[card.id] = { uk: uk, timestamp: now };
                        Lampa.Storage.set("title_cache_uk_bold", titleCache);
                        renderCombinedTitle(uk, card);
                    }, function() {
                        renderCombinedTitle(card.title || card.name, card);
                    });
                }
            }
        });
    }

    if (window.appready) startPlugin();
    else Lampa.Listener.follow("app", function (e) { if (e.type === "ready") startPlugin(); });
})();
