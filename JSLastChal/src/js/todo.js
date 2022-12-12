const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEYWORD = "toDos";

function saveToDos() {
    localStorage.setItem(TODOS_KEYWORD, JSON.stringify(toDos));
}

function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    console.log(toDos);
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const button = document.createElement("button");

    label.innerText = newToDoObj.text;
    li.id = newToDoObj.id;
    li.appendChild(label);

    button.innerText = "❌";
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);

    toDoList.appendChild(li);

    toDos.push(newToDoObj);
    saveToDos();
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: `${newToDo} `,
        id: Date.now()
    }
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEYWORD);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(paintToDo);
}