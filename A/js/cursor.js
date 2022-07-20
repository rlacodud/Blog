var cursorDotEl = document.querySelector('.cursor-dot');
var cursorBGEl = document.querySelector('.cursor-bg');

var btnListItemEl = document.querySelectorAll('header .header-container .right ul li');
var moreEl = document.querySelector('#section3 .more');
var rightTextEl = document.querySelector('#section5 .rightText');

function onMoveWindow(e){
    var posX = e.clientX;
    var posY = e.clientY;

    gsap.killTweensOf(cursorDotEl);
    gsap.to(cursorDotEl, {top: posY, left: posX, duration: 0.1, ease: 'sine.inOut'});
    gsap.killTweensOf(cursorBGEl);
    gsap.to(cursorBGEl, {top: posY, left: posX, duration: 0.1});
}

function onEnterBtnListItenEl(){
  classReset();
    if(!cursorDotEl.classList.contains('on-eye')){
      cursorDotEl.classList.add('on-eye');
      cursorBGEl.classList.add('on');
    }
    for(var i = 0; i < btnListItemEl.length; i++) {
      btnListItemEl[i].classList.add('randomOff');
    }
}

function onLeaveBtnListItenEl(){
    classReset();
    if(cursorDotEl.classList.contains('on-eye')){
      cursorDotEl.classList.remove('on-eye');
      cursorBGEl.classList.remove('on');
    }
    for(var i = 0; i < btnListItemEl.length; i++) {
      btnListItemEl[i].classList.remove('randomOff');
    }
}

function onEnterMore(){
    moreEl.classList.add('randomOff');
    if(moreEl.classList.contains('randomOff')){
      cursorDotEl.classList.remove('on-contact');
      cursorDotEl.classList.add('on-eye');
      cursorBGEl.classList.add('on');
    }
}

function onLeaveMore(){
  moreEl.classList.remove('randomOff');
  if(!moreEl.classList.contains('randomOff')){
    cursorDotEl.classList.remove('on-contact');
    cursorDotEl.classList.remove('on-eye');
    cursorBGEl.classList.remove('on');
  }
}

function onEnterFooter() {
  if(!rightTextEl.classList.contains('randomOff')){
    rightTextEl.classList.add('randomOff');
    cursorDotEl.classList.remove('on-eye');
    cursorDotEl.classList.add('on-contact');
    cursorBGEl.classList.add('on');
  }
}

function onLeaveFooter() {
  if(rightTextEl.classList.contains('randomOff')){
    rightTextEl.classList.remove('randomOff');
    cursorDotEl.classList.remove('on-eye');
    cursorDotEl.classList.remove('on-contact');
    cursorBGEl.classList.remove('on');
  }
}

function addEvent(){
    window.addEventListener('mousemove', onMoveWindow);
    for(var i = 0; i < btnListItemEl.length; i++){
        btnListItemEl[i].addEventListener('mouseenter', onEnterBtnListItenEl);
        btnListItemEl[i].addEventListener('mouseleave', onLeaveBtnListItenEl);
    }
    rightTextEl.addEventListener('mouseenter', onEnterFooter)
    rightTextEl.addEventListener('mouseleave', onLeaveFooter)

    moreEl.addEventListener('mouseenter', onEnterMore)
    moreEl.addEventListener('mouseleave', onLeaveMore)
}

function init(){
  addEvent();
}
init();

// 커서 class 리셋
function classReset() {
  $('.cursor-dot').removeClass('lunch');
  $('.cursor-dot').removeClass('vacation');
  $('.cursor-dot').removeClass('reward');
}

// 생성된 이모지 class 리셋
function clickEmojiReset() {
  $('.clickEmoji').removeClass('lunch');
  $('.clickEmoji').removeClass('vacation');
  $('.clickEmoji').removeClass('reward');
}

// 랜덤 커서 interval
let interval = function () {
  var myArray = ['lunch', 'vacation', 'reward'];
  var rand = Math.floor(Math.random()*myArray.length);
  var rValue = myArray[rand];
  // class 리셋 후
  classReset();
  // 해당 class 추가
  $('.cursor-dot').addClass(rValue);
  // console.log(rValue)
}

function randomCursorStop() {
  clearInterval(interval);
}

// // 랜덤 커서
let randomCursor = function () {
  if(btnListItemEl[0].classList.contains('randomOff') || btnListItemEl[1].classList.contains('randomOff') || btnListItemEl[2].classList.contains('randomOff') || rightTextEl.classList.contains('randomOff') || moreEl.classList.contains('randomOff')) {
    classReset();
    randomCursorStop()
  }
}

setInterval(interval, 500)
setInterval(randomCursor, 100)

// 클릭 시 말풍선 추가
function createChat() {
  var convertPx = {
    vw: function (px) {
      px = parseFloat(px);
      var ww = $(window).width();

      return ww * px / 1920;
    }
  }
  
  document.onmousedown = function() {
    // 클릭된 위치값 구하기
    var x = event.x;
    var y = event.y;

    function emojiRemove() {
      clickEmoji.style.opacity = '0';
    }
    function chatRemove() {
      textChat.style.opacity = '0';
    }

    // emoji 생성
    let clickEmoji = document.querySelector('.clickEmoji');
    if($('.cursor-dot').hasClass('lunch')) {
      clickEmojiReset()
      clickEmoji.classList.add('lunch');
      clickEmoji.style.position = 'fixed';
      clickEmoji.style.display = 'block';
      clickEmoji.style.opacity = '1';
      clickEmoji.style.top = (y - convertPx.vw(20)) + 'px';
      clickEmoji.style.left = (x - convertPx.vw(40)) + 'px';
      setTimeout(emojiRemove, 6000);
    } else if($('.cursor-dot').hasClass('vacation')) {
      clickEmojiReset()
      clickEmoji.classList.add('vacation');
      clickEmoji.style.position = 'fixed';
      clickEmoji.style.display = 'block';
      clickEmoji.style.opacity = '1';
      clickEmoji.style.top = (y - convertPx.vw(20)) + 'px';
      clickEmoji.style.left = (x - convertPx.vw(40)) + 'px';
      setTimeout(emojiRemove, 6000);
    } else if($('.cursor-dot').hasClass('reward')) {
      clickEmojiReset()
      clickEmoji.classList.add('reward');
      clickEmoji.style.position = 'fixed';
      clickEmoji.style.display = 'block';
      clickEmoji.style.opacity = '1';
      clickEmoji.style.top = (y - convertPx.vw(30)) + 'px';
      clickEmoji.style.left = (x - convertPx.vw(20)) + 'px';
      setTimeout(emojiRemove, 6000);
    }

    let textChat = document.querySelector('.textChat');
    // textChat 생성
    if($('.cursor-dot').hasClass('lunch')) {
      textChat.classList.add('lunch');
      textChat.style.position = 'fixed';
      textChat.style.display = 'block';
      textChat.style.opacity = '1';
      textChat.style.top = y + 'px';
      textChat.style.left = (x + convertPx.vw(150)) + 'px';
      textChat.innerHTML = '점심 뭐먹지?'
      setTimeout(chatRemove, 6000);
    } else if($('.cursor-dot').hasClass('vacation')) {
      textChat.classList.add('vacation');
      textChat.style.position = 'fixed';
      textChat.style.display = 'block';
      textChat.style.opacity = '1';
      textChat.style.top = y+ 'px';
      textChat.style.left = (x + convertPx.vw(250)) + 'px';
      textChat.innerHTML = '여름휴가! 세달밖에(?) 안남았네..^^;;'
      setTimeout(chatRemove, 6000);
    } else if($('.cursor-dot').hasClass('reward')) {
      textChat.classList.add('reward');
      textChat.style.position = 'fixed';
      textChat.style.display = 'block';
      textChat.style.opacity = '1';
      textChat.style.top = y + 'px';
      textChat.style.left = (x + convertPx.vw(220)) + 'px';
      textChat.innerHTML = '복지카드 얼마나 남았어요?'
      setTimeout(chatRemove, 6000);
    }
  }
}


$(window).on('click', function() {
  createChat()
}) 