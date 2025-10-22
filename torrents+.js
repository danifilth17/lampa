(function(){
    // ===================== КОНФІГУРАЦІЯ ПРАПОРЦЯ =====================
    // SVG прапорець України БЕЗ вбудованих стилів - лише векторні дані
    // Видалено width, height, style з SVG щоб CSS мав повний контроль
    const UKRAINE_FLAG_SVG = '<svg viewBox="0 0 20 15"><rect width="20" height="7.5" y="0" fill="#0057B7"/><rect width="20" height="7.5" y="7.5" fill="#FFD700"/></svg>';

    // ===================== СИСТЕМА ТЕКСТОВИХ ЗАМІН =====================
    // Важливий порядок: спочатку довші слова, потім коротші
    // Додано маркери для уникнення повторної обробки
    const REPLACEMENTS = [
        // ---------- Перший пріоритет: складні та довші слова ----------
        ['Uaflix', 'UAFlix'],                    // Заміна бренду (від Zetvideo до UAFlix)
        ['Zetvideo', 'UaFlix'],                  // Альтернативна назва сервісу
        ['Нет истории просмотра', 'Історія перегляду відсутня'], // Переклад російського тексту
        ['Дублированный', 'Дубльований'],        // Корекція терміну дублювання
        ['Дубляж', 'Дубльований'],               // Альтернативний варіант терміну
        ['Многоголосый', 'Багатоголосий'],       // Переклад типу озвучення
        
        // ---------- Другий пріоритет: слова з прапорами ----------
        ['Украинский', UKRAINE_FLAG_SVG + ' Українською'], // Повна форма з прапором (російська)
        ['Український', UKRAINE_FLAG_SVG + ' Українською'], // Повна форма з прапором (українська)
        ['Украинская', UKRAINE_FLAG_SVG + ' Українською'], // Жіноча форма з прапором (російська)
        ['Українська', UKRAINE_FLAG_SVG + ' Українською'], // Жіноча форма з прапором (українська)
        ['1+1', UKRAINE_FLAG_SVG + ' 1+1'],      // Телеканал 1+1 з прапором
        
        // ---------- Третій пріоритет: регулярні вирази з умовами ----------
        // Додано перевірку на наявність прапора перед заміною
        {
            pattern: /\bUkr\b/gi,
            replacement: UKRAINE_FLAG_SVG + ' Українською',
            condition: (text) => !text.includes('flag-container') // Не замінюємо якщо вже є прапор
        },
        {
            pattern: /\bUa\b/gi, 
            replacement: UKRAINE_FLAG_SVG + ' UA',
            condition: (text) => !text.includes('flag-container') // Не замінюємо якщо вже є прапор
        }
    ];

    // ===================== СИСТЕМА СТИЛІВ ДЛЯ ПРАПОРЦЯ =====================
    const FLAG_STYLES = `
        /* Контейнер для прапора та тексту - забезпечує точне вирівнювання */
        .flag-container {
            display: inline-flex;                /* Гнучкий контейнер в рядку */
            align-items: center;                 /* Вертикальне центрування вмісту */
            vertical-align: middle;              /* Вирівнювання по середині рядка */
            height: 1.27em;                      /* Адаптивна висота (емівські одиниці) */
            margin-left: 3px;                    /* Відступ зліва 3px (збільшено на 1px) */
        }
        
        /* Стилі безпосередньо для SVG прапора */
        .flag-svg {
            display: inline-block;               /* Блоковий елемент в потокі тексту */
            vertical-align: middle;              /* Вертикальне центрування в рядку */
            margin-right: 2px;                   /* Зменшений відступ справа (2px) */
            margin-top: -5.5px;                  /* Точна корекція позиції по вертикалі */
            border-radius: 5px;                  /* Закруглені кути для сучасного вигляду */
            box-shadow: 0 2px 4px rgba(0,0,0,0.2); /* Легка тінь для 3D ефекту */
            border: 1px solid rgba(0,0,0,0.15);  /* Тонка рамка для кращого контрасту */
            width: 22.56px;                      /* Зменшена ширина на 10% (25px - 10% = 22.5px) */
            height: 17.14px;                     /* Зменшена висота на 10% (19px - 10% = 17.1px) */
        }
        
        /* Стилі для мобільних пристроїв (екран менше 768px) */
        @media (max-width: 767px) {
            .flag-svg {
                width: 16.03px;                  /* Зменшена ширина на 15% (18.75px - 15% = 15.94px) */
                height: 12.19px;                 /* Зменшена висота на 15% (14.25px - 15% = 12.11px) */
                margin-right: 1px;               /* Зменшений відступ справа для мобільних */
                margin-top: -4px;                /* Скоригована вертикальна позиція */
            }
        }
        
        /* Стилі для текстів поруч з прапором - забезпечують узгоджене вирівнювання */
        .flag-container ~ span,
        .flag-container + * {
            vertical-align: middle;              /* Центрування тексту відносно прапора */
        }
        
        /* Маркер для вже оброблених елементів - запобігає повторній обробці */
        .ua-flag-processed {
            position: relative;
        }

        /* Спеціальні стилі для фільтрів та випадаючих списків */
        .filter-item .flag-svg,
        .selector-item .flag-svg,
        .dropdown-item .flag-svg,
        .voice-option .flag-svg,
        .audio-option .flag-svg {
            margin-right: 1px;                   /* Зменшений відступ справа для фільтрів */
            margin-top: -2px;                    /* Вертикальна корекція для фільтрів */
            width: 18.05px;                      /* Зменшена ширина на 10% (20px - 10% = 18px) */
            height: 13.54px;                     /* Зменшена висота на 10% (15px - 10% = 13.5px) */
        }

        /* Стилі для мобільних пристроїв у фільтрах */
        @media (max-width: 767px) {
            .filter-item .flag-svg,
            .selector-item .flag-svg,
            .dropdown-item .flag-svg,
            .voice-option .flag-svg,
            .audio-option .flag-svg {
                width: 11.97px;                  /* Зменшена ширина на 15% (14px - 15% = 11.9px) */
                height: 8.98px;                  /* Зменшена висота на 15% (10.5px - 15% = 8.93px) */
                margin-right: 0px;               /* Мінімальний відступ справа для мобільних фільтрів */
                margin-top: -1px;                /* Скоригована вертикальна позиція */
            }
        }

        /* Стилі для описів відео - покращує читабельність */
        .online-prestige__description,
        .video-description,
        [class*="description"],
        [class*="info"] {
            line-height: 1.5;                    /* Збільшений міжрядковий інтервал */
        }
    `;

    // ===================== СИСТЕМА КОЛЬОРОВИХ ІНДИКАТОРІВ =====================
    const STYLES = {
        // ---------- Індикатори кількості роздач (Seeds) ----------
        '.torrent-item__seeds span.low-seeds': {
            color: '#e74c3c',                    // Червоний - критично мало (0-4)
            'font-weight': 'bold'                // Жирний шрифт для акценту
        },
        '.torrent-item__seeds span.medium-seeds': {
            color: '#ffff00',                    // Жовтий - середня кількість (5-14)
           'font-weight': 'bold'                 // Жирний шрифт для помітності
        },
        '.torrent-item__seeds span.high-seeds': {
            color: '#2ecc71',                    // Зелений - багато роздач (15+)
            'font-weight': 'bold'                // Жирний шрифт для виділення
        },
        
        // ---------- Індикатори якості (бітрейт) ----------
        '.torrent-item__bitrate span.low-bitrate': {
            color: '#ffff00',                    // Жовтий - низька якість (≤10)
            'font-weight': 'bold'                // Жирний шрифт для попередження
        },
        '.torrent-item__bitrate span.medium-bitrate': {
            color: '#2ecc71',                    // Зелений - середня якість (11-40)
            'font-weight': 'bold'                // Жирний шрифт для позитивного акценту
        },
        '.torrent-item__bitrate span.high-bitrate': {
            color: '#e74c3c',                    // Червоний - висока якість (41+)
            'font-weight': 'bold'                // Жирний шрифт для виділення
        },
        
        // ---------- Індикатори джерел (трекери) ----------
        '.torrent-item__tracker.utopia': {
            color: '#9b59b6',                    // Фіолетовий - трекер Utopia
            'font-weight': 'bold'                // Жирний шрифт для ідентифікації
        },
        '.torrent-item__tracker.toloka': {
            color: '#3498db',                    // Блакитний - трекер Toloka  
            'font-weight': 'bold'                // Жирний шрифт для ідентифікації
        },
        '.torrent-item__tracker.mazepa': {
            color: '#C9A0DC',                    // Лавандовий - трекер Mazepa
            'font-weight': 'bold'                // Жирний шрифт для ідентифікації
        }
    };

    // ===================== ІНІЦІАЛІЗАЦІЯ СТИЛІВ =====================
    let style = document.createElement('style'); // Створення динамічного стилевого елемента
    style.innerHTML = FLAG_STYLES + '\n' + Object.entries(STYLES).map(([selector, props]) => {
        // Генерація CSS правил для кожного селектора
        return `${selector} { ${Object.entries(props).map(([prop, val]) => `${prop}: ${val} !important`).join('; ')} }`;
    }).join('\n'); // Об'єднання всіх правил в один рядок
    document.head.appendChild(style); // Вставка стилів в голову документа

    // ===================== СИСТЕМА ЗАМІНИ ТЕКСТУ ДЛЯ ФІЛЬТРІВ =====================
    const UKRAINIAN_STUDIOS = [
        'DniproFilm', 'Дніпрофільм', 'Цікава Ідея', 'Колодій Трейлерів', 
        'UaFlix', 'BaibaKo', 'В одне рило', 'Так Треба Продакшн', 
        'TreleMore', 'Гуртом', 'Exit Studio', 'FilmUA', 'Novator Film', 
        'LeDoyen', 'Postmodern', 'Pryanik', 'CinemaVoice', 'UkrainianVoice'
    ];

    function processVoiceFilters() {
        const voiceFilterSelectors = [
            '[data-type="voice"]',
            '[data-type="audio"]',
            '.voice-options',
            '.audio-options',
            '.voice-list',
            '.audio-list',
            '.studio-list',
            '.translation-filter',
            '.dubbing-filter'
        ];

        voiceFilterSelectors.forEach(selector => {
            try {
                const filters = document.querySelectorAll(selector);
                filters.forEach(filter => {
                    if (filter.classList.contains('ua-voice-processed')) return;
                    
                    let html = filter.innerHTML;
                    let changed = false;
                    
                    // Додаємо прапори тільки для українських студій у фільтрах
                    UKRAINIAN_STUDIOS.forEach(studio => {
                        if (html.includes(studio) && !html.includes(UKRAINE_FLAG_SVG)) {
                            html = html.replace(new RegExp(studio, 'g'), UKRAINE_FLAG_SVG + ' ' + studio);
                            changed = true;
                        }
                    });

                    // Додаємо прапори для загальних українських позначень
                    if (html.includes('Українська') && !html.includes(UKRAINE_FLAG_SVG)) {
                        html = html.replace(/Українська/g, UKRAINE_FLAG_SVG + ' Українська');
                        changed = true;
                    }
                    if (html.includes('Украинская') && !html.includes(UKRAINE_FLAG_SVG)) {
                        html = html.replace(/Украинская/g, UKRAINE_FLAG_SVG + ' Українська');
                        changed = true;
                    }
                    if (html.includes('Ukr') && !html.includes(UKRAINE_FLAG_SVG)) {
                        html = html.replace(/Ukr/gi, UKRAINE_FLAG_SVG + ' Українською');
                        changed = true;
                    }
                    
                    if (changed) {
                        filter.innerHTML = html;
                        filter.classList.add('ua-voice-processed');
                        
                        filter.querySelectorAll('svg').forEach(svg => {
                            if (!svg.closest('.flag-container')) {
                                svg.classList.add('flag-svg');
                                const wrapper = document.createElement('span');
                                wrapper.className = 'flag-container';
                                svg.parentNode.insertBefore(wrapper, svg);
                                wrapper.appendChild(svg);
                            }
                        });
                    }
                });
            } catch (error) {
                console.warn('Помилка обробки фільтрів озвучення:', error);
            }
        });
    }

    // ===================== ОПТИМІЗОВАНА СИСТЕМА ЗАМІНИ ТЕКСТУ =====================
    function replaceTexts() {
        // Обмежений список контейнерів для уникнення зависання
        const safeContainers = [
            '.online-prestige-watched__body',
            '.online-prestige--full .online-prestige__title',
            '.online-prestige--full .online-prestige__info',
            '.online-prestige__description',
            '.video-description',
            '.content__description',
            '.movie-info',
            '.series-info'
        ];

        // Безпечний пошук елементів з обмеженням
        const processSafeElements = () => {
            safeContainers.forEach(selector => {
                try {
                    const elements = document.querySelectorAll(selector + ':not(.ua-flag-processed)');
                    elements.forEach(element => {
                        if (element.closest('.hidden, [style*="display: none"]')) return;
                        
                        let html = element.innerHTML;
                        let changed = false;
                        
                        REPLACEMENTS.forEach(item => {
                            if (Array.isArray(item)) {
                                // Обробка звичайних рядків (чутливі до регістру)
                                if (html.includes(item[0]) && !html.includes(UKRAINE_FLAG_SVG)) {
                                    html = html.replace(new RegExp(item[0], 'g'), item[1]);
                                    changed = true;
                                }
                            } else if (item.pattern) {
                                // Обробка регулярних виразів з умовами
                                if ((!item.condition || item.condition(html)) && item.pattern.test(html) && !html.includes(UKRAINE_FLAG_SVG)) {
                                    html = html.replace(item.pattern, item.replacement);
                                    changed = true;
                                }
                            }
                        });
                        
                        // Якщо були зміни - оновлюємо вміст
                        if (changed) {
                            element.innerHTML = html;
                            element.classList.add('ua-flag-processed');
                            
                            // Обробка SVG прапорців для вирівнювання
                            element.querySelectorAll('svg').forEach(svg => {
                                // Перевіряємо чи вже не знаходиться в контейнері
                                if (!svg.closest('.flag-container')) {
                                    svg.classList.add('flag-svg'); // Додавання CSS класу
                                    // Створення контейнера для вирівнювання
                                    const wrapper = document.createElement('span');
                                    wrapper.className = 'flag-container';
                                    svg.parentNode.insertBefore(wrapper, svg);
                                    wrapper.appendChild(svg);
                                    
                                    // Додавання сусіднього тексту в контейнер
                                    if (svg.nextSibling && svg.nextSibling.nodeType === 3) {
                                        wrapper.appendChild(svg.nextSibling);
                                    }
                                }
                            });
                        }
                    });
                } catch (error) {
                    console.warn('Помилка обробки селектора:', selector, error);
                }
            });
        };

        // Виконуємо обробку з обмеженням часу
        const startTime = Date.now();
        const TIME_LIMIT = 50; // 50ms максимальний час обробки
        
        processSafeElements();
        
        // Перевіряємо час та обробляємо фільтри тільки якщо є час
        if (Date.now() - startTime < TIME_LIMIT) {
            processVoiceFilters();
        }
    }

    // ===================== СИСТЕМА ОНОВЛЕННЯ СТИЛІВ ТОРЕНТІВ =====================
    function updateTorrentStyles() {
        // Швидка обробка тільки видимих елементів
        const visibleElements = {
            seeds: document.querySelectorAll('.torrent-item__seeds span:not([style*="display: none"])'),
            bitrate: document.querySelectorAll('.torrent-item__bitrate span:not([style*="display: none"])'),
            tracker: document.querySelectorAll('.torrent-item__tracker:not([style*="display: none"])')
        };

        if (visibleElements.seeds.length > 0) {
            visibleElements.seeds.forEach(span => {
                const seeds = parseInt(span.textContent) || 0; // Числове значення
                span.classList.remove('low-seeds', 'medium-seeds', 'high-seeds'); // Очищення старих класів
                
                // Динамічне додавання класів за значенням
                if (seeds <= 4) {
                    span.classList.add('low-seeds'); // Червоний індикатор
                } else if (seeds <= 14) {
                    span.classList.add('medium-seeds'); // Жовтий індикатор
                } else {
                    span.classList.add('high-seeds'); // Зелений індикатор
                }
            });
        }

        if (visibleElements.bitrate.length > 0) {
            visibleElements.bitrate.forEach(span => {
                const bitrate = parseFloat(span.textContent) || 0; // Числове значення
                span.classList.remove('low-bitrate', 'medium-bitrate', 'high-bitrate'); // Очищення
                
                // Динамічне додавання класів за значенням
                if (bitrate <= 10) {
                    span.classList.add('low-bitrate'); // Жовтий індикатор
                } else if (bitrate <= 40) {
                    span.classList.add('medium-bitrate'); // Зелений індикатор
                } else {
                    span.classList.add('high-bitrate'); // Червоний індикатор
                }
            });
        }

        if (visibleElements.tracker.length > 0) {
            visibleElements.tracker.forEach(tracker => {
                const text = tracker.textContent.trim().toLowerCase(); // Текст в нижньому регістрі
                tracker.classList.remove('utopia', 'toloka', 'mazepa'); // Очищення старих класів
                
                // Додавання класів за назвою трекера
                if (text.includes('utopia')) tracker.classList.add('utopia');
                else if (text.includes('toloka')) tracker.classList.add('toloka');
                else if (text.includes('mazepa')) tracker.classList.add('mazepa');
            });
        }
    }

    // ===================== ОСНОВНА ФУНКЦІЯ ОНОВЛЕННЯ =====================
    function updateAll() {
        try {
            replaceTexts();        // Виконання текстових замін
            updateTorrentStyles(); // Оновлення візуальних стилів
        } catch (error) {
            console.warn('Помилка оновлення:', error);
        }
    }

    // ===================== ОПТИМІЗОВАНА СИСТЕМА СПОСТЕРЕЖЕННЯ =====================
    let updateTimeout = null;
    const observer = new MutationObserver(mutations => {
        // Фільтруємо тільки важливі зміни
        const hasImportantChanges = mutations.some(mutation => {
            return mutation.addedNodes.length > 0 && 
                   !mutation.target.closest('.hidden, [style*="display: none"]');
        });

        if (hasImportantChanges) {
            clearTimeout(updateTimeout);
            updateTimeout = setTimeout(updateAll, 150); // Відкладене оновлення (150ms)
        }
    });

    // Запуск спостерігача за змінами в DOM
    observer.observe(document.body, { 
        childList: true,    // Спостереження за зміною дочірніх елементів
        subtree: true,      // Спостереження за всіма вкладеними елементами
        attributes: false,  // Вимкнути спостереження за атрибутами
        characterData: false // Вимкнути спостереження за текстом
    });
    
    // Первинна ініціалізація при завантаженні
    setTimeout(updateAll, 1000);
})();

// ===================== ІНІЦІАЛІЗАЦІЯ TV РЕЖИМУ LAMPA =====================
Lampa.Platform.tv();
