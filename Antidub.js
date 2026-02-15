(function () {
    "use strict";

    function LampaHKRInterface() {
        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'start') {
                var render = e.object.render();
                var data = e.data;

                // 1. Сразу находим и скрываем стандартную "невзрачную" строку
                var details = render.find('.full-start__details');
                details.css('display', 'none');

                // 2. Собираем данные для плашек
                var tags = [];

                // Количество серий (Зеленая плашка)
                if (data && data.number_of_episodes) {
                    tags.push({ text: data.number_of_episodes + ' Серий', color: '#27ae60' });
                }

                // Длительность (Синяя плашка)
                var runtime = (data && data.runtime) || (data && data.last_episode_to_air && data.last_episode_to_air.runtime);
                if (runtime) {
                    var h = Math.floor(runtime / 60);
                    var m = runtime % 60;
                    var timeStr = (h > 0 ? h + ' ч. ' : '') + m + ' мин.';
                    tags.push({ text: 'Длительность ≈ ' + timeStr, color: '#2980b9' });
                }

                // Жанры (Темные плашки)
                if (data && data.genres) {
                    data.genres.slice(0, 3).forEach(function (g) {
                        tags.push({ text: g.name, color: 'rgba(255,255,255,0.15)' });
                    });
                }

                // 3. Формируем HTML
                var html = '<div class="hkr-interface-container" style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; margin-bottom: 10px;">';
                
                for (var i = 0; i < tags.length; i++) {
                    html += '<div style="background: ' + tags[i].color + '; padding: 5px 12px; border-radius: 6px; font-size: 14px; font-weight: bold; color: #fff; white-space: nowrap;">' + tags[i].text + '</div>';
                }
                
                html += '</div>';

                // 4. БЕЗОПАСНАЯ ВСТАВКА
                // Сначала удаляем наш старый контейнер (если он вдруг уже был создан при перерисовке)
                render.find('.hkr-interface-container').remove();
                
                // Вставляем после кнопок управления
                render.find('.full-start__buttons').after(html);
            }
        });
    }

    // Запуск плагина только после полной готовности Lampa
    if (window.appready) {
        LampaHKRInterface();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') LampaHKRInterface();
        });
    }
})();
