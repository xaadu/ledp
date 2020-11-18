$('.heroCarousel .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000
});

$('.slider_left').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      asNavFor: '.slider_right'
});
$('.slider_right').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      asNavFor: '.slider_left',
      centerMode: true,
      variableWidth: true,
      arrows: false,
      dots: true
});