﻿


////// sliders //////////

$(document).ready(function () {
  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    speed: 800,
    dots: true,
    // dotsClass: 'slide-dots',
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
  });
});

////// scrollToTopBtn //////////

var scrollToTopBtn = document.getElementById("toTop")
var rootElement = document.documentElement

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)