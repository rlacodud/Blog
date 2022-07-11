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
  console.log("documentHeight = " + documentHeight);

  // section1 텍스트 효과
    $('.backText').css({
      'margin-top': -backTextMarginTop + documentHeight + "px"
  })
}

$(window).scroll(function () {
  mainScrollEvent();
})