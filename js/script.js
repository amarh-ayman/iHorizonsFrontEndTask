"stick mode";
alert("kkkkkk");
let width = 0.8;
let left = 5;
$(document).ready(function () {
  setMaxWidth();
  alert("ll");
  $(window).bind("resize", setMaxWidth); //Remove this if it's not needed. It will react when window changes size.
  function setMaxWidth() {
    if ($(window).width() >= 1600 && $(window).width() < 1700) width = 0.82;
    if ($(window).width() >= 1400 && $(window).width() < 1600) width = 0.87;
    if ($(window).width() >= 600 && $(window).width() < 1400) width = 0.89;
    if ($(window).width() <= 600) width = 0.95;
    $(".container").css("maxWidth", $(window).width() * width + "px");

    if ($(window).width() >= 1600) a += 0.01;
    else a = 0.8;
    alert(left);

    $(".social-media-links").css({
      left: `${left - width * 10}%`,
    });
  }
});
