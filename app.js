/*const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"; 

const link = document.querySelector("a"); 

//h1 표시 및 글자 출력
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//submit event 
function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); 
    paintGreetings(username);
}

//link event
function handleLinkClick(event){
    event.preventDefault(); 
    
}
//link.addEventListener("click", handleLinkClick);

//local storage 관련 처리
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings 
    paintGreetings(savedUsername);
}