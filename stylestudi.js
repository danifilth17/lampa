(function () {
    'use strict';

    var style = `
        <style id="custom-studio-logos-final">
            /* Находим контейнер и все его элементы */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                background: #ffffff !important;         /* Чисто белый фон */
                opacity: 1 !important;                  /* Убираем прозрачность */
                filter: none !important;                /* Сбрасываем системные фильтры Lampa */
                border: 2px solid #0022cc !important;   /* Четкая синяя рамка */
                box-shadow: none !important;
                display: flex !important;
                align-items: center;
                justify-content: center;
            }

            /* Делаем картинки внутри черными, чтобы они были четко видны */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) !important;       /* Логотип становится полностью черным */
                opacity: 1 !important;
                max-height: 80% !important;
            }

            /* Состояние при наведении/фокусе */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: #ffffff !important;
                border-color: #0055ff !important;       /* Ярче синий при выборе */
                box-shadow: 0 0 10px rgba(0, 85, 255, 0.5) !important;
                transform: scale(1.05);
            }
        </style>
    `;

    // Очистка и установка
    $('#custom-studio-logos-v2, #custom-studio-logos-final').remove();
    $('head').append(style);

    console.log('Plugin Studio Logos: Final White Version Loaded');
})();
