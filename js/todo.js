const toDoForm = document.getElementById("todo-form"); 
const toDoInput = toDoForm.querySelector("input"); // == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

//! form submit 막기 
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);