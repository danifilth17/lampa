// ==UserScript==
// @name         Movie Details Badges Final (Compatible)
// @version      7.0
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
        /* Контейнер, куда твой мод вставляет текст */
        .full-start-new__details {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            background: none !important;
            padding: 10px 0 !important;
            line-height: normal !important;
        }

        .custom-badge {
            display: inline-flex !important;
            padding: 6px 14px !important;
            border-radius: 8px !important;
            color: #ffffff !important;
            font-size: 15px !important;
            font-family: sans-serif !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            border: none !important;
        }

        .badge-duration { 
            background-color: #2b78b5 !important; 
            width: fit-content !important;
        }

        .badge-break {
            flex-basis: 100% !important;
            height: 0 !important;
            margin: 0 !important;
        }

        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling() {
        const container = document.querySelector('.full-start-new__details');
        // Если контейнера нет или мы его уже стилизовали (проверяем по наличию наших плашек)
        if (!container || container.querySelector('.custom-badge')) return;

        let text = container.innerText.trim();
        if (!text || text.length < 5) return;

        // Логика разделения: ищем ключевые точки
        // Твой мод склеивает всё в строку типа "Длительность фильма: 1 час 30 мин. Жанр Жанр"
        let durationMatch = text.match(/(.*?фильма:|.*?сериала:)\s*(\d+\s*ч(ас)?\s*\d+\s*м(ин)?)?/i);
        
        let durationPart = "";
        let genresPart = text;

        if (durationMatch) {
            durationPart = durationMatch[0];
            genresPart = text.replace(durationPart, "").trim();
        }

        // Чистим жанры (твой мод может оставлять точки или пробелы в начале)
        let genres = genresPart.split(/[\s,·•/]+/).filter(g => g.length > 2);

        container.innerHTML = ''; 

        if (durationPart) {
            const span = document.createElement('span');
            span.className = 'custom-badge badge-duration';
            span.textContent = durationPart.replace(/[.,]$/, '');
            container.appendChild(span);

            const br = document.createElement('div');
            br.className = 'badge-break';
            container.appendChild(br);
        }

        const colors = ['bg-green', 'bg-red', 'bg-blue'];
        genres.forEach((genre, i) => {
            const span = document.createElement('span');
            span.className = `custom-badge ${colors[i % 3]}`;
            span.textContent = genre.replace(/[.,]$/, '');
            container.appendChild(span);
        });
    }

    // Твой мод использует setTimeout 300ms, поэтому мы будем проверять блок чуть чаще
    // Это самый надежный способ для Lampa-плагинов
    setInterval(applyStyling, 500);
})();
