slides = Array.from(document.querySelectorAll('.slider'))


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  function slowVideo(){
    document.querySelector('video').playbackRate = 0.6;
  }
slides.forEach((slider, index) =>{

    slider.addEventListener('mousedown', mouseStart(index));

})

function mouseStart(){
    return function(event){
        console.log("Touched");
    }
}

function changeWeb(number){
  if(number == 1){
    window.location.href = "calendar.html";
  }else if(number == 2){
    window.location.href = "weather.html";
  }else if(number == 3){
    window.location.href = "music.html";
  }else if(number == 4){
    window.location.href = "draw.html";
  }
}

