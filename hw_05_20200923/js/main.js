$('.slider_left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    asNavFor: '.slider_right'
});
$('.slider_right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider_left',
    arrows: false
});
