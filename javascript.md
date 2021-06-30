1. html 
- 브라우저는 html문서로 쓰고 읽고 돌아감
- 자바스크립트와 css파일을 가져옴
- import 위치 : 자바스크립트 > 하단, css > 하단 

2. 데이터 타입 
- 숫자타입 : integer, float
- 텍스트타입 : string
- boolean타입 : true, false 
- null : 아무것도 없음 
- undefined : variable은 있으나 정의되지 않음 

3. Variables
- 값을 저장하거나 유지하는 역할 
- 변수명 지정 : 공백X, 단어별 연결 구분은 첫글자를 대문자로 예) myName
- const : 상수로 값이 변경X 
- let : 변수로 중간에 변경 가능 
 - var : 규칙이 없기 때문에 업데이트가 가능한지 인식되는지 알 수 없음(=상수인지 변수인지를 인식X)
 - var와 다른 점 : block scope, dead zone 
* 기본적으로 const를 쓰고 필요할 때만 let을 쓰되, var은 쓰지 말 것

4. Arrays 
- 기본적이고 필수적인 데이터 구조로, 하나의 variable안에 데이터의 list를 가지는 것 
- 시작과 끝에 []로 표시, 각각의 항목은 쉼표로 구분. 예) const a = [1,2,3,4,5,6];
- 값은 number, string, undefined, null, true, false 모든 타입을 넣을 수 있음
- 특정 값 확인 : variable[index] 예) a[2]; 

5. Object 
- 여러 속성을 하나의 변수에 저장할 수 있도록 해주는 데이터 타입. key : value형태로 이루어짐 > array는 연관되어 있는 property들을 그룹으로 묶어서 저장해야 할 때는 용이X
- 시작과 끝에 {}로 표시, 중괄호 안에 property 명시 
예) const player = {
    name : "aaa",
    points : 10, 
    check : false
} > 각 property 업데이트는 가능하나, object 전체를 업데이트 에러(const)
- 호출, 추가, 업데이트 : xxx.xxx 형태로 가능 
예) console.log("ddd"); player.name="bbbb"; player.lastname="ccc";

6. Function 
- 어떤 코드를 캡슐화해서 실행을 여러번 반복
- 형태 : function 함수명(){}, 함수 실행 : ()  
- 데이터를 전달 방법 : 괄호 안에 데이터를 전달 예) add(1, 2)
- 데이터를 받는 방법 : 함수 ()안에 파라미터를 지정 예) fuction add(a, b)
- 함수 밖에서 파라미터를  호출하면 에러 발생(파라미터는 블럭 밖에 존재X)
- Object 안에 function을 property을 지정 가능 
예) const calculrator = {
    add : function(a, b){
        console.log(a+b); 
    }
}

7. Return 
- function을 실행하고 나서 반환값(함수 결과) 리턴
- function은 return을 하면 실행 끝 
- console은 단순히 console에서만 보여주는 것뿐, 실질적으로 값을 저장하거나 화면에 출력X 

8. Conditionals 
- if ~ else문을 이용하여 조건에 따라 결과값을 다르게 나오게 함 
* prompt : 사용자가 answer를 줄때까지 js가 작동안하고 기다림. 오래된 함수로 요즘에는 잘 쓰지는 않음
* typeof : 데이터 타입 확인 
* parseInt : integer로 형변환. 단 숫자만 가능 
* isNaN() : NaN인지 아닌지를 구별하는 함수 
- && : AND, || : OR 

9. javascript on the brwoser Document
- document : 브라우저에 이미 존재하는 object(html을 가리키는 객체). js에서 접근하고 읽고 쓸 수 있음 예) document.title, document.title = "Hi" 
             브라우저가 html정보가 아주 많이 들어 있는 document라는 object를 전달 
* console.dir(document) : html 객체 읽기 >> 많은 object들이 존재
- searching element : getElementByClassName 등을 이용하여 html의 element를 찾을 수 있음
  getElementById : string형태로 해당 아이디의 element. 값이 여러개 있는 경우, 첫번째꺼만 받아옴
  getElementByClassName : 해당 class의 element. 여러개 있는 경우, array 형태로 받아옴  
  getElementByTagName : 해당 tag의 element. 여러개 있는 경우, array 형태로 받아옴  
  querySelector : element를 css 방식으로 검색. 여러개 있는 경우, 첫번째꺼만 받아옴. id나 class가 불분명할 때는 querySelector를 이용 
  querySelectorAll : selector안의 조건에 부합하는 모든 element를 가져옴  
- event : addEventListner를 이용하여 click 등의 이벤트가 발생할 시 후처리(자동) 예) element의 style 변경 
  title.addEventListener("click", handleTitleClick) >> 첫번째 arg : 이벤트 명시, 두번째 arg : event가 발생하면 호출할 function 전달(function만 넘겨주고 실행X(괄호 입력X))
  다양한 event : window의 resize, copy, offline, online(wifi) 등이 있음 [이벤트 상세](https://developer.mozilla.org/ko/docs/Web/API/Event)
* document가 html이 app.js를 load하기 때문에 존재. 그 다음에 browser가 document에 접근 
- js에서 css 처리 가능하나, style에서 css 처리하는 게 나음 
  classNme : 클래스명 변경. 클래스가 변경되기 때문에 기존에 있던 클래스가 사라짐. getter,setter
  classList : 클래스를 목록처럼 관리. 클래스를 추가하거나 삭제할 경우, classList이용하는 게 나음 [classList](https://developer.mozilla.org/ko/docs/Web/API/Element/classList)
