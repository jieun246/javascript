const clock = document.querySelector("h2#clock"); 

function sayHello(){
    console.log("hello"); 
}

function getClock(){ //시간 셋팅
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 5000); // 매n초마다 함수 실행
//setTimeout(sayHello, 5000); // n초 후에 함수 실행 
getClock();
setInterval(getClock, 1000); //매초마다 새로운 Date object를 생성 