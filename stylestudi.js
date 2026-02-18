(function () {
    'use strict';

    var style = `
        <style id="custom-studio-logos-v2">
            /* Нацеливаемся точно на div и ссылки внутри контейнера */
            .studio-logos-container > div, 
            .studio-logos-container > a,
            div[class*="studio-logos-container"] > div {
                background: #ffffff !important;             /* Чисто белый фон */
                background-color: #ffffff !important;       /* Дублируем для верности */
                opacity: 1 !important;                      /* Убираем возможную прозрачность */
                border: 2px solid #001f66 !important;       /* Насыщенный темно-синий */
                box-sizing: border-box !important;
            }

            /* Если внутри есть картинки, делаем их темными, чтобы они не слились с белым фоном */
            .studio-logos-container img,
            .studio-logos-container svg,
            .studio-logos-container .selectbox__item-title {
                filter: invert(1) brightness(0.2) !important; 
            }

            /* Стиль при наведении (фокусе) */
            .studio-logos-container > div.focus,
            .studio-logos-container > a.focus {
                background: #e6eeff !important;             /* Светло-голубой при фокусе */
                border-color: #0044ff !important;
                transform: scale(1.02);
            }
        </style>
    `;

    // Удаляем старый стиль, если он был, и вешаем новый
    $('#custom-studio-logos').remove();
    $('head').append(style);

    console.log('Plugin Custom Studio Logos V2: Loaded');
})();
