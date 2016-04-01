$(document).ready(function () {
    
    //active class for nav buttons
    $("ul li").on("click", function () {
        $(this).addClass("activate");
        $(this).siblings().removeClass("activate");
    });
    
    //moves navbar to top of window on scroll down
    $(window).bind('scroll', function () {
        var navHeight = $(window).height();
        if ($(window).scrollTop() > navHeight - 20) {
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
    
    //bouncing scroll down button
    setInterval(function () {
        var btn = $('.btn-container');
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
        btn.animate({top: "10px"});
        btn.animate({top: "-10px"});
    }, 4000);
});