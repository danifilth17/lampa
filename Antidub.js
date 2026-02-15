// ==UserScript==
// @name         Movie Details Badges Styler v5
// @version      5.0
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
            border: none !important;
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
        }

        .badge-duration { 
            background-color: #2b78b5 !important; 
        }

        .badge-break {
            flex-basis: 100% !important;
            height: 0 !important;
        }

        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling(container) {
        if (!container || container.dataset.styled === 'true') return;

        // 1. Берем текст и принудительно вставляем запятую после "мин" или "час", 
        // если после них идет заглавная буква жанра.
        let rawContent = container.innerText
            .replace(/(мин|час|год)(\s*)(?=[А-ЯA-Z])/gi, '$1, ') 
            .replace(/[•·]/g, ',')
            .trim();

        // 2. Разбиваем по запятым
        let items = rawContent.split(',').map(item => item.trim()).filter(i => i.length > 1);
        
        if (items.length === 0) return;

        container.innerHTML = ''; 
        let genreIdx = 0;

        items.forEach((text) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            // Очистка от лишних точек в конце, как в твоем исходнике
            span.textContent = text.replace(/[.]$/, ''); 

            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
                container.appendChild(span);
                
                const br = document.createElement('div');
                br.className = 'badge-break';
                container.appendChild(br);
            } else {
                const colors = ['bg-green', 'bg-red', 'bg-blue'];
                span.classList.add(colors[genreIdx % 3]);
                container.appendChild(span);
                genreIdx++;
            }
        });

        container.dataset.styled = 'true';
    }

    // Наблюдатель за изменениями страницы
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('full-start-new__details')) {
                        applyStyling(node);
                    } else {
                        const target = node.querySelector('.full-start-new__details');
                        if (target) applyStyling(target);
                    }
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Запуск с небольшой задержкой, чтобы не конфликтовать с interface_mod_new.js
    setTimeout(() => {
        document.querySelectorAll('.full-start-new__details').forEach(applyStyling);
    }, 800);
})();// ==UserScript==
// @name         Movie Details Badges Styler v5
// @version      5.0
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
            border: none !important;
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
        }

        .badge-duration { 
            background-color: #2b78b5 !important; 
        }

        .badge-break {
            flex-basis: 100% !important;
            height: 0 !important;
        }

        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling(container) {
        if (!container || container.dataset.styled === 'true') return;

        // 1. Берем текст и принудительно вставляем запятую после "мин" или "час", 
        // если после них идет заглавная буква жанра.
        let rawContent = container.innerText
            .replace(/(мин|час|год)(\s*)(?=[А-ЯA-Z])/gi, '$1, ') 
            .replace(/[•·]/g, ',')
            .trim();

        // 2. Разбиваем по запятым
        let items = rawContent.split(',').map(item => item.trim()).filter(i => i.length > 1);
        
        if (items.length === 0) return;

        container.innerHTML = ''; 
        let genreIdx = 0;

        items.forEach((text) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            // Очистка от лишних точек в конце, как в твоем исходнике
            span.textContent = text.replace(/[.]$/, ''); 

            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
                container.appendChild(span);
                
                const br = document.createElement('div');
                br.className = 'badge-break';
                container.appendChild(br);
            } else {
                const colors = ['bg-green', 'bg-red', 'bg-blue'];
                span.classList.add(colors[genreIdx % 3]);
                container.appendChild(span);
                genreIdx++;
            }
        });

        container.dataset.styled = 'true';
    }

    // Наблюдатель за изменениями страницы
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('full-start-new__details')) {
                        applyStyling(node);
                    } else {
                        const target = node.querySelector('.full-start-new__details');
                        if (target) applyStyling(target);
                    }
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Запуск с небольшой задержкой, чтобы не конфликтовать с interface_mod_new.js
    setTimeout(() => {
        document.querySelectorAll('.full-start-new__details').forEach(applyStyling);
    }, 800);
})();
