function body_sizer(){if($("body").hasClass("fixed-sidebar")){var a=$(window).height(),b=$("#page-header").height(),c=a-b;$("#page-sidebar").css("height",c),$(".scroll-sidebar").css("height",c),$("#page-content").css("min-height",c)}else{var a=$(document).height(),b=$("#page-header").height(),c=a-b;$("#page-sidebar").css("height",c),$(".scroll-sidebar").css("height",c),$("#page-content").css("min-height",c)}}function pageTransitions(){var a=[".pt-page-moveFromLeft","pt-page-moveFromRight","pt-page-moveFromTop","pt-page-moveFromBottom","pt-page-fade","pt-page-moveFromLeftFade","pt-page-moveFromRightFade","pt-page-moveFromTopFade","pt-page-moveFromBottomFade","pt-page-scaleUp","pt-page-scaleUpCenter","pt-page-flipInLeft","pt-page-flipInRight","pt-page-flipInBottom","pt-page-flipInTop","pt-page-rotatePullRight","pt-page-rotatePullLeft","pt-page-rotatePullTop","pt-page-rotatePullBottom","pt-page-rotateUnfoldLeft","pt-page-rotateUnfoldRight","pt-page-rotateUnfoldTop","pt-page-rotateUnfoldBottom"];for(var b in a){var c=a[b];if($(".add-transition").hasClass(c))return $(".add-transition").addClass(c+"-init page-transition"),void setTimeout(function(){$(".add-transition").removeClass(c+" "+c+"-init page-transition")},1200)}}$(document).ready(function(){body_sizer(),$("div[id='#fixed-sidebar']").on("click",function(){if($(this).hasClass("switch-on")){var a=$(window).height(),b=$("#page-header").height(),c=a-b;$("#page-sidebar").css("height",c),$(".scroll-sidebar").css("height",c),$(".scroll-sidebar").slimscroll({height:"100%",color:"rgba(155, 164, 169, 0.68)",size:"6px"});var d=$("#page-header").attr("class");$("#header-logo").addClass(d)}else{var a=$(document).height(),b=$("#page-header").height(),c=a-b;$("#page-sidebar").css("height",c),$(".scroll-sidebar").css("height",c),$(".scroll-sidebar").slimScroll({destroy:!0}),$("#header-logo").removeClass("bg-gradient-9")}})}),$(window).on("resize",function(){body_sizer()}),$(document).ready(function(){pageTransitions(),$(function(){$("#sidebar-menu").superclick({animation:{height:"show"},animationOut:{height:"hide"}})}),$(function(){$("#close-sidebar").click(function(){$("body").toggleClass("closed-sidebar"),$(".glyph-icon",this).toggleClass("icon-angle-right").toggleClass("icon-angle-left")})})});