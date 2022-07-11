// 윈도우가 로드되면 최상단으로 이동.
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

// 보여줄 비디오의 길이.
var FRAMES = 5000;
// 한 프레임당 보여줄 영상 길이.
// 값이 클수록 더 자연스럽게 보이지만 영상의 길이를 고려해서 적당한 값을 부여해야 함.
var FPS = 2000;
var video = document.getElementById('video');
var convertPx = {
  vw: function(px){
      px = parseFloat(px);
      var ww = $(window).width();
      
      return ww * px / 1920;
  }
}
var section1 = document.getElementById('section1');

// 윈도우가 로드되면 실행.
window.addEventListener('load', function(e) {
  // 비디오를 일시정지시키고
  video.pause();
  // 비디오가 처음부터 시작될 수 있도록 0의 값 부여.
  video.currentTime = 0;
});

// 비디오 데이터가 전부 로드되면 실행.
// 비디오의 길이는 데이터가 전부 로드되어야 불러올 수 있기 때문.
video.addEventListener('loadedmetadata', function() {
  section1.style.height = Math.floor(video.duration) * 500 + "px";
  console.log(video.duration, '비디오 길이', Math.floor(video.duration) * 500);
});

window.addEventListener('scroll', function (e) {
  // 스크롤된 값에 따라 영상이 진행됨.
  var time = (window.scrollY / 1000) * FRAMES / FPS;
  video.currentTime = time;
  // let windowTop = $(window).scrollTop();
  // console.log(windowTop);
});

setInterval(function(){
  if($("#video").prop("ended")){
    //영상종료 후 진행할 함수 입력부분
    video.classList.add('off');
    console.log('영상끝');
  }
},200);