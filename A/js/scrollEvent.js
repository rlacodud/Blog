window.onload = function() {
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
}

// horizontal
var varWrap = document.querySelector(".var-wrap");

var move = 0;
var varDuration = 500;

var fixMode = false;

function mainScrollEvent(e) {
  var convertPx = {
    vw: function (px) {
      px = parseFloat(px);
      var ww = $(window).width();

      return ww * px / 1920;
    }
  }

  let documentHeight = $(document).scrollTop();
  var backTextMarginTop = convertPx.vw(500);

  let marginTop = -backTextMarginTop + documentHeight;

  // section1 텍스트 효과
  if(marginTop <= convertPx.vw(-250)) {
    $('.backText').css({
      'margin-top': marginTop + "px"
    })
  }

  function onscrollw(e) {
    if(documentHeight >= convertPx.vw(1500)) {
      $('.sec1Top .leftText').addClass('fixEnd');
      $('.sec1Top .centerText').addClass('fixEnd');
      $('.sec1Top .rightText').addClass('fixEnd');
    } else if (documentHeight <= convertPx.vw(1500)){
      $('.sec1Top .leftText').removeClass('fixEnd');
      $('.sec1Top .centerText').removeClass('fixEnd');
      $('.sec1Top .rightText').removeClass('fixEnd');
    }
    if($('#section3').hasClass('fixed')) {
      window.onmousewheel = function(event){
        if (e.wheelDelta < 0 && move > convertPx.vw(-11500)) {
          // console.log("마우스아래");
          move -= varDuration;
        } else if(e.wheelDelta > 0 && move < 0) {
          // console.log("마우스위");
          move += varDuration;
        }
      };
    }
      varWrap.style.transition = "transform 0.5s linear";
      varWrap.style.transform = "translateX(" + move + "px)";
  }

  function fixAndFixEnd(e) {
    let documentHeight2 = $(document).scrollTop();
    // 마우스 아래
    if (e.wheelDelta < 0) {
      // 마우스를 내릴 때 section3 영역 안에 들어오면
      if (documentHeight2 >= convertPx.vw(2600)) {
        // fixMode를 true로
        fixMode = true
      }
      // 마우스를 내릴 때 한계까지 스크롤이 완료되었다면
      if (move <= convertPx.vw(-11500)) {
        // fixMode를 false로
        fixMode = false
      }
      
      if (move <= convertPx.vw(-11500) && !fixMode) {
        $('#section3').removeClass('fixed');
        $('#section3').removeClass('fixeEnd');
      // section3 영역에 들어왔을 때
      } else if(fixMode && move >= 0) {
        // fix 추가
        $('#section3').addClass('fixed');
      }

    // 마우스 위
    } else if(e.wheelDelta > 0) {
      // 첫번째 슬라이드가 위치한 상태에서 마우스를 위로 올리면
      if (move >= 0) {
        // false 해제
        fixMode = false;
      }
      if (documentHeight2 <= convertPx.vw(2700) && move <= convertPx.vw(-11500)) {
        fixMode = true;
      }

      if (move <= convertPx.vw(-11500) && fixMode) {
        $('#section3').removeClass('fixeEnd');
        $('#section3').addClass('fixed');
      } else if (!fixMode && move >= 0) {
        $('#section3').removeClass('fixeEnd');
        $('#section3').removeClass('fixed');
      }
    }
  }

  function reset() {
    $('#section3 .image').removeClass('one');
    $('#section3 .image').removeClass('two');
    $('#section3 .image').removeClass('three');
    $('#section3 .image').removeClass('four');
    $('#section3 .image').removeClass('five');
    $('#section3 .image').removeClass('six');
    $('#section3 .image').removeClass('seven');
  }

  function changeImage() {
    if(move <= 0 && move >= convertPx.vw(-1000)) {
      reset();
      $('#section3 .image').addClass('one');
    } else if (move <= convertPx.vw(-1000) && move >= convertPx.vw(-3000)) {
      reset();
      $('#section3 .image').addClass('two');
    } else if (move <= convertPx.vw(-3000) && move >= convertPx.vw(-5400)) {
      reset();
      $('#section3 .image').addClass('three');
    } else if (move <= convertPx.vw(-5400) && move >= convertPx.vw(-7000)) {
      reset();
      $('#section3 .image').addClass('four');
    } else if (move <= convertPx.vw(-7000) && move >= convertPx.vw(-9000)) {
      reset();
      $('#section3 .image').addClass('five');
    } else if (move <= convertPx.vw(-9000) && move >= convertPx.vw(-11000)) {
      reset();
      $('#section3 .image').addClass('six');
    } else if (move <= convertPx.vw(-11000)) {
      reset();
      $('#section3 .image').addClass('seven');
    } else if (move <= convertPx.vw(-11500)) {
      fixMode = false
    }
  }


  if($('#section3').hasClass('fixed')) {
    window.addEventListener("mousewheel", onscrollw);
  } else {
    window.removeEventListener("mousewheel", onscrollw);
  }

  window.addEventListener("mousewheel", fixAndFixEnd);
  window.addEventListener("mousewheel", changeImage);

}


$(window).scroll(function () {
  mainScrollEvent();
})