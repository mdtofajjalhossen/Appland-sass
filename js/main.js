$(document).ready(function () {
        /*==============navbar fixed======*/
        function NavBarfixed() {
            $(window).scroll(function() {    
                var scroll = $(window).scrollTop();
            
                if (scroll >= 100) {
                    $(".Nav_fixe").addClass("fix_navBar_top");
                } else {
                    $(".Nav_fixe").removeClass("fix_navBar_top");
                }
            });
                
        }
    
        NavBarfixed();

 /*==============smoothscroll======*/
            smoothleyscroll
            function smoothleyscroll() {
                $('.Main_nav a[href^="#"],.go_top a[href^="#"]').on('click', function (event) {
                    var target = $(this.getAttribute('href'));
                    if (target.length) {
                        event.preventDefault();
                        $('html, body').stop().animate({
                            scrollTop: target.offset().top - 74
                        }, 2000);
                    }
                });
            }
            smoothleyscroll();

    /*==============testimonialSlider======*/


    function testimonialSlider() {
        $('.Test_slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            autoplaySpeed: 2000,
            arrows:false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                },
        
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        dots:false,
                    }
                },
        
        
                ]
          });
    }
    testimonialSlider();
/*==============wow js======*/
    new WOW().init();
        
}); 
        
    

  