const nameForm = document.querySelector(".js-name");
const nameInput = nameForm.querySelector("input");
const greetingP = document.querySelector(".js-greeting");

const USER = 'currentUser';
const SHOWING_CON = 'showing'; //showing control

function saveName(text){
    localStorage.setItem(USER, text);
}

function handleSubmit(event){
    const currentValue = nameInput.value;
    saveName(currentValue);
}

function askForName(){
    nameForm.classList.add(SHOWING_CON); // name input display block
    nameForm.addEventListener("submit", handleSubmit);
}

function printGreeting(text){
    nameForm.classList.remove(SHOWING_CON); // name input display none
    greetingP.classList.add(SHOWING_CON);  // greeting h4 display block
    greetingP.innerText = `Hello ${text}`; // show text
}

function greeting(){
    const currentUser = localStorage.getItem(USER);

    if(currentUser === null)
    {
        askForName();
    }
    else
    {
        printGreeting(currentUser);
    }
}

function init(){
    greeting();
}

init();