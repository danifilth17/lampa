(function () {
    'use strict';

    function startPlugin() {
        // Создаем стиль для скрытия элементов
        var style = document.createElement('style');
        style.innerHTML = `
            /* Скрываем рейтинг IMDB */
            .full-start__rate.rate--imdb {
                display: none !important;
            }
            
            /* Скрываем оригинальное название */
            .full-start__title-original {
                display: none !important;
            }
        `;
        document.body.appendChild(style);
    }

    // Ожидаем готовности Lampa
    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
