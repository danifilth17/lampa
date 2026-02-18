(function () {
    'use strict';

    // Создаем стиль
    var style = `
        <style id="custom-studio-logos">
            .studio-logos-container > div, 
            .studio-logos-container > a {
                background-color: rgba(255, 255, 255, 0.8) !important; /* Светлее на 80% и белый */
                border: 2px solid #1a2a6c !important;                /* Темная окантовка ближе к синему */
                border-radius: 10px !important;                       /* Скругление как на скрине */
                transition: all 0.3s ease;
            }

            /* Эффект при наведении или фокусе */
            .studio-logos-container > div:hover, 
            .studio-logos-container > div.focus,
            .studio-logos-container > a:hover, 
            .studio-logos-container > a.focus {
                background-color: #ffffff !important;                 /* Чисто белый при фокусе */
                border-color: #0044ff !important;                     /* Ярко-синий при фокусе */
                transform: scale(1.05);
            }

            /* Чтобы логотипы внутри (черные) были лучше видны на белом фоне */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0.2); /* Делаем логотипы темнее, если они были белыми */
            }
        </style>
    `;

    // Добавляем стили в head
    $('head').append(style);

    console.log('Plugin Custom Studio Logos: Loaded');
})();
