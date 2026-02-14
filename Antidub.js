(function () {
    function init() {
        Lampa.Listener.follow('full', function (e) {
            // Реагируем только на открытие или перерисовку карточки
            if (e.type == 'start' || e.type == 'render') {
                
                // Ждем мизерную задержку, чтобы Lampa успела построить свой DOM
                setTimeout(function() {
                    var render = e.object.render();
                    
                    // 1. ПРОВЕРКА НА ДУБЛИКАТ (по ID объекта, чтобы привязаться к фильму)
                    var cardId = e.data ? (e.data.id || e.data.title) : 'unknown';
                    if (render.find('.hkr-ready').attr('data-id') == cardId) {
                        return; 
                    }

                    // 2. ЧИСТКА: если в этой карточке висят старые или чужие плашки — удаляем
                    render.find('.hkr-ready').remove();
                    render.find('.full-start__details').hide(); // Скрываем стандарт

                    // 3. СБОР ДАННЫХ
                    var data = e.data || {};
                    var tags = [];

                    // Плашка серий
                    if (data.number_of_episodes) {
                        tags.push({t: data.number_of_episodes + ' Сер.', c: '#27ae60'});
                    }

                    // Плашка времени
                    var runtime = data.runtime || (data.last_episode_to_air && data.last_episode_to_air.runtime);
                    if (runtime) {
                        tags.push({t: Lampa.Utils.secondsToTime(runtime * 60), c: '#2980b9'});
                    }

                    // Плашки жанров
                    if (data.genres) {
                        data.genres.slice(0, 2).forEach(function(g) {
                            tags.push({t: g.name, c: 'rgba(255,255,255,0.15)'});
                        });
                    }

                    // 4. СОЗДАНИЕ КОНТЕЙНЕРА
                    var container = $('<div class="hkr-ready"></div>');
                    container.attr('data-id', cardId); // Метка, чтобы не дублировать
                    
                    container.css({
                        display: 'flex',
                        gap: '6px',
                        marginTop: '12px',
                        flexWrap: 'wrap'
                    });

                    // 5. НАПОЛНЕНИЕ
                    tags.forEach(function(tag) {
                        var htmlTag = $('<div style="background:'+tag.c+'; padding:4px 10px; border-radius:4px; font-size:13px; font-weight:bold; color:#fff;">'+tag.t+'</div>');
                        container.append(htmlTag);
                    });

                    // 6. ВСТАВКА
                    // Пытаемся вставить после кнопок. Если кнопок нет — в начало описания.
                    var target = render.find('.full-start__buttons');
                    if (target.length > 0) {
                        target.after(container);
                    } else {
                        render.find('.full-start__info').prepend(container);
                    }
                }, 10);
            }
        });
    }

    // Запуск плагина после готовности Lampa
    if (window.appready) init();
    else Lampa.Listener.follow('app', function (e) { if (e.type == 'ready') init(); });
})();
