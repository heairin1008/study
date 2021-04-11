/**
 * 가위바위보 게임
 */
var rps = ["가위", "바위", "보"]; // 2개 이상의 함수에서 사용하기 때문에 전역으로 선언
// 화면로드
$(document).ready(function(){
	// 1. 가위바위보 버튼 출력
	// 1-1. append를 사용해 button 출력
	// 1-1-1. for(var i in rps)
	for(var i in rps){
		// 1-2-1-1. button value에 rps입력 및 div 안에 버튼 출력
		// game : div id
		$('#game').append('<input type="checkbox" name="choice" value="'+ rps[i] +'">' + rps[i]);
	}
	$('#game').append('<br><button id="click">결과보기</button>');
	
	// 2. 이미지 또는 버튼 클릭
	// check박스 클릭 시 값 가져오기 
	// check박스는 click이벤트 적용해야 값을 가져올 수 있음
	$('input[name="choice"]').click(function(){
		// check박스 하나만 체크되로록 수정
		if($(this).is(':checked')){
			$('input[type="checkbox"][name="choice"]').prop("checked", false); // 체크한 박스를 제외한 나머지 체크박스에 false 추가
			$(this).prop("checked", true); // 체크한 박스에 true 추가
		}

		var checkValue = $(this).val();
		// 2-1. 버튼클릭 이벤트
		$('#click').click(function(){
			setGameResult(checkValue);
		});
	});
});

// 2-1. 버튼클릭 이벤트 함수
function setGameResult(checkValue){
	// system은 가위,바위,보 중에 랜덤으로 값을 출력하기 위해 랜덤수 선언 -> Math.random() 함수 사용
	var random = Math.floor(Math.random() * rps.length); // rps에서 랜덤으로 출력해야하기 때문에 rps의 길이에서 랜덤으로 출력
	var system = rps[random];
	const resultContent = '<span>user : ' + checkValue + ' / system : ' + system + '</span> <br>';
	
	// 2-1-1. 사용자가 선택한 값(user)과 랜덤으로 선택한 값(system) 비교
	// 2-1-1-1. user가 이길 경우
	if(checkValue == '가위' && system == '보' || checkValue == '바위' && system == '가위' || checkValue == '보' && system == '바위'){
		// 만약 div 안에 그 전 결과가 있을 경우 div 하위태그 삭제
		$('#result').empty();
		// user 선택값과 system 선택값 출력
		$('#result').append(resultContent);
		$('#result').append('<span>이겼습니다.</span>');
	}else if(checkValue == system){ // 2-1-1-2. 비길 경우
		$('#result').empty();
		
		$('#result').append(resultContent);
		$('#result').append('<span>비겼습니다.</span>');
	}else{ // 2-1-1-3. 그 외(user가 질 경우)
		$('#result').empty();
		
		$('#result').append(resultContent);
		$('#result').append('<span>졌습니다.</span>');
	}
}
