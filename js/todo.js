const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

function handleTodoList(event) {
    event.preventDefault();
}

toDoForm.addEventListener("submit", handleTodoList);