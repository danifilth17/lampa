// ==UserScript==
// @name         Movie Details Badges Styler v4
// @version      4.0
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
            width: 100% !important;
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

        /* Время - всегда синее и сверху */
        .badge-duration { 
            background-color: #2b78b5 !important; 
            margin-bottom: 5px !important;
        }

        /* Невидимый блок для принудительного переноса жанров */
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

        // Извлекаем чистый текст, убирая лишние знаки как в твоем скрипте
        let rawContent = container.innerText.replace(/[•·]/g, ',').trim(); 
        
        // Разделяем по запятым, точкам или слэшам
        let items = rawContent.split(/[,./\\]/).map(item => item.trim()).filter(i => i.length > 1);
        
        if (items.length === 0) return;

        container.innerHTML = ''; 
        let genreIdx = 0;

        items.forEach((text) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            span.textContent = text;

            if (text.toLowerCase().includes('час') || text.toLowerCase().includes('мин')) {
                span.classList.add('badge-duration');
                container.appendChild(span);
                
                // Добавляем разрыв строки
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

    // Следим за изменениями, как в оригинальном моде
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
    
    // Запуск для уже существующих элементов
    setTimeout(() => {
        document.querySelectorAll('.full-start-new__details').forEach(applyStyling);
    }, 500);
})();
