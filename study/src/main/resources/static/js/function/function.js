/**
 * 함수 선언 : function 예약어 사용
 */
function addNumber(){
	var sum = 10 + 20;
	console.log(sum);
	
	alert(sum); // html에 알림창으로 출력하기 위해 alert 사용
}

addNumber();

// 함수 선언, 실행 순서
// 웹 브라우저가 자바스크립트 소스를 해석할 때 함수 선언 부분을 가장 먼저 해석
// 어느 곳이든 함수를 선언 -> 선언한 위치와 상관없이 함수 실행 가능
// 즉, 함수 선언 위치는 프로그램 흐름에 영향을 주지 않는다.

//html
// <button onclick="addNumber()">덧셈 계산하기</button>
// js파일을 연결해서 사용하기 위해서는 <script src="js/function.js"></script> 추가

// 함수를 여러 번 사용하기 위해서 매개변수 이용

var num1 = parseInt(prompt("첫 번째 숫자 : "));
var num2 = parseInt(prompt("두 번째 숫자 : ")); // prompt() -> 프롬프트 창에서 입력받기

sumNumber(num1, num2); // 입력받은 첫번째 숫자와 두 번째 숫자를 더하는 함수 호출

// 함수 선언
function sumNumber(a, b){ // (a, b) -> 매개변수
	var sum = a + b;
	console.log(sum);
}

// [ES6] 함수의 매개변수 기본 값 지정
function multiple(a, b=5, c=10){
	return a * b + c;
}

multiple(5, 10, 20);
// 70 : a=5, b=10, c=20 입력받아 계산
multiple(10, 20);
// 210 : a=10, b=20을 입력받고 c는 기본으로 지정한 10으로 입력해 계산
multiple(30);
// 160 : a=30을 입력받고 b, c는 기본으로 지정한 5, 10으로 입력해 계산

// 익명함수
// - 이름이 없는 함수
// - 함수 자체가 식이기 때문에 익명함수를 변수에 할당할 수 있다.
// - 다른 함수의 매개변수로도 사용할 수 있다.
var add = function(a, b){
	return a + b;
}

// 함수 사용
var sum = add(10, 20);
sum
// 30

// 즉시 실행 함수
// 함수를 정의함과 동시에 실행하는 함수
// 즉시 실행 함수는 식이기 때문에 소스 끝에 세미콜론이 붙는다.
(
	function(){
		//...
	}
)();
// or
(
	function(){
		//....
	}
());

//ex)
var result = (function(){
	return 10 + 20;
}()); // 30이 출력된다.

var result1 = (function(a, b){
	return a + b;
}(30, 20));
console.log(result1); // 50이 출력된다.

// [ES6] 함수의 화살표 표기법
// function 예약어를 사용하지 않는다.
// 이름없는 함수를 변수에 지정할 때 많이 사용한다.
// 매개변수를 지정하지 않을 때는 ()만 작성
//1) 매개변수가 없을 경우
var hi = function(){
	return "hi"; 
}
hi();
// =>
let hi = () => "hi";
hi();

// 2) 매개변수가 1개일 경우
var greet = function(name){
	return name + "님, 안녕하세요";
}
greet("박지민");
// =>
let greet = name => `${name}님, 안녕하세요.`;
greet("박지민");

// 3) 매개변수가 2개 이상일 경우
var add = function(a, b){
	return a + b;
}
add(10, 20);
// =>
let add = (a, b) => a + b;
add(10, 20);
