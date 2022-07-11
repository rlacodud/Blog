function mainScrollEvent() {
  var convertPx = {
    vw: function (px) {
      px = parseFloat(px);
      var ww = $(window).width();

      return ww * px / 720;
    }
  }
  let documentHeight = $(document).scrollTop();
  var backTextMarginTop = convertPx.vw(300);
  var height = $("body").height();
  let section3Bottom = jQuery('#section3').offset().top + $('#section3').height();
  let opacity = Math.ceil((1 - $(window).scrollTop() / height * 1) * 10) / 10;
  console.log("documentHeight = " + documentHeight);
  // console.log($('#section3 .iconListContainer .iconList .icon:nth-child(1)').offset().top, $(window).scrollTop());

  // section1 텍스트 효과
    $('.backText').css({
      'margin-top': -backTextMarginTop + documentHeight + "px"
  })

  // section2 영역 텍스트 opacity 효과
  if (documentHeight >= convertPx.vw(1000) && documentHeight < convertPx.vw(2000)) {
    $('#section2 .textContainer p:nth-child(2)').removeClass('on');
    $('#section2 .textContainer p:nth-child(3)').removeClass('on');
    $('#section2 .textContainer p:nth-child(4)').removeClass('on');
    $('#section2 .textContainer p:nth-child(1)').addClass('on');
  }
  if (documentHeight >= convertPx.vw(2000) && documentHeight < convertPx.vw(2500)) {
    $('#section2 .textContainer p:nth-child(1)').removeClass('on');
    $('#section2 .textContainer p:nth-child(3)').removeClass('on');
    $('#section2 .textContainer p:nth-child(4)').removeClass('on');
    $('#section2 .textContainer p:nth-child(2)').addClass('on');
  }
  if (documentHeight >= convertPx.vw(2500) && documentHeight < convertPx.vw(2638)) {
    $('#section2 .textContainer p:nth-child(1)').removeClass('on');
    $('#section2 .textContainer p:nth-child(2)').removeClass('on');
    $('#section2 .textContainer p:nth-child(4)').removeClass('on');
    $('#section2 .textContainer p:nth-child(3)').addClass('on');
  }
  if (documentHeight >= convertPx.vw(2638)) {
    $('#section2 .textContainer p:nth-child(1)').removeClass('on');
    $('#section2 .textContainer p:nth-child(2)').removeClass('on');
    $('#section2 .textContainer p:nth-child(3)').removeClass('on');
    $('#section2 .textContainer p:nth-child(4)').addClass('on');
  }

  // section3 영역 icon 애니메이션 및 opacity 효과
  if (documentHeight >= convertPx.vw(3600)) {
    if (documentHeight < convertPx.vw(4110)) {
      $('#section3 .iconListContainer .iconList .icon:nth-child(2)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(3)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(4)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(1)').addClass('iconOn');
    }
    $('#section3 .iconListContainer .iconList .icon:nth-child(1) .iconImg').addClass('on');
  }
  if (documentHeight >= convertPx.vw(4110)) {
    if (documentHeight < convertPx.vw(4500)) {
      $('#section3 .iconListContainer .iconList .icon:nth-child(1)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(3)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(4)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(2)').addClass('iconOn');
    }
    $('#section3 .iconListContainer .iconList .icon:nth-child(2) .iconImg').addClass('on');
  }
  if (documentHeight >= convertPx.vw(4500)) {
    if (documentHeight < convertPx.vw(5000)) {
      $('#section3 .iconListContainer .iconList .icon:nth-child(1)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(2)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(4)').removeClass('iconOn');
      $('#section3 .iconListContainer .iconList .icon:nth-child(3)').addClass('iconOn');
    }
    $('#section3 .iconListContainer .iconList .icon:nth-child(3) .iconImg').addClass('on');
  }
  if (documentHeight >= convertPx.vw(5000)) {
    $('#section3 .iconListContainer .iconList .icon:nth-child(1)').removeClass('iconOn');
    $('#section3 .iconListContainer .iconList .icon:nth-child(2)').removeClass('iconOn');
    $('#section3 .iconListContainer .iconList .icon:nth-child(3)').removeClass('iconOn');
    $('#section3 .iconListContainer .iconList .icon:nth-child(4)').addClass('iconOn');
    $('#section3 .iconListContainer .iconList .icon:nth-child(4) .iconImg').addClass('on');
  }

  // section4 이전의 영역(위치)라면
  if (documentHeight < section3Bottom - 1000){
    // section4를 fix시켰던 on class를 제거.
    $('#section4 .contentsContainer').removeClass('on');
  }
  if (documentHeight < section3Bottom) {
    // section3도 보이게 처리.
    $('#section3').css({
      'opacity': 1
    })
  }

  // section4 내의 영역이라면
  if (documentHeight >= convertPx.vw(4530)) {
      $('#section4 .contentsContainer').addClass('on');
      $('#section3').css({ 'opacity': opacity })
      if (documentHeight >= convertPx.vw(5000)) {
        $('#section4 .imageContents').css({'transform': 'scale(' + 1 + ')'})
        $('#section4 .imageContents').css({'border-radius': 0})
      }
      if (documentHeight >= convertPx.vw(5100)) {
        $('#section4 .imageContents').css({'transform': 'scale(' + 0.95 + ')'})
        $('#section4 .imageContents').css({'border-radius': 2.8 + 'vh'})
      }
      if (documentHeight >= convertPx.vw(5200)) {
        $('#section4 .imageContents').css({'transform': 'scale(' + 0.9 + ')'})
        $('#section4 .imageContents').css({'border-radius': 4.8 + 'vh'})
      }
      if (documentHeight >= convertPx.vw(5300)) {
        $('#section4 .imageContents').css({'transform': 'scale(' + 0.888 + ')'})
        $('#section4 .imageContents').css({'border-radius': 6.8 + 'vh'})
        $('#section4 .contentsContainer').removeClass('on');
      }
    }

    if (!$('#section4 .contentsContainer').hasClass('on')) {
      $('#section4').removeClass('on')
    }

    // section5
    if (documentHeight < convertPx.vw(5850)){
      $('#section5').removeClass('on')
    }
    if (documentHeight >= convertPx.vw(5850) || documentHeight >= convertPx.vw(7687)) {
      $('#section5').addClass('on')
      $('#section5 .imgContents img').css({'height': 100 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(0) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(140)})
      $('#section5 .text').css({'top': 50 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 1})
    }
    if (documentHeight >= convertPx.vw(5900)) {
      $('#section5 .imgContents img').css({'height': 90 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(36) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(125)})
      $('#section5 .text').css({'top': 44 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.875})
    }
    if (documentHeight >= convertPx.vw(6000)) {
      $('#section5 .imgContents img').css({'height': 80 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(72) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(110)})
      $('#section5 .text').css({'top': 40 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.75})
    }
    if (documentHeight >= convertPx.vw(6100)) {
      $('#section5 .imgContents img').css({'height': 70 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(108) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(95)})
      $('#section5 .text').css({'top': 36 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.625})
    }
    if (documentHeight >= convertPx.vw(6200)) {
      $('#section5 .imgContents img').css({'height': 60 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(144) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(80)})
      $('#section5 .text').css({'top': 32 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.5})
    }
    if (documentHeight >= convertPx.vw(6300)) {
      $('#section5 .imgContents img').css({'height': 50 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(180) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(65)})
      $('#section5 .text').css({'top': 28 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.375})
    }
    if (documentHeight >= convertPx.vw(6400)) {
      $('#section5 .imgContents img').css({'height': 40 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(216) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(50)})
      $('#section5 .text').css({'top': 24 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0.25})
    }
    if (documentHeight >= convertPx.vw(6500)) {
      $('#section5 .imgContents img').css({'height': 30 + 'vh'})
      $('#section5 .imgContents img').css({'margin-top': convertPx.vw(255) + 'px'})
      $('#section5 .text .title').css({'font-size': convertPx.vw(30)})
      $('#section5 .text').css({'top': 20 + 'vh'})
      $('#section5 .text .contents').css({'opacity': 0})
      $('#section6').removeClass('on');
    }
    if (documentHeight >= convertPx.vw(6605)) {
      $('#section5').removeClass('on')
      $('#section6').addClass('on');
    }

    if (documentHeight >= convertPx.vw(6630)) {
      $('#section6 .textContainer').css({'opacity': 0})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(954)})
    }
    if (documentHeight >= convertPx.vw(6660)) {
      $('#section6 .textContainer').css({'opacity': 0.1})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(924)})
    }
    if (documentHeight >= convertPx.vw(6690)) {
      $('#section6 .textContainer').css({'opacity': 0.2})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(894)})
    }
    if (documentHeight >= convertPx.vw(6720)) {
      $('#section6 .textContainer').css({'opacity': 0.3})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(864)})
    }
    if (documentHeight >= convertPx.vw(6750)) {
      $('#section6 .textContainer').css({'opacity': 0.4})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(834)})
    }
    if (documentHeight >= convertPx.vw(6780)) {
      $('#section6 .textContainer').css({'opacity': 0.5})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(804)})
    }
    if (documentHeight >= convertPx.vw(6810)) {
      $('#section6 .textContainer').css({'opacity': 0.6})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(774)})
    }
    if (documentHeight >= convertPx.vw(6840)) {
      $('#section6 .textContainer').css({'opacity': 0.7})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(744)})
    }
    if (documentHeight >= convertPx.vw(6870)) {
      $('#section6 .textContainer').css({'opacity': 0.8})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(714)})
    }
    if (documentHeight >= convertPx.vw(6900)) {
      $('#section6 .textContainer').css({'opacity': 0.9})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(684)})
    }
    if (documentHeight >= convertPx.vw(6930)) {
      $('#section6 .textContainer').css({'opacity': 1})
      $('#section6 .textContainer').css({'padding-top': convertPx.vw(654)})
    }
}


$(window).scroll(function () {
  mainScrollEvent();
})