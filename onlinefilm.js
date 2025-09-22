(function() {
    'use strict';

    var fxapi_token = Lampa.Storage.get('fxapi_token', '');
    var unic_id = Lampa.Storage.get('fxapi_uid', '');
    if (!unic_id) {
        unic_id = Lampa.Utils.uid(16);
        Lampa.Storage.set('fxapi_uid', unic_id);
    }

    var api_url = 'http://filmixapp.cyou/api/v2/';
    var dev_token = 'user_dev_apk=2.0.1&user_dev_id=' + unic_id + '&user_dev_name=Lampa&user_dev_os=11&user_dev_vendor=FXAPI&user_dev_token=';
    var modalopen = false;
    var ping_auth;

    // Вспомогательная переменная для проверки существования
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
            var url = api_url + 'search';
            url = Lampa.Utils.addUrlComponent(url, 'story=' + encodeURIComponent(query));
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
                    filter_items.season
