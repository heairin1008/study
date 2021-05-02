// localStorage 사용
// 1. to do list 작성 시 list의 맨 밑에 추가
// 2. list 삭제 시 선택한 목록만 삭제
// 3. 체크버튼 클릭 시 완료표시로 줄 긋기
var list = [];

$(document).ready(function(){
    // 1. list가 있으면 로드
    todoListLoad();

    // 2. 추가버튼 클릭
    $('#submit').on('click', function(){
        addList();
    });

    // 3. 삭제버튼 클릭
    $(document).on('click', '.remove', function(){
        var id = $(this).parent().parent().attr('id');
        removeList(id);
    });

    // 4. 체크버튼 클릭
    $(document).on('click', '.complete', function(){
        var li_id = $(this).parent().parent().attr('id');
        changeComplete(li_id);
    });
})

function addList(){
    // 1-1. 입력한 내용 가져오기
    var content = $('#content').val();
    var seq = list.length + 1;

    // 1-2. 입력한 내용 객체에 저장
    var todo = {
        id : 'id' + seq,
        text : content,
        complete : false
    }

    // 1-3. 입력한 내용 localStorage에 저장
    // 1-3-1. content에 값이 있을 경우
    if(content != ''){
        list.push(todo);
        saveList();
    }

    // 1-4. text박스 초기화
    $('#content').val('');

    // 1-5. to-do list 출력
    todoListLoad();
}

// 2. x버튼 클릭 시 리스트에서 삭제
function removeList(listId){
    for(var i=0; i < list.length; i++){
        if(list[i].id == listId){
            list.pop(i);
        }
    }

    saveList();
    todoListLoad();
}

// 3. 체크버튼 클릭 시 목록 줄 긋기
function changeComplete(listId){
    for(var i=0; i < list.length; i++){
        if(list[i].id == listId){
            if(list[i].complete == false) // 완료일 때
                list[i].complete = true;
            else // 완료 취소
                list[i].complete = false;
        }
    }

    saveList();
    todoListLoad();
}

// 4. to do list load
function todoListLoad(){
    var li = '';

    list = JSON.parse(localStorage.getItem('lists'));

    $('#list').empty(); // 새로 load시 그 전 출력결과 삭제

    if(!!list && list.length > 0){
        for(var i=0; i<list.length; i++){
            if(list[i].complete == true) // 완료일 시 중간선 추가
                li = '<li id="' + list[i].id + '"><span style="text-decoration:line-through darkgray; color:gray;">' + list[i].text + '</span> <span id="btn"><button class="complete">✓</button> <button class="remove">X</button></span></li>';
            else // 완료가 아닐 시
                li = '<li id="' + list[i].id + '"><span>' + list[i].text + '</span> <span id="btn"><button class="complete">✓</button> <button class="remove">X</button></span></li>';
                
            $('#list').append(li);
        }
    }else{
        $('<li style="list-style-type:none; color:gray;">to-do list가 없습니다.</li>').appendTo('#list');
    }
}

// localStorage에 list데이터 저장
function saveList(){
    localStorage.setItem('lists', JSON.stringify(list));
}

// localStorage
/*
    웹스토리지
    - localStorage
    - sessionStorage

    차이점
    - localStorage는 웹페이지 세션이 끝나도 데이터 유지
        - 동일한 브라우저를 사용할 때만 적용
    - sessionStorage는 세션이 끝나면 저장된 데이터도 지워짐.

    공통점
    - localStorage, sessionStorage 둘 다 브라우저에 데이터 저장
    - 자바스크립트 API가 동일한 형태

    기본 API 형태

    - 데이터 저장
    localStorage.setItem('키', '값');

    - 키로부터 데이터 읽기
    localStorage.getItem('키');

    - 해당 키의 데이터 삭제
    localStorage.removeItem('키');

    - 모든 키의 데이터 삭제
    localStorage.clear();

    웹스토리지는 문자형 데이터 타입만 지원한다.
    따라서 객체를 저장하기 위해서는 위의 형태로 사용하지 않고 JSON형태로 저장/읽기

    - 저장
    localStorage.setItem('키', JSON.stringify('값'));

    - 읽기
    JSON.parse(localStorage.getItem('키'));

    웹스토리지는 브라우저에 계속 남아있기 때문에 불필요한 데이터는 청소해두는게 좋음.
*/

// $(document).on(){}
/*
    $(document).on('이벤트', '대상', function(){})
    - 이벤트가 일어날 때마다 실행
    
    $(document).ready() / $(document).on() 차이점
    - ready는 처음 실행 시 문서를 다 읽은 후 실행
      문서의 내용이 변경이 되면 인식을 하지 못함.
    - on은 이벤트 실행 시 이벤트 시점의 문서내용을 읽고 이벤트에 내용을 반영
      문서의 내용이 변경이 되도 실행됨.
*/

// appendTo()
/*
    $('넣을 text').appendTo('대상 태그');
    
    append()는 대상 태그의 마지막에 text를 넣음
    appendTo()는 text를 대상 태그의 마지막에 넣음
*/