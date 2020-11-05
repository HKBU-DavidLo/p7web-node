$(function() {
	//撱嗉�笔�㰘蝸
	$(".scrollLoading").scrollLoading();
	//wow
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		new WOW().init();
	};
	//	//swiper 頧格偘�㦛
	//	var swiper_banner = new Swiper('.index-banner .swiper-container', {
	//    paginationClickable: true,
	//    loop: true,
	//    autoplay:4000,
	//    autoplayDisableOnInteraction : false,
	//    nextButton: '.index-banner .arrow-right',
	//	  	prevButton: '.index-banner .arrow-left',
	//	});
	//蝘餃𢆡蝡臬仍��
	$("#menu").mmenu({
		"extensions": [
			"pagedim-black"
		],
		"counters": true,
		navbar: {
			title: "Richwell"
		},
		"navbars": [{
				"position": "top",
				"content": [
					"searchfield"
				]
			},
			{
				"position": "top"
			}
		]
	});
	//tab	
	function tab(e) {
		var active = e.data.active;
		$(this).addClass(active).siblings().removeClass(active);
		if(e.data.cont_item) {
			var i = $(this).index();
			var cont_item = e.data.cont_item;
			cont_item = eval(cont_item)
			cont_item.eq(i).show().siblings().hide();
		}

	}
	$('#serTab li').on('click', {
		cont_item: "$('#setCont .item')",
		active: 'active'
	}, tab);

	$(window).scroll(function() {
		var scrolltop = $(this).scrollTop();
		if(scrolltop >= 1) {
			$(".head").addClass('act');
		} else {
			$(".head").removeClass('act');
		}
	});

	var teamOwl = $('#teamOwl');
	$("#teamOwl").owlCarousel({
		items: 4,
		lazyLoad: true,
		navigation: false,
		autoPlay: 4000,
		transitionStyle: true,
		itemsCustom: [
			[320, 2],
			[640, 2],
			[768, 3],
			[992, 3],
			[1024, 4],
		],
	});
	//撌血𢰧蝞剖仍
	$(".team .arrow-left").click(function() {
		teamOwl.trigger('owl.prev');
	});
	$(".team .arrow-right").click(function() {
		teamOwl.trigger('owl.next');
	});

	var linkTab = $('#linkTab');
	$("#linkTab").owlCarousel({
		items: 3,
		lazyLoad: true,
		navigation: false,
		autoPlay: 4000,
		transitionStyle: true,
		itemsCustom: [
			[320, 3],
			[640, 3],
		],
	});
	//撌血𢰧蝞剖仍
	$(".link-btn-box .left").click(function() {
		linkTab.trigger('owl.prev');
	});
	$(".link-btn-box .right").click(function() {
		linkTab.trigger('owl.next');
	});

});


function initList(arr,$li) {		
	var l = $li.length;
	var num = parseInt(l / arr.length) + 1;
	var arr_total = [];
	for(i = 0; i < num; i++) {
		arr_total = arr_total.concat(arr);
	}
	$li.each(function(index) {
		$(this).addClass('wow fadeInUp').attr('data-wow-delay', arr_total[index]);
	});
	//wow
	if(!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		new WOW().init();
	};
}


function isM(){
	var w = $(window).width();
	return w<700? true: false
}