/*------------------------------------------------------------------
[Custom Script JS]

Project Name  :     BentoMan - Personal portfolio resume template
Version       :     1.0.0
Last Update   :     10 December 2024
Author	      :	    Themearray
Support	      :	    themearray@gmail.com
------------------------------------------------------------------*/

(function($) {
    'use strict';

    /* ============================================================ */
    /* PRELOADER START
    /* ============================================================ */
    $(document).ready(function() {
        setTimeout(function() {
            $(".preloader").fadeOut();
            AOS.init({
                duration: 1000,
                once: true,
            })
        }, 1500);
    });
    /* Preloader End */


    /* ============================================================ */
    /* Onpage scrolling START
    /* ============================================================ */
    $('a:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
                return false;
            }
        }
    });
    /* Onpage Scrolling End*/
    /* ============================================================ */
    /* MOBILE MENU START
    /* ============================================================ */
    function mobile_menu(selector, actionSelector) {
        var mobile_menu = $(selector);
        mobile_menu.on('click', function() {
            $(selector).toggleClass('is-menu-open');
        });

        var hamburgerbtn = $(selector);
        hamburgerbtn.on('click', function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(mobile_menu);
            if (
                selectorType.is(e.target) !== true &&
                selectorType.has(e.target).length === 0
            ) {
                $(actionSelector).removeClass('is-menu-open');
                $(selector).removeClass('is-menu-open');
            }
        });
        $('.mobile_menu .main-menu a, .mobile_overlay').on('click', function(e) {
            $(actionSelector).removeClass('is-menu-open');
            $(selector).removeClass('is-menu-open');
        });
    }
    mobile_menu(
        '.menu_toggle, .close_menu',
        '.mobile_menu, .mobile_overlay'
    );
    /* Mobile menu End */

    /* ============================================================ */
    /* StickyHeader
    /* ============================================================ */
    var fixed_top = $("header");
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            fixed_top.addClass("is-sticky");
        } else {
            fixed_top.removeClass("is-sticky");
        }
    });

    /* ============================================================ */
    /* Servic Slider start
    /* ============================================================ */
    let serviceSlider = new Swiper('.testimonial.swiper', {
        spaceBetween: 25,
        slidesPerView: 1,
        loop: 1,
        speed: 800,
        autoplay: {
            delay: 5000,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
        navigation: {
            nextEl: '.serviceSlideNav .button-next',
            prevEl: '.serviceSlideNav .button-prev',
        },
        pagination: {
            el: ".serviceSlider .swiper-pagination",
            type: "progressbar",
        },
    });
    // Service Slider End



    /* ============================================================ */
    /* Custom Cursor start
    /* ============================================================ */
    if ($('.custom_cursor').length) {
        var cursor = document.querySelector('.custom_cursor_one');
        var cursorInner = document.querySelector('.custom_cursor_two');
        var anchors = document.querySelectorAll('a');

        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
        });
        document.addEventListener('mousemove', function(e) {
            var x = e.clientX;
            var y = e.clientY;
            cursorInner.style.left = x + 'px';
            cursorInner.style.top = y + 'px';
        });
        document.addEventListener('mousedown', function() {
            cursor.classList.add('click');
            cursorInner.classList.add('custom_cursor_hover');
        });
        document.addEventListener('mouseup', function() {
            cursor.classList.remove('click');
            cursorInner.classList.remove('custom_cursor_hover');
        });
        anchors.forEach((item) => {
            item.addEventListener('mouseover', () => {
                cursor.classList.add('custom_cursor_hover');
            });
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('custom_cursor_hover');
            });
        });
    }
    // Custom Cursor End



    /* ============================================================ */
    /* Scroll Top
    /* ============================================================ */
    var $scrolltop = $('#scroll-top');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > $(this).height()) {
            $scrolltop.addClass('btn-show').removeClass('btn-hide');
        } else {
            $scrolltop.addClass('btn-hide').removeClass('btn-show');
        }
    });
    $("a[href='#top']").on('click', function() {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
        return false;
    });

    /* ============================================================ */
    /* Hover Tilt effect of widget
    /* ============================================================ */
    $('.widget').tilt({
        maxTilt: 15,
        perspective: 1500,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 1200,
        scale: 1.03
    });


})(jQuery);
// jQuery Ended