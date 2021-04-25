<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="calc.js"></script>

    <style>
        .calc {
            width: 400px;
            border: 1px solid lightgray;
            padding: 20px;
            margin: 20px;
        }

        .calcButton {
            display: grid;
            grid-gap: 20px;
        }

        .result {
            height: 100%;
            grid-column: 4;
            grid-row: 2 / 6;
        }

        .setResult {
            font-size: 40px;
            width:98%;
            margin-bottom: 20px;
        }

        button {
            height: 60px;
            background-color: #fff;
            border-radius: 3px;
            border: 1px solid #c4c4c4;
            font-size: 20px;
        }

        button:hover {
            background-color: #eaeaea;
        }

        button:focus {
            outline: none;
        }
    </style>

    <title>Calc</title>
</head>
<body>
    <div class="calc">
        <input type="text" class="setResult" value="0" style="text-align : right;" disabled/>
        
        <div class="calcButton">
            <button value="+" class="operator">+</button>
            <button value="-" class="operator">-</button>
            <button value="*" class="operator">*</button>
            <button value="/" class="operator">/</button>
    
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
    
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
    
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
    
            <button value="." class="point">.</button>
            <button value="0">0</button>
            <button class="clear">C</button>
    
            <button class="result" value="=">=</button>
        </div>
    </div>
</body>
</html>