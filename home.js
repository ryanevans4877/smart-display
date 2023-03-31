const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const hoursElementHome = document.querySelector('.hourshome');
const minutesElementHome = document.querySelector('.minuteshome');
const secondsElementHome = document.querySelector('.secondshome');
const body = document.getElementById('test');
  
var timer = setTimeout(function() {
}, 30000);

  document.addEventListener("mousemove", function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
      body.classList.replace('animateup', 'animatedown');
    }, 30000);
  });

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    var date = now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });  
    var greeting = '';
    if (hours >= 0 && hours < 12) {
      greeting = 'Good morning';
    } else if (hours >= 12 && hours < 18) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }
    hoursElement.innerText = padZero(hours);
    minutesElement.innerText = padZero(minutes);
    hoursElementHome.innerHTML = padZero(hours);
    minutesElementHome.innerHTML = padZero(minutes);
    secondsElementHome.innerHTML = padZero(seconds);
    document.getElementById('date').innerHTML = date;
    document.getElementById('greeting').innerHTML = greeting; 
} 
function padZero(value) {
    return value < 10 ? `0${value}` : value;
}
setInterval(updateClock, 1000);

var slider = document.getElementById("slider");
var hammer = new Hammer(slider);
hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
hammer.on("swipeup", function() {
    body.classList.replace('animatedown', 'animateup');
});

function loadHTML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("loadHTML").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "home.html", true);
  xhttp.send();
}

function OpenCalendar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("loadHTML").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "calendar.html", true);
  xhttp.send();
}