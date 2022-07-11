function mainScrollEvent() {
    let documentHeight = $(document).scrollTop();
    let documentHeight2 = $(document).scrollTop() + $('.fixedImg').height();
    let section2Top = jQuery('.section2').offset().top;
    let section3Top = jQuery('.section3').offset().top;
    let imgBottom = $('.fixedImg').offset().top + $('.fixedImg').height();

    // 스크롤탑이 섹션2 안에 있고 섹션3보다 위일때
    if (documentHeight >= section2Top && documentHeight < section3Top) {
        $('.fixedImg').addClass('active');
        
    // 스크롤탑이 섹션 2보다 위일때 (섹션1일때)
    } else if (documentHeight < section2Top) {
        $('.fixedImg').removeClass('active');
    }

    // 이미지의 bottom이 섹션3에 닿았을 때  
    if (imgBottom >= section3Top) {
      $('.fixedImg').addClass('finish');
    }
    // 섹션3의 Top보다 이미지가 위에 있을 때
    if (documentHeight2 < section3Top) {
      $('.fixedImg').removeClass('finish');
    }
}

// 윈도우가(창이) 스크롤될 때마다 실행되는 기능
$(window).scroll(function () {
    // mainScrollEvent 함수를 호출하여 실행시킴
    mainScrollEvent();
  })