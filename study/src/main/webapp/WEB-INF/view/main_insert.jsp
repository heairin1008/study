<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/05_3/insert.js"></script>

<title>Insert title here</title>
</head>
<body>
	<h1>등록</h1>
	
	<div>
		<form id="form" method="post" action="main_one.jsp">
			<div>
				<span>title</span>
				<input type="text" id="title">
			</div>
			<div>
				<span>content</span>
				<textarea rows="3" cols="50" id="content"></textarea>
			</div>
			
			<button type="button" id="submit">등록</button>
		</form>
	</div>
</body>
</html>