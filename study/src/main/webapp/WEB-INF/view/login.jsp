<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/login/login.js"></script>
</head>
<body>
	<h1>Login</h1>
	
	<form name="main" action="#">
		<table>
			<tr>
				<td>ID</td>
				<td><input type=text id="id" name="id" size=15></td>
			</tr>
			<tr>
				<td>PASSWORD</td>
				<td><input type=password id="pw" name="pw" size=15></td>
			</tr>
			<tr>
				<td><input type=checkbox id="saveId">아이디 기억</td>
				<td><input type=submit value=LOGIN></td>
			</tr>
		</table>
	</form>
</body>
</html>