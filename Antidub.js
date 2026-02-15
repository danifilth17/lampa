// ==UserScript==
// @name         Movie Details Badges Styler
// @version      1.0
// @description  Стилизация длительности и жанров в красивые плашки
// @author       Gemini
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Стили (Цвета точно как на твоем скриншоте)
    const style = document.createElement('style');
    style.innerHTML = `
        .full-start-new__details {
            display: flex !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
            margin-top: 10px !important;
            color: transparent !important; /* Прячем исходный текст, если он не успел удалиться */
        }

        .custom-badge {
            display: inline-flex !important;
            align-items: center !important;
            padding: 5px 12px !important;
            border-radius: 6px !important;
            color: white !important;
            font-size: 15px !important;
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif !important;
            font-weight: 500 !important;
            line-height: 1.2 !important;
            text-transform: capitalize;
        }

        /* Синяя плашка для длительности (на всю строку) */
        .badge-duration { 
            background-color: #2b78b5 !important; 
            width: 100%; 
            margin-bottom: 5px;
        }

        /* Цвета для жанров */
        .badge-genre-green { background-color: #1e7d43 !important; }
        .badge-genre-red   { background-color: #a0352a !important; }
        .badge-genre-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    // 2. Вспомогательная функция очистки (как в твоем исходнике)
    function cleanText(str) {
        return str.replace(/[.,]/g, '').trim();
    }

    // 3. Основная логика трансформации
    function applyStyling(container) {
        if (!container || container.getAttribute('data-styled') === 'true') return;

        const originalText = container.innerText;
        // Разбиваем по запятой или точке с запятой
        const items = originalText.split(/[,;]/).map(item => item.trim()).filter(item => item.length > 0);
        
        container.innerHTML = ''; // Очищаем контейнер

        items.forEach((text, index) => {
            const span = document.createElement('span');
            span.textContent = text;
            span.className = 'custom-badge';

            // Логика распределения цветов
            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
            } else {
                // Циклически меняем цвета для жанров: зеленый, красный, синий
                const genreIndex = index % 3; 
                if (genreIndex === 1) span.classList.add('badge-genre-green');
                else if (genreIndex === 2) span.classList.add('badge-genre-red');
                else span.classList.add('badge-genre-blue');
            }

            container.appendChild(span);
        });

        container.setAttribute('data-styled', 'true');
    }

    // 4. MutationObserver (следит за появлением элемента, как в твоем interface_mod_new.js)
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                if (!(node instanceof HTMLElement)) continue;

                if (node.classList.contains('full-start-new__details')) {
                    applyStyling(node);
                }
                
                // Проверка дочерних элементов
                const child = node.querySelector('.full-start-new__details');
                if (child) applyStyling(child);
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Первичный запуск
    document.querySelectorAll('.full-start-new__details').forEach(applyStyling);

})();
