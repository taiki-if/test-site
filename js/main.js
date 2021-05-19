$(function() {

    $(window).scroll(function(){
        if($(window).scrollTop() > 40 ) {
            $(".timer_box__copy, .timer_box__note, .timer_box__items, .ms_timer, .timer_box__time").addClass("scroll");
        } else {
            $(".timer_box__copy, .timer_box__note, .timer_box__items, .ms_timer, .timer_box__time").removeClass("scroll");
        }
    });

    'use strict';
    
    window.onload = function() {
      var minute = 30;
      var sec = 00;
      var msec = 00;
      setInterval(function() {
        document.getElementById("timer").innerHTML = "<div class='inner_timer'>" + ("0" + minute).slice(-2) + " : " + ("0" + sec).slice(-2) + " : " + ("0" + msec).slice(-2) + "</div>";
        msec--;
        if (msec == -1) {
          sec--;
          msec = 99
          if (sec == -1) {
            minute--;
            sec = 59;
            if (minute == -1) {
              minute = 0;
              sec = 0;
              msec = 0;
            }
          }
        }
      }, 10);
    }
    
    
  
    // var timer = document.getElementById('timers');
    // var startTime;
    // var timeLeft;
    // var timeToCountDown = 1800 * 1000;
  
    // function updateTimer(t) {
    //   var d = new Date(t);
    //   var m = d.getMinutes();
    //   var s = d.getSeconds();
    //   var ms = d.getMilliseconds();
    //   m = ('0' + m).slice(-2);
    //   s = ('0' + s).slice(-2);
    //   ms = ('00' + ms).slice(-3);
    //   timer.textContent = m + ':' + s + '.' + ms;
    // }
  
    // function countDown() {
    //   setTimeout(function() {
    //     // var elapsedTime = Date.now() - startTime;
    //     // timeLeft = timeToCountDown - elapsedTime;
    //     timeLeft = timeToCountDown - (Date.now() - startTime);
    //     // console.log(timeLeft);
    //     updateTimer(timeLeft);
    //     countDown();
    //   }, 10);
    // }
  
    // window.onload = function onLoad() {
    //   startTime = Date.now();
    //   countDown();
    // };


  })();