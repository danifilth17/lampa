(function () {
	'use strict';
	function cacheRequest(search, movie, isTv, success, fail) {
		var context = this;
		var url = 'https://itunes.apple.com/search' +
			'?term=' + encodeURIComponent(search).replace(/%20/g, '+') +
			'&media=' + (isTv ? 'tvShow' : 'movie') +
			'&lang=' + Lampa.Storage.field('language') /*+
			'&limit=200'*/
		;
		var id = (isTv ? 'tv' : '') + (movie.id || (Lampa.Utils.hash(search)*1).toString(36));
		var key = 'itunes_trailer_' + id;
		var data = sessionStorage.getItem(key);
		if (data) {
			data = JSON.parse(data);
			if (data[0]) typeof success === 'function' && success.apply(context, [data[1]]);
			else typeof fail === 'function' && fail.apply(context, [data[1]]);
		} else {
			var network = new Lampa.Reguest();
			network.native(
				url,
				function (data) {
					var results = [];
					if (!!data && !!data.results && !!data.results[0]) {
						var year = (movie.release_date || movie.first_air_date || '')
							.replace(/\D+/g, '')
							.substring(0,4)
							.replace(/^([03-9]\d|1[0-8]|2[1-9]|20[3-9])\d+$/, '')
						;
						results = data.results.filter(function(r){
							var yearOk = !year || !r.releaseDate || r.releaseDate.substring(0,4) === year;
							var durationOk = isTv || !r.trackTimeMillis || !movie.runtime || (Math.abs(movie.runtime * 6e4 - r.trackTimeMillis) < 2e5); // если меньше 200 секунд
							var isFirstEpisode = !isTv || !r.discNumber || !r.trackNumber || true || (r.discNumber === 1 && r.trackNumber === 1);
							return !!r.previewUrl && yearOk && durationOk && isFirstEpisode;
						});
					}
					if (results.length) {
						sessionStorage.setItem(key, JSON.stringify([true, results, search]));
						typeof success === 'function' && success.apply(context, [results]);
					} else {
						sessionStorage.setItem(key, JSON.stringify([false, {}, search]));
						typeof fail === 'function' && fail.apply(context, [{}]);
					}
					network.clear();
					network = null;
				},
				function (data) {
					sessionStorage.setItem(key, JSON.stringify([false, data, search]));
					typeof fail === 'function' && fail.apply(context, [data]);
					network.clear();
					network = null;
				}
			);
		}
	}
	function loadTrailers(event, success) {
		if (!event.object || !event.object.source || !event.data || !event.data.movie) return;
		var movie = event.data.movie;
		var isTv = !!event.object && !!event.object.method && event.object.method === 'tv';
		var title = movie.original_title || movie.original_name || movie.title || movie.name || '';
		if (title === '' || !/[a-z]{3}/i.test(title)) return;
		var search = title;
		var searchOk = function (data) {
			if (!!data[0]) {
				var res = data[0];
				var video = {
					title: Lampa.Lang.translate('apple_trailer_' + (isTv ? 'preview' : 'trailer')) + ': ' +
						(res.trackCensoredName || res.trackName || title) +
						' [' + Lampa.Lang.translate('apple_trailer_itunes') + ']',
					url: res.previewUrl,
					iptv: true
				}
				success(video);
			}
		};
		cacheRequest(search, movie, isTv, searchOk);
	}

	Lampa.Lang.add({
		apple_trailer_trailer: {
			be: 'Трэйлер',
			bg: 'Трейлър',
			cs: 'Trailer',
			en: 'Trailer',
			he: 'טריילר',
			pt: 'Trailer',
			ru: 'Трейлер',
			uk: 'Трейлер',
			zh: '预告片'
		},
		apple_trailer_preview: {
			be: 'Перадпрагляд',
			bg: 'Преглед',
			cs: 'Náhled',
			en: 'Preview',
			he: 'תצוגה מקדימה',
			pt: 'Pré-visualização',
			ru: 'Превью',
			uk: 'Попередній перегляд',
			zh: '预览'
		},
		apple_trailer_itunes: {
			be: 'Даступна на iTunes',
			bg: 'Наличен в iTunes',
			cs: 'Dostupné na iTunes',
			en: 'Available on iTunes',
			he: 'זמין ב-iTunes',
			pt: 'Disponível no iTunes',
			ru: 'Доступно на iTunes',
			uk: 'Доступно на iTunes',
			zh: '在 iTunes 上可用'
		}
	});

	function startPlugin() {
		window.apple_trailer_plugin = true;
		var button = '<div class="full-start__button selector view--apple_trailer hide" data-subtitle="#{apple_trailer_itunes}">' +
			'<svg xmlns="http://www.w3.org/2000/svg" height="70" viewBox="0 0 136.46001 162.0049">' +
				'<path fill="currentColor" d="M133.6 126.251c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65C1.74 106.671 0 96.881 0 87.403c0-10.857 2.346-20.221 7.045-28.068C10.738 53.032 15.651 48.06 21.8 44.41c6.149-3.65 12.793-5.51 19.948-5.629 3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM102.34 3.241c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-.119-.972-.188-1.995-.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597C93.69 1.4584 98.06.2132 102.17 0c.12 1.0831.17 2.1663.17 3.2409z"/>' +
			'</svg>' +
			'<span>#{apple_trailer_trailer}</span>' +
		'</div>';
		var youtubeOff = !!document.currentScript && !!document.currentScript.src && /\?youtubeOff/i.test(document.currentScript.src);
		Lampa.Listener.follow('full', function (event) {
			if (event.type === 'complite') {
				var render = event.object.activity.render();
				var trailerBtn = render.find('.view--trailer');
				var btn = $(Lampa.Lang.translate(button));
				if (trailerBtn.length) {
					trailerBtn.before(btn);
					trailerBtn.toggleClass('hide', youtubeOff);
				} else {
					render.find('.full-start__button:last').after(btn);
				}
				loadTrailers(event, function(video){
					btn.on('hover:enter', function () {
						Lampa.Player.play(video);
					}).removeClass('hide');
				});
			}
		});
	}
	if (!window.apple_trailer_plugin) startPlugin();
})();
