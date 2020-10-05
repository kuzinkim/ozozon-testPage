var debugTimes = false;

/**
 * Global Variables
 */

/**
 * Document Ready
 */
$(document).ready(function () {

    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.slider-button--next',
            prevEl: '.slider-button--prev',
        }
    });

    $('.js-content-tab').on('click', function(){

        var tabEl = $(this)
        
        if(tabEl.hasClass('active')){
            tabEl.next().stop().slideUp()
            tabEl.removeClass('active')
        }else{
            $('.js-content-tab').removeClass('active')
            $('.js-content-tab').next().stop().slideUp()
            tabEl.addClass('active')
            tabEl.next().stop().slideDown()
        }

        return false
    });

    $('.js-faq-content, .js-service-content').hide();
    $('.js-faq-content:first, .js-service-content:first').show();
    $('.faq__wrap .js-faq-tab:first, .js-service-tab:first').addClass('is-active');
       
    $('.js-faq-tab').click(function(){
        $(this).parents('.faq__inner').find('.js-faq-tab').removeClass('is-active');
        $(this).parents('.faq__inner').find('.js-faq-content').hide();
        $(this).parents('.faq__inner').find('.js-faq-content[data-text="'+ $(this).attr('data-text') +'"]').stop().fadeIn();
        $(this).addClass('is-active');
    });

    $('.js-service-tab').click(function(){
        $(this).parents('.service__inner').find('.js-service-tab').removeClass('is-active');
        $(this).parents('.service__inner').find('.js-service-content').hide();
        $(this).parents('.service__inner').find('.js-service-content[data-text="'+ $(this).attr('data-text') +'"]').stop().fadeIn(600);
        $(this).addClass('is-active');
    });

    $('.js-burg').on('click', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
            $(this).siblings('.js-menu').removeClass('active')
            $('body, html').removeClass('is-hidden')
        } else {
            $(this).addClass('active')
            $(this).siblings('.js-menu').addClass('active')
            $('body, html').addClass('is-hidden')
        }
    })

    $('.service__pic-item').on('mousedown touchstart', function () {
        $('.service__pic').addClass('clicked')
        $('.service__pic-hang').fadeOut()
    })

    $(".js-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
        if ($(window).width() <= 1280) {
            $(".js-menu").removeClass('active')
            $('.js-burg').removeClass('active')
            $('body, html').removeClass('is-hidden')
        }
    });
});