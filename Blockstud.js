(function () {
    'use strict';

    // Слушаем события приложения Lampa
    Lampa.Listener.follow('app', function (e) {
        // Когда карточка фильма полностью загружена и отрисована
        if (e.type === 'ready' || e.type === 'complite') {
            
            // Даем небольшую задержку (200-500мс), чтобы интерфейс успел "устаканиться"
            setTimeout(function() {
                // Ищем кнопку онлайн в футере карточки
                var onlineBtn = $('.full-start__buttons .selector.button--online, .full-start__buttons [data-action="online"]');
                
                if (onlineBtn.length) {
                    // 1. Принудительно переводим фокус на кнопку
                    Lampa.Controller.focus(onlineBtn[0]);
                    
                    // 2. Визуально подсвечиваем, что мы выбрали её
                    $('.selector').removeClass('focus');
                    onlineBtn.addClass('focus');
                    
                    console.log('Auto-Focus: Кнопка Онлайн выбрана автоматически');
                }
            }, 400); 
        }
    });

    // Дополнительная проверка: если кнопка не нажимается из-за "залипшего" фокуса
    // Сделаем так, чтобы при первом нажатии на "ОК" (enter) вызывался именно онлайн
    var originalEnter = Lampa.Controller.enter;
    Lampa.Controller.enter = function() {
        var current = Lampa.Controller.enabled().name;
        if (current === 'full_start') {
            var onlineBtn = $('.full-start__buttons .selector.focus.button--online');
            if (onlineBtn.length) {
                // Если мы уже на кнопке онлайн, просто даем ей сработать
            }
        }
        originalEnter.apply(this, arguments);
    };

})();
