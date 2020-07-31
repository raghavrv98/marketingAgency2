/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Radley - One Page HTML Template
Author          : Ashok Prajapati
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - Asok prajapati
========================================================================*/

(function($){
    "use strict"

    var Radley = {};

    /* =============================================
    Pre Load
    ============================================= */
    Radley.WebLoad = function(){
        $("#loading").fadeOut(300);
    }               
      
 
    /* =============================================
    Smooth Scroll
    ============================================= */
     Radley.HeaderScroll = function(){    
        $('a[href*="#"]:not([href="#"])').on('click', function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 62,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*============================================= 
    Header Fixed
    ============================================= */
    Radley.HeaderFixed = function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $(".header-navbar").addClass("header-fixed");
            $('#back-to-top').addClass('active'); 
        } else {
            $(".header-navbar").removeClass("header-fixed");
            $('#back-to-top').removeClass('active');
        }        
    }

    /* =============================================
    Menu Close
    ============================================= */
    Radley.MenuClose = function(){
        $('.navbar-nav .nav-link').on('click', function(e) {
            var toggle = $('.navbar-toggler').is(':visible');
            if (toggle) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }
    
    /* =============================================
    Counter js
    ============================================= */
    var a = 0;
    Radley.Counter = function(){
        if($('.counterbox').length){            
            var oTop = $('.counterbox').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.count').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1;
            }
        }
    }

    /* =============================================
    owl Slider : Banner
    ============================================= */
    Radley.BannerSlider = function(){
        var bannersliders = $('#bannerslider');
        bannersliders.owlCarousel({
            loop: true,
            margin: 0,
            nav:true,
            navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                768:{
                    items:1,
                    nav:true
                }
            }
        });
    }
    
    /* =============================================
    owl Slider : Testimonials
    ============================================= */
    Radley.TestimonialsSlider = function(){
        var testimonialssliders = $('#testimonialsslider');
        testimonialssliders.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
                0: {
                  items: 1,
                  dots:true
                },
                768: {
                  items: 2,
                  dots:false
                }
              }
        });
    }

   
    
    /* =============================================
    Back to Top
    ============================================= */
    Radley.BackTotop = function(){    
        $("#back-to-top").on("click", function(e){
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 1000); 
            return false; 
        });
    }

    
   
    /* =============================================
    Window on Load
    ============================================= */    
    $(window).on("load", function(){
        Radley.WebLoad();       
    });

     /* =============================================
    Color Switcher
    ============================================= */
    Radley.ColorSwitcher = function(){
        $('#opensetting').on('click', function(e){
            e.preventDefault();
            $('.colorSwitcher').toggleClass('open')
        })
        var themeclass = 'theme-01'
        $('[data-themeclass]').on('click', function(e){
            e.preventDefault();
            themeclass = $(this).data('themeclass');
            var url  = 'assets/css/color/'+themeclass+'.css'
            $('#themecolor').attr('href', url);
        })
    
    }

    
    /* =============================================
    Document on ready
    ============================================= */
    $(document).on("ready", function(){    
        Radley.HeaderScroll();
        Radley.HeaderFixed();
        Radley.MenuClose();
        Radley.BannerSlider();
        Radley.TestimonialsSlider();       
        Radley.ColorSwitcher();
        Radley.BackTotop();
    })

    /* =============================================
    Window on Scroll
    ============================================= */
    $(window).on("scroll", function(){
        Radley.Counter(),
        Radley.HeaderFixed();
    });
   

})(jQuery);