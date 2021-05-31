$(document).ready(function(){

	$(function(){
	  $.fn.scrollToTop=function(){
	    $(this).hide().removeAttr("href");
	    if($(window).scrollTop()!="0"){
	        $(this).fadeIn("slow")
	  }
	  var scrollDiv=$(this);
	  $(window).scroll(function(){
	    if($(window).scrollTop()=="0"){
	    $(scrollDiv).fadeOut("slow")
	    }else{
	    $(scrollDiv).fadeIn("slow")
	  }
	  });
	    $(this).click(function(){
	      $("html, body").animate({scrollTop:0},"slow")
	    })
	  }
	});
	$(function() {$(".up").scrollToTop();});
	
	$('.navbar__search-visible').click(function(){
		$('.search__popup').toggleClass('active');
	})
	$('.search__popup button').click(function(){
		$('.search__popup').toggleClass('active');
	})

	$('.parent_menu').click(function(){
		$('.parent_menu>.submenu').toggleClass('active');
		$('.parent_menu .caret').toggleClass('active');
	})
	$('.parent_menu>.submenu>li').click(function(){
		$('.parent_menu>.submenu').toggleClass('active');
		$('.parent_menu .caret').toggleClass('active');
	})

	$('.cookieBar .close').click(function(){
		$('.cookieBar').hide();
	})

});