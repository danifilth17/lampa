// ==UserScript==
// @name         Movie Details Badges Final (PRO)
// @version      9.0
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
        }

        .custom-badge {
            display: inline-flex !important;
            padding: 6px 14px !important;
            border-radius: 8px !important;
            color: #ffffff !important;
            font-size: 15px !important;
            font-family: 'Segoe UI', Helvetica, Arial, sans-serif !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            white-space: nowrap !important;
        }

        /* Синие: Длительность и Качество */
        .badge-main-blue { background-color: #2b78b5 !important; }
        
        /* Разрыв строки */
        .badge-break { flex-basis: 100% !important; height: 0 !important; margin: 0 !important; }

        /* Цвета жанров/стран */
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

        // 1. Извлекаем Длительность (от начала до первого Жанра/Страны)
        let durationMatch = text.match(/(Длительность\s+фильма:|Длительность\s+сериала:).*?(\d+\s*мин\.?|\d+\s*ч\.?(\s*\d+\s*мин\.?)?)?/i);
        let durationText = durationMatch ? durationMatch[0] : "";

        // 2. Извлекаем Качество (HD, 4K и т.д.)
        let qualityMatch = text.match(/(HD|4K|UltraHD|720p|1080p|TS|BDRip|WEB-DL)/i);
        let qualityText = qualityMatch ? qualityMatch[0] : "";

        // 3. Получаем всё остальное (Страны и Жанры)
        let cleanText = text;
        if (durationText) cleanText = cleanText.replace(durationText, "");
        if (qualityText) cleanText = cleanText.replace(qualityText, "");
        
        // Разбиваем остаток по заглавным буквам (так как запятых нет после твоего мода)
        // Это позволит "США", "Великобритания", "Боевик" идти отдельными целыми словами
        let items = cleanText.split(/(?=[А-ЯA-Z]{2,})|(?<=[а-яё])(?=[А-ЯЁ])|\s{2,}/)
                             .map(i => i.trim())
                             .filter(i => i.length > 1);

        container.innerHTML = ''; 

        // Ряд 1: Время и Качество
        if (durationText) {
            const span = document.createElement('span');
            span.className = 'custom-badge badge-main-blue';
            span.textContent = durationText.replace(/[.,:]+$/, '').trim();
            container.appendChild(span);
        }
        
        if (qualityText) {
            const span = document.createElement('span');
            span.className = 'custom-badge badge-main-blue';
            span.textContent = qualityText;
            container.appendChild(span);
        }

        // Перенос строки
        if (durationText || qualityText) {
            const br = document.createElement('div');
            br.className = 'badge-break';
            container.appendChild(br);
        }

        // Ряд 2: Страны и Жанры
        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];
        items.forEach((item, i) => {
            const span = document.createElement('span');
            span.className = `custom-badge ${colors[i % 3]}`;
            // Убираем случайные точки в конце слов
            span.textContent = item.replace(/[.,·•/]+$/, '').trim();
            container.appendChild(span);
        });
    }

    // Постоянная проверка (защита от перезаписи основным модом)
    setInterval(applyStyling, 500);
})();
