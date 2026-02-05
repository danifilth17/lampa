(function () {
    'use strict';

    function QualityPlugin() {
        this.name = 'Quality Only';

        this.init = function () {
            // Добавляем настройку сразу после готовности приложения
            this.addSettings();
        };

        this.addSettings = function () {
            var item = {
                title: 'Качество видео',
                description: 'Выберите качество, которое будет отображаться первым',
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
            };

            // Безопасное добавление в настройки Lampa
            if (window.Lampa && Lampa.Settings) {
                Lampa.Settings.items().push(item);
            }
        };
    }

    // Запуск через глобальный объект Lampa, чтобы избежать Script Error
    if (window.Lampa) {
        new QualityPlugin().init();
    } else {
        // Если Lampa еще не загружена, вешаем слушатель
        document.addEventListener('app:ready', function() {
            new QualityPlugin().init();
        });
    }
})();
