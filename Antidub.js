// ==UserScript==
// @name         Movie Details Badges Styler v2
// @version      2.0
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
            border: none !important;
            padding: 10px 0 !important;
        }

        .custom-badge {
            display: inline-flex !important;
            align-items: center !important;
            padding: 6px 14px !important;
            border-radius: 8px !important;
            color: #ffffff !important;
            font-size: 16px !important;
            font-family: system-ui, -apple-system, sans-serif !important;
            font-weight: 400 !important;
            white-space: nowrap !important;
        }

        /* Длительность - синий, на всю ширину */
        .badge-duration { 
            background-color: #2b78b5 !important; 
            flex: 0 1 auto !important;
            width: fit-content !important;
            display: block !important;
            margin-bottom: 4px !important;
        }

        /* Принудительный разрыв после длительности */
        .badge-duration::after {
            content: "";
            display: block;
            width: 100vw;
            height: 0;
        }

        /* Цвета жанров */
        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue  { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling(container) {
        if (!container || container.dataset.styled === 'true') return;

        // Берем текст, игнорируя лишние пробелы (логика очистки из твоего файла)
        const content = container.innerText.trim();
        if (!content) return;

        // Разбиваем по запятой
        const items = content.split(',').map(item => item.trim());
        container.innerHTML = ''; 

        items.forEach((text, index) => {
            if (!text) return;
            
            const span = document.createElement('span');
            span.textContent = text;
            span.className = 'custom-badge';

            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
                // Добавляем невидимый элемент-разделитель, чтобы жанры ушли на след. строку
                container.appendChild(span);
                const br = document.createElement('div');
                br.style.flexBasis = '100%';
                br.style.height = '0';
                container.appendChild(br);
            } else {
                // Раскраска жанров по порядку
                const genreColors = ['bg-green', 'bg-red', 'bg-blue'];
                const colorClass = genreColors[(index - 1) % genreColors.length] || 'bg-blue';
                span.classList.add(colorClass);
                container.appendChild(span);
            }
        });

        container.dataset.styled = 'true';
    }

    // MutationObserver для динамических страниц (как в твоем оригинале)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('full-start-new__details')) applyStyling(node);
                    const child = node.querySelector('.full-start-new__details');
                    if (child) applyStyling(child);
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll('.full-start-new__details').forEach(applyStyling);
})();
