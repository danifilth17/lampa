(function () {
    'use strict';

    // Создаем структуру, которую Lampa ожидает увидеть
    var p_quality = function () {
        this.init = function () {
            // Добавляем только настройку качества
            Lampa.Settings.items().push({
                title: 'Качество видео',
                description: 'Выберите качество видео по умолчанию',
                type: 'select',
                name: 'p_store_quality_default',
                values: {
                    '2160': '4K',
                    '1080': '1080p',
                    '720': '720p',
                    '480': '480p',
                    '0': 'Любое'
                },
                default: '1080'
            });
        };
    };

    // Запуск
    try {
        var plugin = new p_quality();
        plugin.init();
    } catch (e) {
        console.log('Plugin Error:', e);
    }
})();
