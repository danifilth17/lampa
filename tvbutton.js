 
(function () {
    'use strict';

    function log(message) {
        console.log.apply(console, ['lmpPlugs', '[TvColorKeys]: ' + message]);
    }

    log('colorTvKeys keys loading');

    Lampa.SettingsApi.addComponent({
        component: "tfilter_tweaks",
        name: "TvButtons",
        icon: '<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M36.78125 0C36.230469 0.0703125 35.835938 0.574219 35.90625 1.125C35.976563 1.675781 36.480469 2.070313 37.03125 2C37.03125 2 37.820313 1.960938 39.1875 2.40625C40.554688 2.851563 42.402344 3.757813 44.28125 5.6875C46.171875 7.625 47.105469 9.480469 47.5625 10.84375C48.019531 12.207031 48 13 48 13C47.996094 13.359375 48.183594 13.695313 48.496094 13.878906C48.808594 14.058594 49.191406 14.058594 49.503906 13.878906C49.816406 13.695313 50.003906 13.359375 50 13C50 13 49.980469 11.832031 49.4375 10.21875C48.894531 8.605469 47.828125 6.476563 45.71875 4.3125C43.597656 2.140625 41.445313 1.03125 39.8125 0.5C38.179688 -0.03125 36.96875 0 36.96875 0C36.9375 0 36.90625 0 36.875 0C36.84375 0 36.8125 0 36.78125 0 Z M 28.6875 6C27.625 6 26.554688 6.382813 25.71875 7.15625C25.707031 7.167969 25.699219 7.175781 25.6875 7.1875L1.1875 31.78125C-0.40625 33.375 -0.390625 36.011719 1.15625 37.6875C1.167969 37.699219 1.175781 37.707031 1.1875 37.71875L12.40625 48.90625C14 50.5 16.605469 50.484375 18.28125 48.9375C18.292969 48.925781 18.300781 48.917969 18.3125 48.90625L42.8125 24.40625C42.824219 24.386719 42.835938 24.363281 42.84375 24.34375C44.351563 22.585938 44.40625 20 42.8125 18.40625L31.59375 7.1875C30.796875 6.390625 29.75 6 28.6875 6 Z M 36.8125 6C36.261719 6.050781 35.855469 6.542969 35.90625 7.09375C35.957031 7.644531 36.449219 8.050781 37 8C37 8 37.3125 7.980469 37.9375 8.1875C38.5625 8.394531 39.398438 8.835938 40.28125 9.71875C41.164063 10.601563 41.605469 11.4375 41.8125 12.0625C42.019531 12.6875 42 13 42 13C41.996094 13.359375 42.183594 13.695313 42.496094 13.878906C42.808594 14.058594 43.191406 14.058594 43.503906 13.878906C43.816406 13.695313 44.003906 13.359375 44 13C44 13 43.980469 12.3125 43.6875 11.4375C43.394531 10.5625 42.835938 9.398438 41.71875 8.28125C40.601563 7.164063 39.4375 6.605469 38.5625 6.3125C37.6875 6.019531 37 6 37 6C36.96875 6 36.9375 6 36.90625 6C36.875 6 36.84375 6 36.8125 6 Z M 28.6875 8C29.25 8 29.785156 8.191406 30.1875 8.59375L41.40625 19.8125C42.214844 20.621094 42.238281 22.019531 41.34375 23.0625L16.90625 47.46875C15.980469 48.320313 14.621094 48.308594 13.8125 47.5L2.625 36.3125C2.613281 36.300781 2.605469 36.292969 2.59375 36.28125C1.769531 35.355469 1.796875 34.015625 2.59375 33.21875L27.09375 8.625C27.554688 8.199219 28.125 8 28.6875 8 Z M 28 14C23.59375 14 20 17.59375 20 22C20 26.40625 23.59375 30 28 30C32.40625 30 36 26.40625 36 22C36 17.59375 32.40625 14 28 14 Z M 28 16C31.324219 16 34 18.675781 34 22C34 25.324219 31.324219 28 28 28C24.675781 28 22 25.324219 22 22C22 18.675781 24.675781 16 28 16 Z M 28 20C26.894531 20 26 20.894531 26 22C26 23.105469 26.894531 24 28 24C29.105469 24 30 23.105469 30 22C30 20.894531 29.105469 20 28 20 Z M 15 27C13.894531 27 13 27.894531 13 29C13 30.105469 13.894531 31 15 31C16.105469 31 17 30.105469 17 29C17 27.894531 16.105469 27 15 27 Z M 10 32C8.894531 32 8 32.894531 8 34C8 35.105469 8.894531 36 10 36C11.105469 36 12 35.105469 12 34C12 32.894531 11.105469 32 10 32 Z M 21 33C19.894531 33 19 33.894531 19 35C19 36.105469 19.894531 37 21 37C22.105469 37 23 36.105469 23 35C23 33.894531 22.105469 33 21 33 Z M 16 38C14.894531 38 14 38.894531 14 40C14 41.105469 14.894531 42 16 42C17.105469 42 18 41.105469 18 40C18 38.894531 17.105469 38 16 38Z"/></svg>'
    });

    Lampa.Lang.add({
        apx_colorButton: {
          //
          ru: 'Цветные рамки',
          en: 'Color borders',
          uk: 'Кольорові рамки'
        },
        apx_colorButton_d: {
          //
          ru: 'Включить цветные контуры вокруг кнопок фильтров',
          en: 'Enable color borders around the buttons',
          uk: 'Увімкнути кольорові рамки навколо кнопок фільтрів'
        },
        apx_reBindRight: {
          //
          ru: 'Переназначить [вправо]',
          en: 'Rebind [right]',
          uk: "Прив'язати [вправо]"
        },
        apx_reBindRight_d: {
          //
          ru: "Привязать [вправо] для запуска действия длинного нажатия вместо фильтра",
          en: "Rebind 'right' to trigger longpress action instead of filter",
          uk: "Прив'язати [вправо] для запуску дії довгого натискання замість фільтра"
        },
        apx_customButton: {
          //
          ru: 'Настраиваемая кнопка',
          en: 'Custom button',
          uk: 'Кнопка, що налаштовується'
        },
        apx_customButton_d: {
          //
          ru: 'Поведение первой кнопки',
          en: 'Behaviour of first button',
          uk: 'Як поводиться перша кнопка'
        }
      });

    Lampa.SettingsApi.addParam({
        component: "tfilter_tweaks",
        param: {
            name: "apx_colorButton",
            type: "trigger",
            "default": false
        },
        field: {
            name: Lampa.Lang.translate('apx_colorButton'),
            description: Lampa.Lang.translate('apx_colorButton_d')
        },
        onChange: function onChange(value) {
            Lampa.Settings.update();
        }
    })
    Lampa.SettingsApi.addParam({
        component: "tfilter_tweaks",
        param: {
            name: "apx_reBindRight",
            type: "trigger",
            "default": false
        },
        field: {
            name: Lampa.Lang.translate('apx_reBindRight'),
            description: Lampa.Lang.translate('apx_reBindRight_d')
        },
        onChange: function onChange(value) {
            Lampa.Settings.update();
        }
    })
    Lampa.SettingsApi.addParam({
        component: "tfilter_tweaks",
        param: {
            name: "apx_customButton",
            type: "select",
            "default": "home",
            values: { home: "home", component: "component" }
        },
        field: {
            name: Lampa.Lang.translate('apx_customButton'),
            description: Lampa.Lang.translate('apx_customButton_d')
        },
        onChange: function onChange(value) {
            Lampa.Settings.update();

        },
    })

    var _html = `
<div>
    <div class="simple-button simple-button--filter selector filter--custom">
        {build}
        <div class="hide"></div>
    </div>
    <div class="simple-button simple-button--filter selector filter--search">
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9.9964" cy="9.63489" r="8.43556" stroke="currentColor" stroke-width="2.4"/>
            <path d="M20.7768 20.4334L18.2135 17.8701" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
        <div class="hide"></div>
    </div>
    <div class="simple-button simple-button--filter selector filter--sort">
        <span style="display: none;">#{filter_sorted}</span>
        <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>  <rect width="48" height="48" fill="none"></rect> </g><path d="M46,9c0-6.8-19.7-7-22-7S2,2.2,2,9V39c0,6.8,19.7,7,22,7s22-.2,22-7V9.3h0Zm-4,9.8C41,20,34.4,22,24,22S7,20,6,18.8V13.4C11.9,15.9,22.4,16,24,16s12.1-.1,18-2.6Zm0,10C41,30,34.4,32,24,32S7,30,6,28.8V23.4C11.9,25.9,22.4,26,24,26s12.1-.1,18-2.6ZM24,6c9.8,0,16.3,1.8,17.8,3-1.5,1.2-8,3-17.8,3S7.7,10.2,6.2,9C7.7,7.8,14.2,6,24,6Zm0,36C13.6,42,7,40,6,38.8V33.4C11.9,35.9,22.4,36,24,36s12.1-.1,18-2.6v5.4C41,40,34.4,42,24,42Z"></path></svg>
        <div class="hide"></div>
    </div>
    <div class="simple-button simple-button--filter selector filter--filter">
        <span style="display: none;">#{filter_filtred}</span>
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.73224 5.32873C1.58574 4.03892 2.50136 2 4.22706 2H19.7734C21.4991 2 22.4147 4.03893 21.2682 5.32873L15.0002 12.3802V21C15.0002 21.3466 14.8208 21.6684 14.5259 21.8507C14.2311 22.0329 13.863 22.0494 13.553 21.8944L9.553 19.8944C9.21421 19.725 9.00021 19.3788 9.00021 19V12.3802L2.73224 5.32873ZM19.7734 4H4.22706L10.7476 11.3356C10.9103 11.5187 11.0002 11.7551 11.0002 12V18.382L13.0002 19.382V12C13.0002 11.7551 13.0901 11.5187 13.2528 11.3356L19.7734 4Z"></path></svg>
        <div class="hide"></div>
    </div>
</div>`

    var _html_home = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
	<path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
</svg>
<div class>Home</div>`

    var _html_component = `
<svg fill="currentColor" width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
	<path 					d="M29.81,16H29V8.83a2,2,0,0,0-2-2H21A5.14,5.14,0,0,0,16.51,2,5,5,0,0,0,11,6.83H4a2,2,0,0,0-2,2V17H4.81A3.13,3.13,0,0,1,8,19.69,3,3,0,0,1,7.22,22,3,3,0,0,1,5,23H2v8.83a2,2,0,0,0,2,2H27a2,2,0,0,0,2-2V26h1a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,29.81,16Zm2.41,7A3,3,0,0,1,30,24H27v7.83H4V25H5a5,5,0,0,0,5-5.51A5.15,5.15,0,0,0,4.81,15H4V8.83h9V7a3,3,0,0,1,1-2.22A3,3,0,0,1,16.31,4,3.13,3.13,0,0,1,19,7.19V8.83h8V18h2.81A3.13,3.13,0,0,1,33,20.69,3,3,0,0,1,32.22,23Z" class="clr-i-outline clr-i-outline-path-1"></path>
	<rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>
<div class>component</div>`

    var cssRules = `
.torrent-filter {
	display: -webkit-box;
	display: -webkit-flex;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 2em;
}
.simple-button {
	display: flex !important;
	flex: 1 1 0px;
	border-style: solid;
	border-width: thin;
	font-size: 1.2em;
	-webkit-border-radius: 0.7em;
	-moz-border-radius: 0.7em;
	border-radius: 0.7em;
}
.explorer__files .torrent-filter .simple-button {
	border-radius: 0.7em;
	font-size: 0.9em;
}
.torrent-filter .hide {
	pointer-events: none;
	cursor: none;
	background-color: unset;
}
.torrent-filter .hide>* {
	display: none;
}
.filter--back {
	display: none !important;
}
`

    var cssRulesColor = `
.torrent-filter .simple-button--filter:nth-last-child(4) {border-color: red;}
.torrent-filter .simple-button--filter:nth-last-child(3) {border-color: green;}
.torrent-filter .simple-button--filter:nth-last-child(2) {border-color: yellow;}
.torrent-filter .simple-button--filter:nth-last-child(1) {border-color: blue;}
`

    var html = _html.replace(new RegExp('{build}', 'g'), (Lampa.Storage.get('apx_customButton', {}) == 'component') ? _html_component : _html_home);

    if (Lampa.Storage.get('apx_colorButton', {}) == true) {
        cssRules = cssRules + cssRulesColor;
        var myStyle = document.createElement("style");
        myStyle.type = 'text/css';
        myStyle.textContent = cssRules;
        document.head.appendChild(myStyle);
    }

    var COLOR_CODES = ['ColorF0Red', 'ColorF1Green', 'ColorF2Yellow', 'ColorF3Blue'];

    Lampa.Template.add('filter', html);

    log('Templates patched');

    Navigator.navigableFilter = function f(el) { return el.classList.contains('hide') ? false : true };

    log('Navigator patched');

    var plugTvKeys = {
        _listenTvKeys: function (e) {
            if (Lampa.Controller.enabled().name !== 'content') return;
            var keyIndex = COLOR_CODES.indexOf(e.key);
            if (keyIndex === -1) return;
            var tfilter = document.querySelector('.torrent-filter');
            if (document.querySelector('.torrent-filter') == null) return;
            var targetButton = tfilter.children[tfilter.children.length - (4 - keyIndex)];
            Lampa.Utils.trigger(targetButton, 'hover:enter');
        },

        _reBindRight: function (e) {
            if (e.name === 'content') {
                Lampa.Controller.enabled().controller.right = function () {
                    Navigator.canmove('right') ? Navigator.move('right') : Lampa.Controller.long();
				}
			}
		},

		_customButton_comp: function(e) {
			var tfilter = document.querySelector('.activity--active');
            tfilter = tfilter ? tfilter.querySelector('.torrent-filter') : null;
            if (tfilter != null) {
                tfilter.children[tfilter.children.length - 4].on('hover:enter', this._plugMenu);
                tfilter.children[tfilter.children.length - 4].children[1].textContent = Lampa.Activity.active().component;
            }
        },

 		_customButton_home: function(e) {
			var tfilter = document.querySelector('.activity--active');
            tfilter = tfilter ? tfilter.querySelector('.torrent-filter') : null;
            if (tfilter != null) tfilter.children[tfilter.children.length - 4].on('hover:enter', function(){
                var active = Lampa.Storage.get('activity', 'false');
                var start_from = Lampa.Storage.field("start_page");
                var _start_from$split = start_from.split('@'),
                _start_from$split2 = _slicedToArray(_start_from$split, 2),
                action = _start_from$split2[0],
                type = _start_from$split2[1];
                if (action == 'favorite') {
                    Lampa.Activity.push({
                    url: '',
                    title: Lampa.Lang.translate(type == 'bookmarks' ? 'settings_input_links' : 'title_history'),
                    component: type == 'bookmarks' ? 'bookmarks' : 'favorite',
                    type: type,
                    page: 1
                    });
                } else if (action == 'mytorrents') {
                    Lampa.Activity.push({
                    url: '',
                    title: Lampa.Lang.translate('title_mytorrents'),
                    component: 'mytorrents',
                    page: 1
                    });
                } else {
                    Lampa.Activity.push({
                    url: '',
                    title: Lampa.Lang.translate('title_main') + ' - ' + Lampa.Storage.field('source').toUpperCase(),
                    component: 'main',
                    source: Lampa.Storage.field('source'),
                    page: 1
                    });
                }
            })
        },

        _plugMenu: function () {
            var _this = this;
            var data = Lampa.Activity.active().movie;
            var enabled = Lampa.Controller.enabled().name;
            var menu_plugins = [];
            Lampa.Manifest.plugins.forEach(function (plugin) {
                if (plugin.type == 'video' && plugin.onContextMenu && plugin.onContextLauch) {
                    menu_plugins.push({
                        title: plugin.name,
                        subtitle: plugin.subtitle || plugin.description,
                        onSelect: function onSelect() {
							Lampa.Activity.backward()
                            plugin.onContextLauch(data);
                        }
                    });
                }
            });
            var year = ((data.first_air_date || data.release_date || '0000') + '').slice(0, 4);
            var combinations = {
                'df': data.original_title,
                'df_year': data.original_title + ' ' + year,
                'df_lg': data.original_title + ' ' + data.title,
                'df_lg_year': data.original_title + ' ' + data.title + ' ' + year,
                'lg': data.title,
                'lg_year': data.title + ' ' + year,
                'lg_df': data.title + ' ' + data.original_title,
                'lg_df_year': data.title + ' ' + data.original_title + ' ' + year
            };
            if (window.lampa_settings.torrents_use) {
                menu_plugins.push({
                    title: Lampa.Lang.translate('title_torrents'),
                    onSelect: function() {
                        Lampa.Activity.backward()
                        Lampa.Activity.push({
                            url: '',
                            title: Lampa.Lang.translate('title_torrents'),
                            component: 'torrents',
                            search: combinations[Lampa.Storage.field('parse_lang')],
                            search_one: data.title,
                            search_two: data.original_title,
                            movie: data,
                            page: 1
                        })}

                });
            }
            if (this.onMenuShow) this.onMenuShow(menu_plugins, this.card, data);
            Lampa.Select.show({
                title: Lampa.Lang.translate('settings_main_plugins'),
                items: menu_plugins,
                onBack: function onBack() {
                    Lampa.Controller.toggle(enabled);
                },
                onSelect: function onSelect(a) {
                    if (params.object) data.source = params.object.source;
                    if (_this.onMenuSelect) _this.onMenuSelect(a, _this.card, data);
                    Lampa.Controller.toggle(enabled);
                }
            });
        },

        start: function () {
            if (Lampa.Storage.get('apx_colorButton', {}) == true) document.addEventListener('keyup', this._listenTvKeys);
			Lampa.Listener.follow('activity', Lampa.Storage.get('apx_customButton', {}) == 'component'?this._customButton_comp.bind(this):this._customButton_home);
            if (Lampa.Storage.get('apx_reBindRight', {}) == true) Lampa.Controller.listener.follow('toggle', this._reBindRight.bind(this));
        }
    }

    plugTvKeys.start();
    //Lampa.Keypad.listener.follow('keyup', function(e){Lampa.Noty.show('[key: ' + e.event.key + '] [keyCode: ' + e.event.keyCode + '] [code: ' + e.event.code + ']');console.log(e)})
    log('Listeners started');
})();