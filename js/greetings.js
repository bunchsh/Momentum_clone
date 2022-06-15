const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
// 중요한 정보를 담은 것이 아니므로 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings() {
    greeting.innerText = `Hello, ${savedUsername}`; // h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME); // classname 삭제
}

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault(); // 기본 동작 중단
    loginForm.classList.add(HIDDEN_CLASSNAME);  // classname 추가

    /** username 저장 */
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

loginForm.addEventListener("submit", onLoginSubmit);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}