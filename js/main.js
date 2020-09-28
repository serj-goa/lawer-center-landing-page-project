$(function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        /* Slider circle */
        infinite:false
    });
    $('select').styler();

    /* MENU Burger */
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
});