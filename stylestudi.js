(function () {
    'use strict';

    // 1. Внедряем агрессивный CSS
    var style = `
        <style id="custom-studio-fix">
            .studio-logos-container > div, 
            .studio-logos-container > a {
                background-color: #ffffff !important;
                background-image: none !important;
                opacity: 1 !important;
                filter: none !important;
                border: 2px solid #0033ff !important;
                box-shadow: none !important;
            }

            /* Делаем логотипы внутри черными, чтобы их было видно */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) contrast(2) !important;
                opacity: 1 !important;
                visibility: visible !important;
                display: block !important;
            }

            /* Текст, если он есть */
            .studio-logos-container .selectbox__item-title {
                color: #000 !important;
                opacity: 1 !important;
            }
        </style>
    `;

    $('head').append(style);

    // 2. Функция для "лечения" элементов в реальном времени
    function fixLogos() {
        $('.studio-logos-container > div, .studio-logos-container > a').each(function() {
            $(this).css({
                'background': '#ffffff',
                'opacity': '1',
                'filter': 'none'
            });
            $(this).find('img, svg').css({
                'filter': 'brightness(0)',
                'opacity': '1'
            });
        });
    }

    // Запускаем проверку каждые полсекунды (на случай подгрузки новых студий)
    setInterval(fixLogos, 500);

    console.log('Lampa Studio Fix: Active');
})();
