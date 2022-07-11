var controller = new ScrollMagic.Controller();

var ani2_txt = new TimelineMax();
// $() 안의 요소를 0.8초동안 {} 안의 값으로 변하도록 애니메이션을 준다.
ani2_txt.to($('#sectionTwo .wrap .contentsContainer .textBox h2'), 0.8, {opacity: 1, delay: 0.6, top: 0})
var scene = new ScrollMagic.Scene({
  // 이 애니메이션이 발동되는 트리거 요소는 #sectionTwo이며
  triggerElement: '#sectionTwo',
  // #sectionTwo의 전체 영역 중(시작 부분부터 1 / 끝 부분으로 갈수록 0에 가까움) 0.9 위치에 도달했을 때 발동된다.
  triggerHook: 0.9
})
  // 스크롤을 내려 한번 발동됐다가 다시 위로 올려볼 때에도 실행되게끔 설정할 것인가.
  // false = 한번만 | true = 트리거가 눌릴 때마다 발동
  .reverse(true)
  // 위에서 설정한 TimelineMax명
  .setTween(ani2_txt)
  .addTo(controller);
  
var ani2_img = new TimelineMax();
ani2_img.to($('#sectionTwo .wrap .contentsContainer .imgBox .img'), 1, {opacity: 1, delay: 1, top: 0})
var scene = new ScrollMagic.Scene({
  triggerElement: '#sectionTwo',
  triggerHook: 0.9
})
  .reverse(false)
  .setTween(ani2_img)
  .addTo(controller);