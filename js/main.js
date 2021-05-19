$(function() {
    
    var $fvHeight = $('.timer_box').outerHeight();

    $(window).scroll(function(){
        if($(window).scrollTop() > $fvHeight ) {
            $(".floating-nav").fadeIn(500).addClass("scroll");
        } else {
            $(".floating-nav").fadeOut(100).removeClass("scroll");
        }
    });
});
