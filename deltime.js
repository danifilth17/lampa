(function () {
    'use strict';

    function hideRuntime() {
        // Создаем стиль для скрытия элемента времени
        var style = document.createElement('style');
        style.innerHTML = `
            /* Скрываем время (00:43) в карточке */
            .full-start__tag--runtime,
            /* На всякий случай скрываем точку-разделитель после времени, если она отдельный элемент */
            .full-start__tag--runtime + .full-start__tag--dot {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Запуск при загрузке
    if (window.appready) hideRuntime();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') hideRuntime();
        });
    }
})();
