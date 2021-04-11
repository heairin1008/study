<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/drawGrid/drawGrid.js"></script>
</head>
<body>
<h1>Grid</h1>
<div>
	<div>
		<button id="addRow">추가</button>
		<button id="delRow">삭제</button>
	</div>
	<div>
		<table id="grid" border="1">
			<thead>
				<tr>
					<th>check</th>
					<th>id</th>
					<th>name</th>
				</tr>
			</thead>
			<tbody id="tbody">
			</tbody>
		</table>
	</div>
</div>
</body>
</html>