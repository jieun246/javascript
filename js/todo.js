const toDoForm = document.getElementById("todo-form"); 
const toDoInput = toDoForm.querySelector("input"); // == document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos"; 

const toDos = [];


//! localStorage에 저장 
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 단순 string으로 변환
}

//! 리스트 삭제  
function deleteToDo(e){
    const li = e.target.parentElement; // 클릭된 element의 부모 
    li.remove();
}

//! 리스트 추가 
function paintToDo(newTodo){
    const li = document.createElement("li"); 
    const span = document.createElement("span"); 
    span.innerText = newTodo; 
    const button = document.createElement("button"); 
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button); 
    toDoList.appendChild(li);
}

//! form submit 막기 
function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    toDos.push(newTodo); //! array에 추가 
    paintToDo(newTodo); 
    saveToDos(); //! 호출되는 시점에는 newToDo는 array에 들어 있어야 함
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log("this is the turn of", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY); // localStroage에 저장된 값들을 호출 

if(savedToDos){ //값이 있으면 parsing처리(!=null)
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach((item) => console.log("this is the turn of", item)); // arrow function 
}