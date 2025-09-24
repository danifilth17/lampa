(function () {
  'use strict';

  function translate() {
      Lampa.Lang.add({
          bat_parser: {
              ru: 'Каталог парсерів',
              en: 'Parsers catalog',
              uk: 'Каталог парсерів',
              zh: '解析器目录'
          },
          bat_parser_description: {
              ru: 'Натисніть для вибору парсера з ',
              en: 'Click to select a parser from the ',
              uk: 'Натисніть для вибору парсера з ',
              zh: '单击以从可用的 '
          },
      });
  }
  var Lang = {
      translate: translate
  };

  var parsersInfo = [{
      base: 'batmen_my_to_9199',
      name: 'BAT jackett',
      settings: {
          url: 'batmen.my.to:9199',
          key: '9',
          parser_torrent_type: 'jackett'
      }
  }, {
      base: '12_307407_xyz',
      name: 'SPAWN',
      settings: {
          url: '12.307407.xyz',
          key: '12307407',
          parser_torrent_type: 'jackett'
      }
  },{
      base: 'redapi_cfhttp_top',
      name: 'RedApi',
      settings: {
          url: 'redapi.cfhttp.top',
          key: '',
          parser_torrent_type: 'jackett'
      }
  }, {
      base: 'jacred_viewbox_dev',
      name: 'Jacred viewbox',
      settings: {
          url: 'jacred.viewbox.dev',
          key: 'viewbox',
          parser_torrent_type: 'jackett'
      }
  }, {
      base: 'jacred_pro',
      name: 'Jacred pro',
      settings: {
          url: 'jacred.pro',
          key: '',
          parser_torrent_type: 'jackett'
      }
  }];

  var proto = location.protocol === "https:" ? 'https://' : 'http://';
  var cache = {};
  var checkInterval; // Змінна для зберігання ID інтервалу

function checkAlive(type) {
  if (type === 'parser') {
    var requests = parsersInfo.map(function (parser) {
      var protocol = parser.base === "bat_jackett" || parser.base === "bat_prowlarr" ? "" : proto;
      var endPoint = parser.settings.parser_torrent_type === 'prowlarr' ? 
          '/api/v1/health?apikey=' + parser.settings.key : 
          "/api/v2.0/indexers/status:healthy/results?apikey=".concat(
              parser.settings.url === 'batmen.my.to:9199' 
                  ? '9' 
                  : parser.settings.url === '12.307407.xyz'
                      ? '12307407'
                      : parser.base === 'bat_jackett' 
                          ? parser.settings.key 
                          : ''
          );
              var myLink = protocol + parser.settings.url + endPoint;

              var mySelector = $('div.selectbox-item__title').filter(function () {
                  return $(this).text().trim() === parser.name;
              });

              if (cache[myLink] && cache[myLink].timestamp > Date.now() - 30000) { // Кеш дійсний 30 секунд
                  console.log('Using cached response for', myLink, cache[myLink]);
                  var color = cache[myLink].color;
                  $(mySelector).css('color', color);
                  return Promise.resolve();
              }

              return new Promise(function (resolve) {
                  $.ajax({
                      url: myLink,
                      method: 'GET',
                      timeout: 5000, // Тайм-аут 5 секунд
                      success: function success(response, textStatus, xhr) {
                          var color;
                          if (xhr.status === 200) {
                              color = '1aff00';
                          } else if (xhr.status === 401) {
                              color = 'ff2e36';
                          } else {
                              color = 'ff2e36';
                          }
                          $(mySelector).css('color', color);

                          if (color) {
                              cache[myLink] = {
                                  color: color,
                                  timestamp: Date.now()
                              };
                          }
                      },
                      error: function error() {
                          $(mySelector).css('color', 'ff2e36');
                      },
                      complete: function complete() {
                          return resolve();
                      }
                  });
              });
          });
          return Promise.all(requests).then(function () {
              console.log('All requests completed');
          });
      }
  }

  // Функція для запуску періодичної перевірки
  function startPeriodicCheck() {
      // Початкова перевірка
      checkAlive("parser");
      
      // Запускаємо періодичну перевірку кожні 30 секунд
      checkInterval = setInterval(function() {
          checkAlive("parser");
      }, 30000); // 30000 мс = 30 секунд
  }

  // Зупинка періодичної перевірки
  function stopPeriodicCheck() {
      if (checkInterval) {
          clearInterval(checkInterval);
      }
  }

  Lampa.Controller.listener.follow('toggle', function (e) {
      if (e.name === 'select') {
          checkAlive("parser");
      }
  });

  function changeParser() {
      var jackettUrlTwo = Lampa.Storage.get("bat_url_two");
      var selectedParser = parsersInfo.find(function (parser) {
          return parser.base === jackettUrlTwo;
      });
      if (selectedParser) {
          var settings = selectedParser.settings;
          Lampa.Storage.set(settings.parser_torrent_type === 'prowlarr' ? "prowlarr_url" : "jackett_url", settings.url);
          Lampa.Storage.set(settings.parser_torrent_type === 'prowlarr' ? "prowlarr_key" : "jackett_key", settings.key);
          Lampa.Storage.set("parser_torrent_type", settings.parser_torrent_type);
      } else {
          console.warn("Jackett URL not found in parsersInfo");
      }
  }

  var s_values = parsersInfo.reduce(function (prev, _ref) {
      var base = _ref.base,
          name = _ref.name;
      prev[base] = name;
      return prev;
  }, {
      no_parser: 'Вибрати парсер'
  });

  function parserSetting() {
      Lampa.SettingsApi.addParam({
          component: 'parser',
          param: {
              name: 'bat_url_two',
              type: 'select',
              values: s_values,
              "default": 'no_parser'
          },
          field: {
              name: "<div class=\"settings-folder\" style=\"padding:0!important\"><div style=\"font-size:1.0em\">".concat(Lampa.Lang.translate('bat_parser'), "</div></div>"),
              description: "".concat(Lampa.Lang.translate('bat_parser_description'), " ").concat(parsersInfo.length)
          },
          onChange: function onChange(value) {
              changeParser();
              Lampa.Settings.update();
          },
          onRender: function onRender(item) {
              $('.settings-param__value p.parserName').remove();
              changeParser();
              setTimeout(function () {
                  $('div[data-children="parser"]').on('hover:enter', function () {
                      Lampa.Settings.update();
                  });
                  if (Lampa.Storage.field('parser_use')) {
                      item.show();
                      $('.settings-param__name', item).css('color', 'f3d900');
                      $('div[data-name="bat_url_two"]').insertAfter('div[data-children="parser"]');
                  } else {
                      item.hide();
                  }
              });
          }
      });
  }

  var Parser = {
      parserSetting: parserSetting
  };

  Lampa.Platform.tv();
  
  function add() {
      Lang.translate();
      Parser.parserSetting();
      startPeriodicCheck(); // Запускаємо періодичну перевірку при ініціалізації
  }

  function startPlugin() {
      window.plugin_batpublictorr_ready = true;
      if (window.appready) add();
      else {
          Lampa.Listener.follow('app', function (e) {
              if (e.type === 'ready') add();
          });
      }
  }

  if (!window.plugin_batpublictorr_ready) startPlugin();

  // Очищення при закритті плагіна (опціонально)
  window.addEventListener('unload', function() {
      stopPeriodicCheck();
  });

})();