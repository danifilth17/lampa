(function () {
    'use strict';

    function FilmixReleases(object) {
        var network = new Lampa.Reguest();
        var scroll  = new Lampa.Scroll({mask: true, over: true});
        var items   = [];
        var html    = $('<div class="category-full"></div>');
        
        this.create = function () {
            var _this = this;

            // Используем публичный API Filmix (может потребоваться зеркало или прокси)
            var url = 'https://filmix.my/api/v2/last_updates?count=30';

            network.silent(url, function (data) {
                if (data && data.length) {
                    _this.build(data);
                } else {
                    _this.empty();
                }
            }, function () {
                Lampa.Noty.show('Ошибка доступа к Filmix. Проверьте сеть или прокси.');
            });

            return scroll.render();
        };

        this.build = function (data) {
            var _this = this;
            var container = $('<div class="card--grid"></div>');

            data.forEach(function (item) {
                // Создаем объект данных для карточки
                var cardData = {
                    id: item.id,
                    title: item.title || item.original_title,
                    release_year: item.year,
                    img: item.poster || item.image
                };

                var card = Lampa.Template.get('card', cardData);
                
                // Обработка клика
                card.on('hover:enter', function () {
                    Lampa.Activity.push({
                        url: '',
                        title: cardData.title,
                        component: 'full',
                        id: cardData.id,
                        method: 'movie',
                        card: cardData,
                        source: 'filmix'
                    });
                });

                container.append(card);
                items.push(card);
            });

            html.append(container);
            scroll.append(html);
            
            // Сообщаем Lampa, что контент готов для навигации пультом
            Lampa.Controller.enable('content');
        };

        this.empty = function () {
            html.append('<div class="empty">Данные не найдены</div>');
            scroll.append(html);
        };
    }

    function startPlugin() {
        Lampa.Component.add('filmix_releases', FilmixReleases);

        var menu_item = {
            title: 'Filmix Релизы',
            id: 'filmix_rel',
            icon: '<svg height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z" fill="white"/></svg>',
            onSelect: function () {
                Lampa.Activity.push({
                    url: '',
                    title: 'Релизы Filmix',
                    component: 'filmix_releases',
                    page: 1
                });
            }
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
