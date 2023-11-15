;(function($){
    'use strict';

    /* ==========================================================================
        Preloader
    ========================================================================== */
    var $loaderWrap = $(window)
    if($loaderWrap.length > 0){
        $loaderWrap.on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        });
    }
    /* ==========================================================================
        Mixitup
    ========================================================================== */
    var $filtContainer = $( "#Container" )
    if($filtContainer.length > 0){
         $filtContainer.mixItUp({
            load: {
              filter: '.category-1'
            }
        });
    }
    var $imgLight = lightbox; 
    if($imgLight.length > 0){
        $imgLight.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'disableScrolling': true,
          'alwaysShowNavOnTouchDevices' : true
        })
    }   

    /* ==========================================================================
       Owl Carousel
    ========================================================================== */
    var $loopTesti = $('.loop-testi')
    if($loopTesti.length > 0){
        $loopTesti.owlCarousel({
        center: true,
        loop:true,
        smartSpeed:600,
        responsive:{
            300:{
                items:1
            }
        }
    });

    }

    /* ==========================================================================
       wow animation
    ========================================================================== */
    new WOW().init();

    /* ==========================================================================
       Type effect
    ========================================================================== */ 
    document.addEventListener('DOMContentLoaded', function() {
      var typed = new Typed("#typed3", {
        strings: ['Proffesional Web Designer', 'Proffesional Web Developer', 'Proffesional ios Developer'],
        typeSpeed: 90,
        backSpeed: 50,
        startDelay: 1000,
        loop: true,
        loopCount: Infinity,
      });
    }); 

     /* ==========================================================================
       Contact form
    ========================================================================== */ 
    var $contactForm = $('#contact-form');
    $contactForm.validator();


    // when the form is submitted
    $contactForm.on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $contactForm.find('.messages').html(alertBox);
                        // empty the form
                        $contactForm[0].reset();
                    }
                }
            });
            return false;
        }
    })


})(jQuery);

    /* ==========================================================================
       Menu click scroll 
    ========================================================================== */ 
(function () {
       $(document).on("scroll", onScroll);
 
        $('.menu li a[href^="#"], .scroll-btn a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
 
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
 
            var target = this.hash;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
 
    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('.menu a').each(function () {
            var currentLink = $(this);
            var refElement = $(currentLink.attr("href"));
            if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
                $('.menu li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    } 
}());