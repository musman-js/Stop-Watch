var hours = document.getElementById("hour");
var minitue = document.getElementById("min");
var seconds = document.getElementById("sec");
var milisecond = document.getElementById("milisec");

var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var clear;


function timer() {
    milisec++
    milisecond.innerHTML = milisec;
    if (milisec >= 100) {
      sec++
       if(sec > 9){
        seconds.innerHTML = sec
       }else{
        seconds.innerHTML =  "0" + sec
        }
       milisec = 0;
    }


    else if (sec >= 60) {
        min++
        if(min> 9){
            minitue.innerHTML = min;
        }else{
            minitue.innerHTML = "0" + min
        }
        sec = 0
    }


    else if (min >= 60) {
        hour++
        if(hour > 9){
         hours.innerHTML = hour;
        }
         else{
            hours.innerHTML = "0" + hour
         }
        min = 0;
    }
}



function start() {
    var start = document.getElementById("startbutton");
    clear = setInterval(timer, 10);
    start.disabled = true;
}


function stop() {
    var start = document.getElementById("startbutton");
    clearInterval(clear)
    start.disabled = false;
}


function reset() {
    document.getElementById("hour").textContent = "00";
    document.getElementById("min").textContent = "00";
    document.getElementById("sec").textContent = "00";
    document.getElementById("milisec").textContent = "00";
    sec = 0;
    stop();
}

