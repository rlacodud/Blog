var opacity = 0;
 
function scrollOpacityChange(e) {
  if (e.wheelDelta < 0) {
    // 마우스 아래 = 이동
    console.log("마우스아래");
    opacity += 0.1;
    $('#main .whiteBlock').css(
      'opacity', opacity)
  } else if (e.wheelDelta > 0) {
    // 미우스 위 = 원래대로
    console.log("마우스위");
    opacity -= 0.1;
    $('#main .whiteBlock').css(
      'opacity', opacity)
  };
};
window.addEventListener("mousewheel", scrollOpacityChange);