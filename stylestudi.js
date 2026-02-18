(function () {
    'use strict';

    var style = `
        <style id="lampa-extreme-white">
            /* Находим конкретно те элементы, которые мы видели на скриншотах кода */
            .studio-logos-container div[style*="display: flex"],
            .studio-logos-container > div,
            .studio-logos-container > a {
                /* Принудительно выжигаем белый фон */
                background: #ffffff !important; 
                background-color: #ffffff !important;
                background-image: none !important;
                
                /* Убираем любые системные фильтры и прозрачность */
                filter: none !important;
                opacity: 1 !important;
                -webkit-filter: none !important;
                
                /* Настраиваем рамку (темно-синяя) */
                border: 3px solid #0011aa !important;
                box-sizing: border-box !important;
                border-radius: 12px !important;
            }

            /* Делаем логотипы (Lionsgate и др.) радикально черными */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) !important;
                -webkit-filter: brightness(0) !important;
                opacity: 1 !important;
                display: block !important;
                visibility: visible !important;
            }

            /* Если там просто текст вместо логотипа */
            .studio-logos-container span,
            .studio-logos-container .selectbox__item-title {
                color: #000000 !important;
                font-weight: bold !important;
            }
        </style>
    `;

    // Удаляем все старые попытки и ставим новую
    $('#lampa-white-logos, #lampa-extreme-white').remove();
    $('head').append(style);

    // Дополнительный "пинок" через JS для инлайновых стилей
    function forceWhite() {
        $('.studio-logos-container').find('div, a').each(function() {
            this.style.setProperty('background', '#ffffff', 'important');
            this.style.setProperty('background-color', '#ffffff', 'important');
            this.style.setProperty('filter', 'none', 'important');
            this.style.setProperty('opacity', '1', 'important');
        });
    }

    // Запускаем проверку часто, чтобы Lampa не успела перекрасить обратно
    setInterval(forceWhite, 200);

    console.log('Lampa Extreme White: Applied');
})();
