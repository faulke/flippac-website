$(document).ready(function () {

    //bouncing scroll down button
    setInterval(function () {
        var btn = $('.btn-container');
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
    }, 4000);


    //pre-load all images
    const images = []
    function preload () {
        for (let i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image()
            images[i].src = preload.arguments[i]
        }
    }

    preload(
        'images/beach.jpg',
        'images/build.jpg',
        'images/field.jpg',
        'images/loading.gif',
        'images/profile/cait.jpg',
        'images/profile/camper-prof.jpg',
        'images/profile/evan.jpg',
        'images/profile/evan.jpg'
    )

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
            $('nav').css('height', '60px');
        } else {
            $('nav').removeClass('navbar-fixed-top');
            $('nav').css('height', '100%');
        }
    });

    //slow scroll to sections
    $('a[href*="#"]').click(function (event) {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1200);
        event.preventDefault();
    });

    //navbar close on body click
    $('body').bind('click', function(e) {
        if($(e.target).closest('.navbar').length == 0) {
            // click happened outside of .navbar, so hide
            var opened = $('.navbar-collapse').hasClass('collapse in');
            if ( opened === true ) {
                $('.navbar-collapse').collapse('hide');
            }
        }
    });

    // navbar close on link click
    $('.nav a').on('click', function () {
        $('.navbar-toggle').click()
    });

    $('.details').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('current');
      var displayItem = $(this).closest('.profile-item');
      var hideItems = $('.profile-item').not(displayItem);
      $(displayItem).find('.profile-pic').removeClass('grayscale');
      $(hideItems).each(function () {
        $(this).find('.profile-pic').addClass('grayscale');
      })
      var url = $(this).attr('href');
      $.get(url, function(response) {
        var data = $(response);
        data = data.filter('#primary').html();
        $('#team-details').empty().append(data).slideDown(500);
      })
    })

    $('#team-details').on('click', function () {
      $(this).slideUp(500);
      $('.profile-pic').addClass('grayscale');
      $('.details').removeClass('current');
    })

});
