<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/canvas/canvas.js"></script>
</head>
<body>
	<body>
        <div>
            <canvas id="myCanvas" style="border: 2px solid black;"></canvas>
            <br>
            <input type="range" min="1" max="10" id="brush" name="brush">
            <label for="brush">brush size</label>
            <br>
            <button id="clear">CLEAR</button>
        </div>
</body>
</html>