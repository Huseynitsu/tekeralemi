$(document).ready(function () {

    new Swiper(".js-masthead-carousel", {
        loop: !0,
        pagination: {
            clickable: !0,
            el: ".swiper-pagination"
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        autoplay: {
            delay: 7e3,
            disableOnInteraction: !1
        },
        on: {
            autoplayTimeLeft(e, t, n) {
                $(".swiper-pagination-progressbar-fill").css("width", 100 * n + "%")
            }
        },
        breakpoints: {
            1024: {
                pagination: {
                    el: ".swiper-pagination",
                    type: "progressbar"
                }
            }
        }
    }).on("slideChange", function (e) {
        e.activeIndex;
        $(e.el).find(".counter span").text("0" + (e.realIndex + 1) + " -")
    });

    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    const mobMenu = $('.js-menu'),
        subMenu = $('.js-submenu'),
        subMenuItem = $('.js-submenu-item');

    $('.page-wrap').scroll(function () {
        let scroll = $('.page-wrap').scrollTop();

        if (scroll >= 105) {
            subMenu.addClass('fixed');
        } else {
            subMenu.removeClass('fixed');
        }
    });

    $('.submenu__ul-item').hover(function () {
        $(this).find(subMenuItem).stop(true, true).delay(200).fadeIn(300);
        $(this).find('.submenu__nav-item').css({ "color": "#F6F42E" });
    }, function () {
        $(this).find(subMenuItem).stop(true, true).delay(200).fadeOut(300);
        $(this).find('.submenu__nav-item').css({ "color": "#FFFFFF" });
    });

    $('.js-dropdown-active').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.js-header-toggler').on('click', function () {
        mobMenu.addClass('active');
    });

    $('.js-menu-close').on('click', function () {
        mobMenu.removeClass('active');
    });

    $('.js-mobile-menu-toggle').on('click', function () {
        console.log('wow');
        $(this).parent().children('.js-mobile-menu').slideToggle();
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".expand-box", {
        width: "100%", // Hədəf genişlik
        scrollTrigger: {
            trigger: ".scroll-expand-section",
            start: "top bottom", // Bölmə görünəndə başlasın
            end: "center center", // Ortaya çatanda bitsin
            scrub: true, // Scroll-la sinxron animasiya
        },
    });

});