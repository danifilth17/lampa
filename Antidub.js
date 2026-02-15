// ==UserScript==
// @name         Lampa Movie Badges (Instant)
// @version      12.0
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
            opacity: 1 !important;
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

        .badge-blue-main { background-color: #2b78b5 !important; }
        .badge-line-break { flex-basis: 100% !important; height: 0 !important; }

        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue-dark { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyBadges(container) {
        // Если уже обработано — выходим
        if (!container || container.dataset.styled === 'true') return;

        let rawText = container.innerText.trim();
        // Ждем, пока в блоке появится хотя бы точка или достаточно текста
        if (rawText.length < 5) return;

        // Разделяем по точкам (ориентир из твоего interface_mod_new.js)
        let items = rawText.split(/[·•]/).map(item => item.trim()).filter(i => i.length > 0);
        
        // Если разделение не произошло (одна строка), пробуем по запятым
        if (items.length === 1) items = rawText.split(',').map(item => item.trim());

        container.innerHTML = ''; 
        let genreIdx = 0;
        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];

        items.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            span.textContent = text.replace(/[.]+$/, ''); // убираем точку в конце слова

            // Длительность и Качество — в синий бабл
            if (index === 0 || /(HD|4K|1080p|720p|WEB|HDR)/i.test(text)) {
                span.classList.add('badge-blue-main');
                container.appendChild(span);

                // После длительности (первый бабл) — перенос строки
                if (index === 0) {
                    const br = document.createElement('div');
                    br.className = 'badge-line-break';
                    container.appendChild(br);
                }
            } else {
                // Страны и Жанры — цветные
                span.classList.add(colors[genreIdx % 3]);
                container.appendChild(span);
                genreIdx++;
            }
        });

        container.dataset.styled = 'true';
    }

    // Мгновенное отслеживание изменений в DOM
    const observer = new MutationObserver((mutations) => {
        for (let mutation of mutations) {
            // Проверяем добавленные узлы
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList.contains('full-start-new__details')) applyBadges(node);
                    const child = node.querySelector('.full-start-new__details');
                    if (child) applyBadges(child);
                }
            });
            // Также проверяем изменение текста внутри (важно для Lampa)
            if (mutation.type === 'characterData' || mutation.type === 'childList') {
                const target = mutation.target.parentElement;
                if (target && target.classList.contains('full-start-new__details')) {
                    applyBadges(target);
                }
            }
