(function () {
    'use strict';

    // 1. Блокируем запуск по флагу готовности
    // Основной плагин увидит, что true, и решит, что он уже запущен
    window.plugin_studios_master_ready = true;

    // 2. Создаем «заглушки», чтобы если Lampa попытается вызвать компоненты, не было ошибки
    if (!window.Lampa) return;

    // Если какой-то другой скрипт захочет вызвать эти компоненты, 
    // они просто ничего не будут делать (пустые функции)
    Lampa.Component.add('studios_main', function(){});
    Lampa.Component.add('studios_view', function(){});

    console.log('Studios Master has been isolated and blocked.');
})();
