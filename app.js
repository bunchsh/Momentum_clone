const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    loginForm.classList.add("HIDDEN_CLASSNAME");
}

loginForm.addEventListener("submit", onLoginSubmit);