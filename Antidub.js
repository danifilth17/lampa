(function () {
    "use strict";

    function initHKR() {
        Lampa.Listener.follow('full', function (e) {
            // Реагируем на открытие карточки
            if (e.type === 'start' || e.type === 'render') {
                
                // Ждем подольше (300мс), чтобы интерфейс Lampa точно загрузился
                setTimeout(function () {
                    var render = e.object.render();
                    var data = e.data;

                    if (!data) return;

                    // 1. Ищем куда вставлять. В Lampa это обычно .full-start__buttons или .full-start__info
                    var target = render.find('.full-start__buttons');
                    if (target.length === 0) target = render.find('.full-start__info');

                    // Если цель не найдена — выходим
                    if (target.length === 0) return;

                    // 2. Проверка на дубликаты (чтобы не плодить плашки)
                    if (render.find('.hkr-plugs-container').length > 0) return;

                    // 3. Скрываем стандартную невзрачную строку
                    render.find('.full-start__details').css('display', 'none');

                    // 4. Формируем массив данных
                    var tags = [];

                    // Серии
                    if (data.number_of_episodes) {
                        tags.push({ text: data.number_of_episodes + ' Серий', color: '#27ae60' });
                    }

                    // Время
                    var runtime = data.runtime || (data.last_episode_to_air && data.last_episode_to_air.runtime) || 0;
                    if (runtime > 0) {
                        var h = Math.floor(runtime / 60);
                        var m = runtime % 60;
                        var tStr = (h > 0 ? h + ' ч. ' : '') + m + ' мин.';
                        tags.push({ text: 'Длительность ≈ ' + tStr, color: '#2980b9' });
                    }

                    // Жанры (макс 3)
                    if (data.genres && data.genres.length > 0) {
                        data.genres.slice(0, 3).forEach(function(g) {
                            tags.push({ text: g.name, color: 'rgba(255,255,255,0.15)' });
                        });
                    }

                    // 5. Генерируем HTML
                    var html = $('<div class="hkr-plugs-container" style="display: flex; flex-wrap: wrap; gap: 8px; margin: 15px 0; width: 100%;"></div>');

                    tags.forEach(function (tag) {
                        var item = $('<div style="background: ' + tag.color + '; padding: 5px 12px; border-radius: 6px; font-size: 14px; font-weight: bold; color: #fff; white-space: nowrap;">' + tag.text + '</div>');
                        html.append(item);
                    });

                    // 6. ВСТАВКА
                    target.after(html);

                }, 300); 
            }
        });
    }

    // Запуск
    if (window.appready) initHKR();
    else Lampa.Listener.follow('app', function (e) { if (e.type === 'ready') initHKR(); });
})();
