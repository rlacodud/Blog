[이전 챕터](./path.md)

---

## __1. 채우기 및 획 속성__
### __(1) Painting__
#### &nbsp; __`fill` - 개체 내부의 색상 설정__
#### &nbsp; __`stroke` - 개체 외곽선의 색상 설정__

<br/>

#### &nbsp; 색상은 __색상 이름(`red`), rgb값(`rgb(255, 0, 0)`), 16진수 값, rgba값__ 등 HTML에서 사용하는 것과 동일한 CSS 색상 체계를 사용할 수 있다.
```svg
 <rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
       fill-opacity="0.5" stroke-opacity="0.8"/>
```

<br/>

#### &nbsp; 또한 SVG에서 __`fill-opacity` 및 `stroke-opacity` 속성으로 불투명도를 지정__ 할 수 있다.

<br/>

### __(2) stroke__
#### &nbsp; 선에 __획을 그리는 방식__ 을 제어하는 속성이다.
```svg
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```
![stroke][stroke]

[stroke]: ./img/stroke.png "stroke"
#### &nbsp; __- `stroke-width` - 획의 너비를 정의__
#### &nbsp; __- `stroke-linecap` - 선의 끝모양을 정의__
> #### &nbsp; - __`butt`__ = __획 방향에 수직으로__ 선을 전개
> #### &nbsp; - __`square`__ = __`stroke-width`의 절반만큼__ 획이 늘어난다.
> #### &nbsp; - __`round`__ = __`stroke` 끝에 둥근 효과__ 를 생성한다. __원의 반지름 또한 `stroke-width`만큼의 값__ 을 가진다.

<br/>

#### &nbsp; `stroke-linejoin` - 두 선분 사이의 접합이 그려지는 방법을 제어하는 데 사용한다.

```svg
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```
![linejoin][linejoin]

[linejoin]: ./img/linejoin.png "linejoin"
> #### &nbsp; - `miter` = 정사각형 모서리를 만들기 위해 선을 약간 확장한다.
> #### &nbsp; - `round` = 둥근 선분을 만든다.
> #### &nbsp; - `bavel` = 두 세그먼트 간의 전환을 돕기 위해 새 각도를 만든다.

<br/>

#### &nbsp; `stroke-dasharray` =  속성을 지정하여  `stroke`에 파선 유형을 사용할 수 있다.

```svg
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

![dasharray][dasharray]

[dasharray]: ./img/dasharray.png "dasharray"

#### &nbsp; `dasharray`는 쉼표로 인수를 구분한다.
#### &nbsp; __첫번째 인수는 선의 길이를 지정__ 하고 __두번째 인수는 선 간의 공백의 길이를 지정__ 한다.
```svg
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
```
#### &nbsp; 위 예제는 3개의 인수를 지정하며, 이 경우 렌더러는 __짝수 패턴을 만들기 위해 숫자를 두번 반복__ 한다.
#### &nbsp; 즉, 첫번째 경로는 선 5px, 공백 10px, 선 5px을 렌더링 후 다시 순환하여 공백 5px, 선 10px, 공백 5px을 만드는 패턴을 반복한다.

<br/>

### __(3) CSS 사용__
#### &nbsp; CSS는 `style` 속성을 통해 요소와 함께 인라인으로 삽입할 수 있다.

#### &nbsp; __`<defs>`는 SVG에 직접 나타나지 않지만 다른 요소에서 사용되는 요소를 생성__ 할 수 있다.
```svg
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

#### &nbsp; __일반 XML 스타일시트 구문__ 을 통해 CSS 규칙에 대한 __외부 스타일시트를 지정__ 할 수도 있다.

```svg
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

<br/>

---

<br/>

[다음 챕터](./gradient.md)