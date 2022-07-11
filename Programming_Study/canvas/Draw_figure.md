[이전 챕터](./canvas.md)

---

<br/>

## __3. 도형 그리기__
#### 앞서 기본적인 canvas 환경 설정을 완료하는 과정을 가졌다.
#### 이제는 어떻게 canvas에 그릴 수 있는지에 대해 자세하게 알아보는 시간을 가지게 된다.

---

<br/>

### &nbsp; __(1) 그리드__
#### &nbsp; 캔버스 그리드 혹은 좌표공간(coordinate space)이라고도 일컫는다.
#### &nbsp; 앞서 환경 설정 시 우리는 width, height를 각각 150px로 설정하여 해당 크기의 canvas를 만들었다.
![coordinate_space][coordinate_space]

[coordinate_space]: ./img/coordinate_space.png "coordinate_space"  
#### &nbsp; 앞으로의 설명은 위 이미지를 보며 읽으면 이해가 더 쉽다.
#### &nbsp; 기본적으로 __그리드의 1단위는 canvas의 1px과 같다.__ 이 그리드의 원점은 좌측상단인 `(0, 0)`이다. __모든 요소들은 이 원점을 기준으로 위치되기에__ 이미지 속 파란색 사각형의 좌측상단은 왼쪽에서 `xpx`, 위에서 `ypx` 떨어진 위치이며 즉, __좌표는 `(x, y)`__ 가 된다.

<br/>

### &nbsp; __(2) 직사각형 그리기__
#### &nbsp; SVG와는 다르게 `<canvas>`는 오직 하나의 원시적인 도형 __직사각형만을 제공__ 한다.
#### &nbsp; __다른 모든 도형들은 무조건 하나 혹은 하나 이상의 path와 여러 점으로 이어진 선__ 으로 만들어진다.

<br/>

#### &nbsp; 우선 canvas 위에 직사각형을 그리는 데에 사용할 수 있는 세가지 함수를 보자.

<br/>

> #### &nbsp; __(2-1). fillRect(x, y, width, height)__
> ##### &nbsp; 색칠된 직사각형을 그린다.
> #### &nbsp; __(2-2). strokeRect(x, y, width, height)__
> ##### &nbsp; 직사각형의 윤곽선을 그린다.
> #### &nbsp; __(2-3). clearRect(x, y, width, height)__
> ##### &nbsp; 특정 부분을 지우는 직사각형이며, 지워진 해당 부분은 완전히 투명해진다.

<br/>

#### &nbsp; 그럼 위 함수들을 예제에 적용해보며 어떻게 보여질 지 직접 확인해보자.

```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
}
```
#### &nbsp; 1. `fillRect()` 함수로 100px의 검정 정사각형을 그린 뒤
#### &nbsp; 2. `clearRect()` 함수로 60px의 정사각형 크기로 도형 중앙을 지우고
#### &nbsp; 3. `strokeRect()` 함수로 지워진 공간 안에 50px의 정사각형 윤곽선을 그림으로써 아래와 같은 결과가 그려지게 되었다.
![example2][example2]

[example2]: ./img/example2.png "example2"


<br/>

### &nbsp; __(3) 경로 그리기__
#### &nbsp; 경로(path)는 직사각형 이외의 유일한 원시적인 도형이다.
#### &nbsp; __경로는 점들의 집합__ 이며, __선의 한 부분을 연결하여 여러가지 도형, 곡선을 이루고 두께와 색을 나타내게 된다.__

<br/>

#### &nbsp; 그럼 이제 경로를 만들어보며 만드는 방법을 배워보자.

<br/>

#### &nbsp; __1. 경로를 생성한다.__
> #### &nbsp; &nbsp; `beginPath()` - 새로운 경로를 만드는 함수. 이후 그리기 명령들은 경로를 구성하고 만드는 데 사용하게 된다.
> #### &nbsp; 경로는 도형을 이루는 하위경로(선, 아치 등)들의 집합으로 이루어져 있다. 이 메소드가 호출될 때마다 __하위 경로의 모음은 초기화되며, 새로운 도형을 그릴 수 있게 된다.__

<br/>

> #### &nbsp; __*참고:__ 현재 열린 __path가 비어있는__ 경우, 첫 경로 생성 명령은 실제 동작에 상관없이 __moveTo()로 여겨지게__ 된다.  
> #### &nbsp; 그렇기에 경로를 초기화한 직후에는 항상 명확하게 시작 위치를 설정해두는 것이 좋다.

<br/>

#### &nbsp; __2. 경로가 그려지는 위치를 설정한다.__

<br/>

#### &nbsp; __3. closePath() 메소드를 호출한다. (선택사항)__
> #### &nbsp; 이 메소드는 __현재 점 위치와 시작점 위치를 직선으로 이어서 도형을 닫는다.__
> #### &nbsp; 이미 도형이 닫혔거나 한 점만 존재하면 이 메소드는 아무것도 하지 않는다.

<br/>

> __*참고:__ `fill()` 메소드 호출 시, 열린 도형은 자동으로 닫히게 되므로 `closePath()` 메소드를 호출하지 않아도 된다.
> `stroke()` 메소드는 선으로만 구성되어 있으므로 해당되지 않는다.

<br/>

#### &nbsp; 위 방식으로 삼각형을 그려보며 이해해보자.

```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

#### &nbsp; __1. `beginPath()`로 새로운 경로를 생성한다.__
#### &nbsp; __2. `moveTo()`로 해당 path가 그려질 __시작점을__ 지정한다. (x축에서 75px | y축에서 50px)__
#### &nbsp; __3. `lineTo(x, y)`를 이용해 원점으로부터 x축으로 100px만큼,  y축으로 75px만큼 떨어져있는 부분을 끝점으로 잡고 시작점에서부터 해당 끝점까지 경로를 그린다.__
#### &nbsp; __4. `lineTo(x, y)`를 이용해 원점으로부터 x축으로 100px만큼,  y축으로 25px만큼 떨어져있는 부분을 끝점으로 잡고 시작점에서부터 해당 끝점까지 경로를 그린다.__
#### &nbsp; __5. `fill()`을 이용해 두 경로 영역을 채운다.__

![example3][example3]

[example3]: ./img/example3.jpg "example3"

<br/>

### &nbsp; __(4) 호(arc)__
#### &nbsp; 호나 원을 그리기 위해서는 arc() 혹은 arcTo() 메서드를 사용한다.

<br/>

#### &nbsp; __(4-1) arc(x, y, radius, startAngle, endAngle, anticlockwise)__
#### &nbsp; `(x, y)` 위치에 원점을 두면서 반지름 `r`을 가지고, `startAngle`에서 시작하여 `endAngle`에서 끝나며 주어진 `anticlockwise` 방향으로 향하는(기본값은 시계방향 회전) 호를 그리게 된다.

<br/>

> #### &nbsp; `anticlockwise`는 Boolean값을 가지는 변수로,  
> #### &nbsp; __true__ 일 때 호를 __반시계 방향__ 으로 그리고  
> #### &nbsp; __false__ 일 때 호를 __시계 방향__ 으로 그린다.
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x coordinate
        var y = 25 + i * 50; // y coordinate
        var radius = 20; // Arc radius
        var startAngle = 0; // Starting point on circle
        var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
        var anticlockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```
![example4][example4]

[example4]: ./img/example4.png "example4"
<br/>

#### &nbsp; __(4-2) arcTo(x1, y1, x2, y2, radius)__
#### &nbsp; 주어진 제어점들과 반지름으로 호를 그리고 이전 점과 직선으로 연결한다.

<br/>

### &nbsp; __(5) 베지어(Bezier) 곡선과 이차(Quadratic)곡선__
#### &nbsp; 대게 복잡한 유기체적 형태를 그리는 데 사용된다.

![Canvas_curves][Canvas_curves]

[Canvas_curves]: ./img/Canvas_curves.png "Canvas_curves"
> #### &nbsp; 위 그림은 둘의 차이를 가장 잘 보여준다.
> #### &nbsp; __이차 베지어 곡선__ 은 시작점과 끝점(파란색 점), 그리고 __하나의 제어점(control point | 빨간 점)__ 을 가지고 있지만 __삼차 베지어 곡선__ 은 __두개의 제어점__ 을 사용하고 있다.

<br/>

#### &nbsp; __(5-1) 이차 베지어 곡선 - quadraticCurveTo(cp1x, cp1y, x, y)__
#### &nbsp; `cp1x` 및 `cp1y`로 지정된 제어점을 사용하여 현재 펜의 위치에서 `x`와 `y`로 지정된 끝점까지 이차 베지어 곡선을 그린다.
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```
#### &nbsp; 아래는 이차 베지어 곡선을 이용해 말풍선을 그린 결과다.
![example5][example5]

[example5]: ./img/example5.png "example5"

<br/>

#### &nbsp; __(5-2) 삼차 베지어 곡선 - bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)__
#### &nbsp; `(cp1x, cp1y)` 및 `(cp2x, cp2y)`로 지정된 제어점을 사용하여 현재 펜 위치에서 `x` 및 `y`로 지정된 끝점까지 삼차 베지어 곡선을 그린다.
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```
#### &nbsp; 아래는 삼차 베지어 곡선을 이용해 하트를 그린 결과다.
![example6][example6]

[example6]: ./img/example6.png "example6"

<br/>

### &nbsp; __(6) 직사각형__
#### &nbsp; __rect(x, y, width, height)__
#### &nbsp; : 좌측상단이 `(x, y)`이고 폭과 높이가 `width`와 `height`인 직사각형을 그린다.
#### &nbsp; 이 메소드가 실행되기 전에, `(x, y)` 매개변수를 가진 `moveTo()` 메소드가 자동으로 호출된다. 
#### &nbsp; __즉, 현재의 펜위치가 자동으로 기본 좌표로 초기화된다.__

<br/>

### &nbsp; __(7) 조합하기__
#### &nbsp; 앞서 배운 경로 함수를 조합하여 아래와 같이 만들 수 있다.
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
```
![example7][example7]

[example7]: ./img/example7.png "example7"

<br/>

### &nbsp; __(8) Path2D 오브젝트__
#### &nbsp; Path2D( ) 생성자는 새로운 Path2D 객체를 반환한다. 선택적으로 __다른 경로__ 를 인수로 받거나(복사본을 생성), __SVG 경로 데이터로 구성된 문자열__ 을 받아서 객체로 반환한다.

<br/>

#### &nbsp; __모든 경로 메소드들은 Path2D( ) 객체에서 사용 가능하다.__
#### &nbsp; 또한 __`addPath` 메소드__ 를 사용하여 __경로를 결합__ 하면 여러 요소를 사용하는 오브젝트를 만들 때 유용하게 사용될 수 있다.

<br/>

#### __Path2D.addPath(path [, transform])__
#### : 옵션으로 변환 행렬을 사용하여 현재 경로에 경로를 추가한다.
```javascript
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.moveTo(125, 35);
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```
![example8][example8]

[example8]: ./img/example8.png "example8"

<br/>

#### __SVG Path__
> var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
##### &nbsp; path는 `(M10 10)`점으로 이동한 다음 -> 수평하게 오른쪽으로 80포인트`(h 80)`만큼 이동한다.
##### &nbsp; 이후 수직으로 80포인트`(v 80)` 내려간 다음 -> 80포인트 왼쪽으로`(h -80)` 수평하게 이동하고
##### &nbsp; 다시 시작점`(z)`으로 돌아간다.

<br/>

##### &nbsp; __즉, width, height가 80px인 정사각형을 그리게 된다.__

<br/>

---

<br/>

[다음 챕터](./Style_Color.md)