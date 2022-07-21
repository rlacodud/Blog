$('.thumb').click(function(){
    console.log("썸네일 클릭");
    $('.modal').css({
        'display' : 'block'
    })
    $('.grayBack').css({
        'display' : 'block'
    })
    $('body').css({
        'overflow': 'hidden'
    })
})
$('.deleteBtn').click(function(){
    console.log("썸네일 클릭");
    $('.modal').css({
        'display' : 'none'
    })
    $('.grayBack').css({
        'display' : 'none'
    })
    $('body').css({
        'overflow': 'auto'
    })
})