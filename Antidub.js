(function () {
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'start' || e.type == 'render') {
            var render = e.object.render();
            var data = e.data || {};

            // 1. ПРЕДОХРАНИТЕЛЬ: если плашки уже есть, ничего не делаем
            if (render.find('.hkr-custom-tags').length > 0) return;

            // 2. Скрываем стандартную невзрачную строку метаданных
            render.find('.full-start__details').hide();

            // 3. ПОДГОТОВКА ДАННЫХ
            var items = [];

            // Количество серий (только для сериалов)
            if (data.number_of_episodes) {
                items.push({
                    text: data.number_of_episodes + ' Серий',
                    color: '#27ae60' // Зеленый
                });
            }

            // Длительность (конвертируем минуты в читаемый вид)
            if (data.runtime || (data.last_episode_to_air && data.last_episode_to_air.runtime)) {
                var rt = data.runtime || data.last_episode_to_air.runtime;
                var time = Lampa.Utils.secondsToTime(rt * 60);
                items.push({
                    text: 'Длительность ≈ ' + time,
                    color: '#2980b9' // Синий
                });
            }

            // Жанры (берем первые три для компактности)
            if (data.genres && data.genres.length) {
                data.genres.slice(0, 3).forEach(function(g) {
                    items.push({
                        text: g.name,
                        color: 'rgba(255,255,255,0.1)' // Полупрозрачный серый
                    });
                });
            }

            // 4. СБОРКА HTML
            var container = $('<div class="hkr-custom-tags"></div>');
            
            // Стили контейнера
            container.css({
                display: 'flex',
                'flex-wrap': 'wrap',
                gap: '8px',
                'margin-top': '15px',
                'margin-bottom': '10px'
            });

            items.forEach(function(item) {
                var tag = $('<div class="hkr-tag">' + item.text + '</div>');
                tag.css({
                    background: item.color,
                    padding: '5px 12px',
                    'border-radius': '6px',
                    'font-size': '14px',
                    'font-weight': '500',
                    'color': '#fff',
                    'white-space': 'nowrap'
                });
                container.append(tag);
            });

            // 5. ВСТАВКА В ИНТЕРФЕЙС
            // Вставляем сразу после блока с кнопками "Смотреть", "Трейлер" и т.д.
            render.find('.full-start__buttons').after(container);
        }
    });
})();
