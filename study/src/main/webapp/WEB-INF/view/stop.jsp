<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="js/05_2/stop.js"></script>

<title>Insert title here</title>
</head>
<body>
	<h1>stopwatch</h1>

    <div id="time">
        <!--show time-->
        <span id="minute">00</span>:<span id="second">00</span>:<span id="msecond">00</span>
    </div>

    <div>
        <button id="start">start</button>
        <button id="stop">stop</button>
        <button id="reset">reset</button>
    </div>
</body>
</html>