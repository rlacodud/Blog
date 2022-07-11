// 1. 박스 우측을 드래그하면

var element = document.querySelector('.right-box');
var rightBox = new Hammer(element);
rightBox.get('pan').set({direction: Hammer.DIRECTION_ALL});

var box = $('.box');

rightBox.on('pandown', function(e) {
  console.log(e.deltaY);
  // 2. 박스가 우측으로 회전
  box.css('transform-origin', 'left top');
  box.css('transform', `rotate(${e.deltaY/10}deg)`);

  // 3. 동그라미가 우측으로 이동(left: 드래그한 양px)
  // 4. 근데 이동거리 180px 이하일 때에만 우측으로 이동
  var leftValue = parseFloat($('.circle').css('left').slice(0, -2)); // 지금 원이 움직인 정도
  if ((leftValue + e.deltaY/2) < 180) { // 현재 원이 움직인 거리 + 앞으로 이동할 거리가 180 이하일 때에만 실행
    $('.circle').css('left', '+=' + e.deltaY/2)
  }
})

// 5. 박스 원래대로 위치 복구
rightBox.on('panend', function(e) {
  $('.box').css('transform', 'rotate(0deg)')
  $('.circle').css('left', 0)
})