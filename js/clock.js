const clockDiv = document.querySelector(".js-clock");
const clockP = clockDiv.querySelector("p");

function setClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    if(hours < 12)
    {
        clockP.innerText = `AM ${hours < 10 ? `0${hours}` : hours}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds}`;
    }
    else
    {
        clockP.innerText = `PM ${hours-12 < 10 ? `0${hours-12}` : hours-12}:${
            minutes < 10 ? `0${minutes}` : minutes}:${
                seconds < 10 ? `0${seconds}` : seconds}`;
    }
}

function init(){
    setClock();
    setInterval(setClock, 1000);
}

init();