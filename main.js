(function() {


    $("p").html($("span").html());

    var $fvHeight = $('.timer_box').outerHeight();

    $(window).scroll(function(){
        if($(window).scrollTop() > $fvHeight ) {
            $(".floating-nav").fadeIn(500).addClass("scroll");
        } else {
            $(".floating-nav").fadeOut(100).removeClass("scroll");
        }
    });

    'use strict';
  
    var timer = document.getElementById('timer');
    var startTime;
    var timeLeft;
    var timeToCountDown = 1800 * 1000;
  
    function updateTimer(t) {
      var d = new Date(t);
      var m = d.getMinutes();
      var s = d.getSeconds();
      var ms = d.getMilliseconds();
      m = ('0' + m).slice(-2);
      s = ('0' + s).slice(-2);
      ms = ('00' + ms).slice(-3);
      timer.textContent = m + ':' + s + '.' + ms;
    }
  
    function countDown() {
      setTimeout(function() {
        // var elapsedTime = Date.now() - startTime;
        // timeLeft = timeToCountDown - elapsedTime;
        timeLeft = timeToCountDown - (Date.now() - startTime);
        // console.log(timeLeft);
        updateTimer(timeLeft);
        countDown();
      }, 10);
    }
  
    window.onload = function onLoad() {
      startTime = Date.now();
      countDown();
    };

  })();