const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault();
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

const link = document.querySelector("a");

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", handleLinkClick);