$(document).ready(function () {
    
    
    //active class for nav buttons
    $("ul li").on("click", function () {
        $(this).addClass("activate");
        $(this).siblings().removeClass("activate");
        $("#trans").addClass("black");
        
     /*   if (clicked = false){
            $(".carousel").each(function () {
                $(this).carousel({interval: false});
                clicked = true;
            });
        } else */
    });

  //pre-load all images
    var images = [],
        i;
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
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
    );
    
    var image = document.getElementById('carousel-pic-1'),
        url = 'images/calm.jpg';
    image.style.backgroundImage = 'images/loading.gif';
    var tmp = new Image();
    tmp.onload = function() {
       image.style.backgroundImage = "url('"+url+"')";
       // or insert some other special effect code here.
    };
    tmp.src = url;
    
    var image2 = document.getElementById('carousel-pic-2'),
    url2 = 'images/rowing.jpg';
    image2.style.backgroundImage = 'images/loading.gif';
    var tmp2 = new Image();
    tmp2.onload = function() {
       image2.style.backgroundImage = "url('"+url2+"')";
       // or insert some other special effect code here.
    };
    tmp2.src = url2;
    
    var image3 = document.getElementById('carousel-pic-3'),
    url3 = 'images/sunset-on-transit.jpg';
    image3.style.backgroundImage = 'images/loading.gif';
    var tmp3 = new Image();
    tmp3.onload = function() {
       image3.style.backgroundImage = "url('"+url3+"')";
       // or insert some other special effect code here.
    };
    tmp3.src = url3;

    
    //active class for nav buttons
    $("ul li").on("click", function () {
        $(this).addClass("activate");
        $(this).siblings().removeClass("activate");
        $('#trans').addClass('black')
    });

/*    //bouncing scroll down button
    setInterval(function () {
        var btn = $('.btn-container');
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
    }, 4000);  */
    
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
    
    var links = document.getElementById('myNavbar').getElementsByTagName('a')
    
    $('#myNavbar ul li a').click(function(e){
        $('#profile-bin').fadeIn(1000).siblings().fadeOut(1000);
        e.preventDefault()
    })
    
    
    
});
    