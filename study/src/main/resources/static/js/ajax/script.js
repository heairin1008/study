/**
 * javascript 사용 시
 * 서버와 통신하기 위해 XMLHttpRequest 객체 사용
*/
document.addEventListener("DOMContentLoaded", function(){
    var ajaxBtn = document.getElementById("ajaxBtn");
    ajaxBtn.onclick = function(){
        XHR();
    };
});

function XHR(){
    let xhttp = new XMLHttpRequest();

    // GET방식
    // 요청에 대한 콜백함수
    xhttp.onreadystatechange = function(e){
        // onreadystatechange 대신 onload를 사용해도 된다.
        // 요청이 완료되면
        if(xhttp.readyState === xhttp.DONE){
            if(xhttp.status === 200 || xhttp.status === 201){
                // 200 / 201 : 성공일 때의 상태코드
                console.log(JSON.parse(xhttp.responseText));
                insertResult(JSON.parse(xhttp.responseText));
                
            }else{
                console.error(JSON.parse(xhttp.responseText)); // json타입이기 때문에 타입변경해줘야함
            }
        }
    };

    xhttp.open('GET', 'test.json', true); // 메소드, 주소 설정
    xhttp.send(); // 요청 전송

    // xhttp.abort(); // 전송된 요청 취소

    // // POST 방식
    // let data = {
    //     name : 'jin',
    //     birth : 1995
    // };

    // xhttp.onload = function(){
    //     if(xhttp.status === 200 || xhttp.status === 201){
    //         console.log(xhttp.responseText);
    //     }else{
    //         console.error(xhttp.responseText);
    //     }
    // };

    // xhttp.open('POST', 'url');
    // xhttp.setRequestHeader('Content-Type', 'application/json'); // 컨텐츠 타입을 json으로
    // xhttp.send(JSON.stringify(data)); // 데이터를 string타입으로 변경해서 보냄
}

function insertResult(text){
    var span = document.createElement('span');
    var div = document.getElementById('result');

    span.innerHTML = text.name + ', ' + text.age;
    div.appendChild(span);
}