[이전 챕터](./Using_Images.md)

---

## __7. 변형__
#### 이번 챕터를 통해 그리드를 원점에서 다른 위치로 옮기고, 회전하며, 확대/축소까지 하는 방법들을 배워보자.

---

<br/>

### &nbsp; __(1) 상태(state)의 저장과 복원__
#### &nbsp; __(1-1) `save()`__
#### &nbsp; canvas의 모든 상태를 __저장__ 한다.

<br/>

#### &nbsp; __(1-2) `restore()`__
#### &nbsp; 가장 최근에 저장된 canvas 상태를 __복원__ 한다.
#### &nbsp; __canvas 상태는 스택(stack)에 쌓이고__ `save()` 메소드가 호출될 때마다 현재 drawing 상태가 스택 위로 푸시된다. 

<br/>

#### &nbsp; drawing 상태는 아래와 같이 이루어진다.
#### &nbsp; __- 이전부터 적용된 변형(`translate`, `rotate`, `scale`)__
#### &nbsp; __- 다음 속성의 현재 값:__
> #### &nbsp; `strokeStyle`, `fillStyle`, `globalAlpha`, `lineWidth`, `lineCap`, `lineJoin`, `miterLimit`, `lineDashOffset`, `shadowOffsetX`, `shadowOffsetY`, `shadowBlur`, `shadowColor`, `globalCompositeOperation`, `font`, `textAlign`, `textBaseline`, `direction`, `imageSmoothingEnabled`.
#### &nbsp; __- 현재의 `clipping path`__

<br/>

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);   // 기본 설정으로 사각형을 그리기
  ctx.save();                  // 기본 상태를 저장하기

  ctx.fillStyle = '#09F';      // 설정 변경하기
  ctx.fillRect(15, 15, 120, 120); // 새로운 설정으로 사각형 그리기

  ctx.save();                  // 현재 상태 저장하기
  ctx.fillStyle = '#FFF';      // 설정 변경하기
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);   // 새로운 설정으로 사각형 그리기

  ctx.restore();               // 이전 상태 복원하기
  ctx.fillRect(45, 45, 60, 60);   // 복원된 설정으로 사각형 그리기

  ctx.restore();               // 초기 상태를 복원하기
  ctx.fillRect(60, 60, 30, 30);   // 복원된 설정으로 사각형 그리기
}
```
#### &nbsp; 위 예제를 통해 canvas의 상태가 저장되고 스택이 쌓인다는 의미를 파악할 수 있다.
![Canvas_savestate][Canvas_savestate]

[Canvas_savestate]: ./img/Canvas_savestate.png "Canvas_savestate"

<br/>

### &nbsp; __(2) 이동(translating)__
#### &nbsp; 그리드에서 canvas를 __원점에서 다른 점으로 옮기는 데__ 사용된다.

<br/>

#### &nbsp; __(2-1) `translate(x, y)`__
#### &nbsp; 그리드에서 canvas와 그 __원점을 이동__ 한다.
#### &nbsp; `x`는 __이동시킬 수평거리__ 를 가리키고
#### &nbsp; `y`는 그리드에서 __수직으로 얼마나 멀리 떨어지는지__ 를 표시한다.

<br/>

#### &nbsp; __변형하기 전에 canvas 상태를 저장__ 하는 것이 좋다.
#### &nbsp; 대다수의 경우, __restore 메소드를 호출__ 하는 것이 더욱 간편하기 때문이다.

<br/>

> #### &nbsp; 또한 __루프(loop)__ 안에서 이동하는 거라면 canvas 모서리 밖에서 그려지는 바람에 drawing의 일부를 잃어버릴 수도 있으니 __상태를 저장하고 복원하지 않는 게__ 좋다.

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```
![translate][translate]

[translate]: ./img/translate.png "translate"

<br/>

### &nbsp; __(3) 회전(rotating)__
#### &nbsp; __`rotate(angle)`__
#### &nbsp; : canvas를 __현재 원점을 기준으로 `angle`숫자만큼 시계방향으로 회전__ 하는 데 사용한다. 
#### &nbsp; __회전의 중심점은 언제나 canvas 원점__ 이다. 중심점을 바꾸려면 __`translate()` 메소드를 써서 canvas를 이동__ 해야 한다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 좌측 사각형, canvas 원점에서 회전하기
  ctx.save();
  // 파란 사각형
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // 회색 사각형
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // 우측 사각형, 사각형 중심에서 회전하기
  // 파란 사각형 그리기
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // 사각형 중심으로 이동하기
                          // x = x + 0.5 * width
                          // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // 회전
  ctx.translate(-200, -80); // 예전 위치로 이동하기

  // 회색 사각형 그리기
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(150, 30, 100, 100);
}
```
#### &nbsp; 해당 예제는 __좌측__ 사각형은 __canvas의 원점__ 에서,
#### &nbsp; __우측__ 사각형은 `translate()`를 이용해 __canvas를 사각형의 중심__ 으로 옮긴 뒤, rotate함으로써 __사각형의 원점__ 에서 회전시켰다.
![rotate][rotate]

[rotate]: ./img/rotate.png "rotate"

<br/>

### &nbsp; __(4) 확대/축소(scaling)__
#### &nbsp; __`scale(x, y)`__
#### &nbsp; : 주로 canvas 그리드에서 __단위(units)를 키우거나 줄이는 데__ 사용된다. canvas 단위를 __수평으로 x만큼, 수직으로 y만큼 크기를 확대/축소__ 한다.
#### &nbsp; 둘의 매개변수는 __실수__ 이며, __1.0보다 작은 값__ 이면 단위의 크기를 __축소__ 하고 __1.0보다 큰 값__ 이면 단위의 크기를 __확대__ 한다.

<br/>

#### &nbsp; __음수를 이용__ 해서 __축을 대칭__ 시킬 수도 있다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 간단하지만 확대·축소 비율을 적용한 사각형 그리기
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // 수평으로 대칭하기
  ctx.scale(-1, 1);
  ctx.font = '48px serif';
  ctx.fillText('MDN', -135, 120);
}
```
![scale][scale]

[scale]: ./img/scale.png "scale"

<br/>

### &nbsp; __(5) 변형(transforms)__
#### &nbsp; 변형 메소드들은 변환 행렬로 변경할 사항을 즉시 적용할 수 있다.

<br/>

#### &nbsp; __`transform(a, b, c, d, e, f)`__
#### &nbsp; : 인수(arguments)에 표시된 행렬을 이용해 현재 변환 행렬을 곱한다.
#### &nbsp; &nbsp; a c e
#### &nbsp; [ b d f ] 
#### &nbsp; &nbsp; 0 0 1
#### &nbsp; 만일 인수 중에 `Infinity`가 있다면, 변환 행렬은 예외 처리하는 메소드 대신에 반드시 infinite로 표시되어야 한다.

<br/>

#### &nbsp; 이 function의 매개 변수들은 아래와 같다.
> #### &nbsp; __a (m11)__
> #### &nbsp; : 수평으로 확대/축소하기

<br/>

> #### &nbsp; __b (m12)__
> #### &nbsp; : 수평으로 비스듬히 기울이기

<br/>

> #### &nbsp; __c (m21)__
> #### &nbsp; : 수직으로 비스듬히 기울이기

<br/>

> #### &nbsp; __d (m22)__
> #### &nbsp; : 수직으로 확대/축소하기

<br/>

> #### &nbsp; __e (dx)__
> #### &nbsp; : 수평으로 이동하기

<br/>

> #### &nbsp; __f (dy)__
> #### &nbsp; : 수직으로 이동하기

<br/>

#### &nbsp; __`setTransform(a, b, c, d, e, f)`__
#### &nbsp; : 현재 변형 상태를 __단위 행렬로 재설정__ 하고 나서 __동일한 인수__ 로 `transform()` 메소드를 적용한다.
#### &nbsp; 이는 기본적으로 __현재의 변형을 무효로__ 한 후에 명시된 변형으로 바뀌는데, __한번에 모든 게__ 진행된다.

<br/>

#### &nbsp; __`resetTransform()`__
#### &nbsp; : 현재 변형 상태를 단위 행렬로 재설정한다.
#### &nbsp; 이는 ctx.setTransform(1, 0, 0, 1, 0); 호출과 같다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
  ctx.fillRect(0, 50, 100, 100);
}
```
![Canvas_transform][Canvas_transform]

[Canvas_transform]: ./img/Canvas_transform.png "Canvas_transform"

<br/>

---

<br/>

[다음 챕터](./cliping.md)