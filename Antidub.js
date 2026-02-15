(function () {
    'use strict';

    function HKR_Interface() {
        var network = new Lampa.Reguest(); // Для работы с данными

        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'start' || e.type === 'render') {
                var render = e.object.render();
                var data = e.data;

                // Функция для отрисовки
                var drawTags = function() {
                    // Если плашки уже есть или данных нет — выходим
                    if (render.find('.hkr-tags-fixed').length > 0 || !data) return;

                    // Скрываем стандартную строку
                    var old = render.find('.full-start__details');
                    if (old.length > 0) old.css('display', 'none');

                    var tags = [];

                    // 1. Серии
                    if (data.number_of_episodes) {
                        tags.push({t: data.number_of_episodes + ' Сер.', c: '#27ae60'});
                    }

                    // 2. Длительность
                    var rt = data.runtime || (data.last_episode_to_air && data.last_episode_to_air.runtime) || 0;
                    if (rt > 0) {
                        var h = Math.floor(rt / 60);
                        var m = rt % 60;
                        tags.push({t: (h > 0 ? h + 'ч ' : '') + m + 'м', c: '#2980b9'});
                    }

                    // 3. Жанры
                    if (data.genres) {
                        data.genres.slice(0, 3).forEach(function(g) {
                            tags.push({t: g.name, c: 'rgba(255,255,255,0.12)'});
                        });
                    }

                    if (tags.length > 0) {
                        var container = $('<div class="hkr-tags-fixed" style="display:flex; flex-wrap:wrap; gap:8px; margin:15px 0; width:100%;"></div>');
                        
                        tags.forEach(function(tag) {
                            container.append('<div style="background:'+tag.c+'; padding:5px 12px; border-radius:6px; font-weight:bold; font-size:14px; color:#fff;">'+tag.t+'</div>');
                        });

                        // Вставляем после кнопок или в начало инфо-блока
                        var target = render.find('.full-start__buttons');
                        if (target.length > 0) target.after(container);
                        else render.find('.full-start__info').prepend(container);
                    }
                };

                // Запускаем отрисовку сразу и через паузы (на случай долгой загрузки)
                drawTags();
                setTimeout(drawTags, 100);
                setTimeout(drawTags, 500);
                setTimeout(drawTags, 1000);
            }
        });
    }

    if (window.appready) HKR_Interface();
    else Lampa.Listener.follow('app', function (e) { if (e.type === 'ready') HKR_Interface(); });
})();
