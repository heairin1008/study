/**
 * 
 */

/*
 * .is() 
 * 특정요소가 선택요소와 관련된 값 또는 현재의 상태 등을 확인, true / false로 값 반환
 * $("선택요소").is("비교할 요소 또는 표현식);
 * ex) $('#ex').is(':empty');
 * id가 ex인 태그가 비어있는지 확인
 * 
 * $('div').children().is('p');
 * div요소의 자식 요소에 p태그가 있는지 확인
 *
 * $('div').is('.test');
 * div요소의 클래스에 해당 클래스명이 있는지 확인
 */

/* 정규식에 자주 사용되는 api
 * .test() 
 * 찾는 문자열이 들어있는지 아닌지 확인 true / false로 반환
 * var string = 'string';
 * var str = $('div');
 * string.test(str);
 * 찾는 문자열.test(해당 요소);
 * 
 * .search()
 * 검색된 문자열의 위치값 반환
 * 
 * var string = 'hello world';
 * var point = string.search('world');
 * result = 6
 * 한 단어씩 0부터 시작해서 w의 위치가 6에 해당되기 때문
 * 
 * .replace()
 * 문자열의 일부를 다른 문자열로 바꿀 때 사용
 * 
 * <div id="str">hello world</div>
 * 
 * var string = $('#str').val();
 * var change = string.replace('world', 'naver');
 * 
 * $('#str).val(change);
 * result = <div id="str">hello naver</div>
 */

/*
 * .hasClass() 
 * 해당 요소의 클래스에 입력한 클래스명이 존재하는지 확인 true / false로 값 반환
 * <div class="popup naver">naver</div>
 * 
 * $('.popup').hasClass('naver');
 * result = true
 * $('.popup').hasClass('google');
 * return = false
 */

/* 
 * .fadeIn()
 * 실행 시 숨겨진 요소를 나타나게 함.
 * 
 * .fadeIn('slow') // 천천히 나타나게 함.
 * 
 * .fadeIn(6000) // 시간설정 6초, 6초동안 나타남
 * 
 * .fadeOut()
 * 실행 시 요소를 사라지게 함.
 * 
 * .fadeOut('slow') // 천천히 사라짐.
 * 
 * .fadeOut(6000) // 시간설정 6초, 6초동안 사라짐
 * 
 * .fadeToggle()
 * 클릭할 때 요소가 있으면 사라지게 하고, 없으면 나타나게 함.
 * 
 * .fadeTo()
 * ex) 
 * .fadeTo('속도', '투명도');
 * 
 * $('#fadeTo').click(function(){
 *  $('#div1').fadeTo('slow', 0.4);
 * });
 * 
 * <button id="fadeTo">click</button>
 * <div id="div1"></div>
 * 
 * 버튼 클릭 시 설정해놓은 투명로도 변경
 */