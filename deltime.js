(function () {
    'use strict';

    function hideTargetElements() {
        var style = document.createElement('style');
        style.innerHTML = `
            /* Скрываем само время по его ID */
            #averageRuntime, 
            /* Скрываем точку-разделитель, которая идет сразу после него */
            #averageRuntime + span,
            #averageRuntime + .full-start__tag--dot {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }

    if (window.appready) hideTargetElements();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') hideTargetElements();
        });
    }
})();
