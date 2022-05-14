const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
// 중요한 정보를 담은 것이 아니므로 대문자로 작성
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    const username = loginInput.value;
    event.preventDefault(); // 기본 동작 중단
    loginForm.classList.add(HIDDEN_CLASSNAME);  // classname 추가

    /** username 저장 */
    localStorage.setItem("username", username);

    greeting.innerText = `Hello ${username}`;   // h1에 텍스트 추가
    greeting.classList.remove(HIDDEN_CLASSNAME);    // classname 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);