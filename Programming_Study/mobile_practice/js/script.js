var container = document.querySelector('.wrap')

var transY = 0;
var indexP = 0;

// 터치 이벤트에서 사용할 변수들을 선언
var ts = null;
var tm = null;
var te = null;
var diff = null;
var tTrans = null;

var scDelta = null;
var transEnd = true;
var winH = window.innerHeight;

var mouseTouchEventCall = false;

window.onresize = function(){ // window.onresize -> 윈도우창이 리사이즈 될때 호출되는 함수
  winH = window.innerHeight; // 윈도우의 높이를 다시 반환받는다.
}

function slideMain(){
  transY = indexP * -100;
  container.style.transform = "translateY(" + transY + "vh)";
  container.style.webkitTransform = "translateY(" + transY + "vh)";
  container.style.mozTransform = "translateY(" + transY + "vh)";
  container.style.msTransform = "translateY(" + transY + "vh)";
  container.style.oTransform = "translateY(" + transY + "vh)";
  container.style.transition = "all 0.8s ease";
}

function ontouchW(e){
  mouseTouchEventCall = true;
  var touch = e.touches[0] || e.changedTouches[0];
  if(!transEnd)return;
  else if(e.type === "touchstart"){
      ts = touch.clientY;
  }else if(e.type === "touchmove"){
      tm = touch.clientY;
      tTrans = ((tm - ts)/winH) * 100;

      if(ts > tm){
          scDelta = 1;
      }else if(ts < tm){
          scDelta = -1;
      }
      // scrollCanAllow();//만약 section이 canScroll 클래스를 가지고 있지 않다면
      // if(!scrollCan)return;
      var move = transY + tTrans;
      container.style.transform = "translateY(" + move + "vh)";
      container.style.webkitTransform = "translateY(" + move + "vh)";
      container.style.mozTransform = "translateY(" + move + "vh)";
      container.style.msTransform = "translateY(" + move + "vh)";
      container.style.oTransform = "translateY(" + move + "vh)";
      container.style.transition = "all 0.01s linear";
  }
  else if(e.type === "touchend"){
      console.log('touchend');
      te = touch.clientY;
      // if(!scrollCan)return;
      if(ts > te && indexP){
          if(tTrans < -35){
              indexP++;
          }
      }else if(ts < te && indexP > 0){
          if(tTrans > -35){
              indexP--;
          } 
      }
      slideMain();
  }
}

function transST(e){
  if(e.type === 'transitionend'){
      // console.log('end');
      transEnd = true;
  }else if(e.type === 'transitionstart'){
      // console.log('start');
      transEnd = false;
  }
}

container.addEventListener('transitionend', transST);
container.addEventListener('transitionstart', transST);

window.addEventListener('touchstart', ontouchW);
window.addEventListener('touchmove', ontouchW);
window.addEventListener('touchend', ontouchW);