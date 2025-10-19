(function() {

'use strict';

// ===== ЯЗЫКИ =====
Lampa.Lang.add({
    drxaos_themes: {
        ru: 'DRXAOS Темы',
        en: 'DRXAOS Themes',
        uk: 'DRXAOS Теми'
    },
    drxaos_theme: {
        ru: 'Цветовая схема',
        en: 'Color Scheme',
        uk: 'Кольорова схема'
    },
    drxaos_animations: {
        ru: 'Анимации',
        en: 'Animations',
        uk: 'Анімації'
    },
    drxaos_glow: {
        ru: 'Свечение',
        en: 'Glow Effect',
        uk: 'Світіння'
    },
    drxaos_fullbuttons: {
        ru: 'Полные названия кнопок',
        en: 'Full Button Labels',
        uk: 'Повні назви кнопок'
    },
    drxaos_transparency: {
        ru: 'Прозрачность панелей',
        en: 'Panel Transparency',
        uk: 'Прозорість панелей'
    }
});

var prevtheme = '';

// ===== ПРИМЕНЕНИЕ ТЕМЫ =====
function applyTheme(theme) {
    $('#drxaos_theme_style').remove();

    if (prevtheme !== '' && ((prevtheme === 'default' && theme !== 'default') || 
        (prevtheme !== 'default' && theme === 'default'))) {
        window.location.reload();
    }

    prevtheme = theme;
    if (theme === 'default') return;

    var glow = Lampa.Storage.get('drxaos_glow', 'medium');
    var transparency = Lampa.Storage.get('drxaos_transparency', 85);

    var glowValues = {
        'off': '0',
        'low': '0.2em',
        'medium': '0.4em',
        'high': '0.6em'
    };

    var glowSize = glowValues[glow] || glowValues['medium'];
    var alpha = transparency / 100;

    var style = $('<style id="drxaos_theme_style"></style>');

    var themes = {

        cyberpunk: `
/* ============================================
   CYBERPUNK - Фиолетово-голубая киберпанк схема
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');

/* ШРИФТЫ */
*, body, .card__title, .full-start__title, .menu__item-title, .settings__title, .button {
    font-family: 'Orbitron', sans-serif !important;
    letter-spacing: 0.05em;
}

/* ЦВЕТА ТЕКСТА ДЛЯ РАЗНЫХ ЭЛЕМЕНТОВ */
.card__title, .card__title * {
    color: #00E5FF !important;
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
    font-weight: 600;
}

.full-start__title, .full-start__title *,
.menu__item-title, .menu__item-title *,
.settings__title, .settings__title * {
    color: #80D8FF !important;
    text-shadow: 0 0 8px rgba(128, 216, 255, 0.5);
}

.card__description, .card__description *,
.full-start__description, .full-start__description *,
.info__line, .info__line * {
    color: #E1F5FE !important;
    text-shadow: none;
}

.button, .button *,
.full-start__button, .full-start__button *,
.menu__item, .menu__item * {
    color: #FFFFFF !important;
}

/* ФОН */
html, body, .extensions {
    background: linear-gradient(135deg, #0a0a1e 0%, #1a0a2e 25%, #2d0944 50%, #1a0a2e 75%, #0a0a1e 100%) !important;
    background-size: 400% 400%;
    animation: gradientShift 20s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* ХАМЕЛЕОН АНИМАЦИЯ ГРАНИЦ */
@keyframes chameleonBorder {
    0%, 100% { 
        border-image-source: linear-gradient(135deg, #8a2be2, #00bfff, #b300ff);
    }
    33% { 
        border-image-source: linear-gradient(135deg, #00bfff, #b300ff, #8a2be2);
    }
    66% { 
        border-image-source: linear-gradient(135deg, #b300ff, #8a2be2, #00bfff);
    }
}

/* ВЕРХНИЕ КНОПКИ НАВИГАЦИИ */
body .head__action,
.head__action {
    background: rgba(138, 43, 226, 0.3) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(138, 43, 226, 0.5) !important;
    transition: all 0.3s ease !important;
}

body .head__action.focus,
body .head__action:hover,
.head__action.focus,
.head__action:hover {
    background: linear-gradient(45deg, #8a2be2, #00bfff) !important;
    border: 1px solid #00bfff !important;
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.5) !important;
    transform: scale(1.1) !important;
}

/* GLASSMORPHISM ПАНЕЛИ */
body .navigation-bar .navigation-bar__body,
.navigation-bar__body {
    background: rgba(20, 15, 35, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-bottom: 2px solid transparent !important;
    border-image: linear-gradient(90deg, #8a2be2, #00bfff) 1 !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
}

body .modal .modal__content,
.modal__content,
body .settings .settings__content,
.settings__content {
    background: rgba(15, 10, 25, ${alpha}) !important;
    backdrop-filter: blur(25px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
    border: 2px solid rgba(138, 43, 226, 0.5) !important;
    box-shadow: 0 8px 32px rgba(0, 191, 255, 0.3) !important;
    border-radius: 1em !important;
}

/* ПАНЕЛИ В НАСТРОЙКАХ */
body .settings .settings-list,
.settings .settings-list,
body .settings-param,
.settings-param {
    background: rgba(20, 15, 35, 0.5) !important;
    border: 1px solid rgba(138, 43, 226, 0.3) !important;
}

body .player .player-panel,
.player-panel {
    background: rgba(20, 15, 35, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-top: 2px solid #00bfff !important;
}

/* КАРТОЧКИ - УБИРАЕМ СТАНДАРТНУЮ ОБВОДКУ */
.card__img,
body .card__img {
    border: 3px solid transparent !important;
    border-radius: 0.5em !important;
    transition: all 0.4s ease !important;
    box-shadow: none !important;
    outline: none !important;
}

/* ПРИМЕНЯЕМ ТОЛЬКО НАШУ ОБВОДКУ */
.card__img {
    border-image: linear-gradient(135deg, #8a2be2, #00bfff, #b300ff) 1 !important;
}

.card:hover .card__img,
.card.focus .card__img,
body .card:hover .card__img,
body .card.focus .card__img {
    border: 3px solid transparent !important;
    border-image: linear-gradient(135deg, #8a2be2, #00bfff, #b300ff, #8a2be2) 1 !important;
    animation: chameleonBorder 3s linear infinite !important;
    box-shadow: 
        0 0 ${glowSize} #00bfff,
        0 0 calc(${glowSize} * 1.5) #8a2be2,
        0 0 calc(${glowSize} * 2) rgba(138, 43, 226, 0.4) !important;
    transform: scale(1.05) !important;
    outline: none !important;
}

/* УБИРАЕМ ::after ЕСЛИ ОН СОЗДАЕТ ДУБЛИРОВАНИЕ */
.card.focus .card__view::after,
.card:hover .card__view::after,
body .card.focus .card__view::after,
body .card:hover .card__view::after {
    display: none !important;
}

/* КНОПКИ И МЕНЮ */
body .menu__item.focus,
body .menu__item:hover,
.menu__item.focus,
.menu__item:hover,
body .button.focus,
body .button:hover,
.button.focus,
.button:hover,
body .full-start__button.focus,
body .full-start__button:hover,
.full-start__button.focus,
.full-start__button:hover,
body .simple-button.focus,
body .simple-button:hover,
.simple-button.focus,
.simple-button:hover,
body .settings-param.focus,
body .settings-param:hover,
.settings-param.focus,
.settings-param:hover,
body .selectbox-item.focus,
body .selectbox-item:hover,
.selectbox-item.focus,
.selectbox-item:hover {
    background: linear-gradient(90deg, #8a2be2, #00bfff) !important;
    color: #FFFFFF !important;
    backdrop-filter: blur(10px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
    border-radius: 0.5em !important;
    box-shadow: 0 4px 20px rgba(0, 191, 255, 0.4) !important;
    border: 2px solid transparent !important;
    border-image: linear-gradient(135deg, #8a2be2, #00bfff) 1 !important;
    transform: translateX(5px);
}

.full-start__button {
    background: rgba(138, 43, 226, 0.3) !important;
    border: 2px solid #8a2be2 !important;
    color: #00E5FF !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    transition: all 0.3s ease !important;
}

.full-start__button.focus,
.full-start__button:hover {
    background: linear-gradient(90deg, #8a2be2, #00bfff) !important;
    color: #FFFFFF !important;
    transform: scale(1.05) !important;
}

/* МЕТКИ КАЧЕСТВА */
.card__quality,
.card__type::after {
    background: linear-gradient(135deg, #8a2be2, #00bfff) !important;
    font-weight: 700;
    color: #FFFFFF !important;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    padding: 0.3em 0.6em;
    border-radius: 0.3em;
}

/* СКРОЛЛБАРЫ */
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: rgba(138, 43, 226, 0.2) !important;
    backdrop-filter: blur(10px) !important;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8a2be2, #00bfff) !important;
    border-radius: 5px;
    box-shadow: 0 0 5px #00bfff !important;
}

/* ПРОГРЕСС БАР */
.player-panel__timeline-progress {
    background: linear-gradient(90deg, #8a2be2, #00bfff, #b300ff, #8a2be2) !important;
    background-size: 300% 100%;
    animation: progressShine 3s linear infinite;
}

@keyframes progressShine {
    0% { background-position: 0% 0%; }
    100% { background-position: 300% 0%; }
}

/* РАЗДЕЛИТЕЛИ */
.settings-param-title {
    color: #00E5FF !important;
    border-bottom: 1px solid rgba(138, 43, 226, 0.5) !important;
}

body .settings-folder.focus,
body .settings-folder:hover,
.settings-folder.focus,
.settings-folder:hover {
    background: linear-gradient(90deg, #8a2be2, #00bfff) !important;
    border-radius: 0.5em !important;
}
`,

        matrix: `
/* ============================================
   MATRIX - Зеленая матричная схема
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

/* ШРИФТЫ */
*, body, .card__title, .full-start__title, .menu__item-title, .settings__title, .button {
    font-family: 'Share Tech Mono', monospace !important;
}

/* ЦВЕТА ТЕКСТА */
.card__title, .card__title * {
    color: #CCFF90 !important;
    text-shadow: 0 0 12px rgba(0, 255, 65, 0.7);
    font-weight: 700;
}

.full-start__title, .full-start__title *,
.menu__item-title, .menu__item-title *,
.settings__title, .settings__title * {
    color: #E0FFE0 !important;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.6);
}

.card__description, .card__description *,
.full-start__description, .full-start__description *,
.info__line, .info__line * {
    color: #C8E6C9 !important;
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
}

.button, .button *,
.full-start__button, .full-start__button *,
.menu__item, .menu__item * {
    color: #FFFFFF !important;
}

/* ФОН */
html, body, .extensions {
    background: linear-gradient(135deg, #000000 0%, #001a00 25%, #003300 50%, #001a00 75%, #000000 100%) !important;
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

/* ХАМЕЛЕОН ГРАНИЦ */
@keyframes chameleonBorderGreen {
    0%, 100% { 
        border-image-source: linear-gradient(90deg, #00ff41, #00c832, #39ff14);
    }
    33% { 
        border-image-source: linear-gradient(90deg, #00c832, #39ff14, #00ff41);
    }
    66% { 
        border-image-source: linear-gradient(90deg, #39ff14, #00ff41, #00c832);
    }
}

/* ВЕРХНИЕ КНОПКИ НАВИГАЦИИ */
body .head__action,
.head__action {
    background: rgba(0, 255, 65, 0.2) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(0, 255, 65, 0.4) !important;
    transition: all 0.3s ease !important;
}

body .head__action.focus,
body .head__action:hover,
.head__action.focus,
.head__action:hover {
    background: linear-gradient(45deg, #00ff41, #39ff14) !important;
    border: 1px solid #00ff41 !important;
    box-shadow: 0 0 15px rgba(0, 255, 65, 0.6) !important;
    transform: scale(1.1) !important;
}

/* GLASSMORPHISM */
body .navigation-bar .navigation-bar__body,
.navigation-bar__body {
    background: rgba(0, 20, 0, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-bottom: 2px solid #00ff41 !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
}

body .modal .modal__content,
.modal__content,
body .settings .settings__content,
.settings__content {
    background: rgba(0, 10, 0, ${alpha}) !important;
    backdrop-filter: blur(25px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
    border: 2px solid #00ff41 !important;
    box-shadow: 0 8px 32px rgba(0, 255, 65, 0.4) !important;
    border-radius: 1em !important;
}

/* ПАНЕЛИ В НАСТРОЙКАХ */
body .settings .settings-list,
.settings .settings-list,
body .settings-param,
.settings-param {
    background: rgba(0, 20, 0, 0.5) !important;
    border: 1px solid rgba(0, 255, 65, 0.3) !important;
}

body .player .player-panel,
.player-panel {
    background: rgba(0, 20, 0, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-top: 2px solid #00ff41 !important;
}

/* КАРТОЧКИ - УБИРАЕМ СТАНДАРТНУЮ ОБВОДКУ */
.card__img,
body .card__img {
    border: 3px solid transparent !important;
    border-radius: 0.5em !important;
    transition: all 0.4s ease !important;
    box-shadow: none !important;
    outline: none !important;
}

/* ПРИМЕНЯЕМ ТОЛЬКО НАШУ ОБВОДКУ */
.card__img {
    border-image: linear-gradient(135deg, #00ff41, #00c832, #39ff14) 1 !important;
}

.card:hover .card__img,
.card.focus .card__img,
body .card:hover .card__img,
body .card.focus .card__img {
    border: 3px solid transparent !important;
    border-image: linear-gradient(135deg, #00ff41, #00c832, #39ff14, #00ff41) 1 !important;
    animation: chameleonBorderGreen 3s linear infinite !important;
    box-shadow: 
        0 0 ${glowSize} #00ff41,
        0 0 calc(${glowSize} * 1.5) #39ff14,
        0 0 calc(${glowSize} * 2) rgba(0, 255, 65, 0.4) !important;
    transform: scale(1.05) !important;
    outline: none !important;
}

/* УБИРАЕМ ::after ЕСЛИ ОН СОЗДАЕТ ДУБЛИРОВАНИЕ */
.card.focus .card__view::after,
.card:hover .card__view::after,
body .card.focus .card__view::after,
body .card:hover .card__view::after {
    display: none !important;
}

/* КНОПКИ */
body .menu__item.focus,
body .menu__item:hover,
.menu__item.focus,
.menu__item:hover,
body .button.focus,
body .button:hover,
.button.focus,
.button:hover,
body .full-start__button.focus,
body .full-start__button:hover,
.full-start__button.focus,
.full-start__button:hover,
body .simple-button.focus,
body .simple-button:hover,
.simple-button.focus,
.simple-button:hover,
body .settings-param.focus,
body .settings-param:hover,
.settings-param.focus,
.settings-param:hover,
body .selectbox-item.focus,
body .selectbox-item:hover,
.selectbox-item.focus,
.selectbox-item:hover {
    background: linear-gradient(90deg, #00ff41, #00c832) !important;
    color: #000000 !important;
    backdrop-filter: blur(10px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
    border-radius: 0.5em !important;
    box-shadow: 0 4px 20px rgba(0, 255, 65, 0.5) !important;
    border: 2px solid #39ff14 !important;
    transform: translateX(5px);
    font-weight: 700;
}

.full-start__button {
    background: rgba(0, 255, 65, 0.2) !important;
    border: 2px solid #00ff41 !important;
    color: #CCFF90 !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    transition: all 0.3s ease !important;
}

.full-start__button.focus,
.full-start__button:hover {
    background: linear-gradient(90deg, #00ff41, #00c832) !important;
    color: #000000 !important;
    transform: scale(1.05) !important;
}

/* МЕТКИ */
.card__quality,
.card__type::after {
    background: linear-gradient(135deg, #00ff41, #00c832) !important;
    color: #000000 !important;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);
}

/* СКРОЛЛБАРЫ */
::-webkit-scrollbar-track {
    background: rgba(0, 255, 65, 0.2) !important;
    backdrop-filter: blur(10px) !important;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00ff41, #00c832) !important;
    box-shadow: 0 0 8px #00ff41 !important;
}

/* ПРОГРЕСС */
.player-panel__timeline-progress {
    background: linear-gradient(90deg, #00ff41, #00c832, #39ff14, #00ff41) !important;
    background-size: 300% 100%;
    animation: progressShine 2s linear infinite;
}

.settings-param-title {
    color: #CCFF90 !important;
    border-bottom: 1px solid rgba(0, 255, 65, 0.5) !important;
}

body .settings-folder.focus,
body .settings-folder:hover,
.settings-folder.focus,
.settings-folder:hover {
    background: linear-gradient(90deg, #00ff41, #00c832) !important;
    border-radius: 0.5em !important;
}
`,

        retrowave: `
/* ============================================
   RETRO WAVE - Розово-фиолетово-голубая схема 80-х
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

/* ШРИФТЫ */
*, body, .card__title, .full-start__title, .menu__item-title, .settings__title, .button {
    font-family: 'Audiowide', cursive !important;
}

/* ЦВЕТА ТЕКСТА */
.card__title, .card__title * {
    color: #00FFFF !important;
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.8), 0 0 30px rgba(247, 37, 133, 0.5);
    font-weight: 700;
}

.full-start__title, .full-start__title *,
.menu__item-title, .menu__item-title *,
.settings__title, .settings__title * {
    color: #B3FFFF !important;
    text-shadow: 0 0 12px rgba(179, 255, 255, 0.7);
}

.card__description, .card__description *,
.full-start__description, .full-start__description *,
.info__line, .info__line * {
    color: #E1BEE7 !important;
    text-shadow: 0 0 5px rgba(179, 0, 255, 0.4);
}

.button, .button *,
.full-start__button, .full-start__button *,
.menu__item, .menu__item * {
    color: #FFFFFF !important;
}

/* ФОН */
html, body, .extensions {
    background: linear-gradient(135deg, #0d0221 0%, #220135 20%, #2d0944 40%, #4a0e4e 60%, #2d0944 80%, #0d0221 100%) !important;
    background-size: 400% 400%;
    animation: gradientShift 25s ease infinite;
}

/* ХАМЕЛЕОН */
@keyframes chameleonBorderRetro {
    0%, 100% { 
        border-image-source: linear-gradient(135deg, #f72585, #b300ff, #00ffff);
    }
    25% { 
        border-image-source: linear-gradient(135deg, #b300ff, #00ffff, #f72585);
    }
    50% { 
        border-image-source: linear-gradient(135deg, #00ffff, #f72585, #b300ff);
    }
    75% { 
        border-image-source: linear-gradient(135deg, #f72585, #00ffff, #b300ff);
    }
}

/* ВЕРХНИЕ КНОПКИ НАВИГАЦИИ */
body .head__action,
.head__action {
    background: rgba(179, 0, 255, 0.3) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(247, 37, 133, 0.5) !important;
    transition: all 0.3s ease !important;
}

body .head__action.focus,
body .head__action:hover,
.head__action.focus,
.head__action:hover {
    background: linear-gradient(45deg, #f72585, #b300ff, #00ffff) !important;
    border: 1px solid #00ffff !important;
    box-shadow: 0 0 15px rgba(247, 37, 133, 0.6) !important;
    transform: scale(1.1) !important;
}

/* GLASSMORPHISM */
body .navigation-bar .navigation-bar__body,
.navigation-bar__body {
    background: rgba(34, 1, 53, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-bottom: 3px solid transparent !important;
    border-image: linear-gradient(90deg, #f72585, #b300ff, #00ffff) 1 !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
}

body .modal .modal__content,
.modal__content,
body .settings .settings__content,
.settings__content {
    background: rgba(13, 2, 33, ${alpha}) !important;
    backdrop-filter: blur(25px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
    border: 3px solid transparent !important;
    border-image: linear-gradient(135deg, #f72585, #b300ff, #00ffff) 1 !important;
    box-shadow: 0 10px 40px rgba(247, 37, 133, 0.4) !important;
    border-radius: 1em !important;
}

/* ПАНЕЛИ В НАСТРОЙКАХ */
body .settings .settings-list,
.settings .settings-list,
body .settings-param,
.settings-param {
    background: rgba(34, 1, 53, 0.5) !important;
    border: 1px solid rgba(179, 0, 255, 0.4) !important;
}

body .player .player-panel,
.player-panel {
    background: rgba(34, 1, 53, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-top: 3px solid transparent !important;
    border-image: linear-gradient(90deg, #f72585, #b300ff, #00ffff) 1 !important;
}

/* КАРТОЧКИ - УБИРАЕМ СТАНДАРТНУЮ ОБВОДКУ */
.card__img,
body .card__img {
    border: 3px solid transparent !important;
    border-radius: 0.5em !important;
    transition: all 0.4s ease !important;
    box-shadow: none !important;
    outline: none !important;
}

/* ПРИМЕНЯЕМ ТОЛЬКО НАШУ ОБВОДКУ */
.card__img {
    border-image: linear-gradient(135deg, #f72585, #b300ff, #00ffff) 1 !important;
}

.card:hover .card__img,
.card.focus .card__img,
body .card:hover .card__img,
body .card.focus .card__img {
    border: 3px solid transparent !important;
    border-image: linear-gradient(135deg, #f72585, #b300ff, #00ffff, #f72585) 1 !important;
    animation: chameleonBorderRetro 4s linear infinite !important;
    box-shadow:
        0 0 ${glowSize} #f72585,
        0 0 calc(${glowSize} * 1.5) #b300ff,
        0 0 calc(${glowSize} * 2) #00ffff !important;
    transform: scale(1.06) !important;
    outline: none !important;
}

/* УБИРАЕМ ::after ЕСЛИ ОН СОЗДАЕТ ДУБЛИРОВАНИЕ */
.card.focus .card__view::after,
.card:hover .card__view::after,
body .card.focus .card__view::after,
body .card:hover .card__view::after {
    display: none !important;
}

/* КНОПКИ */
body .menu__item.focus,
body .menu__item:hover,
.menu__item.focus,
.menu__item:hover,
body .button.focus,
body .button:hover,
.button.focus,
.button:hover,
body .full-start__button.focus,
body .full-start__button:hover,
.full-start__button.focus,
.full-start__button:hover,
body .simple-button.focus,
body .simple-button:hover,
.simple-button.focus,
.simple-button:hover,
body .settings-param.focus,
body .settings-param:hover,
.settings-param.focus,
.settings-param:hover,
body .selectbox-item.focus,
body .selectbox-item:hover,
.selectbox-item.focus,
.selectbox-item:hover {
    background: linear-gradient(90deg, #f72585, #b300ff, #00ffff) !important;
    color: #FFFFFF !important;
    backdrop-filter: blur(10px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
    border-radius: 0.5em !important;
    box-shadow: 0 4px 20px rgba(247, 37, 133, 0.5) !important;
    border: 2px solid transparent !important;
    border-image: linear-gradient(135deg, #f72585, #b300ff) 1 !important;
    transform: scale(1.05);
}

.full-start__button {
    background: rgba(179, 0, 255, 0.3) !important;
    border: 2px solid #b300ff !important;
    color: #00FFFF !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    transition: all 0.3s ease !important;
}

.full-start__button.focus,
.full-start__button:hover {
    background: linear-gradient(90deg, #f72585, #b300ff, #00ffff) !important;
    color: #FFFFFF !important;
    transform: scale(1.05) !important;
}

/* МЕТКИ */
.card__quality,
.card__type::after {
    background: linear-gradient(135deg, #f72585, #b300ff, #00ffff) !important;
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
    font-weight: 800;
    color: #FFFFFF !important;
    text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
}

/* СКРОЛЛБАРЫ */
::-webkit-scrollbar-track {
    background: rgba(179, 0, 255, 0.2) !important;
    backdrop-filter: blur(10px) !important;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #f72585, #b300ff, #00ffff) !important;
    box-shadow: 0 0 10px #f72585 !important;
}

/* ПРОГРЕСС */
.player-panel__timeline-progress {
    background: linear-gradient(90deg, #f72585, #b300ff, #00ffff, #f72585) !important;
    background-size: 300% 100%;
    animation: progressShine 3s linear infinite;
}

.settings-param-title {
    color: #00FFFF !important;
    border-bottom: 1px solid rgba(247, 37, 133, 0.5) !important;
}

body .settings-folder.focus,
body .settings-folder:hover,
.settings-folder.focus,
.settings-folder:hover {
    background: linear-gradient(90deg, #f72585, #b300ff, #00ffff) !important;
    border-radius: 0.5em !important;
}
`,

        iceblue: `
/* ============================================
   ICE BLUE - Холодная голубая схема
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&display=swap');

/* ШРИФТЫ */
*, body, .card__title, .full-start__title, .menu__item-title, .settings__title, .button {
    font-family: 'Exo 2', sans-serif !important;
}

/* ЦВЕТА ТЕКСТА */
.card__title, .card__title * {
    color: #FFB3BA !important;
    text-shadow: 0 0 12px rgba(255, 179, 186, 0.7), 0 0 25px rgba(0, 212, 255, 0.3);
    font-weight: 600;
}

.full-start__title, .full-start__title *,
.menu__item-title, .menu__item-title *,
.settings__title, .settings__title * {
    color: #FFC7CE !important;
    text-shadow: 0 0 10px rgba(255, 199, 206, 0.6);
}

.card__description, .card__description *,
.full-start__description, .full-start__description *,
.info__line, .info__line * {
    color: #B3E5FC !important;
    text-shadow: 0 0 5px rgba(0, 212, 255, 0.3);
}

.button, .button *,
.full-start__button, .full-start__button *,
.menu__item, .menu__item * {
    color: #FFFFFF !important;
}

/* ФОН */
html, body, .extensions {
    background: linear-gradient(135deg, #001220 0%, #002840 30%, #004060 50%, #002840 70%, #001220 100%) !important;
    background-size: 400% 400%;
    animation: gradientShift 18s ease infinite;
}

/* ХАМЕЛЕОН */
@keyframes chameleonBorderIce {
    0%, 100% { 
        border-image-source: linear-gradient(90deg, #00d4ff, #00ffff, #4dd0e1);
    }
    33% { 
        border-image-source: linear-gradient(90deg, #00ffff, #4dd0e1, #00d4ff);
    }
    66% { 
        border-image-source: linear-gradient(90deg, #4dd0e1, #00d4ff, #00ffff);
    }
}

/* ВЕРХНИЕ КНОПКИ НАВИГАЦИИ */
body .head__action,
.head__action {
    background: rgba(0, 212, 255, 0.3) !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    border: 1px solid rgba(0, 212, 255, 0.5) !important;
    transition: all 0.3s ease !important;
}

body .head__action.focus,
body .head__action:hover,
.head__action.focus,
.head__action:hover {
    background: linear-gradient(45deg, #00d4ff, #00ffff) !important;
    border: 1px solid #00ffff !important;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.6) !important;
    transform: scale(1.1) !important;
}

/* GLASSMORPHISM */
body .navigation-bar .navigation-bar__body,
.navigation-bar__body {
    background: rgba(0, 28, 40, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-bottom: 2px solid #00d4ff !important;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3) !important;
}

body .modal .modal__content,
.modal__content,
body .settings .settings__content,
.settings__content {
    background: rgba(0, 18, 32, ${alpha}) !important;
    backdrop-filter: blur(25px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(25px) saturate(180%) !important;
    border: 2px solid #00d4ff !important;
    box-shadow: 0 8px 32px rgba(0, 255, 255, 0.3) !important;
    border-radius: 1em !important;
}

/* ПАНЕЛИ В НАСТРОЙКАХ */
body .settings .settings-list,
.settings .settings-list,
body .settings-param,
.settings-param {
    background: rgba(0, 28, 40, 0.5) !important;
    border: 1px solid rgba(0, 212, 255, 0.3) !important;
}

body .player .player-panel,
.player-panel {
    background: rgba(0, 28, 40, ${alpha}) !important;
    backdrop-filter: blur(20px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
    border-top: 2px solid #00d4ff !important;
}

/* КАРТОЧКИ - УБИРАЕМ СТАНДАРТНУЮ ОБВОДКУ */
.card__img,
body .card__img {
    border: 3px solid transparent !important;
    border-radius: 0.5em !important;
    transition: all 0.4s ease !important;
    box-shadow: none !important;
    outline: none !important;
}

/* ПРИМЕНЯЕМ ТОЛЬКО НАШУ ОБВОДКУ */
.card__img {
    border-image: linear-gradient(135deg, #00d4ff, #00ffff, #4dd0e1) 1 !important;
}

.card:hover .card__img,
.card.focus .card__img,
body .card:hover .card__img,
body .card.focus .card__img {
    border: 3px solid transparent !important;
    border-image: linear-gradient(135deg, #00d4ff, #00ffff, #4dd0e1, #00d4ff) 1 !important;
    animation: chameleonBorderIce 3s linear infinite !important;
    box-shadow:
        0 0 ${glowSize} #00d4ff,
        0 0 calc(${glowSize} * 1.5) rgba(0, 255, 255, 0.5),
        0 0 calc(${glowSize} * 2) rgba(77, 208, 225, 0.3) !important;
    transform: translateY(-3px) !important;
    outline: none !important;
}

/* УБИРАЕМ ::after ЕСЛИ ОН СОЗДАЕТ ДУБЛИРОВАНИЕ */
.card.focus .card__view::after,
.card:hover .card__view::after,
body .card.focus .card__view::after,
body .card:hover .card__view::after {
    display: none !important;
}

/* КНОПКИ */
body .menu__item.focus,
body .menu__item:hover,
.menu__item.focus,
.menu__item:hover,
body .button.focus,
body .button:hover,
.button.focus,
.button:hover,
body .full-start__button.focus,
body .full-start__button:hover,
.full-start__button.focus,
.full-start__button:hover,
body .simple-button.focus,
body .simple-button:hover,
.simple-button.focus,
.simple-button:hover,
body .settings-param.focus,
body .settings-param:hover,
.settings-param.focus,
.settings-param:hover,
body .selectbox-item.focus,
body .selectbox-item:hover,
.selectbox-item.focus,
.selectbox-item:hover {
    background: linear-gradient(90deg, #00d4ff, #00ffff) !important;
    color: #000000 !important;
    backdrop-filter: blur(10px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(10px) saturate(180%) !important;
    border-radius: 0.5em !important;
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5) !important;
    border: 2px solid #4dd0e1 !important;
    transform: translateX(5px);
    font-weight: 600;
}

.full-start__button {
    background: rgba(0, 212, 255, 0.3) !important;
    border: 2px solid #00d4ff !important;
    color: #FFB3BA !important;
    backdrop-filter: blur(10px) !important;
    -webkit-backdrop-filter: blur(10px) !important;
    transition: all 0.3s ease !important;
}

.full-start__button.focus,
.full-start__button:hover {
    background: linear-gradient(90deg, #00d4ff, #00ffff) !important;
    color: #000000 !important;
    transform: scale(1.05) !important;
}

/* МЕТКИ */
.card__quality,
.card__type::after {
    background: linear-gradient(135deg, #00d4ff, #00ffff) !important;
    font-weight: 700;
    color: #000000 !important;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

/* СКРОЛЛБАРЫ */
::-webkit-scrollbar-track {
    background: rgba(0, 212, 255, 0.2) !important;
    backdrop-filter: blur(10px) !important;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00d4ff, #00ffff) !important;
    box-shadow: 0 0 8px #00ffff !important;
}

/* ПРОГРЕСС */
.player-panel__timeline-progress {
    background: linear-gradient(90deg, #00d4ff, #00ffff, #4dd0e1, #00d4ff) !important;
    background-size: 300% 100%;
    animation: progressShine 2s linear infinite;
}

.settings-param-title {
    color: #FFB3BA !important;
    border-bottom: 1px solid rgba(0, 212, 255, 0.5) !important;
}

body .settings-folder.focus,
body .settings-folder:hover,
.settings-folder.focus,
.settings-folder:hover {
    background: linear-gradient(90deg, #00d4ff, #00ffff) !important;
    border-radius: 0.5em !important;
}
`
    };

    style.html(themes[theme] || '');
    $('head').append(style);

    applyAnimations();
    applyFullButtons();
}

// ===== АНИМАЦИИ =====
function applyAnimations() {
    var animations = Lampa.Storage.get('drxaos_animations', true);

    $('#drxaos_animations_style').remove();

    if (animations) {
        var animStyle = `
<style id="drxaos_animations_style">
.card, .menu__item, .button, .full-start__button, .head__action {
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

.card:hover, .card.focus {
    transform: scale(1.05) !important;
}

.menu__item.focus,
.menu__item:hover {
    transform: translateX(5px) !important;
}

.selectbox-item.focus,
.selectbox-item:hover,
.settings-folder.focus,
.settings-folder:hover,
.settings-param.focus,
.settings-param:hover {
    transform: translateX(10px) !important;
}

.head__action.focus,
.head__action:hover {
    transform: scale(1.1) !important;
}
</style>
`;
        $('head').append(animStyle);
    }
}

// ===== ПОЛНЫЕ НАЗВАНИЯ КНОПОК =====
function applyFullButtons() {
    var fullbuttons = Lampa.Storage.get('drxaos_fullbuttons', false);

    $('#drxaos_fullbuttons_style').remove();

    if (fullbuttons) {
        var buttonStyle = `
<style id="drxaos_fullbuttons_style">
.full-start__button span {
    display: inline !important;
    margin-left: 0.5em;
}

.full-start__button svg {
    width: 1.2em;
    height: 1.2em;
}

.full-start__buttons {
    flex-wrap: wrap;
    gap: 0.5em;
}

.full-start__button {
    padding: 0.5em 1em;
    min-width: auto;
}

@media screen and (max-width: 580px) {
    .full-start__buttons {
        justify-content: center;
    }

    .full-start__button {
        width: auto;
    }
}
</style>
`;
        $('head').append(buttonStyle);
    } else {
        var buttonStyle = `
<style id="drxaos_fullbuttons_style">
.full-start__button:not(.focus):not(:hover) span {
    display: none !important;
}

.full-start__button.focus span,
.full-start__button:hover span {
    display: inline !important;
    margin-left: 0.5em;
}
</style>
`;
        $('head').append(buttonStyle);
    }
}

// ===== НАСТРОЙКИ =====
function addSettings() {
    Lampa.SettingsApi.addComponent({
        component: 'drxaos_themes',
        name: Lampa.Lang.translate('drxaos_themes'),
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2"/></svg>'
    });

    Lampa.SettingsApi.addParam({
        component: 'drxaos_themes',
        param: {
            name: 'drxaos_theme',
            type: 'select',
            values: {
                'default': 'Стандартная',
                'cyberpunk': '🔮 Cyberpunk',
                'matrix': '💚 Matrix',
                'retrowave': '🌈 Retro Wave',
                'iceblue': '❄️ Ice Blue'
            },
            default: 'cyberpunk'
        },
        field: {
            name: Lampa.Lang.translate('drxaos_theme'),
            description: 'Выберите цветовую схему интерфейса'
        },
        onChange: applyTheme
    });

    Lampa.SettingsApi.addParam({
        component: 'drxaos_themes',
        param: {
            name: 'drxaos_glow',
            type: 'select',
            values: {
                'off': 'Выключено',
                'low': 'Слабое',
                'medium': 'Среднее',
                'high': 'Сильное'
            },
            default: 'medium'
        },
        field: {
            name: Lampa.Lang.translate('drxaos_glow'),
            description: 'Интенсивность свечения элементов'
        },
        onChange: function() {
            var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
            applyTheme(theme);
        }
    });

    Lampa.SettingsApi.addParam({
        component: 'drxaos_themes',
        param: {
            name: 'drxaos_transparency',
            type: 'select',
            values: {
                '60': '60%',
                '70': '70%',
                '80': '80%',
                '85': '85%',
                '90': '90%',
                '95': '95%'
            },
            default: '85'
        },
        field: {
            name: Lampa.Lang.translate('drxaos_transparency'),
            description: 'Прозрачность панелей (glassmorphism)'
        },
        onChange: function() {
            var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
            applyTheme(theme);
        }
    });

    Lampa.SettingsApi.addParam({
        component: 'drxaos_themes',
        param: {
            name: 'drxaos_fullbuttons',
            type: 'trigger',
            default: false
        },
        field: {
            name: Lampa.Lang.translate('drxaos_fullbuttons'),
            description: 'Показывать полные названия кнопок "Онлайн", "Торренты", "Избранное"'
        },
        onChange: applyFullButtons
    });

    Lampa.SettingsApi.addParam({
        component: 'drxaos_themes',
        param: {
            name: 'drxaos_animations',
            type: 'trigger',
            default: true
        },
        field: {
            name: Lampa.Lang.translate('drxaos_animations'),
            description: 'Плавные анимации при наведении'
        },
        onChange: applyAnimations
    });
}

// ===== ЗАПУСК =====
function startPlugin() {
    addSettings();

    var theme = Lampa.Storage.get('drxaos_theme', 'cyberpunk');
    applyTheme(theme);
}

if (window.appready) startPlugin();
else {
    Lampa.Listener.follow('app', function(e) {
        if (e.type == 'ready') startPlugin();
    });
}

})();