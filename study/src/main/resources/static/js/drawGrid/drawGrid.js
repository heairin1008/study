/**
 * grid 생성 및 버튼 이벤트
 */
/*<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>*/

/*document.addEventListener("DOMContentLoaded", function(){
	setInitGrid();
	addGridRow();
	delGridRow();
});*/

$(document).ready(function(){
	$('#addRow').click(function(){
		addGridRow();
	});
	
	$('#delRow').click(function(){
		delGridRow();
	});
	
/*	$('#check').change(function(){
		 if ($("#grid #check").is(':checked')) {
            $("#table1 input[type=checkbox]").each(function () {
                $(this).prop("checked", true);
            });
        } else {
            $("#grid input[type=checkbox]").each(function () {
                $(this).prop("checked", false);
            });
        }
	});*/
});

function addGridRow(){
	var tbody = document.getElementById('grid');
	var row = tbody.insertRow();
	var cell = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	
	var check = document.createElement('input');
	check.setAttribute('type','checkbox');
	check.setAttribute('id', 'check');
	check.setAttribute('name', 'checkName');
	cell.appendChild(check);
}

function delGridRow(){
    var tbody = document.getElementById('tbody');
	var lastRow = tbody.rows.length;
	
/*	var isChk = false;
	var checkName = document.getElementsByName("checkName");
	for(var i=0;i<checkName.length;i++){
		if(checkName[i].checked == true) {
			isChk = true;
			break;
		}
	}

 	if(isChk){ 
		for(var i=0; i<lastRow; i++){
			if(document.getElementsByTagName("tr")[i].cells[0].firstChild.checked){
				tbody.deleteRow(i);
			}
		}
	}else{*/
		var length = parseInt(tbody.rows.length)-1;
   		var delRow = tbody.deleteRow(length);
	/*}*/
}