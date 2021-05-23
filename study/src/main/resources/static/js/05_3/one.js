/**
 * 
 */

$(document).ready(function(){
	getMainOne();
	
	$('#goListBtn').click(function(){
		location.href = "/main_list";
	});
});

function getMainOne(){
	let id = $('#idVal').val();
	let mainId = parseInt(id);
	
	$.ajax({
        type : 'get',
        url : '/getMainOne',
		data:{
			id: mainId
		},
        dataType : 'json',
        success : function(data){
			console.log("success : " + data);
			setMainOne(data);
        },
		error: function(){
			console.log("error");
		}
    });
}

function setMainOne(data){
	let detail = `
		<table>
			<tr>
				<td>id</td>
				<td>${data.id}</td>
			</tr>
			<tr>
				<td>title</td>
				<td>${data.title}</td>
			</tr>
			<tr>
				<td>content</td>
				<td>${data.content}</td>
			</tr>
		</table>
	`;
	
	$('#one').append(detail);
}