(function () {
    'use strict';

    function startPlugin() {
        // Регистрация настройки в Lampa
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'interface') {
                var item = $(`
                    <div class="settings-param selector" data-type="toggle" data-name="hide_extra_info">
                        <div class="settings-param__name">Скрыть лишние элементы</div>
                        <div class="settings-param__value"></div>
                        <div class="settings-param__descr">Скрывает рейтинги, оригинальное название, статус и возрастное ограничение</div>
                    </div>
                `);

                var renderValue = function() {
                    var status = Lampa.Storage.get('hide_extra_info', false);
                    item.find('.settings-param__value').text(status ? 'Да' : 'Нет');
                };

                item.on('hover:enter', function () {
                    var current = Lampa.Storage.get('hide_extra_info', false);
                    Lampa.Storage.set('hide_extra_info', !current);
                    renderValue();
                    updateStyles();
                });

                renderValue();
                e.body.find('.settings-param:last').after(item);
            }
        });

        // Функция управления стилями
        function updateStyles() {
            var hide = Lampa.Storage.get('hide_extra_info', false);
            var styleId = 'lampa-hide-elements-style';
            var styleElement = document.getElementById(styleId);

            if (hide) {
                if (!styleElement) {
                    styleElement = document.createElement('style');
                    styleElement.id = styleId;
                    // Добавлены селекторы .full-start__status и .full-start__pg
                    styleElement.innerHTML = `
                        .full-start__rate.rate--imdb, 
                        .full-start__rate.rate--kp,
                        .full-start__title-original,
                        .full-start__status,
                        .full-start__pg {
                            display: none !important;
                        }
                    `;
                    document.body.appendChild(styleElement);
                }
            } else {
                var currentStyle = document.getElementById(styleId);
                if (currentStyle) currentStyle.remove();
            }
        }

        updateStyles();
    }

    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
