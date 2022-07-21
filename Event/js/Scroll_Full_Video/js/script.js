function mainScrollEvent() {

      let documentHeight = $(document).scrollTop();
      let section2Top = jQuery('.section2').offset().top;
      let section2Bottom = jQuery('.section2').offset().top + $('.section2').height() - $(window).height();


    if (documentHeight >= section2Top){
        $('.videoBox').addClass('fixed');
          
    } else {
        $('.videoBox').removeClass('fixed');
        $('.videoContainer video').css({
            'height':'400px'
        })
        $('.videoContainer p').css({
            'opacity':'1'
        })
    }
    if (documentHeight >= section2Top && documentHeight < section2Top+100){
        $('.videoContainer video').css({
              'height':'500px'
        })
        $('.videoContainer p').css({
            'opacity':'0.8'
        })
    }
    if (documentHeight >= section2Top+100 && documentHeight < section2Top+200){
        $('.videoContainer video').css({
            'height':'600px'
        })
        $('.videoContainer p').css({
            'opacity':'0.6'
        })
    }
    if (documentHeight >= section2Top+200 && documentHeight < section2Top+300){
        $('.videoContainer video').css({
            'height':'700px'
        })
        $('.videoContainer p').css({
            'opacity':'0.4'
        })
    }
    if (documentHeight >= section2Top+300 && documentHeight < section2Top+400){
        $('.videoContainer video').css({
            'height':'800px'
        })
        $('.videoContainer p').css({
            'opacity':'0.2'
        })
    }
    if (documentHeight >= section2Top+400 && documentHeight < section2Top+500){
        $('.videoContainer video').css({
            'height':'100vh'
        })
        $('.videoContainer p').css({
            'opacity':'0'
        })
    }
    if (documentHeight >= section2Bottom) {
        $('.videoBox').removeClass('fixed');
        $('.videoBox').addClass('absolute');
    } else if (documentHeight < section2Bottom && documentHeight >= section2Top){
        $('.videoBox').addClass('fixed');
        $('.videoBox').removeClass('absolute');
    }
}

$(window).scroll(function () {
    mainScrollEvent();
})
  