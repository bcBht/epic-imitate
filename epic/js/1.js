$(function(){
    $('.px').children().children('li').click(function(){
        $(this).addClass('a1');
        $(this).siblings().removeClass('a1');
        $('.a1').text($(this).text());
    });

    $('dl').mouseenter(function(){
        $(this).css('background','#363636');
        $(this).siblings().css('background','');
    });
})