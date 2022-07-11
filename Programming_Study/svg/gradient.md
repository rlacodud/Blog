[이전 챕터](./fill_stroke.md)

---

## __1. 그라디언트__
#### 그라디언트 속성은 __재사용성을 높이기 위해 SVG 자체가 아닌 `defs` 섹션에__ 정의된다.

---

<br/>

### __(1) 선형 그라디언트__
#### &nbsp; 선형 그라디언트는 __직선을 따라 변경__ 된다. 
#### &nbsp; `defs` 섹션 안에 __`<linearGradient>`__ 노드를 생성 및 정의하면 된다.
```svg
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <linearGradient id="Gradient1">
        <stop class="stop1" offset="0%"/>
        <stop class="stop2" offset="50%"/>
        <stop class="stop3" offset="100%"/>
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="50%" stop-color="black" stop-opacity="0"/>
        <stop offset="100%" stop-color="blue"/>
      </linearGradient>
      <style type="text/css"><![CDATA[
        #rect1 { fill: url(#Gradient1); }
        .stop1 { stop-color: red; }
        .stop2 { stop-color: black; stop-opacity: 0; }
        .stop3 { stop-color: blue; }
      ]]></style>
  </defs>

  <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#Gradient2)"/>

</svg>
```

<br/>

#### &nbsp; 선형 그라디언트 내부의 __`<stop>` 노트를 통해 지점에 대한 정의__ 를 한다.

<br/>

#### &nbsp; __`offset`은 특정 위치__ 를 정의하며 항상 __0%(혹은 0)에서 100%(혹은 1)로__ 증가해야 한다.
#### &nbsp; __`stop-color`는 어떤 색상__ 이 되어야 하는지를 정의한다.
#### &nbsp; 또한 __`stop-offset`을 통해 해당 위치의 불투명도__ 를 설정할 수 있다.
```svg
<stop offset="100%" stop-color="yellow" stop-opacity="0.5"/>
```
#### &nbsp; 그라디언트의 방향은 __`x1`, `x2`, `y1`, `y2`__ 속성을 통해 지정된 두 점으로 제어한다.
#### &nbsp; 이를 통해 그라디언트가 이동하는 선을 정의하며, __기본적으로 수평 방향으로__ 전개되지만 변경하여 회전시킬 수 있다.
```svg
<linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
```

<br/>

### __(2) 방사형 그라디언트__
#### &nbsp; `defs` 섹션 안에 __`<radialGradient>`__ 노드를 생성 및 정의하면 된다.

``` svg
<?xml version="1.0" standalone="no"?>
<svg width="120" height="240" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="RadialGradient1">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient1)"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#RadialGradient2)"/>

</svg>
```

#### &nbsp; __기울기는 가장자리의 위치를 결정하는 두 점__ 으로 정의된다.
#### &nbsp; __`cx` 및 `cy`로 정의된 중심점__ 과 __반지름 `r`__ 을 속성으로 가진다.

<br/>

#### &nbsp; 위 세가지 속성을 통해 그라디언트를 이동하고 크기를 변경할 수 있다.

```svg
<?xml version="1.0" standalone="no"?>

<svg width="120" height="120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="Gradient"
            cx="0.5" cy="0.5" r="0.5" fx="0.25" fy="0.25">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100"
        fill="url(#Gradient)" stroke="black" stroke-width="2"/>

  <circle cx="60" cy="60" r="50" fill="transparent" stroke="white" stroke-width="2"/>
  <circle cx="35" cy="35" r="2" fill="white" stroke="white"/>
  <circle cx="60" cy="60" r="2" fill="white" stroke="white"/>
  <text x="38" y="40" fill="white" font-family="sans-serif" font-size="10pt">(fx,fy)</text>
  <text x="63" y="63" fill="white" font-family="sans-serif" font-size="10pt">(cx,cy)</text>

</svg>
```
#### &nbsp; __`fx`, `fy`__ 속성을 이용해 __초점을 정의__ 할 수 있다.
#### &nbsp; 초점을 설정하지 않는다면 __중심점과 같은 위치__ 에 있다고 가정한다.

<br/>

### &nbsp; __+ `spreadMethod`__
```svg
<?xml version="1.0" standalone="no"?>

<svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
      <radialGradient id="GradientPad"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="pad">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="GradientRepeat"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="repeat">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
      <radialGradient id="GradientReflect"
            cx="0.5" cy="0.5" r="0.4" fx="0.75" fy="0.75"
            spreadMethod="reflect">
        <stop offset="0%" stop-color="red"/>
        <stop offset="100%" stop-color="blue"/>
      </radialGradient>
  </defs>

  <rect x="10" y="10" rx="15" ry="15" width="100" height="100" fill="url(#GradientPad)"/>
  <rect x="10" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientRepeat)"/>
  <rect x="120" y="120" rx="15" ry="15" width="100" height="100" fill="url(#GradientReflect)"/>

  <text x="15" y="30" fill="white" font-family="sans-serif" font-size="12pt">Pad</text>
  <text x="15" y="140" fill="white" font-family="sans-serif" font-size="12pt">Repeat</text>
  <text x="125" y="140" fill="white" font-family="sans-serif" font-size="12pt">Reflect</text>

</svg>
```
![gradient][gradient]

[gradient]: ./img/gradient.png "gradient"
> #### &nbsp; __- `pad` = 기본 유형__
> #### &nbsp; __- `reflect` = 반대로 반사되어 100%의 오프셋에서 0%의 오프셋으로 다시 이동한 다음 백업된다.__
> #### &nbsp; __- `repeat` = 백업하여 다시 실행된다.__

<br/>

### &nbsp; __+ `gradientUnits` = 크기나 방향을 설명할 때 사용하는 단위 시스템__
> #### &nbsp; __- `objectBoundingBox`: 기본값이며, 0에서 1 사이의 값으로 좌표를 지정하면 자동으로 개체 크기에 맞게 조정됨.__
> #### &nbsp; __- `userSpaceOnUse`: 본질적으로 절대 단위를 취하기에 개체의 위치를 알고 그라디언트를 같은 위치에 배치해야 함.__

<br/>

---

<br/>

[다음 챕터](./pattern.md)