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
