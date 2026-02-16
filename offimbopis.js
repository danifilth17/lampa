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
                        <div class="settings-param__descr">Скрывает рейтинг IMDB и оригинальное название</div>
                    </div>
                `);

                // Функция для отрисовки Да/Нет
                var renderValue = function() {
                    var status = Lampa.Storage.get('hide_extra_info', 'false');
                    item.find('.settings-param__value').text(status ? 'Да' : 'Нет');
                };

                // Обработка нажатия
                item.on('hover:enter', function () {
                    var current = Lampa.Storage.get('hide_extra_info', 'false');
                    Lampa.Storage.set('hide_extra_info', !current);
                    renderValue(); // Обновляем текст в меню
                    updateStyles(); // Применяем CSS
                });

                renderValue(); // Рисуем значение при открытии настроек
                e.body.find('.settings-param:last').after(item);
            }
        });

        // Функция управления стилями (CSS)
        function updateStyles() {
            var hide = Lampa.Storage.get('hide_extra_info', 'false');
            var styleId = 'lampa-hide-elements-style';
            var styleElement = document.getElementById(styleId);

            if (hide) {
                if (!styleElement) {
                    styleElement = document.createElement('style');
                    styleElement.id = styleId;
                    styleElement.innerHTML = `
                        .full-start__rate.rate--imdb, 
                        .full-start__title-original {
                            display: none !important;
                        }
                    `;
                    document.body.appendChild(styleElement);
                }
            } else {
                if (styleElement) styleElement.remove();
            }
        }

        // Запуск логики при загрузке
        updateStyles();
    }

    // Ожидание готовности Lampa
    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
