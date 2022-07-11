console.log('complete');

var header = document.querySelector('header');
var navi = document.querySelector('header nav');
var hamBtn = document.querySelector('.hamburger-wrap button');

var main = document.querySelector('main');
var prev = document.querySelector('.prev');
var section = document.querySelectorAll('section');

var canScroll = document.querySelectorAll('section.canScroll');

var liCon = document.querySelector('.index-con');
var liIndex = document.getElementsByClassName('item');
var pageNum = document.querySelector('.page-num');

var transY = 0;
var indexP = 0;

var transEnd = true;
var winH = window.innerHeight;

/* mouse */
// 마우스 이벤트에서 사용할 변수들을 선언
var ms = null;
var mm = null;
var me = null;
var mdiff = null;
var mTrans = null;

var mpress = false;

var scrollCan = true;

var scDelta = null;

/* touch */
// 터치 이벤트에서 사용할 변수들을 선언
var ts = null;
var tm = null;
var te = null;
var diff = null;
var tTrans = null;

var mouseTouchEventCall = false;

window.onresize = function(){ // window.onresize -> 윈도우창이 리사이즈 될때 호출되는 함수
    winH = window.innerHeight; // 윈도우의 높이를 다시 반환받는다.
}

function onClickHamBtn(e){
    e.preventDefault();
    navi.classList.toggle('active');
    header.classList.toggle('active');
}

addIndexList();

function addIndexList(){ // page navigation을 섹션의 갯수를 불러와 자동으로 생성해주는 함수
    var secLength = section.length; // 섹션의 갯수를 secLength변수에 반환해준다.
    for(var i = 0; i < secLength; i++){
        var liEl = document.createElement("li");
        liEl.className = 'item';
        liCon.appendChild(liEl);
    }
    liIndex[0].classList.add('active');
}
window.onload = function(){ // 화면에 로드가 되었다면.
    function slideMain(){
        transY = indexP * -100;
        main.style.transform = "translateY(" + transY + "vh)";
        main.style.webkitTransform = "translateY(" + transY + "vh)";
        main.style.mozTransform = "translateY(" + transY + "vh)";
        main.style.msTransform = "translateY(" + transY + "vh)";
        main.style.oTransform = "translateY(" + transY + "vh)";
        main.style.transition = "all 0.8s ease";
        for(var i =0 ; i < liIndex.length; i++){
            if(liIndex[i].classList.contains("active")){
                liIndex[i].classList.remove("active");
            }
        }
        liIndex[indexP].classList.add("active");
        pageNum.innerHTML = "0" + (indexP + 1);
    }
    
    function scrollCanAllow(){ // section이 canScroll( 스크롤을 가지고있다 )을 가지고 있다면 scroll을 다 해야 다음 섹션으로 넘김.
        var secScrollEl = section[indexP];
        if(secScrollEl.classList.contains("canScroll")){
            scrollCan = false;
            if(mouseTouchEventCall){
                secScrollEl.scrollTop += (mTrans * -(1/2));
            }
            if(scDelta > 0){
                if(secScrollEl.offsetHeight + secScrollEl.scrollTop >= secScrollEl.scrollHeight){
                    scrollCan = true;
                }
            }else if(scDelta < 0){
                if(secScrollEl.scrollTop <= 0){
                    scrollCan = true;
                }
            }
        }
    }

    function onMouseW(e){ // 마우스 휠 스크롤 이벤트
        mouseTouchEventCall = false;
        if(!transEnd)return;
        if(e.type === "mousewheel"){
            scDelta = e.deltaY;
            scrollCanAllow();
            if(!scrollCan)return;
            //만약 section이 canScroll 클래스를 가지고 있지 않다면
            if(e.deltaY > 0 && indexP < (section.length -1)){
                indexP++;
            }else if(e.deltaY < 0 && indexP > 0){
                indexP--;
            }
            slideMain();
        }
    }

    function onMouseCW(e){
        mouseTouchEventCall = true;
        if(!transEnd)return;
        if(e.type === "mousedown"){
            mpress = true;
            ms = e.clientY;
        }else if(e.type === "mousemove"){   
            if(mpress){
                // console.log('move');
                mm = e.clientY;
                mTrans = ((mm - ms)/winH) * 100;

                if(ms > mm){
                    scDelta = 1;
                }else if(ms < mm){
                    scDelta = -1;
                }
                scrollCanAllow();//만약 section이 canScroll 클래스를 가지고 있지 않다면
                if(!scrollCan)return;
                var move = transY + mTrans;
                main.style.transform = "translateY(" + move + "vh)";
                main.style.webkitTransform = "translateY(" + move + "vh)";
                main.style.mozTransform = "translateY(" + move + "vh)";
                main.style.msTransform = "translateY(" + move + "vh)";
                main.style.oTransform = "translateY(" + move + "vh)";
                main.style.transition = "all 0.01s linear";
            }
        }else if(e.type === "mouseup"){
            mpress = false;
            me = e.clientY;
            if(!scrollCan)return;
            if(ms > me && indexP < (section.length -1)){
                if(mTrans < -35){
                    indexP++;
                }
            }else if(ms < me && indexP > 0){
                if(mTrans > -35){
                    indexP--;
                }
            }
            slideMain();
        } 
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
            scrollCanAllow();//만약 section이 canScroll 클래스를 가지고 있지 않다면
            if(!scrollCan)return;
            var move = transY + tTrans;
            main.style.transform = "translateY(" + move + "vh)";
            main.style.webkitTransform = "translateY(" + move + "vh)";
            main.style.mozTransform = "translateY(" + move + "vh)";
            main.style.msTransform = "translateY(" + move + "vh)";
            main.style.oTransform = "translateY(" + move + "vh)";
            main.style.transition = "all 0.01s linear";
        }
        else if(e.type === "touchend"){
            console.log('touchend');
            te = touch.clientY;
            if(!scrollCan)return;
            if(ts > te && indexP < (section.length -1)){
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
    
    function onClickLiIndex(e){
        e.preventDefault();
        liIndex = Array.prototype.slice.call(liIndex);
        var target = e.currentTarget;
        var index = liIndex.indexOf(target);
        indexP = index;
        slideMain();
    }
    
    function eventAdd(){
        hamBtn.addEventListener('click', onClickHamBtn);

        main.addEventListener('transitionend', transST);
        main.addEventListener('transitionstart', transST);
        
        for(var i = 0; i < liIndex.length; i++){
            liIndex[i].addEventListener('click', onClickLiIndex);
        }
        
        window.addEventListener('mousewheel', onMouseW);
        
        window.addEventListener('mousedown', onMouseCW);
        window.addEventListener('mousemove', onMouseCW);
        window.addEventListener('mouseup', onMouseCW);
        
        window.addEventListener('touchstart', ontouchW);
        window.addEventListener('touchmove', ontouchW);
        window.addEventListener('touchend', ontouchW);
    }
    
    function init(){
        eventAdd();
    }
    init();
}

