(function () {
    'use strict';

    var style = `
        <style id="lampa-balanced-logos">
            /* Сбалансированный размер: высота 55px */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                height: 55px !important;                 /* Оптимальная высота */
                min-width: 110px !important;             /* Пропорциональная ширина */
                padding: 0 15px !important;
                margin: 8px !important;                  /* Умеренные отступы */
                
                background: rgba(255, 255, 255, 0.8) !important; 
                background-color: rgba(255, 255, 255, 0.8) !important;
                background-image: none !important;
                
                filter: none !important;
                opacity: 1 !important;
                
                border: 2.5px solid #0022cc !important;  /* Чуть тоньше линия для меньшего размера */
                border-radius: 10px !important;
                box-sizing: border-box !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.2s ease;
            }

            /* Логотипы внутри */
            .studio-logos-container img, 
            .studio-logos-container svg {
                height: 32px !important;                 /* Пропорционально уменьшен логотип */
                width: auto !important;
                filter: brightness(0) !important;
                opacity: 1 !important;
            }

            /* Эффект при фокусе */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: rgba(255, 255, 255, 0.95) !important;
                border-color: #00a2ff !important;
                transform: scale(1.07) !important;        /* Акцент при наведении чуть спокойнее */
            }
        </style>
    `;

    // Очистка предыдущих версий
    $('[id^="lampa-"]').remove();
    $('head').append(style);

    // Функция контроля
    function fixLayout() {
        $('.studio-logos-container').find('div, a').each(function() {
            this.style.setProperty('height', '55px', 'important');
            this.style.setProperty('background', 'rgba(255, 255, 255, 0.8)', 'important');
            this.style.setProperty('filter', 'none', 'important');
        });
    }

    setInterval(fixLayout, 300);

    console.log('Lampa Balanced Logos: Loaded');
})();
