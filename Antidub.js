(function () {
    Lampa.Listener.follow('full', function (e) {
        if (e.type == 'start') {
            var body = e.object.render(); // Получаем DOM-дерево карточки
            
            // 1. УДАЛЯЕМ ДУБЛИКАТЫ (если они остались от прошлого запуска)
            body.find('.my-custom-info').remove();

            // 2. СОЗДАЕМ НОВЫЙ ЭЛЕМЕНТ
            // Добавляем класс 'my-custom-info' для идентификации
            var info = $('<div class="my-custom-info">42 Серии • 2 часа 9 минут</div>');

            // 3. ВСТАВЛЯЕМ В НУЖНОЕ МЕСТО
            // Например, после блока с рейтингами
            body.find('.full-start__buttons').after(info);
        }
    });
})();
