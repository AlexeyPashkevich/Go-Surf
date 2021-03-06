$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<button type = "button" class= "slick-arrows arrow-left" ><img src="images/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type = "button" class= "slick-arrows arrow-right" ><img src="images/arrows-right.svg" alt=""></button>',
    asNavFor: '.slider-dotshead',
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.header__slider',
  });

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type = "button" class= "slick-arrows arrow-left" ><img src="images/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type = "button" class= "slick-arrows arrow-right" ><img src="images/arrows-right.svg" alt=""></button>',
    asNavFor: '.slider-map',
    focusOnSelect: true,
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  });

  $('.travel__slider').slick({
    infinite: true,
    prevArrow: '<button type = "button" class= "slick-arrows arrow-left" ><img src="images/arrows-left.svg" alt=""></button>',
    nextArrow: '<button type = "button" class= "slick-arrows arrow-right" ><img src="images/arrows-right.svg" alt=""></button>',
  });

})