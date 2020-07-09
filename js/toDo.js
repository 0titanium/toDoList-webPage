const toDoForm = document.querySelector(".js-toDo");
const toDoInput = toDoForm.querySelector("input");
const toDoUl = document.querySelector(".js-toDoList");

const DO_LIST = "LIST_ARR";
const LIST_ARR = [];

function saveList(){
    localStorage.setItem(DO_LIST, JSON.stringify(LIST_ARR));
}

function deleteList(event){
    const btn = event.target;
    const li = btn.parentNode;
    const id = LIST_ARR.indexOf(li.text);
    toDoUl.removeChild(li);
    LIST_ARR.splice(id, 1);
    saveList();
}

function printList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const liId = LIST_ARR.length;
    const liObj ={
        text: text,
        id: liId
    }
    const delBtn = document.createElement("button");
    
    delBtn.addEventListener("click", deleteList);
    delBtn.innerHTML = "&#10060";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoUl.appendChild(li);
    LIST_ARR.push(liObj);
    saveList();
} 

function handleSubmit(event){
    event.preventDefault(); // 입력 후 새로운 form 생성방지?
    const currentValue = toDoInput.value;

    printList(currentValue);

    toDoInput.value = "";
}

function makeList(){
    const toDoList = localStorage.getItem(DO_LIST);
    const parsedList = JSON.parse(toDoList)
    
    if(toDoList !== null){
        for(let i=0; i<parsedList.length; i++){
            printList(parsedList[i].text);
        }
    }
}

function init(){
    makeList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();