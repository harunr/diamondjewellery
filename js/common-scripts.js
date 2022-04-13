
(function ($) {
    $(function  () {
        // This function for scroll animation
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function



        //this is for header animation
        if ($(window).width() > 767) {
            var getHeaderheight = $('.header-wrap').outerHeight() - 100;
            var navHeight = $(".nav-wrap").outerHeight() - 100

            $(window).on("scroll", function () {
                var fromTop = $(window).scrollTop();
                $("body").toggleClass("down", (fromTop > getHeaderheight));
                if (fromTop > navHeight) {
                    $('.header-wrap').addClass('fixedHeader')
                    $('.main-logo').addClass('animation')
                } else {
                    $('.main-logo').removeClass('animation')
                    $('.header-wrap').removeClass('fixedHeader')
                }

            });

        }


        $('div.phone-nav').click(function () {
            $('div.nav-wrap').slideToggle();
            $('body').toggleClass('navShown');
        })

        //Modal popup function        
        $(".collections-products-item").each(function () {
            var tabNav = $(this).find(".item-category").html();
            var itemFigure = $(this).find("figure").html();
            var itemContent = $(this).find(".product-description").html();
            $(this).click(function () {
                $('.collections-modal-wrap').fadeIn();

                $("#modal-figure").html(itemFigure);
                $("#madal-des-wrap").html(itemContent);
                $("#item-category").html(tabNav);


                $('#item-category .category').eq(0).addClass("active");
                $('#modal-figure img').hide();
                $('#modal-figure img').eq(0).show();
                $('#madal-des-wrap .description').hide();
                $('#madal-des-wrap .description').eq(0).show();

                $('#item-category .category').each(function (i) {
                    $(this).click(function () {
                        if ($(this).hasClass('active')) return false;
                        else {
                            $('#item-category .category').removeClass('active');
                            $(this).addClass('active');
                            $('#modal-figure img').hide();
                            $('#modal-figure img').eq(i).show();
                            $('#madal-des-wrap .description').hide();
                            $('#madal-des-wrap .description').eq(i).show();
                        }
                    });
                });

                $(".preloader_wrapper").addClass('loaded').fadeIn(5);
                removeFunction();

                function removeFunction() {
                    setTimeout(function () {
                        $(".preloader_wrapper").fadeOut(500);
                    }, 2000);
                }


            })
        })

        $('.modal-close').bind('click touchned', function () {
            $('.collections-modal-wrap').fadeOut(1200);
        });

        $(".collections-products-item").bind('click touchned', function () {
            $('body').addClass('modal-active')
        });

        $('.modal-close').bind('click touchned', function () {
            $('body').removeClass('modal-active');
        });


        // Hero Banner Wrap
        if ($(window).width() > 767) {
            $(window).on("scroll", function () {
                var windowScroll = $(window).scrollTop();
                $('.element-content .hero-banner-wrap').css({
                    'background-position': 'center ' + (-windowScroll / 8) + "px"
                });
            })

            $(window).on("scroll", function () {
                var windowScroll = $(window).scrollTop();
                $('.contact-lower-thum').css({
                    'background-position': 'center ' + (-windowScroll / 30) + "px"
                });
            })
        }

        // Contact Lower Thum
        if ($(window).width() < 1025) {

            $(window).on("scroll", function () {
                var windowScroll = $(window).scrollTop();
                $('.contact-lower-thum').css({
                    'background-position': 'center ' + (-windowScroll / 100) + "px"
                });
            })
        }

        // Parallax
        if ($(window).width() > 767) {
            var $pos_elements = $('.element-content .content-details-info');
            var $window = $(window);

            function check_if_in_view() {
                var window_height = $window.height();
                var window_top_position = $window.scrollTop();
                var window_bottom_position = (window_top_position + window_height);

                $.each($pos_elements, function () {
                    var $element = $(this);
                    var element_height = $element.outerHeight();
                    var element_top_position = $element.offset().top;
                    var element_bottom_position = (element_top_position + element_height);

                    //check to see if this current container is within viewport
                    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                        $element.addClass('stratParallax');
                    } else {
                        $element.removeClass('stratParallax');
                    }
                });
            }

            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');


            $(window).scroll(function () {

                var wScroll = $(this).scrollTop()

                $(".element-content .stratParallax .artical-figure img").css({
                    "transform": "translate(0px, -" + wScroll / 30 + "%)"
                })

            })


        };


        // Footer Section
        var $position_elements = $(".footer-upper-section");

        function check_position() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($position_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight() / 2;
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_bottom_position >= window_top_position) {

                } else {
                    $('.footer-section').addClass('expandline');
                }
            });
        }

        $window.on('scroll resize', check_position);
        $window.trigger('scroll');

        // Hero Slider
        if ($('.hero-slider-wrap').length) {
            $('.hero-slider-wrap').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                cssEase: 'cubic-bezier(0.65,0.05,0.36,1)',
                dots: false,
                arrows: true,

            })

        }

        // ul Slides
        if ($('ul.slides').length) {
            $('ul.slides').slick({
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                arrows: false,
                cssEase: 'cubic-bezier(0.65,0.05,0.36,1)',
                dots: false,

            })

        }

        // Collections
        $('.collections-nav ul li').click(function (e) {
            e.preventDefault();
            $('.collections-nav ul li').removeClass('active');
            $(this).addClass('active');
            $('.collections-products-tab').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).show();
            return false;
        });


        $('.collections-nav ul li:first-child').addClass('active');
        $('.collections-products-tab').hide();
        $('.collections-products-tab:first').show();

        // Click function
        $('.collections-nav ul li').click(function () {
            $('.collections-nav ul li').removeClass('active');
            $(this).addClass('active');
            $('.collections-products-tab').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });


        if ($('.error-wrap').length) {
            $('body').addClass('error-page')
        }


    }) // End ready function.

    // Pre Loader
    $(window).on('load', function () {
        $("#preloader_wrapper").addClass('loaded')

        removeFunction()

        function removeFunction() {
            setTimeout(function () {
                $("#preloader_wrapper").fadeOut(1000);

            }, 2800);
        }





    });


})(jQuery);
