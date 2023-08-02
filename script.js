$(document).ready(function(){
    if($.localStorage.isSet('memo')){
        $('.tarea').val($.localStorage.get('memo'))
    }
    $('.btn_save').click(function(){
        $.localStorage.set('memo', $('.tarea').val());
        alert('저장되었습니다.');
    });
    $('.btn_remove').click(function(){
        $.localStorage.remove('memo')
        location.reload()
    })
});