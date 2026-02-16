(function () {
    'use strict';

    // 1. Сразу выставляем флаг, на случай если тот плагин еще не запустился
    window.plugin_studios_master_ready = true;

    // 2. Перехватываем добавление компонентов
    var originalAddComponent = Lampa.Component.add;
    Lampa.Component.add = function (name, comp) {
        if (name === 'studios_main' || name === 'studios_view') {
            console.log('BLOCKER: Заблокирована регистрация компонента:', name);
            return; // Не даем плагину зарегистрироваться
        }
        originalAddComponent.apply(this, arguments);
    };

    // 3. Агрессивное удаление кнопок из меню
    // Тот плагин использует setInterval(..., 3000), мы будем чистить меню быстрее
    setInterval(function() {
        $('.menu .menu__list .menu__item[data-sid]').each(function() {
            var sid = $(this).attr('data-sid');
            // Список ID из твоего файла
            var blockedSids = ['netflix', 'apple', 'hbo', 'amazon', 'disney', 'hulu', 'paramount', 'syfy', 'educational_and_reality'];
            
            if (blockedSids.indexOf(sid) !== -1) {
                $(this).remove();
                // console.log('BLOCKER: Кнопка ' + sid + ' удалена');
            }
        });
    }, 500); // Проверяем каждые полсекунды, чтобы кнопка даже не успела моргнуть

})();
