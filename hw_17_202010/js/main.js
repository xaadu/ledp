$('.heroCarousel .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000
});

$('.slider_top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      asNavFor: '.slider_bottom'
});
$('.slider_bottom').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 3,
      asNavFor: '.slider_top',
      centerMode: true,
      variableWidth: true,
      arrows: false,
      dots: false
});