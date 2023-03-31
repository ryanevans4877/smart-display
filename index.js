const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const body = document.getElementById('fade');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
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
  document.getElementById('date').innerHTML = date;
  document.getElementById('greeting').innerHTML = greeting;


}

function padZero(value) {
  return value < 10 ? `0${value}` : value;
}

setInterval(updateClock, 1000);


const slider = document.querySelector('.slider');
const sliderRail = document.querySelector('.slider-rail');
const sliderThumb = document.querySelector('.slider-thumb');
let isDragging = false;
let startPosition = null;

sliderThumb.addEventListener('mousedown', (event) => {
  isDragging = true;
  startPosition = event.clientX - slider.offsetLeft;
  sliderThumb.classList.add('active');

  if (sliderThumb.offsetLeft >= maxDistance) {
    window.location.href = 'newpage.html';
  } 
});

document.addEventListener('mousemove', (event) => {
  if (!isDragging) return;

  const newPosition = event.clientX - slider.offsetLeft - startPosition;
  const maxDistance = sliderRail.clientWidth - sliderThumb.clientWidth;

  sliderThumb.style.left = `${Math.min(maxDistance, Math.max(0, newPosition))}px`;
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;

  const maxDistance = sliderRail.clientWidth - sliderThumb.clientWidth;

  if (sliderThumb.offsetLeft >= maxDistance - 20) {
    body.classList.add('fade-in');
    setTimeout(() => {
      // Change to the new page
      window.location.href = 'home.html';
    }, 200);
  } else {
    sliderThumb.style.left = '0';
    sliderThumb.classList.remove('active');
  }

  isDragging = false;
});




