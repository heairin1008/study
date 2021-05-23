/**
 * 
 */

$(document).ready(function(){
	$('#submit').click(function(){
		submitForm();
	});
})

function submitForm(){
	let form = {
		title : $('#title').val(),
		content : $('#content').val()
	};
	
	$.ajax({
		type: "post",
		url: '/insertMain',
		data: form,
		dataType: 'json',
		success: function(){
			alert('success');
			console.log(data);
			goToList();
		},
		error: function(){
			console.log('error');
		}
	})
}

function goToList(){
	location.href = "/main_list";
}

// $('#form').serialize()