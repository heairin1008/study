/**
 * 
 */

$(document).ready(function(){
	setMainList();
	
	$('#insertBtn').click(function(){
		location.href = "/main_insert";
	});
});

function setMainList(){
	$.ajax({
        type : 'get',
        url : '/getMainList',
        dataType : 'json',
        success : function(data){
			console.log(data);
            setList(data);
        },
        error : function(){
            console.log('error');
        }
    });
}

function setList(data){
	
	let listData = $('#mainList').val();
	let table = '';
	
	if(data.length > 0){
		for(let i=0; i < data.length; i++){
			let id = data[i].id;
			let title = data[i].title;
			
			table += "<tr>";
			table += "<td>" + id + "</td>";
			table += "<td><a href='/main_one?id=" + id + "'>" + title + "</a>" + "</td>";
			table += "</tr>";
		}		
	}
	
	if(!!listData){
		$('#mainList').empty();
	}
	
	$('#mainList').append(table);
}