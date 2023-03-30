const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');

// Set a timer for 5 minutes (in milliseconds)
var timer = setTimeout(function() {
    // Navigate back to the clock HTML page
    location.href = "index.html";
  }, 30000);
  
  // Add an event listener to reset the timer when the user interacts with the application
  document.addEventListener("mousemove", function() {
    // Clear the timer and start it again
    clearTimeout(timer);
    timer = setTimeout(function() {
      // Navigate back to the clock HTML page
      location.href = "index.html";
    }, 30000);
  });

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
  
    hoursElement.innerText = padZero(hours);
    minutesElement.innerText = padZero(minutes);
    secondsElement.innerText = padZero(seconds);
}
  
function padZero(value) {
    return value < 10 ? `0${value}` : value;
}
  
setInterval(updateClock, 1000);