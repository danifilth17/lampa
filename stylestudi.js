(function () {
    'use strict';

    var style = `
        <style id="lampa-white-transparent">
            /* Основной стиль кнопок */
            .studio-logos-container > div, 
            .studio-logos-container > a {
                /* Белый фон с прозрачностью 80% */
                background: rgba(255, 255, 255, 0.8) !important; 
                background-color: rgba(255, 255, 255, 0.8) !important;
                background-image: none !important;
                
                /* Сброс фильтров Lampa */
                filter: none !important;
                opacity: 1 !important;
                
                /* Синяя окантовка */
                border: 3px solid #0022cc !important;
                border-radius: 12px !important;
                box-sizing: border-box !important;
                transition: all 0.2s ease;
            }

            /* Логотипы оставляем черными и четкими */
            .studio-logos-container img, 
            .studio-logos-container svg {
                filter: brightness(0) !important;
                opacity: 1 !important;
                display: block !important;
            }

            /* Эффект при наведении/фокусе (делаем чуть светлее или меняем рамку) */
            .studio-logos-container > div.focus, 
            .studio-logos-container > a.focus {
                background: rgba(255, 255, 255, 0.95) !important; /* Почти непрозрачный при фокусе */
                border-color: #00a2ff !important;
                transform: scale(1.03);
            }
        </style>
    `;

    // Очищаем старые стили и вешаем новый
    $('[id^="lampa-"]').not('#lampa-white-transparent').remove();
    if (!$('#lampa-white-transparent').length) $('head').append(style);

    // Поддержка динамического обновления (как в прошлом шаге)
    function applyTransparency() {
        $('.studio-logos-container').find('div, a').each(function() {
            this.style.setProperty('background', 'rgba(255, 255, 255, 0.8)', 'important');
            this.style.setProperty('filter', 'none', 'important');
        });
    }

    setInterval(applyTransparency, 300);

    console.log('Lampa White Transparent: Loaded');
})();
