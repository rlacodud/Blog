# __모바일웹 터치 제스쳐__

## __1. 터치 제스쳐란?__
#### &nbsp; PC웹에서 마우스 이벤트가 있다면 모바일웹에서 터치 이벤트가 있다.
#### &nbsp; PC웹 환경은 콘텐츠와 메뉴 버튼들을 한 화면에 담을 수 있고 클릭만으로도 불편함없이 사용 가능하다.

<br/>

#### &nbsp; 반면 작은 화면, 큰 포인터(손가락) 환경인 __모바일에서는 콘텐츠와 메뉴(내비게이션)을 한 화면에 담기 어렵다.__
#### &nbsp; 이 때 터치의 형태를 다양화하여 PC에서의 단축키와 같이 __단축 액션을 제공하는 것이 터치 제스쳐이다.__

<br/>


제스쳐 명 | 주요 액션
-------- | ---------
Tab | 선택
Double Tap | 열기(팝업), 화면 확대/원상복구
Hold(Long Tap) | 모드 전환(리스팅 <-> 액션)
Drag-Flick(Swipe) | 이전/다음 콘텐츠로 이동(삭제)
Pinch | 이미지 확대/축소
Rotation | 이미지 회전

<br/>

## __2. 터치 이벤트__
#### &nbsp; 모바일 웹브라우저에서는 W3C에서 권고하는 __4가지 터치 이벤트__ 를 지원한다.

<br/>

#### &nbsp; __[기본 터치 이벤트]__
이벤트 명 | 설명
-------- | -------
touchstart | 스크린에 손가락이 닿았을 때 발생
touchmove | 스크린에 손가락이 닿은 채로 움직일 때 발생
touchend | 스크린에서 손가락을 뗄 때 발생
touchcancel | 시스템에서 이벤트를 취소시킬 때 발생(브라우저마다 다르기에 touched 이벤트로 간주해도 무방함)

<br/>

#### &nbsp; __[이벤트 객체 주요 속성]__
속성 | 설명
---- | ----
changedTouches | 이벤트에 할당된 모든 접촉점에 대한 터치 리스트 <br/> - touchstart 이벤트의 changedTouches는 현재 이벤트와 함께 바로 활성화된 터치점의 리스트 <br/> - touchmove 이벤트의 changedTouches는 마지막 이벤트에서 이동한 터치점의 리스트 <br/> - touchend와 touchcancel 이벤트의 changedTouches는 화면에서 막 떼어진 터치점의 리스트
targetTouches | 현재 이벤트의 타겟인 엘리먼트에서 시작되어 화면을 터치하고 있는 모든 접촉점에 대한 터치 리스트
touches | 현재 화면을 터치하고 있는 모든 접촉점의 터치 리스트이며 터치된 구역의 정보를 담은 배열 <br/> - event.touches.length를 이용해 멀티터치 여부를 계산할 수 있음 <br/> - 특정 터치의 좌표: event.touches[!].pageX(pageY)

<br/>

#### &nbsp; __[Touch 객체 속성]__
속성 | 설명
---- | ----
identifier | 인식점을 구분하기 위한 인식점 번호
screenX | 디바이스 화면을 기준으로 한 x 좌표
screenY | 디바이스 화면을 기준으로 한 y 좌표
clientX | 브라우저 화면을 기준으로 한 x 좌표(스크롤 미포함)
clientY | 브라우저 화면을 기준으로 한 y 좌표(스크롤 미포함)
pageX | 가로 스크롤을 포함한 브라우저 화면을 기준으로 한 x 좌표
pageY | 세로 스크롤을 포함한 브라우저 화면을 기준으로 한 y 좌표
target | 터치된 DOM 객체

<br/>

#### &nbsp; IOS의 경우, __멀티터치에 대한 비표준 이벤트__ 를 추가로 제공하여 편의성을 높이고 있다.
#### &nbsp; __[IOS 제스쳐 이벤트]__
이벤트 명 | 설명
-------- | ------
gesturestart | 두번째 손가락이 화면에 닿을 때 발생
gesturechange | 두개 이상의 손가락이 화면에 닿은 상태에서 움직일 때 발생
gestureend | 두개 이상의 손가락이 화면에 닿은 상태에서 하나의 손가락이 떨어질 때 발생

<br/>

## __3. 터치 제스쳐 구현__
#### &nbsp; 그럼 간단하게 Tap, Double Tap, Swipe을 구현해보자.

<br/>

#### &nbsp; __(1) Tap__
#### &nbsp; Tap은 touchstart 이벤트 발생 후 __touchmove 이벤트 발생없이__ touchend 이벤트가 발생할 때 Tap으로 식별한다.
``` javascript
// touchstart 이벤트 발생 여부
var bStartEvent = false;
// touchmove 이벤트 발생 여부
var bMoveEvent = false;

function init() {
  document.addEventListener('touchstart', this.onStart.bind(this), false);
  document.addEventListener('touchmove', this.onMove.bind(this), false);
  document.addEventListener('touchend', this.onEnd.bind(this), false);
}

function onStart(e) {
  bStartEvent = true;
}

function onMove(e) {
  if (!bStartEvent) {
    return;
    // touchstart 이벤트가 발생하지 않으면 처리하지 않는다.
  }
  bMoveEvent = true;
  // touchmove 이벤트 발생 여부를 설정한다.
}

function onEnd(e) {
  if(bStartEvent && !bMoveEvent) {
    // 클릭 이벤트로 판단한다.
    alert('Tap!');
  }
  // 각 플래그 값을 초기값으로 설정한다.
  bStartEvent = false;
  bMoveEvent = false;
}
```

<br/>

#### &nbsp; __(2) Double Tap__
#### &nbsp; Double Tap 구현은 Tap과 다음 Tap 이벤트 사이의 __간격 체크,__ 첫번째 Tap과 두번째 Tap 사이의 __포인트 거리체크 로직__ 이 추가된다.
#### &nbsp; Tap과 다음 Tap 사이의 간격이 200ms보다 짧으면 Double Tap으로 판단하고, 첫번째 Tap 이후 300ms 후 Double Tap 이벤트가 발생하지 않았다면 Tap 이벤트로 식별한다.
```javascript
// touchstart 이벤트 발생 여부
var bStartEvent = false;
// touchmove 이벤트 발생 여부
var bMoveEvent = false;

htClickInfo = {
  // 더블탭을 판단하기 위한 마지막 탭 이벤트의 정보 해시 테이블
  sType: null,
  nX: -1,
  nY: -1,
  nTime: 0
}

// 더블탭을 판단하는 기준 시간(ms)
var nDoubleTapDuration = 200;
// 탭을 판단하는 거리
var nTapThreshold = 5;
// 탭-더블탭 대기 타이머
var oTapEventTimer = null;

function init() {
  document.addEventListener('touchstart', this.onStart.bind(this), false);
  document.addEventListener('touchmove', this.onMove.bind(this), false);
  document.addEventListener('touchend', this.onEnd.bind(this), false);
}

function initClearInfo() {
  htClickInfo.sType = null;
}

function onStart(e) {
  bStartEvent = true;
}

function onMove(e) {
  if (!bStartEvent) {
    return;
    // touchstart 이벤트가 발생하지 않으면 처리하지 않는다.
  }
  bMoveEvent = true;
  // touchmove 이벤트 발생 여부를 설정한다.
}

function onEnd(e) {
  var nX = e.changedTouches[0].pageX;
  var nY = e.changedTouches[0].pageY;
  var nTime = e.timeStamp;

  if (bStartEvent && !bMoveEvent) {
    // 이전 탭 이벤트와 시간 차이가 200ms 이하일 경우
    if (htClickInfo.sType == 'tap' && (nTime - htClickInfo.nTime) <= nDoubleTapDuration) {
      if ((Math.abs(htClickInfo.nX - nX) <= nTapThreshold) && (Math.abs(htClickInfo.nY - nY) <= nTapThreshold)) {
        // 더블탭으로 판단한다.(탭이 발생하지 않게 탭 발생 타이머를 초기화한다.)
        clearTimeout(oTapEventTimer);
        alert('Double Tap');
      }
    } else {
      // 탭 이벤트로 판단한다.
      // 현재 탭 이벤트들에 대한 정보를 업데이트한다.
      oTapEventTimer = setTimeout(function () {
        alert('Tap');
      }.bind(this), 300);
      htClickInfo.sType = 'tap';
      htClickInfo.nX = nX;
      htClickInfo.nY = nY;
      htClickInfo.nTime = nTime;
    }
  } else {
    // 탭 이벤트가 아니므로 탭 이벤트 정보를 초기화한다.
    initClearInfo();
  }
  // 각 플래그 값을 초기값으로 설정한다.
  bStartEvent = false;
  bMoveEvent = false;
}
```

<br/>

#### &nbsp; __(3) Swipe__
#### &nbsp; swipe는 touchstart 이벤트와 touchend 사이의 __이동거리와 각도, 방향__ 을 고려해야 한다.
#### &nbsp; 각도 임계치를 정하여, 상하 스크롤 시에 swipe 이벤트가 발생하는 것을 방지해야 한다.

```javascript
function onMove(e) {
  if(!bStartEvent) {
    return;
  }
  
  var nX = e.changedTouches[0].pageX;
  var nY = e.changedTouches[0].pageY;
  
  // 현재 touchmove에서 사용자 터치에 대한 움직임을 판단한다.
  nMoveType = getMoveType(nX, nY);

  // 현재 사용자 움직임을 수직으로 판단해 기본 브라우저의 스크롤 기능을 막고 싶으면 아래 코드를 사용한다.
  if(nMoveType === 1) {
    e.preventDefault();
  }
}

function getMoveType (x, y) {
  // 0은 수평방향, 1은 수직방향
  var nMoveType = -1;
  var nX = Math.abs(htTouchInfo.nX - x);
  var nY = Math.abs(htTouchInfo.nY - y);
  var nDis = nX + nY;

  // 현재 움직인 거리가 기준 거리보다 작을 땐 방향을 판단하지 않는다.
  if (nDis < 25) {return nMoveType};
  
  // 수평 방향을 판단하는 기준 기울기
  var nHSlop = ((window.innerHeight / 2) / window.innerWidth).toFixed(2) * 1;

  // 현재 터치의 기울기
  var nSlop = parseFloat((nY / nX).toFixed(2), 10);

  if (nSlop > nHSlop) {
    nMoveType = 1;
  } else {
    nMoveType = 0;
  }
  return nMoveType;
}
```

#### &nbsp; 위 예제들을 보면 코드가 복잡하고 기준 설정이 어렵다는 걸 알 수 있다.

<br/>

#### &nbsp; 이를 편리하게 할 수 있도록 __touch 이벤트와 관련하여 대중적으로 사용되는 라이브러리__ 가 있다.
#### &nbsp; 다음 챕터에서는 해당 라이브러리의 사용방법애 대해 알아보겠다.

<br/>

---

<br/>

[다음 챕터](./hammer.md)