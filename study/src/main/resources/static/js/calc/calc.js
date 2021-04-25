var firstNum = '0'; // 처음 0인 상태에서 operator와 숫자 입력 시 계산돼야함
var secondNum;
var firstCalc;

$(document).ready(function(){
    $('button').click(function(){
        var button = $(this).attr('class');
        var value = $(this).val();
        inputText(button, value);
    });

    $('.result').click(function(){
        calculateNum(firstNum, secondNum, firstCalc);
    });
    
    $('.clear').click(function(){
        clearResult();
    });
})

// 연산
function calculateNum(num1, num2, operator){
    var result = '';
    var first = '';
    var second = '';

    if(num1.includes('.')){ // 소수점이 있을 경우 실수로 연산하기 위해 float로 변환
        first = parseFloat(num1);
    }else{
        first = parseInt(num1);
    }

    if(num2.includes('.')){
        second = parseFloat(num2);
    }else{
        second = parseInt(num2);
    }

    if(operator == '+'){
        result = first + second;
    }else if(operator == '*'){
        result = first * second;
    }else if(operator == '/'){
        result = (first / second).toFixed(5);
    }else{
        result = (first - second).toFixed(1); // 일부 숫자 빼기에서 소수점까지 나옴 -> 수정해야함
    }

    $('.setResult').val(result);
}

// 숫자 / 연산 / 소수점 입력
function inputText(button, value){
    var resultText = $('.setResult').val();

    // 1. 연산자 클릭할 경우
    if(button == 'operator'){
        // 1-1. 입력 칸에 연산자를 입력했을 경우
        // 1-1-1. 입력 칸에 있는 계산식 먼저 연산 후 연산자 추가
        if(resultText.includes(value)){
            if(!!firstNum && !!secondNum && !!firstCalc){
                resultText = calculateNum(firstNum, secondNum, firstCalc);
                firstNum = resultText;
                firstCalc = value;
                resultText = resultText + value;
            }
        }else{ // 1-2. 입력 칸에 연산자가 없을 경우
            firstNum = resultText;
            firstCalc = value;
            resultText = resultText + value;
        }
    } else if(button == 'point'){ // 2. 소수점을 입력했을 경우
        if(!resultText.includes(value)){ // 2-1. 소수점이 입력칸에 없을 경우
            resultText = resultText + value;
        }else{ // 2-2. 소수점이 이미 입력칸에 있을 경우
          var last = lastNum();

          if(!last.includes(value)){ // 2-2-1. 두번째 수의 소수점일 경우(앞에 연산자가 있을 경우)
            resultText = resultText + value;
          }
        }
    } else if(button == 'result'){ // 3. = 을 입력했을 경우
        resultText = calculateNum(firstNum, secondNum, firstCalc);
    } else { // 4. 숫자를 입력했을 경우
        if(resultText == '0'){ // 4-1. 처음 입력했을 경우(입력 칸에 0이 입력되어있을 경우)
            firstNum = value;
            resultText = value;
        }else{ // 4-2. 앞에 숫자가 입력되어있을 경우
            if(resultText.includes(firstCalc)){
              var last = lastNum();

              secondNum = last + value;
            }
            resultText = resultText + value;
        }
    }

    // 5. 입력 칸에 클릭했을 때의 결과값 출력
    $('.setResult').val(resultText);
}

// 초기화
function clearResult(){
    firstNum = '0';
    secondNum = null;
    firstCalc = null;
    $('.setResult').val('0');
}

// 연산자 뒤의 마지막으로 입력한 수 구하기
function lastNum(){
  var resultText = $('.setResult').val();
  var idx = resultText.indexOf(firstCalc);
  var length = resultText.length;
  var clickButton = resultText.substr(idx + 1, length);

  return clickButton;
}

// toFixed()
// 소수의 자리수 길이 제한
// var num = 1.1111
// num.toFixed(2) = 1.11

// toPrecision()
// 수의 자리수 길이 제한
// var num = 1.1111
// num.toPrecision(3) = 1.11

// 특정 문자열을 반환한다.
// 시작인덱스부터 길이 또는 종료인덱스까지의 문자열을 반환.
// substr(시작인덱스, 길이)
// substring(시작인덱스, 종료인덱스)

// indexOf
// 특정 문자열의 위치를 반환

// ex)
// 특정 문자열의 다음부터 문자열을 반환하기
// -> var index = num.indexOf('.'); // 1
// -> var string = num.substring(index + 1, num.length); // 1111

// includes('검색할 문자열', '검색을 시작할 위치')
// ex) 'abcde'.includes('e'); // true
// ex) 'abcde'.includes('e', 3); // true
// ex) 'abcde'.includes('a', 4); // false
