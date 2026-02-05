(function () {
    'use strict';

    function QualityOnlyP() {
        this.init = function () {
            // Оставляем только регистрацию параметра качества
            Lampa.Settings.listener.follow('open', function (e) {
                if (e.name == 'general' || e.name == 'more') {
                    // Можно добавить специфичные действия при открытии
                }
            });

            this.addSettings();
        };

        this.addSettings = function () {
            // Описание только категории качества
            var quality_item = {
                title: 'Качество видео (P-Store)',
                description: 'Укажите приоритетное разрешение для поиска потоков',
                type: 'select',
                name: 'p_store_quality_default',
                values: {
                    '2160': '4K (2160p)',
                    '1080': 'Full HD (1080p)',
                    '720': 'HD (720p)',
                    '480': 'SD (480p)',
                    '0': 'Любое доступное'
                },
                default: '1080'
            };

            // Добавляем в массив настроек Lampa
            Lampa.Settings.items().push(quality_item);
        };
    }

    // Инициализация без лишних вызовов меню
    if (window.appready) {
        new QualityOnlyP().init();
    } else {
        Lampa.Object.listener.follow('app', function (e) {
            if (e.type == 'ready') new QualityOnlyP().init();
        });
    }
})();
