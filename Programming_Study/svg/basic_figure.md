[이전 챕터](./1_svg.md)

---

## __1. 기본 도형__
#### &nbsp; 각 요소들은 서로 다른 속성들을 사용해서 각기다른 모양의 크기와 위치를 나타낸다.
#### &nbsp; 기본 도형을 생성하는 코드는 아래와 같다.
```svg
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <!-- 사각형 -->
  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <!-- 둥근 사각형 -->
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <!-- 원 -->
  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <!-- 선 -->
  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <!-- 별 -->
  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <!-- 경로 -->
  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

![fugure][fugure]

[fugure]: ./img/fugure.png "fugure"

<br/>

## __2. Rectangles 사각형__
#### &nbsp; `rect` 요소는 화면에 __사각형__ 을 그린다.
#### &nbsp; 오른쪽에 있는 사각형은 __`rx`와 `ry` 속성이 설정되어 모서리가 둥글다.__
#### &nbsp; `rx`와 `ry`가 설정되지 않은 경우에는 기본값 0으로 들어간다.

```svg
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```
#### &nbsp; - `x` = 사각형의 x값
#### &nbsp; - `y` = 사각형의 y값
#### &nbsp; - `width` = 사각형의 폭
#### &nbsp; - `height` = 사각형의 높이
#### &nbsp; - `rx` = 사각형의 x 방향으로의 꼭짓점의 반지름 
#### &nbsp; - `ry` = 사각형의 y 방향으로의 꼭짓점의 반지름

<br/>

## __3. Circle 원__
#### &nbsp; `circle` 요소는 화면에 __원__ 을 그린다.

```svg
<circle cx="25" cy="75" r="20"/>
```
#### &nbsp; - `cx` = 원의 x값
#### &nbsp; - `cy` = 원의 y값
#### &nbsp; - `r` = 원의 반지름

<br/>

## __4. Ellipse 타원__
#### &nbsp; `Ellipse`는 __원의 `x`와 `y` 반지름을 개별적으로 확장__ 할 수 있다.
```svg
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```
#### &nbsp; - `rx` = 타원의 x 방향으로의 반지름의 길이
#### &nbsp; - `ry` = 타원의 y 방향으로의 반지름의 길이
#### &nbsp; - `cx` = 타원의 x값
#### &nbsp; - `cy` = 타원의 y값

<br/>

## __5. Line 선__
#### &nbsp; `line`은 말그대로 __직선__ 이다.
#### &nbsp; `line` 요소는 __선의 시작과 끝 지점을 지정하는 두 점__ 을 속성으로 갖는다.
```svg
<line x1="10" x2="50" y1="110" y2="150"/>
```
#### &nbsp; - `x1` = 시작점의 x값
#### &nbsp; - `y1` = 시작점의 y값
#### &nbsp; - `x2` = 끝점의 x값
#### &nbsp; - `y2` = 끝점의 y값

<br/>

## __6. Polyline__
#### &nbsp; `Polyline`은 __연결된 직선들의 그룹__ 이다.
#### &nbsp; `points` = 포인트들의 각 좌표는 공백, 쉼표, EOL 또는 줄바꿈 문자로 구분된다.
#### &nbsp; __각 포인트는 반드시 x좌표와 y좌표를 갖고__ 있어야 하므로 (0, 0), (1, 1), (2, 2)는 "0 0, 1 1, 2 2"로 쓸 수 있다.

```svg
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```


<br/>

## __7. Polygon 다각형__
#### &nbsp; 작성 방식은 `Polyline`과 동일하나 자동으로 __마지막 포인트로부터 첫번째 포인트로 직선을 만들어서 닫힌 모양__ 을 만든다.

```svg
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

<br/>

## __8. Path__
#### &nbsp; `path` 요소를 사용해 사각형(둥근 모서리가 있거나 없는), 원, 타원, 폴리라인 및 다각형을 그릴 수 있다.
```svg
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>
```

<br/>

---

<br/>

[다음 챕터](./path.md)