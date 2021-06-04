$(document).ready(function(){

	$(function(){
	  $.fn.scrollToTop=function(){
	    $(this).hide().removeAttr("href");
	    if($(window).scrollTop()!="0"){
	        $(this).fadeIn("slow")
	  }
	  var scrollDiv=$(this);
	  $(window).scroll(function(){
	    if($(window).scrollTop()<="500"){
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

	$('header .navbar ul .close').click(function(){
		$('header .navbar ul').toggleClass('active');
	})
	$('.hamburger').click(function(){
		$('header .navbar ul').toggleClass('active');
	})

	$('.search__popup .close').click(function(){
		$('.search__popup').toggleClass('active');
	})

	$('.phone__trigger').click(function(){
		$('.info__wrap.phone_wrap').toggleClass('active');
	})
	$('.address__trigger').click(function(){
		$('.info__wrap.address_wrap').toggleClass('active');
	})
	$('.info__wrap .close').click(function(){
		$(this).parent('.info__wrap').toggleClass('active');
	})

	$('.filter .bottom_part').click(function(){
		$('.filter_wrap ul').toggleClass('active');
		$(this).toggleClass('active');
	})


	$('.service__slider').slick({
	  dots:false,
	  arrows: true,
	  slidesToShow: 6,
	  responsive: [
	    {
	      breakpoint: 1441,
	      settings: {
	        slidesToShow: 5
	      }
	    },
	    {
	      breakpoint: 1281,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 910,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint:700,
	      settings: {
	        slidesToShow: 2,
	        arrows:false
	      }
	    }
	  ]
	});

	$('.popup .close').click(function(){
		$(this).parent('.popup').fadeOut("fast");
		$('#background').fadeOut("slow");
	})
	$('.order__triger').click(function(){
		$('.popup__order').fadeIn("slow");
		$('#background').fadeIn("fast");
	})

	

});