/*============================================
variable 선언
============================================*/ 
const a =5; 
const b =2;
let myName= "jieun";
//console.log(a+b); 
//console.log(a*b); 
//console.log(a/b); 
//console.log("hello "+myName);

myName = "nicolas"; 
//console.log("hello "+myName);

/*============================================
기본 타입 외 다른 데이터 타입
============================================*/
const amIFat = null;
let something; 
//console.log(something, amIFat);

/*============================================
Array(배열)
============================================*/
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1,2, "hello", false, null, true, undefined];
//console.log(daysOfWeek);

// array 안에 요일 더 추가하기
daysOfWeek.push("sun"); 
//console.log(daysOfWeek);

const toBuy = ["potato", "tomato", "pizza"];
/*console.log(toBuy[2]); 
console.log(toBuy[9999]);*/ 

/*============================================
Object(객체)
============================================*/
const player = {
    name : "nico", 
    points: 10,
    fat:true,  
}
//console.log(player); 
//console.log(player.name); 
//console.log(player["name"]);

player.fat = false; 
player.lastname="potato";
//console.log(player);

/*============================================
Function(함수)
============================================*/
function sayHello(nameOfPerson, age){
    console.log("Hello my name is "+nameOfPerson + " and I'm "+age);
}

//sayHello("nico", 10);
//sayHello("dal", 23);
//sayHello("lynn", 21);

function plus(a, b){
    console.log(a+b);
}
function divide(a,b){
    console.log(a/b);
}
//plus(8,60);
//divide(98,20);

const player2 = {
    name : "nico", 
    sayHello : function(otherPersonName){
        console.log("hello! "+otherPersonName);
    }
}

//console.log(player2.name);
//player2.sayHello("lynn");

/*============================================
과제) calculator라는 object 만들기
함수기능(덧셈, 뺄셈, 나누기, 제곱)
============================================*/
const calculator = {
    add : function(a, b){
        return a+b;
    },
    minus : function(a, b){
        return a-b;
    }, 
    divide : function(a, b){
        return a/b;
    }, 
    squre : function(a, b){
        return a**b;
    }
}

const add = calculator.add(1,2);
//console.log(add);
//calculator.minus(50,20); 
//calculator.divide(982,42); 
//calculator.squre(2,4)


//const age = 96; 
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2; 
}

//const krAge = calculateKrAge(age); 
//console.log(krAge);

/*============================================
condition 
============================================*/
const age = parseInt(prompt("How old are your?"));

//console.log(isNaN(age));
//if(isNaN(age)){
//    console.log("Please write a Number");
//}else{
//    console.log("Thank you for writing your age.");
//}

if(isNaN(age) || age < 0){
    console.log("Please write a real positive Number");
}else if(age < 18){
    console.log("You are too youg.");
}else if(age >= 18 && age <=50){
    console.log("You can drink"); 
}else if(age > 50 && age<=80){
    console.log("You should exercise");
}else if(age > 80){
    console.log("You cand do whatever you want."); 
}