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
      asNavFor: '.slider_top',
      centerMode: true,
      variableWidth: true,
      arrows: false,
      dots: false
});