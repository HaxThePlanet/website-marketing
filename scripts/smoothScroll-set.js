jQuery(document).ready(function($) {
    "use strict";
	/* -- Smooth scrolling
	---------------------------------- --*/
	smoothScroll.init({
		selector: '[data-scroll]',
		selectorHeader: null,
		speed: 1000,
		easing: 'easeInQuint',
		offset: 20,
		callback: function ( anchor, toggle ){}
	});
});
