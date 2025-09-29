
    
    function animations() {
        var animations = localStorage.getItem('maxsm_themes_animations') === 'true';
        $('#maxsm_themes_animations').remove();
        if (animations) {
            var animations_style = "\n<style id=\"maxsm_themes_animations\">\n " +
                // Пробуем немного анимацмм
                ".card\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".card.focus\n{transform: scale(1.03);\n}\n" +
                ".torrent-item,\n.online-prestige\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".torrent-item.focus,\n.online-prestige.focus\n{transform: scale(1.01);\n}\n" +
                ".extensions__item,\n.extensions__block-add,\n.full-review-add,\n.full-review,\n.tag-count,\n.full-person,\n.full-episode,\n.simple-button,\n.full-start__button,\n.items-cards .selector,\n.card-more,\n.explorer-card__head-img.selector,\n.card-episode\n{transform: scale(1);\ntransition: transform 0.3s ease;\n}\n" +
                ".extensions__item.focus,\n.extensions__block-add.focus,\n.full-review-add.focus,\n.full-review.focus,\n.tag-count.focus,\n.full-person.focus,\n.full-episode.focus,\n.simple-button.focus,\n.full-start__button.focus,\n.items-cards .selector.focus,\n.card-more.focus,\n.explorer-card__head-img.selector.focus,\n.card-episode.focus\n{transform: scale(1.03);\n}\n" +
                ".menu__item {\n  transition: transform 0.3s ease;\n}\n" +
                ".menu__item.focus {\n transform: translateX(-0.2em);\n}\n" +
                ".selectbox-item,\n.settings-folder,\n.settings-param {\n transition: transform 0.3s ease;\n}\n" +
                ".selectbox-item.focus,\n.settings-folder.focus,\n.settings-param.focus {\n transform: translateX(0.2em);\n}\n" +
            "</style>\n";
            $('body').append(animations_style);
        }
    }
    
  