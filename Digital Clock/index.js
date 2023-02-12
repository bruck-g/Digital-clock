function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var ampm = document.getElementById('ampm');

    if(hrs >= 12){
        ampm.innerHTML = 'PM';
    }else{
        ampm.innerHTML = 'AM';     
    }

    if(hrs > 12) {
        hrs = hrs - 12
    }

    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}

setInterval(displayTime, 10);





/* const hourEL = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById ("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12) {
       h = h - 12;
       ampm = "PM";
    }       

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    

    hourEL.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() =>{
        updateClock()
    }, 1000)
}

updateClock();

*/