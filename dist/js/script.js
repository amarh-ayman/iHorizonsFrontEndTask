"use strict";let width=.8,left=8;function setMaxWidth(){$(window).width()>=1600&&$(window).width()<1700&&(width=.82,left=3.1),$(window).width()>=1400&&$(window).width()<1600&&(width=.87,left=9),$(window).width()>=1200&&$(window).width()<1400&&(width=.8),$(window).width()>=600&&$(window).width()<1200&&(width=.6),$(window).width()>300&&$(window).width()<=600&&(width=.7),$(window).width()<=300&&(width=.98),$(".container").css("maxWidth",$(window).width()*width+"px"),$(".social-media-links").css({left:10*width-width*left+"%"})}$(document).ready((function(){setMaxWidth(),$(window).bind("resize",setMaxWidth)})),$(".btn-customized").on("click",(function(){$(this).hasClass("paused")?($("#news-first-section").carousel("cycle"),$(".btn-customized").toggleClass("paused"),$(".btn-customized i").removeClass("fa-play").addClass("fa-pause"),$(this).blur()):($("#news-first-section").carousel("pause"),$(".btn-customized").toggleClass("paused"),$(".btn-customized i").removeClass("fa-pause").addClass("fa-play"),$(this).blur())})),$("a").on("click",(function(t){$(this).not('[data-toggle="tab"]').addClass("active")})),$(" .carousel-indicators > li").popover({placement:"top",trigger:"hover",html:!0,content:function(){let t=$(this).parentsUntil('[data-ride="carousel"]').parent().attr("id"),i=$(this).attr("data-slide-to"),s=$(`#${t} > .carousel-inner >.carousel-item`).eq(i),d=s.text();return`<div class="media"><img src="${s.find("img").attr("src")}" class="mr-3" alt="Sample Image"><div class="media-body"><p>${d}</p></div></div>`}}),$(" .more-news").on("click",(function(){$("#navbar-news > .list-group").css("overflow-y","scroll")}));
//# sourceMappingURL=script.js.map