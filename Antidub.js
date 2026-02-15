// ==UserScript==
// @name         Movie Details Dot-Based Styler
// @version      10.0
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Стилизация
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
            font-family: sans-serif !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            white-space: nowrap !important;
        }

        /* Первая строка (Длительность/Качество) */
        .badge-info-blue { background-color: #2b78b5 !important; }
        
        /* Разделитель строк */
        .badge-break { flex-basis: 100% !important; height: 0 !important; margin: 0 !important; }

        /* Цвета жанров и стран */
        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue-dark { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function stylizeByDots() {
        const container = document.querySelector('.full-start-new__details');
        // Проверяем, есть ли контейнер и не обработали ли мы его уже
        if (!container || container.querySelector('.custom-badge')) return;

        // Получаем текст со всеми точками-разделителями (·)
        let rawText = container.innerText.trim();
        if (!rawText || rawText.length < 5) return;

        // 1. Разбиваем строго по точкам (· или .), которые добавил твой мод
        let items = rawText.split(/[·•.]/).map(item => item.trim()).filter(i => i.length > 0);

        container.innerHTML = ''; 

        let genreCounter = 0;
        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];

        items.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            span.textContent = text;

            // Логика: если это первый элемент (длительность) или содержит качество (HD/4K)
            if (index === 0 || /(HD|4K|720p|1080p|WEB|HDR)/i.test(text)) {
                span.classList.add('badge-info-blue');
                container.appendChild(span);

                // Если это был первый элемент (длительность), делаем перенос строки после него
                if (index === 0) {
                    const br = document.createElement('div');
                    br.className = 'badge-break';
                    container.appendChild(br);
                }
            } else {
                // Все остальное (страны, жанры) красим по очереди
                span.classList.add(colors[genreCounter % 3]);
                container.appendChild(span);
                genreCounter++;
            }
        });
    }

    // Запускаем проверку каждые 500мс, чтобы "подхватить" изменения от interface_mod_new.js
    setInterval(stylizeByDots, 500);
})();
