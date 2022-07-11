// tap 대상
var square = document.querySelector('.square');

// element를 조작할 manager 생성
// var manager = new Hammer.Manager(element);
var manager = new Hammer.Manager(square);

// recognizer 생성(종류에 따라 다르게 생성)
// 1번 tap할 때마다 실행
var Tap = new Hammer.Tap({
  taps: 1
});

// manager에 recognizer 추가
manager.add(Tap);

// square이 tap될 때마다 실행됨
manager.on('tap', function(e) {
  // tap될 때마다 expand 클래스를 toggle시킴
  e.target.classList.toggle('expand');
});
