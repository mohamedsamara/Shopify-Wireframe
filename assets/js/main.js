// banner slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('slide');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// timer countdown

function calculateTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    total: t,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function startTimer(id, endtime) {
  var clock = document.getElementById(id);
  var hoursBlock = clock.querySelector('.hours');
  var minutesBlock = clock.querySelector('.minutes');
  var secondsBlock = clock.querySelector('.seconds');

  function updateTimer() {
    var time = calculateTimeRemaining(endtime);

    hoursBlock.innerHTML = ('0' + time.hours).slice(-2);
    minutesBlock.innerHTML = ('0' + time.minutes).slice(-2);
    secondsBlock.innerHTML = ('0' + time.seconds).slice(-2);

    if (time.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateTimer();
  var timeinterval = setInterval(updateTimer, 1000);
}

var promotionEndTime = new Date(
  Date.parse(new Date()) + 1 * 24 * 60 * 60 * 1000
);
startTimer('promotion-timer', promotionEndTime);
