/**
 * 로그인 시 쿠키 기억
 */

$(document).ready(function(){
	getId();
	
	$('#saveId').click(function(){
		if($(this).is(':checked')){
			saveId();	
		}
	});
})

// 1. 쿠키 저장하기
function setCookie(name, value, day){
	var today = new Date();
	today.setDate(today.getDate() + day); // 쿠키만료일 설정
	document.cookie = name + '=' + escape(value) + 	"; path = /; expaires = " + today.toGMTString(); + ";"
}

// 2. 아이디 저장 체크박스에 체크하면 아이디 값 가져와서 저장
function saveId(){
	var id = $('#id').val() != null ? $('#id').val() : '';
	setCookie('id', id, 7);
}

// 3. 쿠키 가져오기
function getCookie(name){
	var nameCheck = name + '=';

	if(document.cookie.length > 0){ // 쿠키가 있다면
		value = document.cookie.indexOf(nameCheck); // value의 첫번째 위치
		value += nameCheck.length; // 값을 가져오기 위해 첫번째 위치에서 nameCheck의 길이를 더함
		if(value != null){
			endIndex = document.cookie.indexOf(';', value); // value에서 ; 위치가 어디인지
			if(endIndex == -1) // 만약 ; 가 없다면
				endIndex = document.cookie.length; // 쿠키의 길이를 가져온다.
			return document.cookie.substr(value, endIndex); // 값은 value의 위치에서부터 endIndex의 위치까지의 값을 잘라서 return
		}
	}	
	return '';
}

// 3-1. 쿠키정보가 있다면 id부분에 값 넣기
function getId(){
	var id = getCookie('id');
	
	if(id != null){
		$('#id').val(id);
	}
}

// escape()
// 쿠키값은 세미콜론, 쉼표, 공백을 포함할 수 없기 때문에 그러한 문자를 인코딩하기 위해 escape() 사용
// 반대로 쿠키값을 가져올 때 인코딩된 값을 변환하여 가져오기 위해 unescape()를 사용
