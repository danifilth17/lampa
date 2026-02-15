(function () {
    'use strict';

    var style = '<style id="studio-logos-modern-style">' +
        /* Контейнер для всех логотипов */
        '.studio-logos-container { display: flex; gap: 10px; margin: 10px 0; flex-wrap: wrap; }' +
        
        /* Стилизация каждой кнопки (плашки) */
        '.rate--studio.studio-logo { ' +
            'display: inline-flex; ' +
            'align-items: center; ' +
            'padding: 4px 12px !important; ' +
            'background: transparent !important; ' + // Убираем темный фон
            'border: 1px solid rgba(173, 255, 47, 0.5); ' + // Тонкая зеленая рамка (как на скрине)
            'border-radius: 12px; ' +
            'height: 34px; ' +
            'transition: all 0.3s ease; ' +
            'cursor: pointer; ' +
        '}' +

        /* Эффект при наведении/фокусе */
        '.rate--studio.studio-logo.focus { ' +
            'border-color: #adff2f; ' + // Яркий зеленый при фокусе
            'background: rgba(173, 255, 47, 0.1) !important; ' +
            'transform: scale(1.05); ' +
            'box-shadow: 0 0 10px rgba(173, 255, 47, 0.2); ' +
        '}' +

        /* Стилизация самих картинок-логотипов */
        '.rate--studio.studio-logo img { ' +
            'max-height: 20px; ' +
            'max-width: 100px; ' +
            'object-fit: contain; ' +
            'filter: brightness(0) invert(1); ' + // Делает черные логотипы белыми для читабельности
        '}' +

        /* Стилизация текстовых логотипов (если нет картинки) */
        '.studio-logo-text { ' +
            'font-size: 0.8em; ' +
            'font-weight: 500; ' +
            'color: #adff2f !important; ' + // Текст в цвет рамки
            'text-transform: uppercase; ' +
            'letter-spacing: 0.5px; ' +
        '}' +
    '</style>';

    // Добавляем стили в head
    if (!$('#studio-logos-modern-style').length) {
        $('body').append(style);
    }

    // Этот плагин работает как дополнение к вашему основному коду.
    // Если нужно, чтобы он сам отрисовывал логотипы, добавьте логику getStudioLogosHtml из вашего файла.
})();
