(function () {
    'use strict';

    var style = `
        <style id="lampa-white-no-focus">
            /* Твой идеальный стиль */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                background: rgba(255, 255, 255, 0.8) !important; 
                background-color: rgba(255, 255, 255, 0.8) !important;
                background-image: none !important;
                filter: none !important;
                opacity: 1 !important;
                border: 3px solid #0022cc !important;
                border-radius: 12px !important;
                box-sizing: border-box !important;
                transition: all 0.2s ease;
                
                /* Уменьшаем размер на 6%, как договаривались ранее */
                height: 52px !important;
                min-width: 100px !important;
                padding: 0 12px !important;
                margin: 6px !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;

                /* Отключаем реакцию на пульт на уровне CSS */
                pointer-events: none !important; 
            }

            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) !important;
                opacity: 1 !important;
                display: block !important;
                height: 28px !important;
            }
        </style>
    `;

    // Очистка и установка стилей
    $('[id^="lampa-"]').remove();
    $('head').append(style);

    function disableStudioFocus() {
        var items = $('.studio-logos-container > div, .studio-logos-container > a');
        
        items.each(function() {
            // Убираем класс фокуса, если Lampa его вешает
            if ($(this).hasClass('focus')) {
                $(this).removeClass('focus');
            }
            
            // Удаляем атрибуты навигации, чтобы курсор их не видел
            $(this).attr('focusable', 'false');
            $(this).css({
                'background': 'rgba(255, 255, 255, 0.8)',
                'filter': 'none'
            });
        });
    }

    // Запускаем цикл отключения фокуса
    setInterval(disableStudioFocus, 100);

    console.log('Lampa Plugin: Design Perfect + Focus Skipped');
})();
