# __Canvas__

## __1. canvas란?__
#### &nbsp; Canvas API는 Javascript와 HTML `<canvas>` 엘리먼트를 통해 __그래픽을 그리기 위한 수단__ 을 제공한다.  

<br/>

#### &nbsp; codepen이나 awwwards 사이트를 보던 중 canvas가 사용된 경우를 본 적이 있을 것이다.
#### &nbsp; 그렇듯 애니메이션, 게임 그래픽, 데이터 시각화, 사진 조작 및 실시간 비디오 처리를 위해 사용되는 것이 canvas다.

<br/>

#### &nbsp; 주로 2D 그래픽에 중점을 두고 있으며, WebGL API 또한 `<canvas>` 엘리먼트를 사용한다.

<br/>

#### &nbsp; 간단한 예제를 보며 기본 작동 원리를 배워보자.

<br/>

---

<br/>

## __2. 기본 원리__
### &nbsp; __(1) `<canvas>` 요소__
#### &nbsp; `<canvas>` 요소는 __width와 height__ 의 두 속성을 지닌다. width와 height 속성을 지정하지 않으면 __canvas의 처음 너비는 300px이고 높이는 150px__ 이다.
#### &nbsp; CSS로 `<canvas>`의 크기를 임의로 정할 수 있지만 렌더링하는동안 이미지는 레이아웃의 크기에 맞게 조정된다. 그러므로 초기 canvas의 비율을 고려하지 않고 CSS로 크기를 지정하면 왜곡되어 나타날 수 있기에 __`<canvas>` 속성에서 width와 height 속성을 명시__ 하는 편이 좋다.

<br/>

### &nbsp; __(2) 대체 콘텐츠__
#### &nbsp; `<canvas>`요소는 canvas를 지원하지 않는 오래된 브라우저(인터넷 익스플로러9 이하의 버전이나 텍스트기반 브라우저)들을 위한 대체 콘텐츠를 정의하기 쉬운데
#### &nbsp; 그저 __`<canvas>` 안에 대체 콘텐츠를 기입하면 된다.__
```html
<!-- TEXT -->
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<!-- IMAGE -->
<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
```
#### &nbsp; 위와 같이 대체적으로 텍스트 또는 이미지를 삽입하는 방식을 사용한다.

<br/>

### &nbsp; __(3) 렌더링 컨텍스트__
#### &nbsp; `<canvas>` 요소는 __고정된 크기의 드로잉 영역을 생성__ 하며, 그 영역은 __'보여질 콘텐츠를 생성하고 다루게 될'__ 하나 이상의 렌더링 컨텍스트(rendering contexts)를 노출시킨다.

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

#### &nbsp; canvas는 처음에 비어있으며, 무엇인가를 표시하기 위해서는 __스크립트가 렌더링 컨텍스트에 접근하여 그리도록__ 해야 한다. 
#### &nbsp; `<canvas>`는 __getContext() 메서드를 호출__ 해서 렌더링 컨텍스트와 그리기 함수들을 사용할 수 있다.

<br/>

#### &nbsp; getContext() 메서드는 __렌더링 컨텍스트 타입을 지정하는 하나의 파라미터__ 를 가진다. (2D | 3D)  
```javascript
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
```

<br/>

### &nbsp; __(4) 지원여부 검사__
#### &nbsp; 스크립트를 통해 getContext() 메서드의 __존재 여부를 확인__ 함으로써 프로그래밍 방식으로 지원하는지를 확인할 수 있는데 아래와 같이 작성하면 된다.
```javascript
var canvas = document.getElementById('canvas');

if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // canvas 내용 코드 기입
} else {
  // canvas가 지원되지 않는다는 텍스트 기입
}
```

<br/>

### &nbsp; __(5) 템플릿__
#### &nbsp; 그럼 이제 html과 연결하여 canvas의 가장 최소한의 템플릿을 작성해보자.
```html
  <style type="text/css">
    canvas {border: 1px solid black;}
  </style>

  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
    <script type="application/javascript" src="./js/script.js"></script>
  </body>
```
```javascript
  function draw(){
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext){
      var ctx = canvas.getContext('2d');
    }
  }
```
#### &nbsp; 위와 같이 html 내에서 draw 메서드를 호출하기 위해 __`<body onload="draw();">`</body>__ 를 작성했다.
#### &nbsp; 앞서 언급했듯 canvas는 그려지도록 해줄 함수가 필요하므로 __canvas를 사용하고 싶은 영역의 태그에서 메서드를 호출__ 해주면 그려지게 된다.

<br/>

#### &nbsp; 이와 비슷하게 페이지 로딩이 완료될 때 실행시켜주는 함수로는 __window.setTimeout() | window.setInterval()__ 등이 있다.

<br/>

### &nbsp; __(6) 기본 예제__
#### &nbsp; 먼저 두개의 직사각형을 그린 간단한 예제를 만들어보자.

```html
<!-- HTML -->
 <body onload="draw();">
  <canvas id="canvas" width="150" height="150"></canvas>
  <script type="application/javascript" src="./js/script.js"></script>
 </body>
```
```javascript
// JAVASCRIPT
  function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");

      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10, 10, 50, 50);

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
      ctx.fillRect (30, 30, 50, 50);
    }
  }
```
#### &nbsp; 위 예제는 아래와 같은 결과를 보여준다.
![example1][example1]

[example1]: ./img/example1.png "example1"  

<br/>

[다음 챕터](./Draw_figure.md)

---

<br/>

> # __목차__  
> ### &nbsp; __[3. 도형 그리기](./Draw_figure.md)__
> ### &nbsp; __[4. 스타일 및 색상 적용하기](./Style_Color.md)__
> ### &nbsp; __[5. 텍스트 그리기](./Draw_Text.md)__
> ### &nbsp; __[6. 이미지 사용하기](./Using_Images.md)__
> ### &nbsp; __[7. 변형](./transformations.md)__
> ### &nbsp; __[8. 합성 및 클리핑](./cliping.md)__
> ### &nbsp; __[9. 기본 애니메이션](./basic_Animation.md)__
> ### &nbsp; __[10. 고급 애니메이션](./develop_Animation.md)__
