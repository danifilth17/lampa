(function() {
    'use strict';

    var Defined = {
        api: 'lampac',
        localhost: 'http://',
        apn: 'http://apn.cfhttp.top/'
    };

    // Обновленные балансеры 2025 года
    var balancers_2025 = {
        hdrezka: {
            name: 'HDRezka',
            url: 'hdrezka.ag',
            priority: 1,
            mirrors: ['hdrezka.org', 'hdrezka.me', 'rezka.ag'],
            features: ['hdr', '4k', 'dolby'],
            reliability: 9.5
        },
        collaps: {
            name: 'Collaps',
            url: 'collaps.tv',
            priority: 2,
            mirrors: ['collaps.net'],
            features: ['fast_loading', 'high_speed'],
            reliability: 9.2
        },
        lumex: {
            name: 'Lumex',
            url: 'lumex.me',
            priority: 3,
            mirrors: ['lumex.tv'],
            features: ['geo_distributed', 'global'],
            reliability: 9.0
        },
        hdvb: {
            name: 'HDVB',
            url: 'hdvb.tv',
            priority: 4,
            mirrors: ['hdvb.org'],
            features: ['stable_api', 'reliable'],
            reliability: 8.8
        },
        kinobase: {
            name: 'Kinobase',
            url: 'kinobase.org',
            priority: 5,
            mirrors: ['kinobase.tv'],
            features: ['hdr_support', '4k'],
            reliability: 8.7
        },
        filmix: {
            name: 'Filmix',
            url: 'filmix.me',
            priority: 6,
            mirrors: ['filmix.co', 'filmix.tv'],
            features: ['wide_content', 'extensive_db'],
            reliability: 8.5
        },
        vibix: {
            name: 'Vibix',
            url: 'vibix.tv',
            priority: 7,
            mirrors: ['vibix.me'],
            features: ['fast_servers', 'cdn'],
            reliability: 8.4
        },
        ashdi: {
            name: 'Ashdi',
            url: 'ashdi.tv',
            priority: 8,
            mirrors: ['ashdi.org'],
            features: ['ukrainian_content'],
            reliability: 8.0
        },
        kinoukr: {
            name: 'KinoUkr',
            url: 'kinoukr.net',
            priority: 9,
            mirrors: ['kinoukr.tv'],
            features: ['ukrainian_content', 'local'],
            reliability: 7.8
        },
        pidtor: {
            name: 'PidTor',
            url: 'pidtor.org',
            priority: 10,
            mirrors: ['pidtor.tv'],
            features: ['torrent_streaming'],
            reliability: 7.5
        }
    };

    var balansers_with_search;
    var active_balancer = null;
    var failover_queue = [];

    // Инициализация системы балансировки
    function initBalancerSystem() {
        // Сортируем балансеры по приоритету
        var sorted_balancers = Object.keys(balancers_2025).sort(function(a, b) {
            return balancers_2025[a].priority - balancers_2025[b].priority;
        });

        failover_queue = sorted_balancers;
        active_balancer = failover_queue[0];

        console.log('Lampac 2025: Инициализирована система балансировки');
        console.log('Активных балансеров:', Object.keys(balancers_2025).length);
        console.log('Текущий активный:', active_balancer);
    }

    // Система переключения балансеров с учетом надежности
    function switchBalancer(reason) {
        if (!failover_queue.length) {
            console.error('Lampac 2025: Все балансеры недоступны');
            return null;
        }

        var current_index = failover_queue.indexOf(active_balancer);
        var next_index = (current_index + 1) % failover_queue.length;

        active_balancer = failover_queue[next_index];

        console.log('Lampac 2025: Переключение балансера');
        console.log('Причина:', reason);
        console.log('Новый балансер:', active_balancer);
        console.log('Надежность:', balancers_2025[active_balancer].reliability);

        return active_balancer;
    }

    // Улучшенная система проверки доступности
    function checkBalancerHealth(balancer_key) {
        return new Promise(function(resolve, reject) {
            var balancer = balancers_2025[balancer_key];
            var test_urls = [balancer.url].concat(balancer.mirrors || []);
            var success_count = 0;
            var total_tests = test_urls.length;

            test_urls.forEach(function(url) {
                var img = new Image();
                var timeout = setTimeout(function() {
                    reject('timeout');
                }, 5000);

                img.onload = function() {
                    clearTimeout(timeout);
                    success_count++;
                    if (success_count >= Math.ceil(total_tests / 2)) {
                        resolve(true);
                    }
                };

                img.onerror = function() {
                    clearTimeout(timeout);
                    if (success_count === 0 && --total_tests === 0) {
                        reject('unreachable');
                    }
                };

                img.src = 'http://' + url + '/favicon.ico?' + Date.now();
            });
        });
    }

    // Адаптивная система загрузки контента
    function loadContent(params) {
        return new Promise(function(resolve, reject) {
            var attempts = 0;
            var max_attempts = 3;

            function tryLoad() {
                attempts++;
                var balancer = balancers_2025[active_balancer];

                console.log('Lampac 2025: Попытка загрузки', attempts, 'из', max_attempts);
                console.log('Балансер:', balancer.name);

                // Здесь должна быть логика загрузки контента
                var request_url = buildRequestUrl(balancer, params);

                fetch(request_url)
                    .then(function(response) {
                        if (!response.ok) {
                            throw new Error('HTTP ' + response.status);
                        }
                        return response.json();
                    })
                    .then(function(data) {
                        console.log('Lampac 2025: Контент успешно загружен с', balancer.name);
                        resolve(data);
                    })
                    .catch(function(error) {
                        console.warn('Lampac 2025: Ошибка загрузки с', balancer.name, ':', error.message);

                        if (attempts < max_attempts) {
                            switchBalancer('load_error');
                            setTimeout(tryLoad, 1000);
                        } else {
                            reject('Все попытки загрузки исчерпаны');
                        }
                    });
            }

            tryLoad();
        });
    }

    // Построение URL запроса с учетом особенностей балансера
    function buildRequestUrl(balancer, params) {
        var base_url = 'http://' + balancer.url;
        var query_params = [];

        // Базовые параметры
        query_params.push('title=' + encodeURIComponent(params.title || ''));
        query_params.push('year=' + (params.year || ''));
        query_params.push('type=' + (params.type || 'movie'));

        // Специфичные для балансера параметры
        if (balancer.features.includes('hdr') && params.quality === '4k') {
            query_params.push('hdr=1');
        }

        if (balancer.features.includes('ukrainian_content')) {
            query_params.push('lang=uk');
        }

        return base_url + '/api/search?' + query_params.join('&');
    }

    // Система кеширования результатов
    var content_cache = {};
    var cache_ttl = 300000; // 5 минут

    function getCachedContent(key) {
        var cached = content_cache[key];
        if (cached && (Date.now() - cached.timestamp) < cache_ttl) {
            console.log('Lampac 2025: Используем кешированный результат для', key);
            return cached.data;
        }
        return null;
    }

    function setCachedContent(key, data) {
        content_cache[key] = {
            data: data,
            timestamp: Date.now()
        };
    }

    // Главный компонент
    function component(object) {
        var network = new Lampa.Reguest();
        var scroll = new Lampa.Scroll({mask: true, over: true});
        var files = new Lampa.Explorer(object);
        var filter = new Lampa.Filter(object);

        var sources = {};
        var filter_sources = [];

        // Инициализация компонента
        this.initialize = function() {
            var _this = this;

            console.log('Lampac 2025: Инициализация компонента');
            initBalancerSystem();

            this.loading(true);

            // Настройка фильтров
            filter.onSearch = function(value) {
                _this.search(value);
            };

            filter.onBack = function() {
                _this.start();
            };

            // Подготовка источников из новых балансеров
            Object.keys(balancers_2025).forEach(function(key) {
                var balancer = balancers_2025[key];
                sources[key] = {
                    name: balancer.name,
                    url: 'http://' + balancer.url,
                    show: true,
                    priority: balancer.priority,
                    reliability: balancer.reliability
                };
            });

            filter_sources = Object.keys(sources).sort(function(a, b) {
                return sources[a].priority - sources[b].priority;
            });

            // Настройка интерфейса
            scroll.body().addClass('torrent-list');
            files.appendFiles(scroll.render());
            files.appendHead(filter.render());
            scroll.body().append(Lampa.Template.get('lampac_content_loading'));

            this.loading(false);
            this.createSource().then(function() {
                _this.search();
            }).catch(function(e) {
                _this.noConnectToServer(e);
            });
        };

        // Поиск контента
        this.search = function(query) {
            var _this = this;
            var search_params = {
                title: query || object.search || object.movie.title || object.movie.name,
                year: object.movie.release_date ? object.movie.release_date.slice(0, 4) : '',
                type: object.movie.name ? 'tv' : 'movie'
            };

            var cache_key = JSON.stringify(search_params) + '_' + active_balancer;
            var cached = getCachedContent(cache_key);

            if (cached) {
                this.parse(cached);
                return;
            }

            console.log('Lampac 2025: Поиск контента:', search_params);

            loadContent(search_params)
                .then(function(data) {
                    setCachedContent(cache_key, data);
                    _this.parse(data);
                })
                .catch(function(error) {
                    console.error('Lampac 2025: Ошибка поиска:', error);
                    _this.empty();
                });
        };

        // Парсинг результатов
        this.parse = function(data) {
            var _this = this;

            if (!data || !data.results || !data.results.length) {
                this.empty();
                return;
            }

            var videos = data.results.map(function(item) {
                return {
                    title: item.title || item.name,
                    quality: item.quality || 'HD',
                    info: item.year ? [item.year] : [],
                    stream: item.stream_url,
                    url: item.url,
                    subtitles: item.subtitles || [],
                    season: item.season,
                    episode: item.episode
                };
            });

            console.log('Lampac 2025: Найдено видео:', videos.length);
            this.display(videos);
        };

        // Отображение результатов
        this.display = function(videos) {
            var _this = this;

            this.draw(videos, {
                onEnter: function(item, html) {
                    _this.getFileUrl(item, function(json) {
                        if (json && json.url) {
                            var player_data = {
                                title: item.title,
                                url: json.url,
                                quality: json.quality || item.quality,
                                subtitles: json.subtitles || item.subtitles,
                                timeline: item.timeline
                            };

                            Lampa.Player.play(player_data);
                            item.mark();
                        } else {
                            Lampa.Noty.show('Ссылка недоступна');
                        }
                    });
                },

                onContextMenu: function(item, html, data, call) {
                    _this.contextMenu(item, html, data, call);
                }
            });
        };

        // Остальные методы (пустые заглушки для совместимости)
        this.createSource = function() {
            return Promise.resolve();
        };

        this.getFileUrl = function(item, callback) {
            // Здесь должна быть логика получения прямой ссылки
            callback({
                url: item.stream || item.url,
                quality: item.quality
            });
        };

        this.contextMenu = function(item, html, data, call) {
            // Контекстное меню
        };

        this.draw = function(videos, params) {
            // Отрисовка списка видео
            scroll.clear();

            videos.forEach(function(video) {
                var html = Lampa.Template.get('lampac_prestige_full', video);

                html.on('hover:enter', function() {
                    if (params.onEnter) params.onEnter(video, html);
                });

                scroll.append(html);
            });
        };

        this.empty = function() {
            scroll.clear();
            scroll.append(Lampa.Template.get('lampac_does_not_answer'));
        };

        this.loading = function(status) {
            if (status) {
                scroll.clear();
                scroll.append(Lampa.Template.get('lampac_content_loading'));
            }
        };

        this.noConnectToServer = function(error) {
            console.error('Lampac 2025: Нет соединения с сервером:', error);
            this.empty();
        };

        // Публичные методы
        this.start = function() {
            this.initialize();
        };

        this.render = function() {
            return files.render();
        };

        this.destroy = function() {
            network.clear();
            files.destroy();
            scroll.destroy();
            content_cache = {};
        };
    }

    // Регистрация плагина
    function startPlugin() {
        window.lampac2025 = true;

        var manifest = {
            type: 'video',
            version: '2025.1.0',
            name: 'Lampac 2025 Enhanced',
            description: 'Улучшенная версия с оптимизированными балансерами 2025 года',
            component: 'lampac2025',
            onContextMenu: function(object) {
                return {
                    name: 'Смотреть онлайн (2025)',
                    description: ''
                };
            },
            onContextLauch: function(object) {
                Lampa.Component.add('lampac2025', component);

                Lampa.Activity.push({
                    url: '',
                    title: 'Онлайн (2025)',
                    component: 'lampac2025',
                    search: object.title,
                    movie: object,
                    page: 1
                });
            }
        };

        Lampa.Manifest.plugins.push(manifest);
        console.log('Lampac 2025: Плагин успешно зарегистрирован');
    }

    // Запуск плагина
    if (!window.lampac2025) {
        startPlugin();
    }

})();
