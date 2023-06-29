$(function () {
    $('.od1').append('<img><img><img><img><img>');
    $('.od1>img').each(function (i) {
        this.src = 'images/首页/od1/' + i + '.jpg';
    });
    var ul = $('<ul></ul>');
    for (var i = 0; i < 5; i++) {
        ul.append('<li><img></li>');
    }
    $('.od2').append(ul);
    var od2spans = ['黑色星期五特卖', '《漫威银河护卫队》', '《战地风云》', '《侏罗纪世界》', '《模拟农场》'];
    $('.od2 img').each(function (i) {
        this.src = 'images/首页/od2/' + i + '.png';
        var span = $('<span>' + od2spans[i] + '</span>');
        $(this).parent().append(span);
    });
    for (var i = 0; i < 6; i++) {
        var twoul = $('<a></a>');
        twoul.html('<img><p class="p1"></p><p class="p2"></p><p class="p3"><span class="s1"></span><span class="s2"></span><span class="s3"></span></p>');
        $('.two>ul').append(twoul);
    }
    $('.two img').each(function (i) {
        this.src = 'images/首页/two/' + i + '.jpg';
    });

    $.getJSON("http://127.0.0.1:8000/jQuer?callback=?", function(data){
        $.each(data, function (i, d) {
            $('.p1').eq(i).text(d.name);
            $('.p2').eq(i).text(d.intro);
            $('.p3>.s1').eq(i).text(d.discount);
            $('.p3>.s2').eq(i).text(d.price);
            $('.p3>.s3').eq(i).text(d.Price);
        });
    });
    
    $('.three').append('<div><ul><li><img></li><li><img></li><li><img></li><li><img></li><li><img></li><div class="cc"></div></ul></div>');
    $('.three img').each(function (i) {
        this.src = 'images/首页/three/' + i + '.jpg';
    });





    $('.od1').children().eq(0).siblings().hide();

    var c= 0;
    $('.od2').children().children('li').mouseenter(function(){
        $(this).css('background','#363636');
        clearInterval(aa);
    }).mouseleave(function(){
        $(this).css('background','');
        aa= setInterval(fnd,2000);
    }).click(function(){
        $('.od1').children().eq($(this).index()).stop().slideDown(500);
        $('.od1').children().eq($(this).index()).siblings().stop().slideUp(500);
        c=$(this).index();
    });
    
    function fnd(){
        c++;
        c=c==5?0:c;
        $('.od2').children().children('li').eq(c).click();
    }
    var aa= setInterval(fnd,2000);


})