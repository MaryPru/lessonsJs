$(document).ready(function (){
    const slider = $('.main-slider');
    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
})
