/**
 * 
 */

var check = '';

$(document).ready(function(){
    $('.check').change(function(){
        check = $(this).attr('id');
    });

    $('.select').click(function(){
        setSelectData();
    });
})

function setSelectData(){
    var value = $('#' + check).val();
    
    $('#one', opener.document).val(value);
    self.close();
}

/*
 * prev()
 * - 선택한 요소의 이전 형제 요소를 선택하여 반환
 * 
 * ex)
 * <input type="text" id="text1">
 * <input type="text" id="text">
 * <button type="button" id="btn">
 * 
 * $('#btn').prev().attr('id') = text
 * 
 * prevAll()
 * - 선택한 요소의 이전의 모든 형제 요소를 선택하여 반환
 * 
 * $('#btn').prevAll().css({'border': '1px solid red'});
 * -> 모든 text 박스의 line이 빨간색으로 변경
 * 
 * next()
 * - 선택한 요소의 다음 형제 요소를 선택하여 반환
 * 
 * $('#text1').next().attr('id') = text
 * 
 * nextAll()
 * - 선택한 요소의 다음의 모든 형제 요소를 선택하여 반환
 * 
 * $('#text1').nextAll().css({'border': '1px solid red'});
 * id=text인 텍스트박스, 버튼에 빨간색 박스 생성
 * 
 * siblings()
 * - 선택한 요소의 형제 요소 중에서 지정한 선택자에 해당하는 요소를 모두 선택
 * (같은 line에 있는 모든 태그(형제)에 해당)
 * 
 * $('#text').siblings().css({'border' : '1px solid red'});
 * id="text1"인 text박스와 버튼에 빨간색 박스 생성
 * 
 * opener / parent
 * 해당 페이지가 팝업창(popup)일 경우 부모창은 opener / iframe을 통해 페이지가 표시될 경우 부모창은 parent
 */