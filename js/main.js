$(function () {
  $(".slider__inner-box").slick({
    fade: !0,
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt="arrow left"></button> ',
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt="arrow right"></button>',
    responsive: [{ breakpoint: 630, settings: { arrows: !1 } }],
  }),
    $(".menu-btn").on("click", function () {
      $(".menu__list, .menu-btn").toggleClass("active");
    });
});
