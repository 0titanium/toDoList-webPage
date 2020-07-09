const body = document.querySelector("body");

const IMG_NUM = 5;

function loadBack(imgNum){
    const img = new Image();
    img.src= `img/${imgNum+1}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}

function init(){
    const randomNumber = Math.floor(Math.random() * IMG_NUM);
    loadBack(randomNumber);
}

init();