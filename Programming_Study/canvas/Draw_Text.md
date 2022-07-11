[이전 챕터](./Style_Color.md)

---

## __5. 텍스트 그리기__
#### 캔버스 렌더링 컨텍스트는 텍스트를 렌더링하는 두가지 방법을 제공한다.

---

<br/>

### &nbsp; __(1) 텍스트 그리기__
#### &nbsp; __(1-1) fillText(text, x, y [, maxWidth])__
#### &nbsp; : 주어진 `(x, y)` 위치에 주어진 텍스트를 __채운다.__ __최대 폭(width)은 옵션 값__ 이다.

```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 10, 50);
}
```
![fillText][fillText]

[fillText]: ./img/fillText.png "fillText"

#### &nbsp; __(1-2) strokeText(text, x, y [, maxWidth])__
#### &nbsp; : 주어진 `(x, y)` 위치에 주어진 텍스트를 __칠(stroke)한다.__ __최대 폭(width)은 옵션 값__ 이다.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.strokeText('Hello world', 10, 50);
}
```
![strokeText][strokeText]

[strokeText]: ./img/strokeText.png "strokeText"

<br/>

### &nbsp; __(2) 텍스트 스타일 적용하기__
#### &nbsp; __(2-1) font = value__
#### &nbsp; : 텍스트를 그릴 때 사용되는 __현재 텍스트 스타일.__
#### &nbsp; __CSS `font` 프로퍼티와 동일한 구문__ 을 사용한다. 기본값으로 sans-serif의 10px이 설정되어 있다.

<br/>

#### &nbsp; __(2-2) textAlign = value__
#### &nbsp; : 텍스트 정렬 설정. 기본값은 `start`이다.
> #### &nbsp; 사용가능한 값: `start`, `end`, `left`, `right`, `center`

<br/>

#### &nbsp; __(2-3) textBaseline = value__
#### &nbsp; : 베이스라인 정렬 설정. 기본값은 `alphabetic`이다.
![text_Baseline][text_Baseline]

[text_Baseline]: ./img/text_Baseline.png "text_Baseline"
> #### &nbsp; 사용가능한 값: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`
```javascript
ctx.font = '48px serif';
ctx.textBaseline = 'hanging';
ctx.strokeText('Hello world', 0, 100);
```

<br/>

#### &nbsp; __(2-4) direction = value__
#### &nbsp; : 글자 방향. 기본값은 `inherit`이다.
> #### &nbsp; 사용가능한 값: `ltr`, `rtl`, `inherit`

<br/>

### &nbsp; __(3) 어드밴스드 텍스트 측정__
#### &nbsp; __(3-1) measureText()__
#### &nbsp; : 현재 스타일로 특정 텍스트가 그려질 때의 폭, px 등을 포함하는 TextMetrics 객체 리턴.
```javascript
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var text = ctx.measureText('foo'); // TextMetrics object
  text.width; // 16;
}
```

<br/>

---

<br/>


[다음 챕터](./Using_Images.md)