(function () {
    'use strict';

    var style = `
        <style id="lampa-refined-logos">
            /* Финальный размер: высота ~52px */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                height: 52px !important;                 /* Уменьшено еще на 6% */
                min-width: 100px !important;             /* Чуть компактнее по ширине */
                padding: 0 12px !important;
                margin: 6px !important;                  /* Немного плотнее друг к другу */
                
                background: rgba(255, 255, 255, 0.8) !important; 
                background-color: rgba(255, 255, 255, 0.8) !important;
                background-image: none !important;
                
                filter: none !important;
                opacity: 1 !important;
                
                border: 2px solid #0022cc !important;    /* Тонкая и четкая синяя рамка */
                border-radius: 9px !important;
                box-sizing: border-box !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                transition: all 0.2s ease;
            }

            /* Логотипы внутри */
            .studio-logos-container img, 
            .studio-logos-container svg {
                height: 28px !important;                 /* Пропорционально уменьшен логотип */
                width: auto !important;
                filter: brightness(0) !important;
                opacity: 1 !important;
            }

            /* Эффект при фокусе */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: rgba(255, 255, 255, 0.95) !important;
                border-color: #00a2ff !important;
                transform: scale(1.05) !important;       /* Легкий акцент при выборе */
            }
        </style>
    `;

    // Удаляем предыдущие версии плагина
    $('[id^="lampa-"]').remove();
    $('head').append(style);

    // Функция для поддержания стиля при переключении меню
    function finalizeLayout() {
        $('.studio-logos-container').find('div, a').each(function() {
            this.style.setProperty('height', '52px', 'important');
            this.style.setProperty('background', 'rgba(255, 255, 255, 0.8)', 'important');
            this.style.setProperty('filter', 'none', 'important');
        });
    }

    // Интервал для проверки динамических элементов
    setInterval(finalizeLayout, 300);

    console.log('Lampa Refined Logos: Final Size Applied');
})();
