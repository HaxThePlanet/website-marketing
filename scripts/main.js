/* strict mode enabled */
"use strict";

jQuery(window).on("load", function($) {

    /* preloader */
    jQuery("body").imagesLoaded(function() {
        jQuery(".tb-preloader-wave").fadeOut();
        jQuery("#tb-preloader").delay(200).fadeOut("slow").remove();
    });

});

jQuery(document).ready(function($) {

    "use strict";

    /* affixed nav */
    jQuery(document).on('scroll', function() {
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.navbar-default').addClass('fixed_top');
        } else {
            jQuery('.navbar-default').removeClass('fixed_top');
        };
    });

    jQuery(window).load(function() {
        var scrollTop = jQuery(window).scrollTop(); // top 0px
        if (jQuery(this).scrollTop() > 10) {
            jQuery('.navbar-default').addClass('fixed_top');
        } // for refresh page problem
    });

    /* animated nav button */
    jQuery("header .navbar-toggle").on('click', function() {
        jQuery(this).toggleClass("change");
    });

    /* Close mobile menu after click */

    jQuery("header .navbar-default .navbar-nav li a").click(function() {
        jQuery(".navbar-toggle").removeClass("change");
        jQuery(".navbar-collapse").removeClass("in");
    });

    /* Animation on scroll */
    new WOW().init();

    /* Smooth scrolling */
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: null,
        speed: 1000,
        easing: 'easeInQuint',
        offset: 20,
        callback: function ( anchor, toggle ){}
    });

    /* tooltip */
    jQuery('[data-toggle="tooltip"]').tooltip()

});
