(function () {
    'use strict';

    // Создаем стиль, который принудительно скрывает контейнер логотипов
    var style = '<style id="hide-studio-logos">' +
        '.plugin-uk-title-combined, .studio-logos-container, .rate--studio.studio-logo { ' +
            'display: none !important; ' +
        '}' +
    '</style>';

    function startPlugin() {
        // Добавляем стили для скрытия в head
        if (!$('#hide-studio-logos').length) {
            $('body').append(style);
        }

        // Дополнительно: удаляем элементы, если они уже успели отрисоваться
        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'complite' || e.type === 'complete') {
                setTimeout(function() {
                    $('.plugin-uk-title-combined').remove();
                }, 10);
            }
        });
    }

    if (window.appready) startPlugin();
    else Lampa.Listener.follow("app", function (e) { if (e.type === "ready") startPlugin(); });
})();
