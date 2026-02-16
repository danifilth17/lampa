(function () {
    'use strict';

    function startPlugin() {
        // Добавляем пункт в настройки
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'interface') {
                var item = $(`
                    <div class="settings-param selector" data-type="toggle" data-name="hide_extra_info">
                        <div class="settings-param__name">Скрыть лишние элементы</div>
                        <div class="settings-param__value"></div>
                        <div class="settings-param__descr">Скрывает рейтинг IMDB и оригинальное название в карточке</div>
                    </div>
                `);

                item.on('hover:enter', function () {
                    var status = !Lampa.Storage.get('hide_extra_info', 'false');
                    Lampa.Storage.set('hide_extra_info', status);
                    updateStyles();
                });

                e.body.find('.settings-param:last').after(item);
            }
        });

        // Функция управления стилями
        function updateStyles() {
            var hide = Lampa.Storage.get('hide_extra_info', 'false');
            var styleId = 'lampa-hide-elements-style';
            var styleElement = document.getElementById(styleId);

            if (hide && !styleElement) {
                styleElement = document.createElement('style');
                styleElement.id = styleId;
                styleElement.innerHTML = `
                    .full-start__rate.rate--imdb, 
                    .full-start__title-original {
                        display: none !important;
                    }
                `;
                document.body.appendChild(styleElement);
            } else if (!hide && styleElement) {
                styleElement.remove();
            }
        }

        // Запуск при старте
        updateStyles();
    }

    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
