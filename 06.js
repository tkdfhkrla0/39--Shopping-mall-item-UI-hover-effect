$(function(){
    $('.size span').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.color span').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
    })
    $('.info .like').click(function(){
        $(this).toggleClass('active')
    })
})