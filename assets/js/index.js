/// <reference path="../typings/tsd.d.ts" />
$(document).ready(function() {
/*==== These Functions are concerned with the navigation and menu ======*/
	handle_nav();
	function handle_nav () {
		styleNav();
		handleSideNav();
		handleNavOnScroll();
	}
	function styleNav () {
		if (window.pageYOffset <= 43) return $('nav').removeClass('paper-box-shadow bg-white')
		$('nav').addClass('paper-box-shadow bg-white')
	}
	/* =====These functions handle the sticky top navbar  */
	function handleNavOnScroll () {
		let scrollTop = $(window).scrollTop();
		$(window).scroll(function(e) {
			styleNav();
		});
	}

	/* =====These functions handle the sidebar */
	function openSideBar () {
		$(".side-menu-overlay").css({
			'right':'0'
		});
		$(".side-menu-overlay").addClass('show-sidebar');
	}
	function closeSideBar () {
		$(".side-menu-overlay").css({
			'right':'-100vw'
		});
		$(".side-menu-overlay").removeClass('show-sidebar');
	}
	function toggleSideNav() {
		if (!$(".side-menu-overlay").hasClass('show-sidebar')) return	openSideBar()
		closeSideBar();
	}
	function handleSideNav () {
		$('.nav-toggler').click(function(e) {
			toggleSideNav()
		});
		$(".side-menu-overlay").click(function(e) {
			toggleSideNav();
		});
		$(".side-menu").click(function(e) {
			e.stopPropagation();
		});
	}


/*==== This is the end of navigation and menu functions ======*/
 
	/*===== This will handle popper like drop downs like in the privacy policy page ======*/
		
    $(".dropper").click(function(){
        $(".dropper +").slideToggle()
		});
		$('.drop').css('display', 'none')
     
})
