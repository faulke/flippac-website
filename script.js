$(document).ready(function () {
    
    //bouncing scroll down button
    setInterval(function () {
        var btn = $('.btn-container');
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
    }, 4000);
    
  /*
    //pre-load all images
    var images = []
    function preload () {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    }
    
    preload(
        'images/calm.jpg',
        'images/rowing.jpg',
        'images/sunset-on-transit.jpg',
        'images/profile/donatello.png',
        'images/profile/raphael.png',
        'images/profile/michelangelo.png',
        'images/profile/michelangelo.png'
    ) */
    
    var image = document.getElementById('landing'),
    url = 'images/sunset-on-transit.jpg';
    image.style.backgroundImage = 'images/loading.gif';
    var tmp = new Image();
    tmp.onload = function() {
       image.style.backgroundImage = "url('"+url+"')";
       // or insert some other special effect code here.
    };
    tmp.src = url;
    
    //active class for nav buttons
    $("ul li").on("click", function () {
        $(this).addClass("activate");
        $(this).siblings().removeClass("activate");
    });
    
    //moves navbar to top of window on scroll down
    $(window).bind('scroll', function () {
        var navHeight = $(window).height();
        if ($(window).scrollTop() > navHeight - 10) {
            $('nav').addClass('navbar-fixed-top');
        } else {
            $('nav').removeClass('navbar-fixed-top');
        }
    });

    //slow scroll to sections
    $('a[href*="#"]').click(function (event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1700);
        event.preventDefault();
    });
    
    //navbar close
    $('body').bind('click', function(e) {
        if($(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = $('.navbar-collapse').hasClass('collapse in');
            if ( opened === true ) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });
});