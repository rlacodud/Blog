// swipe 대상
var square = document.querySelector('.square');
// element를 조작할 manager 생성
// var manager = new Hammer.Manager(element);
var manager = new Hammer.Manager(square);

// recognizer 생성(종류에 따라 다르게 생성)
var Swipe = new Hammer.Swipe();

// manager에 recognizer 추가
manager.add(Swipe);

// 맞는 거리값으로 계산되게 하기 위해 전역변수로 x, y값 생성
var deltaX = 0;
var deltaY = 0;

// square이 swipe될 때마다 실행됨
manager.on('swipe', function(e) {
  deltaX = deltaX + e.deltaX;
  console.log(deltaX, e.deltaX, e.offsetDirection);
  // direction은 오른쪽으로 보내면 4 | 왼쪽으로 보내면 2로 나옴
  var direction = e.offsetDirection;
  var translate3d = 'translate3d(' + deltaX + 'px, 0, 0)';
  
  if (direction === 4 || direction === 2) {
    e.target.innerText = deltaX;
    e.target.style.transform = translate3d;
  }
});
