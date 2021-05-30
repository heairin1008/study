<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./js/05_4/modal.js"></script>

<style>
	#modal{
    	position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
	}

	#modal_content{
        width: 20%;
		position: relative;
		padding: 50px 100px;
		background-color: white;
		text-align: center;
		border-radius: 6px;
		box-shadow: 0 10px 20px rgba(0,0,0,0.20), 0 6px 6px rgba(0, 0, 0, 0.20);
    }

	#modal_layer{
        background-color: rgb(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
	}

	#modal_close{
        all: unset;
        background-color: rgb(230, 0, 0);
        color: white;
        border-radius: 4px;
        padding: 5px 10px;
        text-align: justify;
	}
</style>
</head>
<body>
	<h1>Modal</h1>

    <div>
        <button id="openModal">click</button>

        <div id="modal" style="display: none;">
            <div id="modal_layer"></div>

            <div id="modal_content">
                <h1>MODAL</h1>

                <button type="button" id="modal_close">close</button>
            </div>
        </div>
    </div>
</body>
</html>