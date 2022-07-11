[이전 챕터](./cliping.md)

---

## __9. 기본 애니메이션__
#### 한 장면을 그리려면 아래와 같은 단계를 밟는다.

---

<br/>

### &nbsp; __(1) 기본 애니메이션 단계__

<br/>

#### &nbsp;  __(1-1) canvas를 지운다.__
#### &nbsp;  : 그리려는 도형이 canvas를 가득 채우는 것이 아니라면, __이전에 그려진 모든 도형을 지울 필요__ 가 있다.
#### &nbsp; 가장 쉬운 방법은 __`clearRect()` 메소드__ 를 사용하는 것이다.

<br/>

#### &nbsp; __(1-2) canvas 상태를 저장한다.__
#### &nbsp; : canvas 상태에 영향을 주는 설정값을 바꾸려고 하고, 바뀐 값을 각 장면마다 사용하려고 한다면, 원래 상태를 저장할 필요가 있다.

<br/>

#### &nbsp; __(1-3) 애니메이션할 도형을 그린다.__
#### &nbsp; : 실제 장면을 그리는 단계이다.

<br/>

#### &nbsp; __(1-4) canvas 상태를 복원한다.__
#### &nbsp; 새로운 장면을 그리기 전에 저장된 상태를 복원한다.

<br/>

### &nbsp; __(2) 애니메이션 제어__
#### &nbsp; 코드 실행이 완료되면 canvas에 나타나는 결과만을 보게 되는데 메소드 내에서는 애니메이션을 실행할 수 없기 때문이다.
#### &nbsp; 그렇기에 __정해진 시간마다 그리기 함수를 실행__ 하는 방법이 필요한데 그 방법으로 아래와 같은 방법이 있다.

<br/>

#### &nbsp; __(2-1) 예정된 변경__
#### &nbsp; : 정해진 시간마다 특정 함수를 부를 때 사용한다.
> #### &nbsp; __- `window.setInterval()`__
> #### &nbsp; : delay 밀리세컨트(1,000분의 1초)마다 function 함수 반복 실행을 시작한다.

<br/>

```javascript
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  setInterval(draw,100);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // 캔버스를 비운다

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // 지구
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // 달
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // 지구 궤도
  ctx.stroke();

  ctx.drawImage(sun,0,0,300,300);
}
```
![setInterval][setInterval]

[setInterval]: ./img/setInterval.png "setInterval"

<br/>


```javascript
function init(){
  clock();
  setInterval(clock,1000);
}

function clock(){
  var now = new Date();
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.clearRect(0,0,150,150);
  ctx.translate(75,75);
  ctx.scale(0.4,0.4);
  ctx.rotate(-Math.PI/2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // 시계판 - 시
  ctx.save();
  for (var i=0;i<12;i++){
    ctx.beginPath();
    ctx.rotate(Math.PI/6);
    ctx.moveTo(100,0);
    ctx.lineTo(120,0);
    ctx.stroke();
  }
  ctx.restore();

  // 시계판 - 분
  ctx.save();
  ctx.lineWidth = 5;
  for (i=0;i<60;i++){
    if (i%5!=0) {
      ctx.beginPath();
      ctx.moveTo(117,0);
      ctx.lineTo(120,0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI/30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr  = now.getHours();
  hr = hr>=12 ? hr-12 : hr;

  ctx.fillStyle = "black";

  // 시간 표시 - 시
  ctx.save();
  ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20,0);
  ctx.lineTo(80,0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 분
  ctx.save();
  ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28,0);
  ctx.lineTo(112,0);
  ctx.stroke();
  ctx.restore();

  // 시간 표시 - 초
  ctx.save();
  ctx.rotate(sec * Math.PI/30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30,0);
  ctx.lineTo(83,0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0,0,10,0,Math.PI*2,true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95,0,10,0,Math.PI*2,true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0,0,3,0,Math.PI*2,true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#325FA2';
  ctx.arc(0,0,142,0,Math.PI*2,true);
  ctx.stroke();

  ctx.restore();
}
```
![setTimeout][setTimeout]

[setTimeout]: ./img/setTimeout.png "setTimeout"

> #### &nbsp; __- `window.setTimeout()`__
> #### &nbsp; : delay 밀리세컨드(1,000분의 1초)마다 function 함수를 실행한다.

<br/>

#### &nbsp; __사용자의 제어를 필요로 하지 않는__ 반복 실행에는 `setInterval()` 함수가 유용하다.

<br/>

#### &nbsp; __(2-2) 사용자 상호작용 변경__
#### &nbsp; : `EventListener`를 설정하여 __사용자의 상호작용에 따라 애니메이션 함수를 실행__ 한다.

<br/>

---

<br/>

[다음 챕터](./develop_Animation.md)