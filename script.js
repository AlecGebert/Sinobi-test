$(document).ready(function () {
  $(".slider").slick({
    // normal options...
    infinite: true,
    swipe: true,
    arrows: true,

    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider-auto").slick({
    // normal options...
    infinite: true,
    swipe: true,
    arrows: true,
    vertical: true,
    slidesToShow: 3,
    // the magic
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});
$(".fade").slick({
  dots: true,
  dotsClass: 'slick-dots',
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false,
});
