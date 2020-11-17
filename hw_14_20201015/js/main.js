// Scroll Nav Effect
$(window).on("scroll", function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('bg-black');
      }

      else {
            $('nav').removeClass('bg-black');
      }
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
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider_top',
      arrows: true,
      prevArrow:'<button class="slick-prev"> &#10092; </button>',
      nextArrow:'<button class="slick-next"> &#10093; </button>',
      centerMode: true,
      variableWidth: true,
});
