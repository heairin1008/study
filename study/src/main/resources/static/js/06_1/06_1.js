/**
 * 
 */

// $(document).ready(function(){
    
// })

// 3. 입력 칸
// 3.1 입력 칸에 단어 넣기
// 3.2 입력 칸에 모든 알파벳 입력됐을 경우

// 4. 다시하기 버튼
// 단어(과일) 배열, 알파벳 배열
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];
var categories;
var chosenCategory;
var word ;
var guess ;
var guesses = [ ];
var lives ;
var count ;
var space;

$(document).ready(function(){
    play();

    $('.alphabet').click(function(){
        checkAlphabet(this);
    });  

    $('#reset').click(function(){
        $('#result').empty();
        $('#button').empty();
        play();
    });
})

function play(){
    categories = [
        ["apple", "banana", "cherry", "peach", "watermelon"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    console.log(word);
    setAlphabet();

    guesses = [ ];
    lives = 10;
    count = 0;
    space = 0;

    setResult();
    comments();
}

// Show lives
function comments(){
    $('#life').empty();
    $('#life').append("count :  " + lives);

    if (lives < 1) {
        $('#life').empty();
        $('#life').append("Game Over");
        $('#word').empty();
        $('#word').append(word);
    }

    for (var i = 0; i < guesses.length; i++) {
        if (count + space === guesses.length) {
            $('#life').append("Win");
        }
    }
}

// 1. 알파벳 버튼(버튼 출력)
function setAlphabet(){
    alpbArea = $('#buttons');
    var alpbList = '';
    alpbList += '<ul id="alphabetList">';

    for(var i=0; i < alphabet.length; i++){
        alpbList += '<li class="alphabet">' + alphabet[i] + '</li>';
    }

    alpbList += '</ul>';
    alpbArea.append(alpbList);
}
// 2.1 클릭했을 때 이벤트
// 2.1.1 클릭한 list의 알파벳이 단어에 포함되있을 경우
// 2.1.1.1 알파벳 입력 칸에 해당하는 알파벳 입력
// 2.1.2 클릭한 list의 알파벳이 단어에 포함되어있지 않을 경우
// 2.1.2.1 횟수 차감
function checkAlphabet(li){
    li.setAttribute('class', 'active');
    guess = li.innerText;
    var category = word;

    setResult(guess);
    
    var j = word.indexOf(guess);
    if (j === -1) {
        lives -= 1;
        comments();
    } else {
        comments();
    }
}

function setResult(alpb){
    var result = $('#result');
    var correct = '';
    correct = '<ul id="myWord">';

    if(guesses.length == 0){
        for(var i=0; i < word.length; i++){
            guesses.push('_');
        }
    }

    for (var i = 0; i < word.length; i++) {
        correct += '<li class="guess">';

        if (word[i] === alpb) {
            guesses.splice(i, 1, alpb);
            correct += alpb + '</li>';
        } else if (guesses[i] != '_' && guesses[i] === word[i]){
            correct += guesses[i] + '</li>';
            count += 1;
        } else{
            correct += guesses[i] + '</li>';
        }
    }

    correct += '</ul>';
    result.empty();
    result.append(correct);
}
  