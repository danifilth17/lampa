(function () {
    'use strict';

    function rebootPlugin() {
        // Добавляем параметр в настройки интерфейса
        Lampa.Settings.listener.follow('open', function (e) {
            if (e.name == 'interface') {
                setTimeout(function () {
                    var field = $(`
                        <div class="settings-param selector" data-name="reboot_button" data-type="toggle">
                            <div class="settings-param__name">Кнопка перезагрузки</div>
                            <div class="settings-param__value"></div>
                            <div class="settings-param__descr">Показывать кнопку быстрой перезагрузки в меню</div>
                        </div>
                    `);

                    field.on('hover:enter', function () {
                        var status = Lampa.Storage.field('reboot_button');
                        Lampa.Storage.set('reboot_button', !status);
                        Lampa.Settings.update();
                    });

                    $('.settings-list', e.render).append(field);
                    Lampa.Settings.update();
                }, 10);
            }
        });

        // Функция отрисовки кнопки перезагрузки
        function addRebootButton() {
            if (Lampa.Storage.field('reboot_button')) {
                var active = Lampa.Activity.active();
                var render = active.activity.render();
                
                // Ищем место для вставки (например, рядом с меню или в шапке)
                // В tricks.js используется модификация существующих элементов:
                var reboot_btn = $(`
                    <div class="head__action head__reboot selector">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V1L8 5L12 9V6C15.31 6 18 8.69 18 12C18 13.01 17.75 13.97 17.3 14.8L18.76 16.26C19.54 15.03 20 13.57 20 12C20 7.58 16.42 4 12 4ZM12 18C8.69 18 6 15.31 6 12C6 10.99 6.25 10.03 6.7 9.2L5.24 7.74C4.46 8.97 4 10.43 4 12C4 16.42 7.58 20 12 20V23L16 19L12 15V18Z" fill="currentColor"/>
                        </svg>
                    </div>
                `);

                reboot_btn.on('hover:enter', function () {
                    window.location.reload();
                });

                // Добавляем кнопку в шапку, если её там еще нет
                if (!$('.head__reboot', render).length) {
                    $('.head__actions', render).prepend(reboot_btn);
                }
            }
        }

        // Следим за сменой активности для перерисовки кнопки
        Lampa.Activity.listener.follow('app', function (e) {
            if (e.type == 'active') {
                addRebootButton();
            }
        });
    }

    // Регистрация плагина
    if (window.appready) {
        rebootPlugin();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') rebootPlugin();
        });
    }
})();
