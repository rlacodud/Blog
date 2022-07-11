[이전 챕터](./basic_Animation.md)

---

## __10. 고급 애니메이션__

<br/>

### &nbsp; __(1) 공 그리기__
#### &nbsp; 공을 이용해 애니메이션을 배워볼 것이기에 먼저 canvas에 공을 그린다.

<br/>

#### &nbsp; 이번 canvas는 __width 600에 height 300__ 의 속성을 가진다.

```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();
```

<br/>

### &nbsp; __(2) 속도 추가하기__
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function(e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
```
#### &nbsp; 애니메이션 컨트롤은 __`window.requestAnimationFrame()`__ 이 도와준다.
#### &nbsp; 공은 위치에 __속도 벡터__ 를 추가하여 움직일 수 있게 된다.
#### &nbsp; 각각의 프레임에 `clear`를 canvas에 주어 원을 이전 프레임에서 지운다.

<br/>

### &nbsp; __(3) 경계__
#### &nbsp; 공의 `x`와 `y` 위치가 __canvas를 빠져나갔는지__ 확인해서 방향과 속도를 바꿔줘야 한다.

#### &nbsp; 그러기 위해 `draw` 메소드에 아래 코드를 추가한다.
```javascript
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
```
#### &nbsp; 여기까지 작성 후 결과를 확인해보면, 브라우저 내로 마우스를 올릴 시, 공이 움직이며 canvas 외곽에 부딪힐 때마다 방향을 바꿔서 이동하고 있다.

<br/>

### &nbsp; __(4) 가속__
#### &nbsp; 움직임을 더 리얼하게 만들기 위해 속도를 아래와 같이 준다.
```javascript
ball.vy *= .99;
ball.vy += .25;
```
#### &nbsp; 이 작업은 매 프레임의 __세로 속도를 줄여주어__ 공이 바닥에서 튀도록 만든다.
#### &nbsp; 이 역시 브라우저에서 결과를 확인하면 이해가 쉽다.

<br/>

### &nbsp; __(5) 후행 효과__
#### &nbsp; __`fillRect()`를 사용하여 투명도__ 를 주면 쉽게 후행 효과를 만들 수 있다.
```javascript
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

<br/>

### &nbsp; __(6) 마우스 컨트롤 추가하기__
#### &nbsp; 공을 컨트롤하기 위해 `mousemove` 이벤트를 사용하여 마우스를 따라오게 할 수 있다.
#### &nbsp; 또한 `click` 이벤트를 통해 공을 놓으면 다시 공이 튀도록 한다.
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;
var running = false;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 1,
  radius: 25,
  color: 'blue',
  draw: function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function clear() {
  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
}

function draw() {
  clear();
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;

  if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
    ball.vy = -ball.vy;
  }
  if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
    ball.vx = -ball.vx;
  }

  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', function(e) {
  if (!running) {
    clear();
    ball.x = e.clientX;
    ball.y = e.clientY;
    ball.draw();
  }
});

canvas.addEventListener('click', function(e) {
  if (!running) {
    raf = window.requestAnimationFrame(draw);
    running = true;
  }
});

canvas.addEventListener('mouseout', function(e) {
  window.cancelAnimationFrame(raf);
  running = false;
});

ball.draw();
```
#### &nbsp; 브라우저 영역 내에 마우스를 올리면 공이 마우스를 따라 움직이고
#### &nbsp; 클릭 시 공을 놓게 된다.

<br/>

#### &nbsp; 이렇게 다양한 챕터와 예제를 통해 canvas에 대해 알아봤다.
#### &nbsp; canvas는 __직접 여러 변수를 주고 직접 확인해야 이해와 응용이 빠르니__ 참고하면 좋을 것 같다.