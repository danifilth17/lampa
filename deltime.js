(function () {
    'use strict';

    function hideRuntimeUniversal() {
        var style = document.createElement('style');
        style.innerHTML = `
            /* 1. Пытаемся скрыть по всем возможным именам классов */
            .full-start__tag--runtime, 
            .full-start__tag--time,
            .full-start__info-item--runtime {
                display: none !important;
            }

            /* 2. Скрываем через селектор атрибутов (если Lampa кастомная) */
            [data-type="runtime"], 
            [data-name="runtime"] {
                display: none !important;
            }

            /* 3. Убираем точку-разделитель, которая обычно идет после времени */
            .full-start__tag--runtime + .full-start__tag--dot,
            .full-start__tag--runtime + span {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // Дополнительная проверка через JS на случай, если классы динамические
        setInterval(function() {
            var tags = document.querySelectorAll('.full-start__tag');
            tags.forEach(function(tag) {
                // Если в теге есть двоеточие (как в 00:43) и он короткий — скрываем
                if (tag.innerText.includes(':') && tag.innerText.length <= 6) {
                    tag.style.display = 'none';
                }
            });
        }, 1000);
    }

    if (window.appready) hideRuntimeUniversal();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') hideRuntimeUniversal();
        });
    }
})();
