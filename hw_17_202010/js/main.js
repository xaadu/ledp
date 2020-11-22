$('.heroCarousel .slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      customPaging: function(slider, i) {
            var imgURL = $(slider.$slides[i]).css('background').slice(140, -53);
            return '<button class="tab position-relative"><div class="position-absolute"><img class="postition-relative" src="' + imgURL + '"></div></button>';
      }
});

$('.slider_left').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
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