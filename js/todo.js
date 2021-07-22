const toDoForm = document.getElementById("todo-form"); 
const toDoInput = toDoForm.querySelector("input"); // == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

//! 리스트 삭제  
function deleteToDo(e){
    const li = e.target.parentElement; // 클릭된 element의 부모 
    li.remove();
}

//! 리스트 추가 
function patinToDo(newTodo){
    const li = document.createElement("li"); 
    const sapn = document.createElement("span"); 
    sapn.innerText = newTodo; 
    const button = document.createElement("button"); 
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(sapn); 
    li.appendChild(button); 
    toDoList.appendChild(li);
}

//! form submit 막기 
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    patinToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);