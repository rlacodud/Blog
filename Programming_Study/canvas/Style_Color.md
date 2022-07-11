[이전 챕터](./Draw_figure.md)

---

## __4. 스타일과 색 적용하기__
#### 이번장에서 우리는 그리기를 조금 더 매력적으로 만들 수 있는 __canvas 옵션__ 을 살펴볼 것이다.

---

<br/>

### &nbsp; __(1) 색상__
<br/>

#### &nbsp; 아래에서의 color는 CSS의 __`<color>`, 그라디언트 객체, 패턴 객체__ 를 뜻한다.
#### &nbsp; 윤곽선과 채움 색의 __초기 설정값은 검은 색__ 이다.

<br/>

> strokeStyle 또는 fillStyle 속성을 설정하면, 새로 설정된 값이 __앞으로 그려질 도형의 기본 값__ 이 된다.  
각 도형에 다른 색을 적용하려면 strokeStyle 또는 fillStyle 속성을 다시 적용해야 한다.

<br/>

#### &nbsp; __(1-1) fillStyle = color__
#### &nbsp; : 도형을 채우는 색을 설정한다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 6; i++){
    for (var j = 0; j < 6; j++){
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ', 0)';
      ctx.fillRect(j*25,i*25,25,25);
    }
  }
}
```
![example9][example9]

[example9]: ./img/example9.png "example9"

<br/>

#### &nbsp; __(1-2) strokeStyle = color__
#### &nbsp; : 도형의 윤곽선 색을 설정한다.

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ')';
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
}
```
![example10][example10]

[example10]: ./img/example10.png "example10"

<br/>

### &nbsp; __(2) 투명도__
#### &nbsp; : canvas에는 불투명한 도형도, 반투명한 도형도 그릴 수 있다.

<br/>

#### &nbsp; __(2-1) globalAlpha = transparencyValue__
#### &nbsp; 투명도값이 설정되면 이후 canvas에 그려지는 __모든 도형들의 투명도__ 가 바뀐다.
#### &nbsp; 설정하는 값은 __0.0(완전히 투명)과 1.0(완전히 불투명) 사이__ 에 있어야 하며, 초기 설정값은 1.0(완전히 투명)이다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // 배경을 그린다
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  // 투명값을 설정한다
  ctx.globalAlpha = 0.2;

  // 반투명한 원을 그린다
  for (var i = 0; i < 7; i++){
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```
![example11][example11]

[example11]: ./img/example11.png "example11"

<br/>

### &nbsp; __(3) 선 모양__
#### &nbsp; __(3-1) lineWidth = value__
#### &nbsp; : 이후 그려질 __선의 두께__ 를 정한다. 설정값은 반드시 __양수__ 여야 하며, 초기 설정값은 1.0 단위이다.

<br/>

#### &nbsp; 선의 두께는 __지정된 경로의 가운데에 있는 획의 두께__ 이다.
#### &nbsp; __즉, 경로의 좌우로 설정된 두께 반만큼의 폭 영역이 그려진다는 것이다.__
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 10; i++){
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```
![example12][example12]

[example12]: ./img/example12.png "example12"
#### &nbsp; 그러나 위 예제처럼 __경로의 위치__ 때문에 가장 왼쪽과 다른 모든 홀수 폭 두께 선이 __선명하게 보이지 않을__ 수 있으므로 아래의 과정과 논리를 이해해야 한다.

<br/>

#### &nbsp; 아래의 이미지를 보면 격자는 canvas의 좌표를 나타낸다. __격자선 사이에 있는 사각형은 실제 픽셀과 딱 맞아 떨어진다.__
![canvas_grid][canvas_grid]

[canvas_grid]: ./img/canvas_grid.png "canvas_grid"
> #### &nbsp; __(I)__ 아래에 있는 첫번째 이미지를 보면, (2, 1)에서 (5, 5)로 사각형이 채워져 있고
> #### &nbsp; 이 사각형은 __픽셀 경계선 사이에 딱 맞아 떨어지기에__ 채워진 사각형이 __선명한 가장자리__ 를 가진다.

<br/>

> #### &nbsp; __(II)__ 만일 (3, 1)에서 (3, 5)로 그리는 직선의 두께가 1.0이라면, __두번째 이미지와 같은 상황__ 이 된다. 채워진 실제 영역(진한 파란색)은 패스의 양쪽에 있는 픽셀의 절반까지만 확장된다.
> #### &nbsp; 이것은 __1px을 채우는 것이 아니므로 근사값으로__ 화면에 그려지게 되기에 양옆의 영역으로 실제 설정한 색과는 다른 __흐릿한 색으로 채워지는 것__ 이다.

<br/>

> #### &nbsp; __(III)__ 이렇게 되는 것을 막으려면 __경로를 아주 정밀하게 생성__ 해야 하는데,
> #### &nbsp; __선의 두께가 1.0__ 이라면 __경로의 양쪽으로 0.5 단위__ 만큼이라는 것을 알고 있으니 (3.5, 1) 에서 (3.5, 5)로 그리는 경로를 생성하면 세번째 이미지와 같이 완벽히 정밀하게 1px 두께의 수직선이 된다.

<br/>

#### &nbsp; __+ 짝수 두께의 선들은 반으로 나누어도 각각의 반은 정수의 양만큼이기 때문에 픽셀을 조정할 필요가 없다.__

<br/>

#### &nbsp; __(3-2) lineCap = type__
#### &nbsp; : __선의 끝모양__ 을 설정한다. 초기 설정값은 `butt`이다.

<br/>

> #### &nbsp; __- `butt`__
> #### &nbsp; : 선의 끝이 좌표에 딱맞게 잘린다.
> #### &nbsp; __- `round`__
> #### &nbsp; : 선의 끝이 동그랗다.
> #### &nbsp; __- `square`__
> #### &nbsp; : 선 끝에, 선 두께 반만큼의 사각형 영역이 더해진다.

<br/>

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineCap = ['butt','round','square'];

  // 안내선을 그린다
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // 선을 그린다
  ctx.strokeStyle = 'black';
  for (var i=0;i<lineCap.length;i++){
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50,140);
    ctx.stroke();
  }
}
```
![Canvas_linecap][Canvas_linecap]

[Canvas_linecap]: ./img/Canvas_linecap.png "Canvas_linecap"
<br/>

#### &nbsp; __(3-3) lineJoin = type__
#### &nbsp; : __선들이 만나는 '모서리'의 모양__ 을 설정한다. (끝점과 제어점이 정확히 같은 위치인, 길이가 0인 부분들은 제외된다.)
#### &nbsp; 초기 설정값은 `miter`이며 두 부분들이 __같은 방향__ 으로 연결되어 있는 경우에는, lineJoin을 설정해도 아무런 __효과가 나타나지 않는다.__
![Canvas_linejoin][Canvas_linejoin]

[Canvas_linejoin]: ./img/Canvas_linejoin.png "Canvas_linejoin"
> #### &nbsp; __- `round`__
> #### &nbsp; 도형의 모서리를, 연결되는 부분들의 공통 끝점을 중심으로 하는 __원 모양__ 으로 만든다. 이 때 __원의 반지름은 선의 두께와 같다.__
> #### &nbsp; __- `bavel`__
> #### &nbsp; 도형의 모서리를, 연결되는 부분들의 공통 끝점에서 __세모 모양__ 으로 만든다.
> #### &nbsp; __- `miter`__
> #### &nbsp; 도형의 모서리를, 두 부분의 바깥쪽 테두리 선을 각각 연장하여 __교차된 점으로 생긴 마음모꼴 모양으로 만든다.__ `miterLimit` 속성값에 따라 모양이 달라진다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;
  for (var i=0;i<lineJoin.length;i++){
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```
#### &nbsp; __+miterLimit(초기 설정값 10.0)__
#### &nbsp; : 끝점이 만나는 지점과 테두리 연장선이 만나는 지점이 __얼마나 떨어져 있을지__ 를 결정한다.  
#### &nbsp; 두 선이 이 값을 넘게 되면, __`lineJoin` 속성의 `bavel` 값 모양이 적용__ 된다.
#### &nbsp; __현재 좌표 방식 안에서, 선의 두께에 따라, 어느 정도까지 뾰족해질 수 있을지__ 가 계산된다.

<br/>

#### &nbsp; __(3-4) miterLimit = value__
#### &nbsp; : 두 선이 예각으로 만날 때 접합점의 두께를 제어할 수 있도록 __연결부위의 크기를 제한하는 값__ 을 설정한다.
> miterLimit = max miterLength / lineWidth = 1 / sin ( min θ / 2 )

<br/>

#### &nbsp; __(3-5) getLineDash()__
#### &nbsp; : 음수가 아닌 짝수를 포함하는 현재 선의 대시 패턴 배열을 반환한다.

<br/>

#### &nbsp; __(3-6) setLineDash(segments)__
#### &nbsp; : 현재 선의 __대시 패턴__ 을 설정한다.

<br/>

#### &nbsp; __(3-7) lineDashOffset = value__
#### &nbsp; : 선의 대시 배열이 __어디서 시작될지__ 지정한다.
```javascript
var ctx = document.getElementById('canvas').getContext('2d');
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```
![marching_ants][marching_ants]

[marching_ants]: ./img/marching_ants.png "marching_ants"

<br/>

### &nbsp; __(4) 그라디언트(Gradient)__
#### &nbsp; : 포토샵, 일러스트 등과 같이 __선형 및 원형 그라디언트__ 를 사용할 수 있다.

<br/>

#### &nbsp; __(4-1) createLinearGradient(x1, y1, x2, y2)__
#### &nbsp; : __시작점__ 좌표를 `(x1, y1)`로 하고, __종료점 __ 좌표를 `(x2, y2)`로 하는 __선형 그라디언트 오브젝트__ 를 생성한다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 그라디언트를 생성한다
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

  // 외곽선과 채움 스타일에 그라디언트를 적용한다
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // 도형을 그린다
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);

}
```
![Canvas_lineargradient][Canvas_lineargradient]

[Canvas_lineargradient]: ./img/Canvas_lineargradient.png "Canvas_lineargradient"

<br/>

#### &nbsp; __(4-2) createRadialGradient(x1, y1, r1, x2, y2, r2)__
#### &nbsp; : 반지름이 `r1`이고 좌표 `(x1, y1)`을 중심으로 하는 원과, 반지름이 `r2`이고 좌표 `(x2, y2)`를 중심으로 하는 원을 사용하여 그라디언트가 생성된다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 그라디언트를 생성한다
  var radgrad = ctx.createRadialGradient(45,45,10,52,50,30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1,159,98,0)');

  var radgrad2 = ctx.createRadialGradient(105,105,20,112,120,50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

  var radgrad3 = ctx.createRadialGradient(95,15,15,102,20,40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

  var radgrad4 = ctx.createRadialGradient(0,150,50,0,140,90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

  // 도형을 그린다
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0,0,150,150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0,0,150,150);
}
```
![Canvas_radialgradient][Canvas_radialgradient]

[Canvas_radialgradient]: ./img/Canvas_radialgradient.png "Canvas_radialgradient"
> 예상하기 힘든 이상한 결과가 나타날 수 있기에, __안쪽 원과 바깥쪽 원은 겹치지 않게__ 하는 편이 좋다.  
> 투명도가 적용된 지점에서 이전 지점까지의 색 변화를 보기 좋게 만드려면, __두 지점에 똑같은 색__ 을 적용하면 된다.

<br/>

#### &nbsp; `CanvasGradient` 객체를 만들었다면, `addColorStop()` 메서드를 사용하여, 오브젝트에 색을 적용할 수 있다.

<br/>

#### &nbsp; __(4-3) gradient.addColorStop(position, color)__
#### &nbsp; : gradient 오브젝트에 __새로운 색 중단점(color stop)을 생성__ 한다.
#### &nbsp; `position`은 0.0에서 1.0 사이의 숫자이고 gradient에서 색상의 상대적인 위치를 정의하며
#### &nbsp; `color` 인자는 gradient가 진행되면서 __도달한 지점의 색상__ 을 의미한다.

<br/>

#### &nbsp; 색 중단점은 원하는만큼 마음대로 추가할 수 있다.

<br/>

### &nbsp; __(5) 패턴(Patterns)__
#### &nbsp; __createPattern(image, type)__
#### &nbsp; : 새 canvas 패턴 객체를 만들어 반환한다.

<br/>

#### &nbsp; `image`는 CanvasImageSource(HTMLImageElement, 다른 canvas, `<video>` 요소 등등) 이다.
#### &nbsp; `type`은 __이미지 사용방법__ 을 나타내는 문자열이다. 문자열값은 아래 중 하나여야 한다.
> #### &nbsp;&nbsp; __- `repeat`__
> #### &nbsp;&nbsp; : __수직 및 수평__ 방향으로 이미지를 이어 붙인다.
> #### &nbsp;&nbsp; __- `repeat-x`__
> #### &nbsp;&nbsp; : __수평__ 방향으로만 이미지를 이어 붙인다.
> #### &nbsp;&nbsp; __- `repeat-y`__
> #### &nbsp;&nbsp; : __수직__ 방향으로만 이미지를 이어 붙인다.
> #### &nbsp;&nbsp; __- `no-repeat`__
> #### &nbsp;&nbsp; : 이미지를 이어 붙이지 않는다. __즉, 이미지는 한번만 사용된다.__

<br/>

#### &nbsp; 패턴을 생성하면 `fillStyle` 또는 `strokeStyle` 속성에 패턴을 할당할 수 있다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 패턴으로 사용할 이미지 오브젝트를 생성한다
  var img = new Image();
  img.src = 'https://mdn.mozillademos.org/files/222/Canvas_createpattern.png';
  img.onload = function() {

    // 패턴을 생성한다
    var ptrn = ctx.createPattern(img,'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0,0,150,150);

  }
}
```
![Canvas_createpattern][Canvas_createpattern]

[Canvas_createpattern]: ./img/Canvas_createpattern.png "Canvas_createpattern"

<br/>

### &nbsp; __(6) 그림자__
#### &nbsp; __(6-1) shadowOffsetX = float__
#### &nbsp; : 그림자가 객체에서 __연장되어야 하는 수평 거리__ 를 나타낸다. 이 값은 변환 행렬의 영향을 받지 않으며 기본값은 0이다.

<br/>

#### &nbsp; __(6-2) shadowOffsetY = float__
#### &nbsp; : 그림자가 객체에서 __연장되어야 하는 수직 거리__ 를 나타낸다. 이 값은 변한 행렬의 영향을 받지 않으며 기본값은 0이다.

<br/>

> #### &nbsp; 위 두 속성은 __음수값__ 을 사용하면 그림자가 __위로 또는 왼쪽__ 으로 확장되고
> #### &nbsp; __양수값__ 을 사용하면 그림자가 __아래로 또는 오른쪽__ 으로 확장된다. 기본값은 모두 0이다.

<br/>

#### &nbsp; __(6-3) shadowBlur = float__
#### &nbsp; : __흐림(blur) 효과의 크기__ 를 나타낸다. 이 값은 px수와 일치하지 않으며 현재 반환 행렬의 영향을 받지 않는다. 기본값은 0이다.

<br/>

#### &nbsp; __(6-4) shadowColor = color__
#### &nbsp; : 그림자 효과의 __색상__ 을 나타내는 표준 CSS 색상 값. 기본적으로 완전 __검은색__ 이다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";

  ctx.font = "20px Times New Roman";
  ctx.fillStyle = "Black";
  ctx.fillText("Sample String", 5, 30);
}
```
![shadowed_string][shadowed_string]

[shadowed_string]: ./img/shadowed_string.png "shadowed_string"

<br/>

### &nbsp; __(7) CANVAS 채우기 규칙__
#### &nbsp; : `fill`을 사용할 때 한 점이 경로 안쪽 또는 바깥에 있는지 그리고 따라서 채워지는지 여부를 결정하기 위해 채우기 규칙 알고리즘을 선택적으로 제공할 수 있다. __경로가 교차하거나 중첩된 경우__ 에 유용하다.

<br/>

#### &nbsp; 다음 두가지 값을 사용할 수 있다.
> #### &nbsp; __- `nonzero`__
> #### &nbsp; __- `evenodd`__

<br/>

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill('evenodd');
}
```
![fill_rule][fill_rule]

[fill_rule]: ./img/fill_rule.png "fill_rule"

<br/>

---

<br/>

[다음 챕터](./Draw_Text.md)