﻿
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