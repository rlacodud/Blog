[이전 챕터](./mobile.md)

---

<br/>

## __[1. Hammer.js](http://hammerjs.github.io/)__
#### &nbsp; Hammer.js란 Touch, Mouse, Pointer 이벤트들로부터 __제스쳐를 식별하는 오픈소스 라이브러리__ 이다.
#### &nbsp; 장점은 아래와 같다.

<br/>

#### &nbsp; - Pinch, Rotate와 같은 __멀티터치 제스쳐__ 지원
#### &nbsp; - 가벼운 용량
#### &nbsp; - 대부분의 IOS, ANDROID OS 버전 지원
#### &nbsp; - jQuery 같은 라이브러리없이 __독립적으로 사용 가능__
#### &nbsp; - jQuery.plugin, Auglarjs.diretive 지원
#### &nbsp; - 제스쳐 이벤트 발생 제어 가능

<br/>

#### &nbsp; 그 외에도 jQuery mobile 라이브러리에서도 기본적인 터치 제스쳐를 지원하지만 __멀티 터치 액션은 지원하지 않거나 각 플러그인별 사용법이 다르다는__ 등, 여러가지 면에서 Hammer.js를 추천한다.

<br/>

#### &nbsp; Hammer.js의 압축 파일은 아래 링크에서 확인 가능하다.
[Hammer.js파일](./hammer.js)

<br/>

## __2. Hammer.js API__
#### &nbsp; 그럼 Hammer.js의 기본 구조를 알아보자.

<br/>

#### &nbsp; __(1) `constructor(HTMLElement, [options])`__
#### &nbsp; 먼저 __script를 적용시킬 개체(이벤트 실행 개체)__ 를 찾아준 뒤, 해당 개체를 __Manager에 적용하고 recognizer 또한 생성__ 한다.
```javascript
var myElement = document.querySelector('myElement');
var mc = new Hammer.Manager(myElement);
var recognizer = new Hammer.recognizer({
  options
});
```

<br/>

#### &nbsp; __(2) `get(string)`, `add(Recognizer)` and `remove(Recognizer)`__
#### &nbsp; 그 뒤로는 recognizer를 개체에 추가하여 실행요건이 될 이벤트의 종류를 정의한다.
```javascript
mc.get('pinch');
mc.get(myPinchRecognizer);

mc.add(myPinchRecognizer);
mc.add([mySecondRecogizner, myThirdRecognizer]);

mc.remove(myPinchRecognizer);
mc.remove('rotate');
mc.remove([myPinchRecognizer, 'rotate']);
```

<br/>

#### &nbsp; __(3) `on(events, handler)` and `off(events, handler)`__
#### &nbsp; 이제 설정은 끝났으니 해당 개체에 적용시킨 recognizer를 요건으로 하는 handler를 작성하여 원하는 이벤트를 만들어보자.
```javascript
mc.on("pinch", function(ev) {
    console.log(ev.scale);
});
```

<br/>

## __3. 적용__
#### &nbsp; 아래 다양한 recognizer예제를 보며 실제 적용 방법을 익혀보자.
[Tap](./tap/index.html) | [Double_Tap](./double_tap/index.html) | [Press](./press/index.html) | [Swipe](./swipe/index.html)