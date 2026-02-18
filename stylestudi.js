(function () {
    'use strict';

    var style = `
        <style id="lampa-big-white-logos">
            /* Увеличиваем контейнер и сами кнопки */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                height: 65px !important;                 /* Увеличено на ~30% */
                min-width: 130px !important;             /* Пропорционально шире */
                padding: 0 20px !important;
                margin: 10px !important;                 /* Больше места между кнопками */
                
                background: rgba(255, 255, 255, 0.8) !important; 
                background-color: rgba(255, 255, 255, 0.8) !important;
                background-image: none !important;
                
                filter: none !important;
                opacity: 1 !important;
                
                border: 3px solid #0022cc !important;
                border-radius: 15px !important;          /* Чуть больше скругление для размера */
                box-sizing: border-box !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.2s ease;
            }

            /* Увеличиваем логотипы внутри */
            .studio-logos-container img, 
            .studio-logos-container svg {
                height: 40px !important;                 /* Увеличен размер самого лого */
                width: auto !important;
                filter: brightness(0) !important;
                opacity: 1 !important;
            }

            /* Эффект при фокусе */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: rgba(255, 255, 255, 0.95) !important;
                border-color: #00a2ff !important;
                transform: scale(1.1) !important;        /* Больше акцент при наведении */
            }
        </style>
    `;

    // Очистка старых стилей
    $('[id^="lampa-"]').remove();
    $('head').append(style);

    // Принудительная фиксация размеров через JS
    function applySize() {
        $('.studio-logos-container').find('div, a').each(function() {
            this.style.setProperty('height', '65px', 'important');
            this.style.setProperty('background', 'rgba(255, 255, 255, 0.8)', 'important');
            this.style.setProperty('filter', 'none', 'important');
        });
    }

    setInterval(applySize, 300);

    console.log('Lampa Big White Logos: 130% Size Loaded');
})();
