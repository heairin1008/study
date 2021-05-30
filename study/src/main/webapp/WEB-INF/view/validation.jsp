<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/05_4/validation.js"></script>
</head>
<body>
	<h1>validation check</h1>

    <form name="checkForm" method="post" action="result.html" id="checkForm" onsubmit="return false;">
        <div id="inputEmail">
            <span>email</span>
            <input type="text" id="email" name="email">
            <br>
            <span id="emailVal"></span>
        </div>
        <div id="inputPw">
            <span>password</span>
            <input type="password" id="pw" name="pw">
            <br>
            <span id="pwVal"></span>
        </div>
        <div id="btn">
            <button type="submit" id="checkBtn">check</button>
        </div>
    </form>

    <h1>hasClass test</h1>

    <div>
        <div>
            <a class="popup naver" href="#">naver</a>
        </div>
        <div>
            <a class="popup google" href="#">google</a>
        </div>
    </div>
</body>
</html>