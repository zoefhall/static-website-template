import { logSomething } from "./module";

logSomething(" ");

$(document).ready(function() {
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });