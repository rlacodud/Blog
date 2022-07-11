// press 대상
var square = document.querySelector('.square');

// element를 조작할 manager 생성
// var manager = new Hammer.Manager(element);
var manager = new Hammer.Manager(square);

// recognizer 생성(종류에 따라 다르게 생성)
// 500ms동안 눌릴 경우 실행됨
var Press = new Hammer.Press({
  time: 500
});

// manager에 recognizer 추가
manager.add(Press);

// square이 press될 때마다 실행됨
manager.on('press', function(e) {
  // press될 때마다 expand 클래스를 toggle시킴
  e.target.classList.toggle('expand');
});
