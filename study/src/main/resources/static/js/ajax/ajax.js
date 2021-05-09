/*
    Ajax는 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미
    (Asynchronous JavaScript and XML)

    서버로부터 웹페이지가 반환 -> 화면 전체를 갱신해야함.
    하지만 페이지 일부만을 갱신하여 동일한 효과를 볼 수 있도록 하는 것이 ajax

    - 페이지 전체를 로드, 렌더링할 필요가 없다.
    - 갱신이 필요한 일부만 로드하여 갱신하면 되기 때문에 빠른 퍼포먼스와 부드러운 화면 표시 효과를 기대할 수 있다.
    
    서버는 html, xml, json 등을 반환
    이 중 ajax를 위한 데이터 형식은 json(javascript object notation)을 사용하는 것이 일반적이다.

    - browser의 버전이 낮거나 ajax를 지원하지 않는 browser에서는 ajax 통신을 할 수 없다.
    - 화면의 이동 없이 데이터를 송수신하기 때문에 보안상에도 문제를 일으킬 수 있다.
    - script기반이기 때문에 디버깅이 불편해서 어려움이 발생할 수 있다.

    기본 사용방법

    $.ajax({
        type : '요청 메소드 방식',
        url : '요청 url 주소를 입력',
        data : {
            // 보낼 데이터
        },
        dataType : '서버가 요청 url을 통해서 응답하는 내용의 타입',
        success : function(result){
            // 성공했을 때 호출할 콜백 지정
            // result : 응답데이터
        },
        error : function(a, b, c){
            // 에러났을 때 호출할 콜백 지정
        }
    });

    type : http 전송 method 지정 (GET / POST)
    dataType : Ajax를 통해 호출한 페이지의 return 형식 (xml, json, html, text, jsonp, script)
    - xml : xml문서로 파싱, 콜백에 결과로 생성된 xml dom을 전달
    - html : 응답 텍스트는 처리과정 없이 콜백 함수로 전달
    - json : 응답 테스트는 JSON 문자열로 평가, 생성된 객체는 콜백에 전달
    - jsonp : 원격 스크립트를 허용한다는 점을 제외하고는 json과 유사
    - script : 응답 텍스트는 콜백에 전달, 응답은 모든 콜백의 호출보다 먼저 자바스크립트 구문으로 처리
    - text : 응답 텍스트는 일반 텍스트

    간편형 함수
    $.get() : get방식으로 ajax 실행
    $.post() : post방식으로 ajax를 실행
    $.getJSON() : get방식 실행 후 json데이터를 가져온다.
    $.getScript() : get방식 실행 후 script데이터를 가져온다.
    $(select).load() : ajax실행 후 선택자에 문자열을 추가한다.

    ex)
    $.get('주소', '데이터', function(res){
        // 성공 시 동작함.
    }, '데이터타입');

    $.post('주소', '데이터', function(res){
        // 성공 시 동작함.
    }, '데이터타입');

    * 스크립트와 json만을 전문적으로 가져오는 메소드

    $.getScript('스크립트 주소', function(script){
        // 성공 시 동작함.
    });

    $.getJSON('JSON주소', {데이터}, function(data){
        // 성공 시 동작함.
    });
 */

$(document).ready(function(){
    $('#get').click(function(){
        get();
    });

    $('#json').click(function(){
        getJson();
    });

    $('#script').click(function(){
        getScript();
    });
});

function get(){
    $.ajax({
        type : 'GET',
        url : '',
        data : {
            name : 'jin',
            age : 27
        },
        dataType : 'text',
        success : function(data){
            if(data){
                $('#result').empty();
    
                $('#result').append('<span>name : ' + data.name + ', age : ' + data.age + '</span>');
            }
        }
    });
}

function getJson(){
    $.ajax({
        type : 'GET',
        url : 'test.json',
        dataType : 'json',
        success : function(data){
            if(data.length > 0){
                $('#result').empty();
                $('#result').append('<span>name : ' + data["seiyuu"][0].name + ', age : ' + data["seiyuu"][0].age + '</span>');
            }
        }
        
    });
}

function getScript(){
    $.getScript('getScript.js');
}