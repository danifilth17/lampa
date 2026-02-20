(function () {
    'use strict';

    function initRebootPlugin() {
        // 1. Добавляем переключатель в настройки Интерфейса
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'interface') {
                // Ждем отрисовки списка настроек
                setTimeout(function () {
                    var menu = $('.settings-list', e.render);
                    
                    // Проверяем, не добавлена ли уже кнопка (чтобы не дублировать)
                    if (menu.length && !menu.find('[data-name="reboot_button"]').length) {
                        var item = $(`
                            <div class="settings-param selector" data-name="reboot_button" data-type="toggle">
                                <div class="settings-param__name">Кнопка перезагрузки</div>
                                <div class="settings-param__value"></div>
                                <div class="settings-param__descr">Отображать иконку быстрой перезагрузки в верхней панели</div>
                            </div>
                        `);

                        item.on('hover:enter', function () {
                            var status = Lampa.Storage.field('reboot_button');
                            Lampa.Storage.set('reboot_button', !status);
                            Lampa.Settings.update();
                        });

                        menu.append(item);
                        Lampa.Settings.update(); // Обновляем визуальное состояние toggle
                    }
                }, 50);
            }
        });

        // 2. Логика отображения кнопки перезагрузки
        function renderButton() {
            // Удаляем старую кнопку если она есть
            $('.head__reboot-plugin').remove();

            if (Lampa.Storage.field('reboot_button')) {
                var head = $('.head .head__actions');
                if (head.length) {
                    var btn = $(`
                        <div class="head__action head__reboot-plugin selector">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle;">
                                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/>
                            </svg>
                        </div>
                    `);

                    btn.on('hover:enter', function () {
                        window.location.reload();
                    });

                    head.prepend(btn);
                }
            }
        }

        // Следим за активностью и изменениями настроек для отрисовки кнопки
        Lampa.Activity.listener.follow('app', function (e) {
            if (e.type == 'active') renderButton();
        });

        Lampa.Storage.listener.follow('change', function (e) {
            if (e.name == 'reboot_button') renderButton();
        });
        
        // Первичный запуск
        renderButton();
    }

    // Регистрация плагина при готовности системы
    if (window.appready) {
        initRebootPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') initRebootPlugin();
        });
    }
})();
