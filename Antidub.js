// ==UserScript==
// @name         Movie Details Badges Final
// @version      6.0
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
            font-family: sans-serif !important;
            font-weight: 500 !important;
            line-height: 1.1 !important;
        }

        /* Длительность - синий */
        .badge-duration { 
            background-color: #2b78b5 !important; 
            width: fit-content !important;
        }

        /* Разрыв строки после времени */
        .badge-break {
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

        // Получаем текст, который подготовил основной мод
        let text = container.innerText.trim();
        if (!text) return;

        // 1. Ищем, где заканчивается время (обычно после "мин." или "мин")
        let durationMatch = text.match(/.*?(мин\.?|час\.?|фильма:?|сериала:?)\s*(\d+\s*мин\.?)?/i);
        let durationText = durationMatch ? durationMatch[0] : "";
        let restText = durationMatch ? text.replace(durationText, "") : text;

        // 2. Чистим остаток от мусора (точки, лишние пробелы)
        let genres = restText.split(/[,·•/]/).map(g => g.trim()).filter(g => g.length > 2);

        container.innerHTML = ''; 

        // Добавляем плашку времени
        if (durationText) {
            const span = document.createElement('span');
            span.className = 'custom-badge badge-duration';
            span.textContent = durationText.replace(/[,.]$/, '').trim();
            container.appendChild(span);

            // Принудительный перенос
            const br = document.createElement('div');
            br.className = 'badge-break';
            container.appendChild(br);
        }

        // Добавляем жанры
        const colors = ['bg-green', 'bg-red', 'bg-blue'];
        genres.forEach((genre, i) => {
            const span = document.createElement('span');
            span.className = `custom-badge ${colors[i % 3]}`;
            span.textContent = genre.replace(/^[. ]+|[. ]+$/g, ''); // чистим точки [cite: uploaded:interface_mod_
