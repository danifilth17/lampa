(function () {
    'use strict';

    var style = `
        <style id="lampa-white-logos">
            /* Силовое переопределение контейнера */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                background: #ffffff !important;           /* Чисто белый */
                background-color: #ffffff !important;     /* Дублируем */
                opacity: 1 !important;                    /* Убираем прозрачность */
                filter: none !important;                  /* Убираем затемнение Lampa */
                border: 3px solid #0022ff !important;     /* Четкая синяя рамка */
                box-shadow: none !important;
                overflow: hidden !important;
            }

            /* Делаем сами логотипы черными, чтобы они не исчезли на белом */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) !important;         /* Логотип становится черным */
                opacity: 1 !important;
                visibility: visible !important;
            }

            /* Убираем наложение цвета при фокусе, чтобы не темнело */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: #f0f5ff !important;           /* Очень светло-голубой при выборе */
                border-color: #00a2ff !important;         /* Яркая рамка при выборе */
            }
        </style>
    `;

    // Добавляем стили в систему
    $('head').append(style);

    // Скрипт-контролер: каждые 300мс проверяет, не наложила ли Lampa свои стили обратно
    setInterval(function() {
        var items = $('.studio-logos-container > div, .studio-logos-container > a');
        if (items.length) {
            items.css({
                'background-color': '#ffffff',
                'filter': 'none',
                'opacity': '1'
            });
            items.find('img, svg').css('filter', 'brightness(0)');
        }
    }, 300);

    console.log('Lampa White Logos Plugin: Force Active');
})();
