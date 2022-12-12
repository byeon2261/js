const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = []

const TODO_KEYWORD = "toDos";

function saveToDos(){
    //localStorage.setItem("toDos", toDos);
    // JSON.stringify() <<< 리 스트형식으로 변형
    // stringify : 배열을 문자로, parse : 문자를 배열로 변경.
    localStorage.setItem(TODO_KEYWORD, JSON.stringify(toDos));
}

function deleteToDo (event) {
    console.log(event);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
}

function paintToDo(newToDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newToDoObj.text;
    li.id = newToDoObj.id;
    li.appendChild(span);

    button.innerText = "❌";
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);

    toDoList.appendChild(li);

    //toDos.push(span.innerText);
    toDos.push(newToDoObj);
    console.log(newToDoObj);
    saveToDos();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now()
    }
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEYWORD);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // 화살표 함수
    // parsedToDos.forEach(element => 
    //     paintToDo(element)
    // );
    // javasctipt에서 자동으로 배열 값을 순서대로 보내준다.
    parsedToDos.forEach(paintToDo);
}