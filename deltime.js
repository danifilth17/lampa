(function () {
    'use strict';

    function hideElements() {
        var style = document.createElement('style');
        style.innerHTML = `
            /* 1. Скрываем время по ID */
            #averageRuntime, 
            /* Скрываем точку-разделитель после времени */
            #averageRuntime + span,
            #averageRuntime + .full-start__tag--dot,

            /* 2. Скрываем контейнер с логотипами студий */
            .studio-logos-container {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Запуск плагина
    if (window.appready) hideElements();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') hideElements();
        });
    }
})();
