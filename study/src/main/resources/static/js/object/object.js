/**
 * 객체
 * - 내장 객체
 * - 문서 객체 모델(DOM)
 * - 브라우저 객체 모델
 * - 사용자 정의 객체 
 */

// 속성 : 객체에서 값을 담고 있는 정보
// 속성은 내장 객체에도 만들어져있음
// 속성 값을 가져올 때는 객체 이름 뒤에 마침표 + 속성 이름으로 가져온다.
//ex) 웹 브라우저 콘솔에서 실행
//navigator.vendor
// -> Google Inc.

// 메서드 : 객체가 어떻게 동작할지를 선언해놓은 함수
// ex) alert : f alert() -> 객체 안에 정의된 함수 => 메서드
// 메서드를 호출할 때도 속성 값을 가져올 때와 마찬가지로 마침표를 이용
// ex) window.alert("hi");
// window 객체는 모든 객체를 품고 있는 최상위 객체 -> window 객체의 함수를 실행할 때는 함수 이름만 사용해서 실행해도 된다.
// ex) alert();

// 객체 인스턴스
// 똑같은 새로운 객체를 만들 때는 new 예약어 사용
var now = new Date(); // 1. Date 객체의 인스턴스 생성
// 2. now변수에 저장
// now는 Date 객체의 인스턴스이기 때문에 Date 객체에서 정의한 속성과 함수를 모두 사용 가능
now.toLocaleString();
// -> "2021. 4. 3. 오후 3:48:35"

//Math 객체
// 수학 연산 함수를 가지고 있는 내장 객체
// abs() : 숫자의 절댓값을 반환 / cbrt() : 숫자의 세제곱근을 반환
// ceil() : 인수보다 크거나 같은 수 중에서 가장 작은 정수를 반환 / floor() : 인수보다 작거나 같은 수 중에서 가장 큰 정수를 반환
// random() : 0과 1 사이의 무작위 수(난수) 반환 / round() : 숫자에서 가장 가까운 정수를 반환
// ceil, floor, round는 숫자의 소수점 이하를 버린다.
// Math객체는 따로 인스턴스를 생성하지 않고 바로 속성이나 함수를 사용한다.

// 사용자 정의 객체
// 사용자가 직접 만든 객체

// 객체 생성 방법
// 1. 리터럴 표기법을 사용
//ex)
var book = { // 객체
	title : "자바스크립트", // title - 속성명 , "자바스크립트" - 속성값
	author : "고쌤",
	pages : 500,
	price : 15000,
	info : function(){
		alert(this.title + "책의 분량은 " + this.pages + "쪽입니다."); // 함수
	}
}

book.title
// -> 자바스크립트
book.info()
// -> 자바스크립트책의 분량은 500쪽입니다.

// 객체에 속성 추가
book.field = "IT";
// book에 field라는 속성명과 IT라는 속성값이 추가된다.

// 2. 생성자 함수를 사용
// function 예약어 사용
// 객체의 속성과 함수를 정의할 때는 this 예약어 사용
// ex)
function Book(author, pages, price, title){
	this.author = author;
	this.pages = pages;
	this.price = price;
	this.title = title;
}

var jsBook = new Book("홍길동", 500, 15000, "자바스크립트");
// -> Book {author : "홍길동", pages : 500, price : 15000, title : "자바스크립트"}

// 브라우저 객체 모델
// 자바스크립트를 통해 브라우저 창을 관리할 수 있도록 브라우저 요소를 객체화해 놓은 것
// 자주 사용하는 브라우저 내장 객체
Window // 브라우저 창 안에 존재하는 모든 요소의 최상위 객체
Document // 웹 문서에서 <body> 태그를 만나면 만들어지는 객체, HTML 문서 정보를 가지고 있다.
History // 현재 창에서 사용자의 방문 기록을 저장하고 있는 객체
Location // 현재 페이지에 대한 URL 정보를 가지고있는 객체
Navigator // 현재 사용중인 웹 브라우저 정보를 가지고 있는 객체
Screen // 현재 사용중인 화면 정보를 다루는 객체

// ex)
window.innerWidth // 내용 영역의 너비
window.innerHeight // 내용 영역의 높이
window.outerWidth // 브라우저 창의 바깥 너비
window.outerHeight // 브라우저 창의 바깥 높이

// open() 함수
// 1. 링크를 누르거나 웹 문서를 불러오자마자 자동으로 새 창이 뜨는 동작
// ex)
window.open("https://www.naver.com");
// 2. 타킷 - 새 창의 타킷이나 윈도우 이름을 지정
window.open("https://www.naver.com", "_self") // self -> 현재 창에 새 창이 표시
// 3. 알림 창으로 표시할 때의 노비나, 높이 위치 등을 지정
window.open("https://www.naver.com", "", "left=0, top=0, width=300, height=300");

//resizeBy(), resizeTo() : 크기 조절 함수
// resizeBy() : 현재 브라우저 창의 크기를 기준으로 너비와 높이에 값을 더한다.
var newWin = window.open(" ", " ", "width=300, height=300");
newWin.resizeBy(100, 100); // 가로, 세로 100px씩 늘리기
newWin.resizeTo(-100, -100); // 가로, 세로 100px씩 줄이기
// resizeTo() : 최종 크기를 지정한다
// resizeTo()는 음수 사용 불가

// moveBy(), moveByTo() : 위치 조절 함수
// x크기와 y크기를 매개변수로 사용
// moveBy() : 현재 위치를 기준으로 가로로 x, 세로로 y픽설만큼 올리기
// moveTo() : 화면의 왼쪽 위 모서리를 기준으로 가로로 x, 세로로 y픽셀만큼 옮긴다.
newWin.moveBy(500, 500);
newWin.moveTo(0, 0);
