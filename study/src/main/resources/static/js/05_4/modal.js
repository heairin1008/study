/**
 * 
 */

$(document).ready(function(){
	$('#openModal').click(function(){
        $('#modal').fadeIn('slow');
    });

    $('#modal_close').click(function(){
        $('#modal').fadeOut();
    });
})