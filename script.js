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
		$('#transparentBackground').fadeIn();
	})
	$('.search__popup button').click(function(){
		$('.search__popup').toggleClass('active');
	})

	$('#transparentBackground').click(function(){
		$('.search__popup').removeClass('active');
		$('.quick__review').fadeOut('fast');
		$('#transparentBackground').fadeOut();
	})

	$('.filter__step-first p').click(function(){
		$('.filter__wrap-form').addClass('active');
		let selectCarLabel = $(this).attr('data-value');
		$('#carLabel option:contains("'+selectCarLabel+'")').prop("selected",true);
		$('.filter__step-first').removeClass('active');
		$('.filter__step-second').addClass('active');
		$('.bottom_part').hide();
	})
	$('.filter__step-second p').click(function(){
		let selectCarModel = $(this).attr('data-value');
		$('#carModel option:contains("'+selectCarModel+'")').prop("selected",true);
		$('.filter__step-second').removeClass('active');
		$('.filter__step-third').addClass('active');
	})
	$('.filter__step-third p').click(function(){
		let selectCarGeneration = $(this).attr('data-value');
		$('#carGeneration option:contains("'+selectCarGeneration+'")').prop("selected",true);
		/*$('.filter__step-third').removeClass('active');
		$('.filter__step-forth').addClass('active');*/
	})
	$('.filter__clear-button').click(function(){
		$('#carGeneration option, #carLabel option, #carModel option').prop("selected",false);
		$('.filter__step').removeClass('active');
		$('.filter__step-first').addClass('active');
		$('.bottom_part').show();
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
		$('#transparentBackground').fadeOut();
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
	$('#background').click(function(){
		$('.popup__order').fadeOut("fast");
		$('.confirmation').fadeOut("fast");
		$('#background').fadeOut("slow");
	})
	$('.order__triger').click(function(){
		$('.popup__order').fadeIn("slow");
		$('#background').fadeIn("fast");
	})

	$('input[type="tel"]').mask("+7(999)999-99-99");

	$('.filter__display.tiles').click(function(){
		$(this).addClass("active");
		$('.filter__display.rows').removeClass("active");
		$('.catalog__result-tiles').removeClass('rows').addClass('tiles');
	})
	$('.filter__display.rows').click(function(){
		$(this).addClass("active");
		$('.filter__display.tiles').removeClass("active");
		$('.catalog__result-tiles').removeClass('tiles').addClass('rows');
	})

	$('.tab__trigger-description').click(function(){
		$('.tab__trigger-characteristics').removeClass("active");
		$(this).addClass("active");
		$('.preview__characteristics').removeClass("active");
		$('.preview__description').addClass("active");
	})
	$('.tab__trigger-characteristics').click(function(){
		$('.tab__trigger-description').removeClass("active");
		$(this).addClass("active");
		$('.preview__description').removeClass("active");
		$('.preview__characteristics').addClass("active");
	})

	$('.popular__block-imgWrap').click(function(){
		$('.preview').fadeIn("slow");
		$('#background').fadeIn("fast");
	})

	$('.catalog__sidebar .close').click(function(){
		$('.catalog__sidebar').fadeOut("slow");
	})

	$('.mobile__filter-wrap').click(function(){
		$('.catalog__sidebar').fadeIn("slow");
	})

	$(window).resize(function(){
		if (innerWidth > 899) {
			let activeTab = $('.tab__content').hasClass('active');
			if (activeTab == 1) {}
			if (activeTab == 0) {
				$('#newsAllTab').addClass('active');
				$('.tab__trigger-block').removeClass('active');
				$('#newsAllTrigger').addClass('active')
			}
		}
		if(innerWidth<561) {
			$('.catalog__result-tiles').removeClass('rows');
			$('.catalog__result-tiles').addClass('tiles');
			$('.filter__display.rows').removeClass('active');
			$('.filter__display.tiles').addClass('active');
		}
		else{}
	})

	$('.delete__row-button').click(function(){
		$(this).parent('.basket__table-row, .quick__review-row').remove();
	})

	$('.basket__wrap').click(function(){
		$('#transparentBackground').fadeIn("slow");
		$('.quick__review').fadeIn("fast");
	})

	$('.tab__trigger-block').click(function(){
		$('.tab__trigger-block').removeClass("active");
		$(this).addClass("active");
	})
	$('#productDescriptionTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#productDescriptionTab').addClass("active");
	})
	$('#productCharacteristicTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#productCharacteristicTab').addClass("active");
	})
	$('#productInstallationTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#productInstallationTab').addClass("active");
	})
	$('#productSimilarGoodsTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#productSimilarGoodsTab').addClass("active");
	})


	$('#newsAllTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#newsAllTab').addClass("active");
	})
	$('#newsArticlesTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#newsArrticlesTab').addClass("active");
	})
	$('#newsNewsTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#newsNewsTab').addClass("active");
	})
	$('#newsPortfolioTrigger').click(function(){
		$('.tab__content').removeClass("active");
		$('#newsPortfolioTab').addClass("active");
	})


	$('.mobile__tab-trigger').click(function(){
		$(this).parent('.tab__content, .order__tab-content').toggleClass("active");
	})

	$('.show__more-goods').click(function(){
		$(this).siblings('.order__list-wrap').addClass("active");
		$(this).remove();
	})


	$('.order__list-view').click(function(){
		$('.order__map-view').removeClass("active");
		$('.map__view-deliveryPoints').removeClass("active");
		$(this).addClass("active");
		$('.order__table-deliveryPoints').addClass("active");
	})
	$('.order__map-view').click(function(){
		$('.order__list-view').removeClass("active");
		$('.order__table-deliveryPoints').removeClass("active");
		$(this).addClass("active");
		$('.map__view-deliveryPoints').addClass("active");
	})

	$('#triggerClientsTransport').click(function(){
		$('.order__tab-block').removeClass("active");
		$('.order__tab-content').removeClass("active");
		$(this).addClass("active");
		$('#deliveryClientsTransport').addClass("active");
	})
	$('#triggerDeliveryInstallation').click(function(){
		$('.order__tab-block').removeClass("active");
		$('.order__tab-content').removeClass("active");
		$(this).addClass("active");
		$('#deliveryInstallation').addClass("active");
	})
	$('#triggerDeliveryСourier').click(function(){
		$('.order__tab-block').removeClass("active");
		$('.order__tab-content').removeClass("active");
		$(this).addClass("active");
		$('#deliveryСourier').addClass("active");
	})

	$('#triggerDeliveryOverMKAD').click(function(){
		$('.order__tab-block').removeClass("active");
		$('.order__tab-content').removeClass("active");
		$(this).addClass("active");
		$('#background').fadeIn('fast');
		$('.choose__city').fadeIn('slow');
	})

	$('#chooseCityTrigger').click(function(){
		$('#background').fadeIn('fast');
		$('.choose__city').fadeIn('slow');
	})

	$(".choose__city-list ul li").click(function(){
		$('.delivery__place span').text('г. Иркутск');
		$('.popup').fadeOut('fast');
		$('#background').fadeOut('slow');
		$('#deliveryOverMKAD').addClass("active");
		$('#triggerDeliveryOverMKAD').addClass("active");
	})
	$(".choose__city .close").click(function(){
		$('.order__tab-content').removeClass("active");
		$('.order__tab-block').removeClass("active");
		$('.popup').fadeOut('fast');
		$('#background').fadeOut('slow');
		$('#deliveryClientsTransport').addClass("active");
		$('#triggerClientsTransport').addClass("active");
	})


	$('#deliveryCompanyPassportTrigger').click(function(){
		$('.deliveryCompany__content-wrap').removeClass("active");
		$('.deliveryCompany__tab').removeClass("active");
		$(this).addClass("active");
		$('#deliveryCompanyPassport').addClass("active");
	})
	$('#deliveryCompanyLicenseTrigger').click(function(){
		$('.deliveryCompany__content-wrap').removeClass("active");
		$('.deliveryCompany__tab').removeClass("active");
		$(this).addClass("active");
		$('#deliveryCompanyLicense').addClass("active");
	})


	$('.faq__block-question').click(function(){
		$(this).siblings('.faq__block-response').slideToggle("fast");
	})


});