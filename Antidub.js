(function () {
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'start') {
            // Ждем чуть-чуть, пока Lampa выведет текст
            setTimeout(function() {
                var render = e.object.render();
                var details = render.find('.full-start__details');

                if (details.length > 0) {
                    // Берем стандартный текст (например: "2016 • США • 16+")
                    var originalText = details.text();
                    var parts = originalText.split('•'); // Режем по точке-разделителю

                    var newHtml = '<div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;">';
                    
                    parts.forEach(function(item) {
                        if (item.trim().length > 0) {
                            // Оборачиваем каждый кусочек в красивую плашку
                            newHtml += '<div style="' +
                                'background: rgba(255, 255, 255, 0.15);' +
                                'padding: 4px 12px;' +
                                'border-radius: 6px;' +
                                'font-size: 14px;' +
                                'font-weight: bold;' +
                                'color: #fff;' +
                                'border: 1px solid rgba(255, 255, 255, 0.2);' +
                                '">' + item.trim() + '</div>';
                        }
                    });

                    newHtml += '</div>';

                    // ЗАМЕНЯЕМ старый невзрачный текст на наши новые плашки
                    details.html(newHtml);
                    details.css('opacity', '1');
                }
            }, 200);
        }
    });
})();
