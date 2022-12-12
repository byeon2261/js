const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEYWORD = "username";

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreeting(username);
    localStorage.setItem("username", username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello. ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);    

const savedUserName = localStorage.getItem(USERNAME_KEYWORD)

if (savedUserName) {
    paintGreeting(savedUserName);
} else {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}