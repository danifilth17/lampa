(function () {
    var style = `
        <style>
            /* Сброс стандартных стилей рамок и отступов */
            .full-start__rate {
                border: none !important;
                background: rgba(255, 255, 255, 0.1); /* Полупрозрачный фон как у иконок */
                border-radius: 0.3em;
                padding: 0.2em 0.5em;
                margin-right: 0.5em;
                display: inline-flex;
                align-items: center;
                height: 1.8em;
                font-weight: bold;
                font-size: 1.1em;
            }

            /* Текст (названия: TMDB, LAMPA, CUB) делаем белым, как в иконках качества */
            .full-start__rate span, 
            .full-start__rate::after {
                color: #fff !important;
                margin-left: 0.4em;
                text-transform: uppercase;
                font-size: 0.8em;
                opacity: 0.9;
            }

            /* Если внутри есть иконка (огонек CUB) */
            .full-start__rate img {
                height: 1em;
                margin-left: 0.3em;
            }
        </style>
    `;

    function init() {
        $('body').append(style);
        
        // Слушаем событие открытия полной карточки
        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'complite') {
                var container = e.object.render();
                
                // Находим все блоки оценок
                container.find('.full-start__rate').each(function() {
                    var $this = $(this);
                    
                    // Убираем inline-стили границ, которые мешают
                    $this.css('border', '');
                    
                    // Цвета цифр сохранятся автоматически, так как они прописаны 
                    // через 'color' в атрибуте style (видно на ваших скриншотах),
                    // а наш CSS меняет только border и фон.
                });
            }
        });
    }

    if (window.appready) init();
    else Lampa.Events.on('app', function (name) {
        if (name === 'ready') init();
    });
})();
