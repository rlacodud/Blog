// double tap 대상
var square = document.querySelector('.square');

// element를 조작할 manager 생성
// var manager = new Hammer.Manager(element);
var manager = new Hammer.Manager(square);

// recognizer 생성(종류에 따라 다르게 생성)
// Tap 종류 중 doubletap에 2번 tap할 경우에 실행시킴
var DoubleTap = new Hammer.Tap({
  event: 'doubletap',
  taps: 2
});

// manager에 recognizer 추가
manager.add(DoubleTap);

// square이 doubletap될 때마다 실행됨
// 위에서 event 종류를 doubletap으로 설정했기에
// 해당 스크립트 실행 조건영역에서도 이벤트를 doubletap으로 작성
manager.on('doubletap', function(e) {
  // doubletap될 때마다 expand 클래스를 toggle시킴
  e.target.classList.toggle('expand');
});
