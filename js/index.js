var hr = document.querySelector('.hr');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var digital = document.querySelector('.digital-clock');



setInterval(()=>{

    let day = new Date();

    let hour = day.getHours();
    let minutes = day.getMinutes();
    let seconds = day.getSeconds();


    let hrRotation = (30 * hour) + (0.5 * minutes);
    let mnRotation =  6 * minutes;
    let secRotation = 6 * seconds;


    hr.style.transform=
    `translate(-50%,-100%) rotate(${hrRotation}deg)`;

    minute.style.transform=
    `translate(-50%,-100%) rotate(${mnRotation}deg)`;

    second.style.transform = 
    `translate(-50%,-100%) rotate(${secRotation}deg)`;

    let digitalc=day.toLocaleTimeString();

    digital.innerHTML=digitalc;
})