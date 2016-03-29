$(document).ready(function() {

$("ul li").on("click", function(){
   $(this).addClass("activate");
   $(this).siblings().removeClass("activate");
});
    
           $(window).bind('scroll', function() {
           var navHeight = $( window ).height();
                 if ($(window).scrollTop() > navHeight - 40) {
                     $('nav').addClass('navbar-fixed-top');
                 }
                 else {
                     $('nav').removeClass('navbar-fixed-top');
                 }
            });


/*$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});*/
});
    