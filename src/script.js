$(document).ready(function(){
    $('#navbar-show-btn').click(() => $('.navbar-box').removeClass('translate-x-full'));
    $('#navbar-hide-btn').click(() => $('.navbar-box').addClass('translate-x-full'));

    // date picker
    $('[data-toggle="datepicker"]').datepicker();

    // swiper slider
    $('.welcome-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        adaptiveHeight: true
    });
});