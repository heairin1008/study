<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/05_3/list.js"></script>

<title>Insert title here</title>
</head>
<body>
	<h1>list</h1>
	
	<div id="btn">
		<button type="button" id="insertBtn">추가</button>
	</div>
	<div id="list">
		<table id="listTable" border="1">
			<thead>
				<tr>
					<th>id</th>
					<th>title</th>
				</tr>			
			</thead>
			<tbody id="mainList">
			
			</tbody>
		</table>
	</div>
</body>
</html>