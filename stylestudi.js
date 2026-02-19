(function () {
    try {
        var style = `
            <style>
                /* Стилизуем блоки оценок под кнопки качества */
                .full-start__rate {
                    background: rgba(255, 255, 255, 0.1) !important;
                    border: 1px solid rgba(255, 255, 255, 0.05) !important;
                    border-radius: 4px !important;
                    padding: 0 8px !important;
                    margin-right: 10px !important;
                    display: inline-flex !important;
                    align-items: center !important;
                    height: 35px !important;
                    text-decoration: none !important;
                }

                /* Текст (названия сервисов) - делаем белым и жирным */
                .full-start__rate span,
                .full-start__rate:after {
                    color: #fff !important;
                    margin-left: 5px;
                    font-size: 14px !important;
                    font-weight: 700 !important;
                    text-transform: uppercase;
                }

                /* Убираем лишние иконки, если они мешают (опционально) */
                .full-start__rate img {
                    height: 14px;
                    margin-left: 5px;
                }
            </style>
        `;

        // Функция применения
        var inject = function() {
            if (!$('head').find('#rate-custom-style').length) {
                $('head').append('<div id="rate-custom-style">' + style + '</div>');
            }
            // Убираем инлайновые границы, которые прописывает Lampa
            $('.full-start__rate').css('border', '');
        };

        // Запуск
        if (window.appready) inject();
        else Lampa.Events.on('app', function (name) {
            if (name === 'ready') inject();
        });

        // Постоянная проверка при отрисовке карточки
        setInterval(inject, 1000);

    } catch (e) {
        console.error("Rate Plugin Error: ", e);
    }
})();
