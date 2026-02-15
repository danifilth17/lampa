// ==UserScript==
// @name         Movie Details Badges Final (Grouped)
// @version      8.0
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `
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
        }

        /* Длительность и Качество — синие */
        .badge-blue-main { background-color: #2b78b5 !important; }
        
        /* Разрыв строки после первой линии (время + качество) */
        .badge-break {
            flex-basis: 100% !important;
            height: 0 !important;
            margin: 0 !important;
        }

        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue-dark { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling() {
        const container = document.querySelector('.full-start-new__details');
        if (!container || container.querySelector('.custom-badge')) return;

        let text = container.innerText.trim();
        if (!text || text.length < 5) return;

        // 1. Извлекаем длительность (все до жанров)
        let durationMatch = text.match(/(.*?фильма:|.*?сериала:)\s*([\d\s\wа-я.]+?)(?=\s[А-ЯA-Z])/i);
        let durationPart = durationMatch ? durationMatch[0] : "";
        
        // 2. Оставшаяся часть — это страны и жанры
        let restText = durationPart ? text.replace(durationPart, "").trim() : text;

        // 3. Разделяем остаток. Твой мод склеивает их, поэтому ищем слова с заглавной буквы.
        // Но теперь мы группируем страны и жанры аккуратно.
        let items = restText.split(/[,·•/]+|(?=[А-ЯA-Z][а-я]+)/).map(g => g.trim()).filter(g => g.length >= 2);

        container.innerHTML = ''; 

        // Выводим Длительность
        if (durationPart) {
            const span = document.createElement('span');
            span.className = 'custom-badge badge-blue-main';
            span.textContent = durationPart.replace(/[.,]$/, '');
            container.appendChild(span);

            // Если в тексте есть упоминание качества (HD, 4K, 720p), выведем его в ту же строку
            let qualityMatch = text.match(/(HD|4K|UltraHD|720p|1080p)/i);
            if (qualityMatch) {
                const qSpan = document.createElement('span');
                qSpan.className = 'custom-badge badge-blue-main';
                qSpan.textContent = qualityMatch[0];
                container.appendChild(qSpan);
            }

            // Перенос на следующую строку для жанров и стран
            const br = document.createElement('div');
            br.className = 'badge-break';
            container.appendChild(br);
        }

        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];
        let colorIdx = 0;

        items.forEach((item) => {
            // Пропускаем, если это качество (мы его уже вывели выше)
            if (/(HD|4K|UltraHD|720p|1080p)/i.test(item)) return;

            const span = document.createElement('span');
            span.className = `custom-badge ${colors[colorIdx % 3]}`;
            span.textContent = item.replace(/[.,]$/, '');
            container.appendChild(span);
            colorIdx++;
        });
    }

    // Интервал для совместимости с Lampa/MOD
    setInterval(applyStyling, 500);
})();
