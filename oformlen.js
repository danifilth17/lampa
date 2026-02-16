(function () {
    'use strict';

    function startPlugin() {
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'interface') {
                var item = $(`
                    <div class="settings-param selector" data-type="toggle" data-name="clean_info_bubble">
                        <div class="settings-param__name">Инфо в бабле</div>
                        <div class="settings-param__value"></div>
                        <div class="settings-param__descr">Оставляет рейтинг снаружи, а текст оборачивает в бабл без точек</div>
                    </div>
                `);

                var renderValue = function() {
                    var status = Lampa.Storage.get('clean_info_bubble', false);
                    item.find('.settings-param__value').text(status ? 'Да' : 'Нет');
                };

                item.on('hover:enter', function () {
                    var current = Lampa.Storage.get('clean_info_bubble', false);
                    Lampa.Storage.set('clean_info_bubble', !current);
                    renderValue();
                    updateStyles();
                });

                renderValue();
                e.body.find('.settings-param:last').after(item);
            }
        });

        function updateStyles() {
            var hide = Lampa.Storage.get('clean_info_bubble', false);
            var styleId = 'lampa-clean-bubble-style';
            var styleElement = document.getElementById(styleId);

            if (hide) {
                if (!styleElement) {
                    styleElement = document.createElement('style');
                    styleElement.id = styleId;
                    styleElement.innerHTML = `
                        /* Контейнер с деталями (год, страна и т.д.) */
                        .new-interface-info_details {
                            font-size: 0 !important; /* Прячем точки */
                            display: inline-flex !important;
                            align-items: center;
                            vertical-align: middle;
                            background: rgba(255, 255, 255, 0.15); /* Цвет бабла */
                            padding: 2px 10px;
                            border-radius: 6px;
                            gap: 8px;
                            margin-left: 10px; /* Отступ от рейтинга */
                        }

                        /* Возвращаем текст внутри бабла */
                        .new-interface-info_details > span,
                        .new-interface-info_details > div:not(.new-interface-info__rate) {
                            font-size: 1.3rem !important;
                            display: inline-block;
                            color: #fff;
                        }

                        /* Рейтинг оставляем нетронутым, убеждаемся что он виден */
                        .new-interface-info__rate,
                        .full-start__rate {
                            display: inline-flex !important;
                            vertical-align: middle;
                        }

                        /* Если нужно убрать оригинальное название (как просили раньше) */
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

        updateStyles();
    }

    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
