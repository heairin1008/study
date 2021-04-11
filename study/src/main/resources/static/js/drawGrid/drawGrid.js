/**
 * grid 생성 및 버튼 이벤트
 */

// 기본 그리드 선언
// 그리드 셋팅, 추가, 삭제 메서드에서 사용해야 하기 때문에 전역으로 선언
var list = [
		{
			id : 1,
			name : 'name1'
		},
		{
			id : 2,
			name : 'name2'
		}
];

// check한 행 id
// check 이벤트와 삭제 메서드가 다르기 때문에 전역으로 선언
var delId = [];

// 화면로드
$(document).ready(function(){
	// 그리드 셋팅
	setGridList(list);
	
	// 행 추가
	$('#addRow').click(function(){
		addRow();
	});
	
	// 행 삭제
	$('#delRow').click(function(){
		deleteRow();
	});
});

// 1. 그리드 출력
function setGridList(list){
	// 그리드 변화가 있을 경우를 대비해 그리드 삭제
	$('#tbody').empty();
	
	// 그리드 셋팅
	for(var i=0; i<list.length; i++){
		const bodyContent = `
			<tr>
				<td><input type="checkbox" id="check${list[i].id}" onClick="checkId(${list[i].id})"></td>
				<td>${list[i].id}</td>
				<td>${list[i].name}</td>
			</tr>
		`; // 삭제할 행의 id값을 가져오기 위해 onClick이벤트 사용
		
		// 2줄 이상의 내용을 입력하기 위해서는 ``를 사용
		$('#tbody').append(bodyContent);
	}
}

// 2. 추가버튼 클릭
function addRow(){
	var id=[];
	
	// 2-1. 마지막 행의 id값 구하기
	if(!!list && list.length > 0){ // 리스트에 데이터가 있을 경우
		for(var i in list){
			id.push(list[i].id);
		}
	}
	
	var maxId = 0;
	
	if(!!id && id.length > 0){
		maxId = Math.max.apply(null, id); // **밑에 추가설명
	}
	
	// 2-2. 기존 그리드와 추가할 행 합치기
	// 추가할 행 선언
	var addList = {
		id : maxId + 1,
		name : 'name' + (maxId + 1),
	};
	
	// 기존 그리드에 추가버튼을 눌렀을 때 추가되는 행 합치기
	list.push(addList);
	
	// 2-3. 그리드 재셋팅
	setGridList(list);
}

// 체크박스 클릭 확인
function checkId(id){
	// 체크박스에 체크가 됐다면 delId에 
	if($('#check' + id)[0].checked == true){
		delId.push(id);
	}else{
		return;
	}
}

// 3. 삭제버튼 클릭
function deleteRow(){
	// 3-1. 선택한 행 삭제
	// 3-1-1.delId에서 list에 있는 행 객체의 id와 일치하는 것이 있으면 list에서 객체 삭제
	for(var i=0; i<delId.length; i++){
		for(var j=0; j<list.length; j++){
			if(delId[i] == list[j].id){
				list.splice(j, 1);
			}
		}
	}

	// 3-2. 삭제된 객체를 제외한 그리드 리스트 다시 출력
	setGridList(list);
	
	// 3-3. 선택한 행이 삭제된 후에 선택한 행의 번호가 남아있기 때문에 빈 배열로 다시 초기화	
	delId = [];
}