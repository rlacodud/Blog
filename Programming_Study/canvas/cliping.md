[이전 챕터](./transformations.md)

---

## __8. 합성 및 클리핑__
#### 앞선 예제에서 새로 그리는 도형은 언제나 이미 그려진 도형 위에 그려졌고 대부분의 상황에서는 이렇게 하는 것이 적절하나
#### 도형 합성이 필요할 때에는 __속성을 설정__ 함으로써 가능하게 만들 수 있다.

---

<br/>

### &nbsp; __(1) 도형 합성__
#### &nbsp; : 기존 도형 뒤에 __새로운 도형__ 을 그릴 수 있을 뿐만 아니라, 도형의 __일정 영역을 가려__ 보이지 않게 하거나 canvas의 __특정 부분을 지우는__ 효과를 얻을 수 있다.

<br/>

#### &nbsp; __`globalCompositeOperation = type`__
#### &nbsp; : 새로운 도형을 그릴 때, __도형 합성 방법__ 을 설정한다.
#### &nbsp; 더 자세한 `type` 종류는 아래 이미지를 참고하자.
![canvas_globalCompositeOperation][canvas_globalCompositeOperation]

[canvas_globalCompositeOperation]: ./img/canvas_globalCompositeOperation.png "canvas_globalCompositeOperation"

<br/>

### &nbsp; __(2) 잘라내기 경로(Clipping Path)__
#### &nbsp; 다른 도형에서 __원하지 않는 부분을 가리는__ 가면과 같은 역할을 한다.
![Canvas_clipping_path][Canvas_clipping_path]

[Canvas_clipping_path]: ./img/Canvas_clipping_path.png "Canvas_clipping_path"
#### &nbsp; 위 이미지를 보면 __별 모양이 잘라내기 경로__ 이며, 해당 경로 밖에 있는 모든 것은 canvas에 그려지지 않을 것이다.

<br/>

#### &nbsp; 위 `globalCompositeOperation`과 잘라내기 경로의 가장 중요한 차이점은 __잘라내기 경로 자체는 canvas에 전혀 그려지지 않는다__ 는 점이다. __즉, 잘라내기 경로는 제한된 영역 안에서 여러가지 도형을 그리는 데에 적합하다.__

<br/>

### &nbsp; __(3) `clip()`__
#### &nbsp; : 현재 __그려지는 경로__ 를 현재 __잘라내기 경로__ 로 만든다.
#### &nbsp; __경로를 닫기 위해__ `closePath()` 대신 __`clip()`__ 을 사용하고, 경로를 채우거나 윤곽선을 만드는 대신 잘라내기 경로로 만들 수 있다.

<br/>

#### &nbsp; `<canvas>` 요소의 __초기 설정값__ 으로, canvas는 canvas와 똑같은 크기의 잘라내기 경로를 가진다.
#### &nbsp; 그러나 __크기가 똑같기 때문에 잘라내기 효과는 나타나지 않는다.__
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0,0,150,150);
  ctx.translate(75,75);

  // 동그란 모양의 잘라내기 경로를 생성한다
  ctx.beginPath();
  ctx.arc(0,0,60,0,Math.PI*2,true);
  ctx.clip();

  // 배경을 그린다
  var lingrad = ctx.createLinearGradient(0,-75,0,75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75,-75,150,150);

  // 별을 그린다
  for (var j=1;j<50;j++){
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75-Math.floor(Math.random()*150),
                  75-Math.floor(Math.random()*150));
    drawStar(ctx,Math.floor(Math.random()*4)+2);
    ctx.restore();
  }

}

function drawStar(ctx,r){
  ctx.save();
  ctx.beginPath()
  ctx.moveTo(r,0);
  for (var i=0;i<9;i++){
    ctx.rotate(Math.PI/5);
    if(i%2 == 0) {
      ctx.lineTo((r/0.525731)*0.200811,0);
    } else {
      ctx.lineTo(r,0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```
![Canvas_clip][Canvas_clip]

[Canvas_clip]: ./img/Canvas_clip.png "Canvas_clip"

<br/>

---

<br/>

[다음 챕터](./basic_Animation.md)