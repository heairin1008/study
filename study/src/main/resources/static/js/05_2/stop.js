// 1. start click
// 2. stop click
// 3. reset click
// 4. time

// javascript
// html의 요소 가져오기
let appendMsecond = document.getElementById("msecond");
let appendMinute = document.getElementById("minute");
let appendSecond = document.getElementById("second");
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

window.onload = function () {
    let seconds = 00; 
    let msecond = 00; 
    let minute = 00;
    let Interval ;
  
    // start버튼 클릭
    startBtn.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(setTime, 10);
    }
    
    // stop버튼 클릭
    stopBtn.onclick = function() {
        clearInterval(Interval);
    }
  
    // reset버튼 클릭
    resetBtn.onclick = function() {
        clearInterval(Interval);
        msecond = "00";
        second = "00";
        minute = "00";
        appendMsecond.innerHTML = msecond;
        appendSecond.innerHTML = second;
        appendMinute.innerHTML = minute;
    }
}

// timer 셋팅
function setTime () {
    // 밀리세컨드 증가
    msecond++; 
        
    if(msecond < 10){
        appendMsecond.innerHTML = "0" + msecond;
    }else{
        appendMsecond.innerHTML = msecond;
    }
        
    // 99 이상일 시 초 증가
    if (msecond > 99) {
        second++;
        appendSecond.innerHTML = "0" + second;
        msecond = 0;
        appendMsecond.innerHTML = "0" + 0;
    }
        
    if (seconds > 9){
        appendSecond.innerHTML = second;
    }

    // 59초 이상일 시 분 증가
    if(second > 59){
        minute++;
        appendMinute.innerHTML = "0" + minute;
        second = 0;
        appendSecond.innerHTML = "0" + second;
    }

    if(minute > 9){
        appendMinute.innerHTML = minute;
    }
}

// setInterval
/*
 * 일정시간마다 주기적으로 함수를 실행시키는 메서드
 * setInterval(function, delay);
 * ex) setInterval(function, 1000); -> 1초마다 function출력 delay는 millisecond로
 * var interval = setInterval(function, 1000);
 */

// clearInterval
/*
 * setInterval메서드로 반복되고있는 함수를 멈추게한다.
 * clearInterval(setInterval로 생성된 함수);
 * ex) clearInterval(interval);
 */

// setTimeOut
/*
 * 일정시간 후 함수를 실행시키는 메서드
 * setTimeOut(function, delay);
 * ex) setTimeOut(function, 1000); -> 1초 후 function 실행
 */

// innerHTML
/*
 * element.innerHTML
 * element 안의 HTML이나 XML을 가져온다.
 * ex) element.innerHTML = <div>A</div>
 * => result : A
 * css를 추가할 경우 css가 적용된 A가 출력된다.
 */

// innerText
/*
 * element.innerText
 * element 안의 text 값들만 가져온다.
 * ex) element.innerText = <div>A</div>
 * result : <div>A</div>
 */
