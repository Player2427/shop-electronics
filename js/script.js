$(document).ready(function() {
    // header
    $('.bottom-header__item').on('click', function() {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').addClass('hidden');
            $('.bottom-header__item_home').addClass('active').removeClass('hidden');
            $('.bottom-header').css('z-index','1');
        } else {
            $('.bottom-header__item.active').removeClass('active').addClass('hidden');
            $(this).addClass('active').removeClass('hidden');
            $('.bottom-header').css('z-index','2');
        }

    });
    $('.bottom-header__item_notice').on('click', function() {
        $('.bottom-header__item_notice').removeClass('bottom-header__item_notice');
    });
    $('.bh-popup-close').on('click', function() {
        $(this).parents('.bottom-header__item').removeClass('active').addClass('hidden');
        $('.bottom-header__item_home').addClass('active').removeClass('hidden');
        $('.bottom-header').css('z-index','1');
    });

    // slider
    $(".slider").slick({
        dots: true,
        dotsClass: 'my-slick-dots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      });

    var star = '<div class="main-card__reviews-star"><img src="img/main/star.svg" alt=""></div>';
    var star2 = '<div class="main-card__reviews-star"><img src="img/main/star2.svg" alt=""></div>';
    $('.main-card__reviews-stars').each(function(index) {
        good = $(this).text();
        $(this).text('');
        for (let i = 0; i < 5; i++) {
            if (good > 0) {
                $(this).append(star);
            } else {
                $(this).append(star2);
            }
            good -= 1;
        }
    })
});