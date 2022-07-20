window.onload = function() {
  setTimeout (function() {
    scrollTo(0, 0);
  }, 100);
};

// horizontal
var varWrap = document.querySelector(".var-wrap");
var article = document.querySelectorAll("article");
var varnumber = 0;
var varDuration = 0;
var var03 = ((varWrap.offsetWidth / article.length) * (article.length - 1)) * -1;

var fixMode = false;
var test = 1

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
    if($('#section3').hasClass('fixed')) {
      // console.log(varnumber);
      window.onmousewheel = function(event){
        if (e.wheelDelta < 0 && varnumber > -6) {
          // console.log("마우스아래");
          varnumber --;
          varDuration = varnumber * convertPx.vw(1920)
        } else if(e.wheelDelta > 0 && varnumber < 0) {
          // console.log("마우스위");
          varnumber ++;
          varDuration = varnumber * convertPx.vw(1920)
        }
      };
    }
      varWrap.style.transition = "transform 0.5s linear";
      varWrap.style.transform = "translateX(" + varDuration + "px)";
  }

  function fixAndFixEnd(e) {
    let documentHeight2 = $(document).scrollTop();
    // 마우스 아래
    console.log(documentHeight2, convertPx.vw(2700), fixMode)
    if (e.wheelDelta < 0) {
      // 마우스를 내릴 때 section3 영역 안에 들어오면
      if (documentHeight2 >= convertPx.vw(2600)) {
        // fixMode를 true로
        fixMode = true
      }
      // 마우스를 내릴 때 7번째 이미지가 보여지는 상태이면
      if ($('#section3 .image').hasClass('seven')) {
        // fixMode를 false로
        fixMode = false
      }
      
      if ($('#section3 .image').hasClass('seven') && !fixMode) {
        $('#section3').removeClass('fixed');
        $('#section3').removeClass('fixeEnd');
      // section3 영역에 들어왔을 때
      } else if(fixMode && $('#section3 .image').hasClass('one')) {
        // fix 추가
        $('#section3').addClass('fixed');
      }

    // 마우스 위
    } else if(e.wheelDelta > 0) {
      // 첫번째 슬라이드가 위치한 상태에서 마우스를 위로 올리면
      if ($('#section3 .image').hasClass('one')) {
        // false 해제
        fixMode = false;
      }
      if (documentHeight2 <= convertPx.vw(2700) && $('#section3 .image').hasClass('seven')) {
        fixMode = true;
      }

      if ($('#section3 .image').hasClass('seven') && fixMode) {
        $('#section3').removeClass('fixeEnd');
        $('#section3').addClass('fixed');
      } else if (!fixMode && $('#section3 .image').hasClass('one')) {
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
    if(varnumber == 0) {
      reset();
      $('#section3 .image').addClass('one');
    } else if (varnumber == -1) {
      reset();
      $('#section3 .image').addClass('two');
    } else if (varnumber == -2) {
      reset();
      $('#section3 .image').addClass('three');
    } else if (varnumber == -3) {
      reset();
      $('#section3 .image').addClass('four');
    } else if (varnumber == -4) {
      reset();
      $('#section3 .image').addClass('five');
    } else if (varnumber == -5) {
      reset();
      $('#section3 .image').addClass('six');
    } else if (varnumber == -6) {
      reset();
      $('#section3 .image').addClass('seven');
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