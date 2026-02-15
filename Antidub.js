// ==UserScript==
// @name         Movie Details Badges Styler v3
// @version      3.0
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
            gap: 10px !important;
            background: none !important;
            padding: 10px 0 !important;
            height: auto !important;
            align-items: flex-start !important;
        }

        .custom-badge {
            display: inline-flex !important;
            padding: 6px 15px !important;
            border-radius: 6px !important;
            color: #ffffff !important;
            font-size: 15px !important;
            font-family: sans-serif !important;
            font-weight: 500 !important;
            white-space: nowrap !important;
            line-height: 1 !important;
        }

        /* Синяя плашка времени */
        .badge-duration { 
            background-color: #2b78b5 !important; 
            margin-bottom: 5px !important;
        }

        /* Разделитель для переноса жанров на новую строку */
        .line-break {
            flex-basis: 100% !important;
            height: 0 !important;
            margin: 0 !important;
        }

        /* Цвета жанров */
        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling(container) {
        if (!container || container.dataset.styled === 'true') return;

        // Берем чистый текст из контейнера
        const rawContent = container.innerText.trim();
        if (!rawContent) return;

        // Разделяем: либо по запятой, либо по пробелу перед заглавной буквой (если запятых нет)
        let items = rawContent.includes(',') 
            ? rawContent.split(',') 
            : rawContent.split(/(?=[А-ЯA-Z])/); // Разбивка, если жанры слиплись

        container.innerHTML = ''; 

        let genreCounter = 0;

        items.map(item => item.trim()).filter(i => i.length > 1).forEach((text) => {
            const span = document.createElement('span');
            span.textContent = text.replace(/[.,]/g, ''); // Чистим от точек
            span.className = 'custom-badge';

            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
                container.appendChild(span);
                
                // Создаем принудительный перенос строки после времени
                const br = document.createElement('div');
                br.className = 'line-break';
                container.appendChild(br);
            } else {
                const genreColors = ['bg-green', 'bg-red', 'bg-blue'];
                span.classList.add(genreColors[genreCounter % 3]);
                container.appendChild(span);
                genreCounter++;
            }
        });

        container.dataset.styled = 'true';
    }

    // Используем MutationObserver как в твоем исходном коде
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('full-start-new__details')) applyStyling(node);
                    const child = node.querySelector('.full-start-new__details');
                    if (child) applyStyling(child);
                }
            });
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll('.full-start-new__details').forEach(applyStyling);
})();
