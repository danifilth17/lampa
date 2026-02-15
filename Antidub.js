// ==UserScript==
// @name         Movie Details Badges (Dot-Split)
// @version      10.0
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 1. Стилизация баблов
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

        /* Длительность и Качество — Синие */
        .badge-main-blue { background-color: #2b78b5 !important; }
        
        /* Разделитель строк (чтобы жанры ушли вниз) */
        .badge-break { flex-basis: 100% !important; height: 0 !important; margin: 0 !important; }

        /* Цвета для остальных элементов */
        .bg-green { background-color: #1e7d43 !important; }
        .bg-red   { background-color: #a0352a !important; }
        .bg-blue-dark { background-color: #2b618f !important; }
    `;
    document.head.appendChild(style);

    function applyStyling() {
        const container = document.querySelector('.full-start-new__details');
        // Если контейнера нет или он уже содержит наши баблы — выходим
        if (!container || container.querySelector('.custom-badge')) return;

        // Берем текст, который подготовил твой мод (с точками-разделителями)
        let rawText = container.innerText.trim();
        if (!rawText || rawText.length < 5) return;

        // 1. Разбиваем строго по точкам: ' · ' или '.'
        // Твой мод вставляет ' · ', используем это как главный ориентир
        let items = rawText.split(/[·•]/).map(item => item.trim()).filter(i => i.length > 0);

        container.innerHTML = ''; 
        let genreCounter = 0;
        const colors = ['bg-green', 'bg-red', 'bg-blue-dark'];

        items.forEach((text, index) => {
            const span = document.createElement('span');
            span.className = 'custom-badge';
            // Очищаем от случайных точек в конце, если они остались
            span.textContent = text.replace(/[.]+$/, '');

            // ЛОГИКА РАСКРАСКИ:
            // Первые два элемента (обычно Длительность и Качество) — синие
            // Или если в тексте есть маркеры качества
            if (index === 0 || /(HD|4K|1080p|720p|WEB|HDR|BDRip)/i.test(text)) {
                span.classList.add('badge-main-blue');
                container.appendChild(span);

                // После первого элемента (длительности) делаем перенос строки
                if (index === 0) {
                    const br = document.createElement('div');
                    br.className = 'badge-break';
                    container.appendChild(br);
                }
            } else {
                // Все остальное (страны, жанры) — в три цвета по очереди
                span.classList.add(colors[genreCounter % 3]);
                container.appendChild(span);
                genreCounter++;
            }
        });
    }

    // Проверяем каждые полсекунды (чтобы сработать после setTimeout в твоем моде)
    setInterval(applyStyling, 500);
})();
