// 다른 함수에서도 사용하기 위해 전역변수로 선언
var canvas = null;
var ctx = null;

var draw = false; // 기본 그리기 셋팅 = false

$(document).ready(function(){
    // 1. canvas 불러오기
    canvas = $('#myCanvas')[0];
    canvas.width = 500;
    canvas.height = 500;
    // ctx = canvas.getContext('2d');
    if (canvas.getContext){
        ctx = canvas.getContext('2d');
      } else {
        console.log('no');
      }

    // 2. 마우스가 캔버스 위에 올라왔을 때
    // 2-1. 마우스를 클릭했을 때
    canvas.addEventListener('mousemove', canvasDraw);
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    
    // // 3. clear 버튼 클릭 시 캔버스 clear
    $('#clear').click(function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // 4. 브러쉬 크기 조절
    $('#brush').change(function(){
        var brush = $('#brush').val();
        ctx.lineWidth = brush;
    });
});

// 캔버스에 선 그리기
function canvasDraw(event){
    var x = event.offsetX;
    var y = event.offsetY;

    if(draw){
        // 2-1-1. 이동했을 경우
        // 2-1-1-1. 클릭한 좌표부터 뗐을 때의 좌표까지 값 구해서 선 긋기
        ctx.lineTo(x, y); // lineTo : 현재 좌표에서 입력받은 좌표까지 선을 긋는 좌표를 저장하는 함수
        ctx.stroke(); // stroke : 저장된 좌표를 기준으로 선을 긋는 함수
    }else{
        // 2-2. 마우스를 클릭하지 않았을 때
        // 2-2-1. 이동한 위치로 좌표 이동
        ctx.beginPath(); // 새로운 경로를 생성한다.
        ctx.moveTo(x, y); // 좌표이동만 할 뿐 선을 그리지는 않는다.
    }
}

// 그리기 멈추기
function stopDrawing(event){
    draw = false;
}

// 그리기 시작하기
function startDrawing(event){
    draw = true;
}

// addEventListener(이벤트명, 함수)
// 여러 개의 이벤트 핸들러 등록 가능
// 하나의 이벤트 대상에 복수의 동일 이벤트 등록 가능
// 이벤트 객체를 사용하면 여러 개의 element에 하나의 함수를 등록해서 재사용을 할 수 있다.

// offsetX / offsetY
// offset은 이벤트 대상을 기준으로 좌표를 잡는다.
// 이벤트 대상의 상대적 마우스 좌표 위치 반환

// other
// pageX / pageY - 브라우저 페이지의 좌표 위치 반환(스크롤 포함 측정)
// screenX / screenY - 전체 모니터 스크린의 좌표 위치 반환
// clientX / clientY - 현재 보이는 브라우저 화면을 기준으로 좌표 위치 반환
//                      (스크롤을 무시하고 해당 페이지의 상단을 0으로 측정)

// clearRect(x, y, width, height)
// 해당 대상의 특정 영역을 지울 때 사용
// x = 0, y = 0으로 설정하면 대상의 전체 영역을 삭제