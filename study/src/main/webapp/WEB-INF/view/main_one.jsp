<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/05_3/one.js"></script>
<%
	String id = request.getParameter("id");
%>
<title>Insert title here</title>
</head>
<body>
	<input type="hidden" id="idVal" value=<%=request.getParameter("id")%>>
	<button type="button" id="goListBtn">목록으로</button>
	<div id="one">
	</div>
</body>
</html>