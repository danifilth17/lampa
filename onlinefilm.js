(function(){
    'use strict';
    
    // Вспомогательные утилиты из первого кода
    function decodeSecret(input, password) {
        var result = '';
        password = password || Lampa.Storage.get('online_mod_secret_password', '') + '';
        if (input && password) {
            var hash = Lampa.Utils.hash(password);
            while (hash.length < input.length) {
                hash += hash;
            }
            var i = 0;
            while (i < input.length) {
                result += String.fromCharCode(input[i] ^ hash.charCodeAt(i));
                i++;
            }
        }
        return result;
    }

    function endsWith(str, searchString) {
        var start = str.length - searchString.length;
        if (start < 0) return false;
        return str.indexOf(searchString, start) === start;
    }

    function checkDebug() {
        var res = false;
        var origin = window.location.origin || '';
        decodeSecret([85, 77, 93, 87, 89, 71, 87, 30, 86, 89, 88, 88, 88, 81, 12, 70, 66, 80, 68, 89, 80, 24, 67, 68, 13, 92, 88, 90, 68, 88, 69, 92, 82, 24, 83, 90]).split(';').forEach(function(s) {
            res |= endsWith(origin, s);
        });
        return !res;
    }
    
    function isDebug() {
        return decodeSecret([83, 81, 83, 67, 83]) === 'debug' && checkDebug();
    }

    var myIp = '';
    function getMyIp() {
        return myIp;
    }

    function proxy(name) {
        var ip = getMyIp() || '';
        var param_ip = Lampa.Storage.field('online_mod_proxy_find_ip') === true ? 'ip' + ip + '/' : '';
        var proxy1 = new Date().getHours() % 2 ? 'https://cors.nb557.workers.dev:8443/' : 'https://cors.fx666.workers.dev:8443/';
        var proxy2 = (window.location.protocol === 'https:' ? 'https://' : 'http://') + 'iqslgbok.deploy.cx/';
        var proxy3 = 'https://cors557.deno.dev/';
        var proxy_apn = '';
        var proxy_secret = '';
        var proxy_secret_ip = '';

        if (isDebug()) {
            proxy_apn = (window.location.protocol === 'https:' ? 'https://' : 'http://') + decodeSecret([64, 90, 72, 90, 92, 91, 87, 87, 23, 83, 81, 65, 90, 91, 78, 24, 83, 65, 24]);
            proxy_secret = decodeSecret([95, 64, 69, 70, 71, 13, 25, 31, 88, 71, 90, 28, 91, 86, 2, 3, 6, 23, 92, 91, 72, 83, 86, 25, 87, 64, 73, 24]);
            proxy_secret_ip = proxy_secret + (param_ip || 'ip/');
        }

        var proxy_other = Lampa.Storage.field('online_mod_proxy_other') === true;
        var proxy_other_url = proxy_other ? Lampa.Storage.field('online_mod_proxy_other_url') + '' : '';
        var user_proxy1 = (proxy_other_url || proxy1) + param_ip;
        var user_proxy2 = (proxy_other_url || proxy2) + param_ip;
        var user_proxy3 = (proxy_other_url || proxy3) + param_ip;
        if (name === 'filmix_site') return proxy_secret_ip || user_proxy1;
        if (name === 'filmix_abuse') return window.location.protocol === 'https:' ? 'https://cors.apn.monster/' : 'http://cors.cfhttp.top/';
        if (name === 'zetflix') return proxy_apn;
        if (name === 'allohacdn') return proxy_other ? proxy_secret : proxy_apn;
        if (name === 'cookie') return user_proxy1;
        if (name === 'cookie2') return user_proxy2;
        if (name === 'cookie3') return user_proxy3;
        if (name === 'ip') return proxy2;
        
        if (Lampa.Storage.field('online_mod_proxy_' + name) === true) {
            if (name === 'iframe') return user_proxy2;
            if (name === 'lumex') return proxy_other ? proxy_secret : proxy_apn;
            if (name === 'rezka') return user_proxy2;
            if (name === 'rezka2') return user_proxy2;
            if (name === 'kinobase') return proxy_apn;
            if (name === 'collaps') return proxy_other ? proxy_secret : proxy_apn;
            if (name === 'cdnmovies') return proxy_other ? proxy_secret : proxy_apn;
            if (name === 'filmix') return proxy_secret_ip || user_proxy1;
            if (name === 'videodb') return user_proxy2;
            if (name === 'fancdn') return user_proxy3;
            if (name === 'fancdn2') return proxy_secret || user_proxy3;
            if (name === 'fanserials') return user_proxy2;
            if (name === 'videoseed') return user_proxy1;
            if (name === 'vibix') return user_proxy2;
            if (name === 'redheadsound') return user_proxy2;
            if (name === 'anilibria') return user_proxy2;
            if (name === 'anilibria2') return user_proxy2;
            if (name === 'animelib') return proxy_secret;
            if (name === 'kodik') return user_proxy2;
            if (name === 'kinopub') return user_proxy2;
        }

        return '';
    }

    function filmixUserAgent() {
        return 'okhttp/3.10.0';
    }

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
        
        var headers = {
            'User-Agent': filmixUserAgent()
        };

        if (!fxapi_token) {
            // Логика авторизации, остаётся без изменений
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
            network.silent(proxy('filmix_abuse') + url, function(json) {
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
            }, false, {headers: headers});
        };
    
        this.find = function(filmix_id) {
            end_search(filmix_id);
    
            function end_search(filmix_id) {
                network.clear();
                network.timeout(10000);
                network.silent(proxy('filmix_abuse') + api_url + 'post/' + filmix_id + '?' + dev_token + fxapi_token, function(found) {
                    if (found && Object.keys(found).length) {
                        success(found);
                        component.loading(false);
                    } else component.doesNotAnswer();
                }, function(a, c) {
                    component.doesNotAnswer();
                }, false, {headers: headers});
            }
        };
    
        // ... (остальной код остается без изменений, за исключением функции getFile)
    
        function getFile(element, max_quality) {
            var translat = extract[element.translation];
            var file = '';
            var quality = false;
    
            if (translat) {
                if (element.season) {
                    for (var i in translat.json) {
                        var elem = translat.json[i];
                        if (elem.folder) {
                            for (var f in elem.folder) {
                                var folder = elem.folder[f];
                                if (folder.episode == element.episode) {
                                    file = folder.file;
                                    break;
                                }
                            }
                        } else {
                            if (elem.episode == element.episode) {
                                file = elem.file;
                                break;
                            }
                        }
                    }
                } else {
                    file = translat.file;
                }
            }
    
            max_quality = parseInt(max_quality);
    
            if (file) {
                quality = {};
                var qualities = translat.qualities || [];
                var link_base = file.split('?')[0].slice(0, file.split('?')[0].lastIndexOf('_') + 1);
                var params = file.split('?').length > 1 ? '?' + file.split('?').slice(1).join('?') : '';
                
                qualities.forEach(function(n) {
                    quality[n + 'p'] = link_base + n + '.mp4' + params;
                });
                
                var preferably = Lampa.Storage.get('video_quality_default', '1080') + 'p';
                file = quality[preferably] || quality[max_quality + 'p'];
            }
    
            return {
                file: file,
                quality: quality
            };
        }
    
        // ... (остальной код, включая filter, filtred, append, toPlayElement)
    }

    // ... (остальной код компонента)
    
})();
