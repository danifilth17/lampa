// ==UserScript==
// @name         Lampa Movie Badges (Precise Dot Split)
// @version      11.0
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Добавляем стили для баблов
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
            font-family: 'Segoe UI', Roboto, sans-serif !important;
            font-weight: 500 !important;
            line-height: 1 !important;
            white-space: nowrap !important;
        }

        /* Синий цвет для Длительности и Качества */
        .badge-main-blue { background-color: #2b78b5 !important; }
        
        /* Принудительный перенос строки после первого блока (длительности) */
        .badge-line-break {
            flex-basis: 100% !important;
            height: 0 !important;
            margin: 0 !important;
        }

        /* Цвета для Жанров и Стран */
        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue-dark { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function buildBadges() {
        const container = document.querySelector('.full-start-new__details');
        
        // Если контейнера нет или мы уже создали баблы — ничего не делаем
        if (!container || container.querySelector('.custom-badge')) return;

        // Берем текст, который сформировал твой interface_mod_new.js
        let rawText = container.innerText.trim();
        if (!rawText || rawText.length < 5) return;

        // РАЗДЕЛЕНИЕ: Режем строго по символу ' · ' (middle dot)
        // Это гарантирует, что "США" или "1080p" не разделятся внутри
        let items = rawText.split('·').map(item => item.trim()).filter(i => i.length > 0);

        container.innerHTML = ''; 
        let genreIdx = 0;
        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];

        items.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            // Чистим текст от случайных точек в конце слов
            span.textContent = text.replace(/[.]+$/, '');

            // ЛОГИКА ЦВЕТА И ПОЗИЦИИ:
            // 1. Первый элемент (Длительность) или элементы с Качеством (HD, 4K) — синие
            if (index === 0 || /(HD|4K|720p|1080p|WEB|HDR|TS)/i.test(text)) {
                span.classList.add('badge-main-blue');
                container.appendChild(span);

                // После первого элемента (Длительность) всегда делаем разрыв строки
                if (index === 0) {
                    const br = document.createElement('div');
                    br.className = 'badge-line-break';
                    container.appendChild(br);
                }
            } else {
                // 2. Все остальные элементы (Страны, Жанры) — цветные по очереди
                span.classList.add(colors[genreIdx % 3]);
                container.appendChild(span);
                genreIdx++;
            }
        });
    }

    // Проверяем наличие блока каждые 500мс
    // Это нужно, так как твой мод работает с задержкой 300мс
    setInterval(buildBadges, 500);
})();
