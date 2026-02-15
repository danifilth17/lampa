(function () {
    'use strict';

    function start() {
        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'start') {
                var render = e.object.render();
                var data = e.data;

                // 1. Очистка старых элементов, чтобы не было дублей
                render.find('.hkr-tags').remove();
                // 2. Скрываем стандартный невзрачный текст
                render.find('.full-start__details').css('display', 'none');

                var tags = [];

                // Серии
                if (data && data.number_of_episodes) {
                    tags.push({n: data.number_of_episodes + ' Сер.', c: '#27ae60'});
                }

                // Длительность
                var runtime = (data && data.runtime) || (data && data.last_episode_to_air && data.last_episode_to_air.runtime);
                if (runtime) {
                    var h = Math.floor(runtime / 60);
                    var m = runtime % 60;
                    tags.push({n: (h > 0 ? h + 'ч ' : '') + m + 'м', c: '#2980b9'});
                }

                // Жанры
                if (data && data.genres) {
                    data.genres.slice(0, 2).forEach(function(g) {
                        tags.push({n: g.name, c: 'rgba(255,255,255,0.1)'});
                    });
                }

                // Создаем контейнер
                var container = $('<div class="hkr-tags" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;"></div>');

                tags.forEach(function(t) {
                    container.append('<div style="background:'+t.c+'; padding:4px 10px; border-radius:6px; font-weight:bold; font-size:13px; color:#fff;">'+t.n+'</div>');
                });

                // Вставляем после кнопок
                render.find('.full-start__buttons').after(container);
            }
        });
    }

    // Ждем загрузки Lampa
    if (window.appready) start();
    else Lampa.Listener.follow('app', function (e) { if (e.type === 'ready') start(); });
})();
