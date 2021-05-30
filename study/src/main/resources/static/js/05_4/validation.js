/**
 * 
 */

$(document).ready(function(){
	$('#checkBtn').click(function(){
        checkValidation();
    });

	$('.popup').click(function(){
        openPopup($(this));
    });
})

// 1. 값 체크
// 1-1. 이메일 input칸에 값이 입력되어있지 않을 경우
// 1-1-1. alert span창에 메시지 추가

// 1-2. 값이 입력되어 있을 경우

// 1-2-1. 변수에 이메일 형태 선언
// 1-2-2. 변수에 pw 형태 선언

// 1-2-3. 값이 이메일 형태와 같을 경우
// 1-2-3-1. span창의 메시지 삭제
// 1-2-4. 값이 이메일 형태와 다를 경우
// 1-2-4-1. span창의 메시지 삭제
// 1-2-4-2. span창에 '올바른 이메일을 입력해주세요.' 메시지 추가

// 1-2. pw input 칸에 값이 입력되어있지 않을 경우
// 1-2-1. span창에 메시지 추가

function checkValidation(){
    var email = checkForm.email.value;
    var password = checkForm.pw.value;
    var emailAlert = $('#emailVal');
    var pwAlert = $('#pwVal');

    if(email == ''){
        emailAlert.append('email을 입력해주세요.');
    }else{
        var emPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if(!(emailAlert.is(':empty'))){
            emailAlert.empty();
        }

        if(!emPattern.test(email)){
            emailAlert.css('color', 'red');
            emailAlert.append('올바른 email을 입력해주세요.');
        }
    }

    if(password == ''){
        pwAlert.append('비밀번호를 입력해주세요.');
    }else{
        //var pwPattern = /^.*(?=^.{8,}$)(?=.\d)(?=.*[a-zA-Z])(?=.*[!.#&%]).*$/;
        var pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&.])[A-Za-z\d$@$!%*#?&.]{8,}$/;

        if(!(pwAlert.is(':empty'))){
            pwAlert.empty();
        }

        if(!pwPattern.test(password)){
            pwAlert.css('color', 'red');
            pwAlert.append('특수문자(!.#&%)를 포함한 8자 이상의 비밀번호를 입력해주세요.');
        }
    }
}

function openPopup(aTag){
    var popup = '';
    if(aTag.hasClass('naver')){
        popup = window.open('http://www.naver.com', 'naverPopup', 'width=1000px, height=600px, scrollbars=yes');
    }else{
        popup = window.open('http://www.google.com', 'googlePopup', 'width=1000px, height=600px, scrollbars=yes');
    }
}