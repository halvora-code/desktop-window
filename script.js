const clock = document.getElementById("clock");
const clocks = document.getElementById("clocks");

/*First clock for top*/
function updateClock() {
    const now=new Date();
    let hours= now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours=hours % 12;
    hours= hours ? hours : 12;

    hours= hours <10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent=ampm;
}

updateClock();

setInterval(updateClock, 1000);

/*Second clock for taskbar*/

function UpdateClocks () {
    const now=new Date();
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM' ;

    hours=hours % 12;
    hours= hours ? hours : 12;

    hours=hours <10 ? '0' + hours : hours;
    minutes = minutes <10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    clocks.querySelector('#hours2').textContent = hours;
    clocks.querySelector('#minutes2').textContent = minutes;
    clocks.querySelector('#seconds2').textContent = seconds;
    clocks.querySelector('#ampm2').textContent = ampm;
}

UpdateClocks();

setInterval(UpdateClocks, 1000);
