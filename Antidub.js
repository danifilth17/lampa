(function () {
    // Функция запуска плагина
    var hkr_interface = function () {
        Lampa.Listener.follow('full', function (e) {
            if (e.type == 'start' || e.type == 'render') {
                // Маленькая задержка, чтобы DOM успел сформироваться
                setTimeout(function () {
                    var render = e.object.render();
                    var data = e.data;

                    // 1. ПРОВЕРКА: Если плашки уже на месте — выходим
                    if (render.find('.hkr-tag-container').length > 0) return;

                    // 2. СКРЫВАЕМ СТАНДАРТНЫЙ БЛОК (чтобы не было каши)
                    render.find('.full-start__details').css('display', 'none');

                    // 3. СОБИРАЕМ ДАННЫЕ
                    var tags = [];
                    
                    // Серии (только если это сериал)
                    if (data && data.number_of_episodes) {
                        tags.push({ text: data.number_of_episodes + ' Серий', color: '#27ae60' });
                    }

                    // Длительность
                    var rt = (data && data.runtime) || (data && data.last_episode_to_air && data.last_episode_to_air.runtime);
                    if (rt) {
                        var time = Lampa.Utils.secondsToTime(rt * 60);
                        tags.push({ text: 'Длительность ≈ ' + time, color: '#2980b9' });
                    }

                    // Жанры (макс 2 для компактности)
                    if (data && data.genres) {
                        data.genres.slice(0, 2).forEach(function (g) {
                            tags.push({ text: g.name, color: 'rgba(255,255,255,0.1)' });
                        });
                    }

                    // 4. СОЗДАЕМ КОНТЕЙНЕР
                    var container = $('<div class="hkr-tag-container"></div>').css({
                        display: 'flex',
                        gap: '8px',
                        marginTop: '15px',
                        flexWrap: 'wrap'
                    });

                    // 5. ДОБАВЛЯЕМ ПЛАШКИ
                    tags.forEach(function (tag) {
                        var item = $('<div>' + tag.text + '</div>').css({
                            background: tag.color,
                            padding: '5px 12px',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: '#fff'
                        });
                        container.append(item);
                    });

                    // 6. ВСТАВЛЯЕМ ПОСЛЕ КНОПОК
                    render.find('.full-start__buttons').after(container);
                    
                }, 50);
            }
        });
    };

    // Ожидание готовности приложения
    if (window.appready) {
        hkr_interface();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type == 'ready') hkr_interface();
        });
    }
})();
