"use strict";
let width = 0.8;
let left = 8;

$(document).ready(function () {
  setMaxWidth();
  $(window).bind("resize", setMaxWidth); //Remove this if it's not needed. It will react when window changes size.
});

$(".btn-customized").on("click", function () {
  if (!$(this).hasClass("paused")) {
    $("#news-first-section").carousel("pause");
    $(".btn-customized").toggleClass("paused");
    $(".btn-customized i").removeClass("fa-pause").addClass("fa-play");
    $(this).blur();
  } else {
    $("#news-first-section").carousel("cycle");
    $(".btn-customized").toggleClass("paused");
    $(".btn-customized i").removeClass("fa-play").addClass("fa-pause");
    $(this).blur();
  }
});

$("a").on("click", function (e) {
  // e.preventDefault();
  $(this).not('[data-toggle="tab"]').addClass("active");
});
$(" .carousel-indicators > li").popover({
  placement: "top",
  trigger: "hover",
  html: true,
  content: function () {
    let $id = $(this)
      .parentsUntil('[data-ride="carousel"]')
      .parent()
      .attr("id");
    let $dataSlideTo = $(this).attr("data-slide-to");
    let $mainDivHover = $(`#${$id} > .carousel-inner >.carousel-item`).eq(
      $dataSlideTo
    );
    let $contentOfIndicator = $mainDivHover.text();
    let $imgsrc = $mainDivHover.find("img").attr("src");

    return `<div class="media"><img src="${$imgsrc}" class="mr-3" alt="Sample Image"><div class="media-body"><p>${$contentOfIndicator}</p></div></div>`;
  },
});

function setMaxWidth() {
  if ($(window).width() >= 1600 && $(window).width() < 1700) {
    width = 0.82;
    left = 3.1;
  }
  if ($(window).width() >= 1400 && $(window).width() < 1600) {
    width = 0.87;
    left = 9;
  }
  if ($(window).width() >= 600 && $(window).width() < 1400) {
    width = 0.89;
  }
  if ($(window).width() <= 600) width = 0.95;
  $(".container").css("maxWidth", $(window).width() * width + "px");

  // alert( width );
  $(".social-media-links").css({
    left: `${width * 10 - width * left}%`,
  });
  // alert(left);
  // alert(width);
}
