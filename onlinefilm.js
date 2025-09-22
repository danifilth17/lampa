(function() {
    'use strict';

    var fxapi_token = Lampa.Storage.get('fxapi_token', '');
    var unic_id = Lampa.Storage.get('fxapi_uid', '');
    if (!unic_id) {
        unic_id = Lampa.Utils.uid(16);
        Lampa.Storage.set('fxapi_uid', unic_id);
    }

    var api_url = 'http://filmixapp.vip/api/v2/';
    var dev_token = 'user_dev_apk=2.0.1&user_dev_id=' + unic_id + '&user_dev_name=Lampa&user_dev_os=11&user_dev_vendor=FXAPI&user_dev_token=';
    var modalopen = false;
    var ping_auth;

    window.fxapi = window.fxapi || {};
    window.fxapi.max_qualitie = window.fxapi.max_qualitie || 1080;

    function fxapi(component, _object) {
        var network = new Lampa.Reguest();
        var extract = {};
        var results = [];
        var object = _object;
        var wait_similars;
        var filter_items = {};
        var choice = {
            season: 0,
            voice: 0,
            voice_name: ''
        };

        if (!fxapi_token) {
            var user_code = '';
            var user_token = '';
            modalopen = true;

            var modal = $('<div><div class="broadcast__text">' + Lampa.Lang.translate('modal_text') + '</div><div class="broadcast__device selector" style="text-align: center; background-color: darkslategrey; color: white;">' + Lampa.Lang.translate('modal_wait') + '...</div><br><div class="broadcast__scan"><div></div></div></div></div>');
            Lampa.Modal.open({
                title: '',
                html: modal,
                onBack: function onBack() {
                    Lampa.Modal.close();
                    clearInterval(ping_auth);
                },
                onSelect: function onSelect() {
                    Lampa.Utils.copyTextToClipboard(user_code, function() {
                        Lampa.Noty.show(Lampa.Lang.translate('copy_secuses'));
                    }, function() {
                        Lampa.Noty.show(Lampa.Lang.translate('copy_fail'));
                    });
                }
            });
            ping_auth = setInterval(function() {
                network.clear();
                network.timeout(8000);
                network.silent(Lampa.Utils.addUrlComponent(api_url + 'user_profile', dev_token + user_token), function(json) {
                    if (json && json.user_data) {
                        Lampa.Modal.close();
                        clearInterval(ping_auth);
                        Lampa.Storage.set("fxapi_token", user_token);
                        window.location.reload();
                    }
                }, function(a, c) {});
            }, 4000);
            network.clear();
            network.timeout(8000);
            network.quiet(Lampa.Utils.addUrlComponent(api_url + 'token_request', dev_token), function(found) {
                if (found.status == 'ok') {
                    user_token = found.code;
                    user_code = found.user_code;
                    modal.find('.selector').text(user_code);
                } else {
                    Lampa.Noty.show(found);
                }
            }, function(a, c) {
                Lampa.Noty.show(network.errorDecode(a, c));
            });

            component.loading(false);
            return;
        }

        this.search = function(_object, sim) {
            if (wait_similars) this.find(sim[0].id);
        };

        function normalizeString(str) {
            return str.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
        }

        this.searchByTitle = function(_object, query) {
            var _this = this;

            object = _object;
            var year = parseInt((object.movie.release_date || object.movie.first_air_date || '0000').slice(0, 4));
            var orig = object.movie.original_name || object.movie.original_title;
            var url = Lampa.Utils.addUrlComponent(api_url + 'search', 'story=' + encodeURIComponent(query));
            url = Lampa.Utils.addUrlComponent(url, dev_token + fxapi_token);
            network.clear();
            network.silent(url, function(json) {
                var cards = json.filter(function(c) {
                    c.year = parseInt(c.alt_name.split('-').pop());
                    return c.year > year - 2 && c.year < year + 2;
                });
                var card = cards.find(function(c) {
                    return c.year == year && normalizeString(c.original_title) == normalizeString(orig);
                });

                if (!card && cards.length == 1) card = cards[0];
                if (card) _this.find(card.id);
                else if (json.length) {
                    wait_similars = true;
                    component.similars(json);
                    component.loading(false);
                } else component.doesNotAnswer();
            }, function(a, c) {
                component.doesNotAnswer();
            });
        };

        this.find = function(filmix_id) {
            var url = api_url;

            end_search(filmix_id);

            function end_search(filmix_id) {
                network.clear();
                network.timeout(10000);
                network.silent(url + 'post/' + filmix_id + '?' + dev_token + fxapi_token, function(found) {
                    if (found && Object.keys(found).length) {
                        success(found);
                        component.loading(false);
                    } else component.doesNotAnswer();
                }, function(a, c) {
                    component.doesNotAnswer();
                });
            }
        };

        this.extendChoice = function(saved) {
            Lampa.Arrays.extend(choice, saved, true);
        };

        this.reset = function() {
            component.reset();
            choice = {
                season: 0,
                voice: 0,
                voice_name: ''
            };
            extractData(results);
            filter();
            append(filtred());
        };

        this.filter = function(type, a, b) {
            choice[a.stype] = b.index;
            if (a.stype == 'voice') choice.voice_name = filter_items.voice[b.index];
            component.reset();
            extractData(results);
            filter();
            append(filtred());
        };

        this.destroy = function() {
            network.clear();
            results = null;
        };

        function success(json) {
            results = json;
            extractData(json);
            filter();
            append(filtred());
        }

        function extractData(data) {
            extract = {};
            var pl_links = data.player_links;

            if (pl_links.playlist && Object.keys(pl_links.playlist).length > 0) {
                var seas_num = 0;

                for (var season in pl_links.playlist) {
                    var episode = pl_links.playlist[season];
                    ++seas_num;
                    var transl_id = 0;

                    for (var voice in episode) {
                        var episode_voice = episode[voice];
                        ++transl_id;
                        var items = [];

                        for (var ID in episode_voice) {
                            var file_episod = episode_voice[ID];
                            var quality_eps = file_episod.qualities.filter(function(qualitys) {
                                return qualitys <= window.fxapi.max_qualitie;
                            });
                            var max_quality = Math.max.apply(null, quality_eps);
                            var stream_url = file_episod.link.replace('%s.mp4', max_quality + '.mp4');
                            var s_e = stream_url.slice(0 - stream_url.length + stream_url.lastIndexOf('/'));
                            var str_s_e = s_e.match(/s(\d+)e(\d+?)_\d+\.mp4/i);

                            if (str_s_e) {
                                var _seas_num = parseInt(str_s_e[1]);
                                var _epis_num = parseInt(str_s_e[2]);

                                items.push({
                                    id: _seas_num + '_' + _epis_num,
                                    comment: _epis_num + ' ' + Lampa.Lang.translate('torrent_serial_episode') + ' <i>' + ID + '</i>',
                                    file: stream_url,
                                    episode: _epis_num,
                                    season: _seas_num,
                                    quality: max_quality,
                                    qualities: quality_eps,
                                    translation: transl_id,
                                    voice_name: voice
                                });
                            }
                        }

                        if (!extract[transl_id]) extract[transl_id] = {
                            json: [],
                            file: ''
                        };
                        extract[transl_id].json.push({
                            id: seas_num,
                            comment: seas_num + ' ' + Lampa.Lang.translate('torrent_serial_season'),
                            folder: items,
                            translation: transl_id
                        });
                    }
                }
            } else if (pl_links.movie && pl_links.movie.length > 0) {
                var _transl_id = 0;

                for (var _ID in pl_links.movie) {
                    var _file_episod = pl_links.movie[_ID];
                    ++_transl_id;

                    var _quality_eps = [];
                    var matches = _file_episod.link.match(/\[(.+?)\]/);
                    if (matches && matches[1]) {
                        _quality_eps = matches[1].split(',').filter(function(quality_) {
                            return parseInt(quality_) <= window.fxapi.max_qualitie;
                        }).map(function(q) { return parseInt(q); });
                    }

                    var _max_quality = _quality_eps.length > 0 ? Math.max.apply(null, _quality_eps) : 0;
                    var file_url = _file_episod.link.replace(/\[(.+?)\]/, _max_quality);

                    extract[_transl_id] = {
                        file: file_url,
                        translation: _file_episod.translation,
                        quality: _max_quality,
                        qualities: _quality_eps
                    };
                }
            }
        }

        function getFile(element, max_quality) {
            var translat = extract[element.translation];
            var id = element.season + '_' + element.episode;
            var file = '';
            var quality = false;

            if (translat) {
                if (element.season)
                    for (var i in translat.json) {
                        var elem = translat.json[i];
                        if (elem.folder)
                            for (var f in elem.folder) {
                                var folder = elem.folder[f];

                                if (folder.id == id) {
                                    file = folder.file;
                                    break;
                                }
                            } else {
                            if (elem.id == id) {
                                file = elem.file;
                                break;
                            }
                        }
                    } else file = translat.file;
            }

            max_quality = parseInt(max_quality);

            if (file) {
                var link = file.slice(0, file.lastIndexOf('_')) + '_';
                var orin = file.split('?');
                orin = orin.length > 1 ? '?' + orin.slice(1).join('?') : '';

                if (file.split('_').pop().replace('.mp4', '') !== max_quality) {
                    file = link + max_quality + '.mp4' + orin;
                }

                quality = {};
                var mass = [2160, 1440, 1080, 720, 480, 360];
                mass = mass.slice(mass.indexOf(max_quality));
                mass.forEach(function(n) {
                    quality[n + 'p'] = link + n + '.mp4' + orin;
                });
                var preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
                if (quality[preferably]) file = quality[preferably];
            }

            return {
                file: file,
                quality: quality
            };
        }

        function filter() {
            filter_items = {
                season: [],
                voice: [],
                voice_info: []
            };

            if (results.last_episode && results.last_episode.season) {
                var s = results.last_episode.season;

                while (s--) {
                    filter_items.season.push(Lampa.Lang.translate('torrent_serial_season') + ' ' + (results.last_episode.season - s));
                }
            }

            for (var Id in results.player_links.playlist) {
                var season = results.player_links.playlist[Id];
                var d = 0;

                for (var voic in season) {
                    ++d;

                    if (filter_items.voice.indexOf(voic) == -1) {
                        filter_items.voice.push(voic);
                        filter_items.voice_info.push({
                            id: d
                        });
                    }
                }
            }

            if (choice.voice_name) {
                var inx = filter_items.voice.indexOf(choice.voice_name);
                if (inx == -1) {
                    choice.voice = 0;
                    choice.voice_name = filter_items.voice[0];
                } else if (inx !== choice.voice) {
                    choice.voice = inx;
                }
            }

            component.filter(filter_items, choice);
        }

        function filtred() {
            var filtred = [];

            if (Object.keys(results.player_links.playlist).length) {
                for (var transl in extract) {
                    var element = extract[transl];

                    for (var season_id in element.json) {
                        var episode = element.json[season_id];

                        if (episode.id == choice.season + 1) {
                            episode.folder.forEach(function(media) {
                                if (media.translation == filter_items.voice_info[choice.voice].id) {
                                    filtred.push({
                                        episode: parseInt(media.episode),
                                        season: media.season,
                                        title: Lampa.Lang.translate('torrent_serial_episode') + ' ' + media.episode + (media.title ? ' - ' + media.title : ''),
                                        quality: media.quality + 'p ',
                                        translation: media.translation,
                                        voice_name: filter_items.voice[choice.voice],
                                        info: filter_items.voice[choice.voice]
                                    });
                                }
                            });
                        }
                    }
                }
            } else if (Object.keys(results.player_links.movie).length) {
                for (var transl_id in extract) {
                    var _element = extract[transl_id];
                    filtred.push({
                        title: _element.translation,
                        quality: _element.quality + 'p ',
                        qualitys: _element.qualities,
                        translation: transl_id,
                        voice_name: _element.translation
                    });
                }
            }

            return filtred;
        }

        function toPlayElement(element) {
            var extra = getFile(element, element.quality);
            var play = {
                title: element.title,
                url: extra.file,
                quality: extra.quality,
                timeline: element.timeline,
                callback: element.mark
            };
            return play;
        }

        function append(items) {
            component.reset();
            component.draw(items, {
                similars: wait_similars,
                onEnter: function onEnter(item, html) {
                    var extra = getFile(item, item.quality);

                    if (extra.file) {
                        var playlist = [];
                        var first = toPlayElement(item);

                        if (item.season) {
                            items.forEach(function(elem) {
                                playlist.push(toPlayElement(elem));
                            });
                        } else {
                            playlist.push(first);
                        }

                        if (playlist.length > 1) first.playlist = playlist;
                        Lampa.Player.play(first);
                        Lampa.Player.playlist(playlist);
                        item.mark();
                    } else Lampa.Noty.show(Lampa.Lang.translate('online_nolink'));
                },
                onContextMenu: function onContextMenu(item, html, data, call) {
                    call(getFile(item, item.quality));
                }
            });
        }
    }

    function component(object) {
        var network = new Lampa.Reguest();
        var scroll = new Lampa.Scroll({
            mask: true,
            over: true
        });
        var files = new Lampa.Explorer(object);
        var filter = new Lampa.Filter(object);
        var sources = {
            fxapi: fxapi
        };
        var last;
        var extended;
        var selected_id;
        var source;
        var balanser = 'fxapi';
        var initialized;
        var balanser_timer;
        var images = [];
        var filter_translate = {
            season: Lampa.Lang.translate('torrent_serial_season'),
            voice: Lampa.Lang.translate('torrent_parser_voice'),
            source: Lampa.Lang.translate('settings_rest_source')
        };

        this.initialize = function() {
            var _this = this;

            source = this.createSource();

            filter.onSearch = function(value) {
                Lampa.Activity.replace({
                    search: value,
                    clarification: true
                });
            };

            filter.onBack = function() {
                _this.start();
            };

            filter.render().find('.selector').on('hover:enter', function() {
                clearInterval(balanser_timer);
            });

            filter.onSelect = function(type, a, b) {
                if (type == 'filter') {
                    if (a.reset) {
                        if (extended) source.reset();
                        else _this.start();
                    } else {
                        source.filter(type, a, b);
                    }
                } else if (type == 'sort') {
                    Lampa.Select.close();
                }
            };

            if (filter.addButtonBack) filter.addButtonBack();
            filter.render().find('.filter--sort').remove();
            files.appendFiles(scroll.render());
            files.appendHead(filter.render());
            scroll.body().addClass('torrent-list');
            scroll.minus(files.render().find('.explorer__files-head'));
            this.search();
        };

        this.createSource = function() {
            return new sources[balanser](this, object);
        };

        this.create = function() {
            return this.render();
        };

        this.search = function() {
            this.activity.loader(true);
            this.find();
        };

        this.find = function() {
            if (source.searchByTitle) {
                this.extendChoice();
                source.searchByTitle(object, object.search || object.movie.original_title || object.movie.original_name || object.movie.title || object.movie.name);
            }
        };

        this.getChoice = function(for_balanser) {
            var data = Lampa.Storage.cache('online_choice_' + (for_balanser || balanser), 3000, {});
            var save = data[selected_id || object.movie.id] || {};
            Lampa.Arrays.extend(save, {
                season: 0,
                voice: 0,
                voice_name: '',
                voice_id: 0,
                episodes_view: {},
                movie_view: ''
            });
            return save;
        };

        this.extendChoice = function() {
            extended = true;
            source.extendChoice(this.getChoice());
        };

        this.saveChoice = function(choice, for_balanser) {
            var data = Lampa.Storage.cache('online_choice_' + (for_balanser || balanser), 3000, {});
            data[selected_id || object.movie.id] = choice;
            Lampa.Storage.set('online_choice_' + (for_balanser || balanser), data);
        };

        this.similars = function(json) {
            var _this3 = this;

            json.forEach(function(elem) {
                var info = [];
                var year = ((elem.start_date || elem.year || '') + '').slice(0, 4);
                if (elem.rating && elem.rating !== 'null' && elem.filmId) info.push(Lampa.Template.get('online_prestige_rate', {
                    rate: elem.rating
                }, true));
                if (year) info.push(year);

                if (elem.countries && elem.countries.length) {
                    info.push((elem.filmId ? elem.countries.map(function(c) {
                        return c.country;
                    }) : elem.countries).join(', '));
                }

                if (elem.categories && elem.categories.length) {
                    info.push(elem.categories.slice(0, 4).join(', '));
                }

                var name = elem.title || elem.ru_title || elem.en_title || elem.nameRu || elem.nameEn;
                var orig = elem.orig_title || elem.nameEn || '';
                elem.title = name + (orig && orig !== name ? ' / ' + orig : '');
                elem.time = elem.filmLength || '';
                elem.info = info.join('<span class="online-prestige-split">●</span>');
                var item = Lampa.Template.get('online_prestige_folder', elem);
                item.on('hover:enter', function() {
                    _this3.activity.loader(true);

                    _this3.reset();

                    object.search_date = year;
                    selected_id = elem.id;

                    _this3.extendChoice();

                    if (source.search) {
                        source.search(object, [elem]);
                    } else {
                        _this3.doesNotAnswer();
                    }
                }).on('hover:focus', function(e) {
                    last = e.target;
                    scroll.update($(e.target), true);
                });
                scroll.append(item);
            });
        };

        this.clearImages = function() {
            images.forEach(function(img) {
                img.onerror = function() {};
                img.onload = function() {};
                img.src = '';
            });
            images = [];
        };

        this.reset = function() {
            last = false;
            clearInterval(balanser_timer);
            network.clear();
            this.clearImages();
            scroll.render().find('.empty').remove();
            scroll.clear();
        };

        this.loading = function(status) {
            if (status) this.activity.loader(true);
            else {
                this.activity.loader(false);
                this.activity.toggle();
            }
        };

        this.filter = function(filter_items, choice) {
            var _this4 = this;

            var select = [];

            var add = function add(type, title) {
                var need = _this4.getChoice();
                var items = filter_items[type];
                var subitems = [];
                var value = need[type];
                items.forEach(function(name, i) {
                    subitems.push({
                        title: name,
                        selected: value == i,
                        index: i
                    });
                });
                select.push({
                    title: title,
                    subtitle: items[value],
                    items: subitems,
                    stype: type
                });
            };

            select.push({
                title: Lampa.Lang.translate('torrent_parser_reset'),
                reset: true
            });
            this.saveChoice(choice);
            if (filter_items.voice && filter_items.voice.length) add('voice', Lampa.Lang.translate('torrent_parser_voice'));
            if (filter_items.season && filter_items.season.length) add('season', Lampa.Lang.translate('torrent_serial_season'));
            filter.set('filter', select);
            this.selected(filter_items);
        };

        this.closeFilter = function() {
            if ($('body').hasClass('selectbox--open')) Lampa.Select.close();
        };

        this.selected = function(filter_items) {
            var need = this.getChoice(),
                select = [];

            for (var i in need) {
                if (filter_items[i] && filter_items[i].length) {
                    if (i == 'voice') {
                        select.push(filter_translate[i] + ': ' + filter_items[i][need[i]]);
                    } else if (i !== 'source') {
                        if (filter_items.season.length >= 1) {
                            select.push(filter_translate.season + ': ' + filter_items[i][need[i]]);
                        }
                    }
                }
            }

            filter.chosen('filter', select);
            filter.chosen('sort', [balanser]);
        };

        this.getEpisodes = function(season, call) {
            var episodes = [];

            if (typeof object.movie.id == 'number' && object.movie.name) {
                var tmdburl = 'tv/' + object.movie.id + '/season/' + season + '?api_key=' + Lampa.TMDB.key() + '&language=' + Lampa.Storage.get('language', 'ru');
                var baseurl = Lampa.TMDB.api(tmdburl);
                network.timeout(1000 * 10);
                network["native"](baseurl, function(data) {
                    episodes = data.episodes || [];
                    call(episodes);
                }, function(a, c) {
                    call(episodes);
                });
            } else call(episodes);
        };

        this.append = function(item) {
            item.on('hover:focus', function(e) {
                last = e.target;
                scroll.update($(e.target), true);
            });
            scroll.append(item);
        };

        this.watched = function(set) {
            var file_id = Lampa.Utils.hash(object.movie.number_of_seasons ? object.movie.original_name : object.movie.original_title);
            var watched = Lampa.Storage.cache('online_
