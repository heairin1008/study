/**
 * rpsGame.js 에서 사용한 jquery 정리
 */

// .append()란?
// 원하는 태그 안에 글씨 또는 태그를 동적으로 입력이 가능하다.

// ex)
$(a).append(b);

// a : 원하는 태그의 class명 또는 id명을 입력(class는 .class명 / id는 #id명)
// b : 입력하고싶은 내용

// .prop()란?
// 지정한 선택자에서 속성을 가져오거나 추가가 가능하다.

// ex)
$('input[type="checkbox"][name="choice"]').prop("checked", false);
// checkbox 타입, name이 choice인 input타입에 checked 속성을 false로 추가한다.

// .attr()도 속성을 가져오거나 추가가 가능하다.
// 차이 : .attr()은 html입장에서의 속성이고 .prop()는 javascript 입장에서의 속성을 뜻한다.

// Math.random()이란?
// 0부터 1 미만까지 무작위로 수를 출력
// 만약 0부터 3 미만의 수를 무작위로 출력하려면 Math.random()에 3을 곱한다.
// ex) 
var random = Math.random() * 3;

// 하지만 Math.random()은 소수점 이하까지 출력, 정수만을 출력하기 위해서는 소수점 이하를 내림하는 Math.floor() 함수 사용
// ex) 
var random = Math.floor(Math.random() * 3);

// 태그 하위태그 삭제
// empty(), remove() 차이
// empty()는 해당 태그의 하위태그들을 삭제하는 함수
// remove()는 하위태그들을 포함하여 해당 태그 전체를 삭제하는 함수
// ex)
$('#result').empty();

$('#result').remove();