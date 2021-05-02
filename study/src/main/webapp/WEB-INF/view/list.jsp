<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/list/list.js"></script>
<style>

div{
	border: 1px solid black;
    width: 80%;
    height: 100%;
}

body{
	text-align: center;
}

#submit{
	background-color: white;
    border: 1px solid rgb(10, 185, 147);
    border-radius: 4px;
    padding: 5px 10px;
}

#submit:hover{
    background-color: rgb(10, 185, 147);
    border: 1px solid rgb(10, 185, 147);
    border-radius: 4px;
    padding: 5px 10px;
    color: white;
}

#content{
	border: 1px solid gray;
    width: 40%;
    height: 25px;
    border-radius: 4px;
}

#listDiv{
    border: 1px solid darkgray;
    top: 50%;
    left: 50%;
    margin-left: 10%;
    margin-bottom: 20px;
}

#inputList{
    margin-bottom: 20px;
}

.remove{
    background-color: white;
    border: 1px solid red;
    border-radius: 4px;
    padding: 7px 15px 4px;
    bottom: 10px;
}

.remove:hover{
    background-color: red;
    border: 1px solid red;
    border-radius: 4px;
    padding: 5px 15px;
    color: white;
}

.complete{
    background-color: white;
    border: 1px solid rgb(33, 137, 255);
    border-radius: 4px;
    padding: 4px 15px;
}

.complete:hover{
    background-color: rgb(33, 137, 255);
    border: 1px solid rgb(33, 137, 255);
    border-radius: 4px;
    padding: 4px 15px;
    color: white;
}

#btn{
    float: right;
    margin-right: 10px;;
}

li{
    width: 100%;
    margin: 20px 0px;
}

</style>
</head>
<body>
    <div>
        <h1>To do List</h1>

        <form id="inputList">
            <input type="text" id="content">
            <button id="submit">추가</button>
        </form>

        <div id="listDiv">
            <ul id="list">
                <!--To do list 출력-->
            </ul>
        </div>
    </div>
</body>
</html>