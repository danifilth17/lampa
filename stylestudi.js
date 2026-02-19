(function () {
    function init() {
        var style = `
            <style>
                /* Контейнер оценки делаем похожим на плашку качества */
                .full-start__rate {
                    background: rgba(255, 255, 255, 0.08) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    border-radius: 6px !important;
                    padding: 2px 8px !important;
                    margin-right: 8px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    height: 32px !important;
                    box-sizing: border-box !important;
                    font-size: 16px !important;
                }

                /* Текст подписей (TMDB, LAMPA, CUB) делаем белым и уменьшаем */
                .full-start__rate::after, 
                .full-start__rate span:not([style*="color"]) {
                    color: #fff !important;
                    margin-left: 5px;
                    font-size: 0.75em;
                    font-weight: bold;
                    opacity: 0.8;
                }

                /* Иконка огонька в CUB */
                .full-start__rate img {
                    width: 16px;
                    height: 16px;
                    margin: 0 4px;
                }
            </style>
        `;

        $('body').append(style);

        // Функция очистки лишних стилей, которые мешают плашкам
        function patchRates() {
            $('.full-start__rate').each(function() {
                // Удаляем inline-границу, но оставляем цвет текста (оценки)
                $(this).css({
                    'border': '',
                    'border-color': ''
                });
            });
        }

        // Подписываемся на события Lampa
        Lampa.Listener.follow('full', function (e) {
            if (e.type === 'complite') {
                setTimeout(patchRates, 10); // Небольшая задержка для рендера
            }
        });
    }

    // Безопасный запуск
    try {
        if (window.appready) init();
        else {
            Lampa.Events.on('app', function (name) {
                if (name === 'ready') init();
            });
        }
    } catch (e) {
        console.log('Plugin Rate Style Error:', e);
    }
})();
