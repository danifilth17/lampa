(function () {
    'use strict';

    function FilmixReleases(object) {
        var network = new Lampa.Reguest();
        var scroll  = new Lampa.Scroll({mask: true, over: true});
        var items   = [];
        var html    = $('<div class="category-full"></div>');
        var body    = $('<div class="category-full__body"></div>');
        
        this.create = function () {
            var _this = this;

            // Используем стандартный API адрес Filmix для получения последних обновлений
            // Примечание: Для работы в браузере может потребоваться прокси
            var url = 'https://filmix.my/api/v2/last_updates?count=30';

            network.silent(url, function (data) {
                if (data && data.length) {
                    _this.build(data);
                } else {
                    Lampa.Noty.show('Не удалось получить данные с Filmix');
                }
            }, function () {
                Lampa.Noty.show('Ошибка сети при запросе к Filmix');
            });

            return scroll.render();
        };

        this.build = function (data) {
            var _this = this;
            
            data.forEach(function (item) {
                // Создаем карточку в стиле Lampa
                var card = Lampa.Template.get('card', {
                    title: item.title || item.original_title,
                    release_year: item.year
                });

                // Подгружаем постер
                var img = card.find('img')[0];
                if (item.poster) img.src = item.poster;

                card.on('hover:enter', function () {
                    // Открываем стандартное окно описания Lampa по ID
                    Lampa.Activity.push({
                        url: '',
                        title: item.title,
                        component: 'full',
                        id: item.id,
                        method: 'movie',
                        source: 'filmix'
                    });
                });

                body.append(card);
            });

            html.append(body);
            scroll.append(html);
        };
    }

    function startPlugin() {
        // Регистрация компонента
        Lampa.Component.add('filmix_releases', FilmixReleases);

        // Добавление в боковое меню
        var menu_item = {
            title: 'Filmix Релизы',
            id: 'filmix',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4H9l-2-4H5l2 4H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4h-3z" fill="white"/></svg>'
        };

        Lampa.Menu.add(menu_item);
    }

    if (window.appready) startPlugin();
    else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') startPlugin();
        });
    }
})();
