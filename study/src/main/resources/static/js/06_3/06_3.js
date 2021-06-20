/**
 * 
 */

$(document).ready(function(){
    $('.open').click(function(){
        openPopup();
    });
})

function openPopup(){
    window.name = "exForm";
    
    var option = {
        top: 10,
        left: 10,
        width: 500,
        height: 600
    };

    window.open('popup.html', 'popup', option);
}