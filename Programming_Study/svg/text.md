[이전 챕터](./pattern.md)

---

## __1. Text__
### __(1) 기초__
#### &nbsp; `text` 요소를 사용하여 SVG 문서에 임의의 텍스트를 넣을 수 있었다.
```svg
<text x="10" y="10">Hello World!</text>
```
#### &nbsp; `text-anchor`를 이용해 뷰포트에서 text가 나타날 위치를 결정할 수 있다
> #### &nbsp; `start`, `middle`, `end`, `inherit`과 같은 값을 가진다.

<br/>

#### &nbsp; `fill` 속성을 통해 색상을 지정하고 `stroke` 속성을 통해 외곽선 색상을 지정할 수 있다.
#### &nbsp; 또한 두 속성값은 그라디언트 또는 패턴도 나타낼 수 있다.

<br/>

### __(2) 글꼴 속성 설정__
#### &nbsp; SVG는 CSS와 유사한 속성을 가진다.
> #### &nbsp; `font-family`, `font-style`, `font-weight`, `font-variant`, `font-stretch`, `font-size`, `font-size-adjust`, `kerning`, `letter-spacing` `text-decoration`

<br/>

### __(3) 기타 텍스트 요소__
#### &nbsp; __`tspan`__ = 일반적으로 문장의 한 단어를 굵은 빨간색으로 칠할 때 사용하며,
#### &nbsp; `text` 요소 또는 다른 요소의 자식일 때 적용된다.
```svg
<svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
<text>
  This is <tspan font-weight="bold" fill="red">bold and red</tspan>
</text>

<style><![CDATA[
  text{
    dominant-baseline: hanging;
    font: 28px Verdana, Helvetica, Arial, sans-serif;
  }
]]></style>
</svg>
```

> #### &nbsp; `x` = 텍스트의 새 절대 좌표를 설정하여 현재 텍스트 위치를 덮어쓴다.
> #### &nbsp; `dx` = 오프셋이 누적되는 상대좌표식 단위이다.
> #### &nbsp; `rotate` = 해당 값으로 회전시킨다.
> #### &nbsp; `textLength` = 자체 측정된 텍스트 길이가 `textLength`를 통해 제공된 길이와 일치하지 않을 때 렌더링 엔진이 위치를 미세 조정할 수 있도록 사용한다.

<br/>

### __(4) 텍스트 경로__
#### &nbsp; `xlink:href` 속성을 통해 임의의 경로를 가져오고 해당 경로를 따라 문자를 정렬시킨다.
```svg
<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
<path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
<text>
  <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
    A curve.
  </textPath>
</text>

<style><![CDATA[
  text{
    dominant-baseline: hanging;
    font: 28px Verdana, Helvetica, Arial, sans-serif;
  }
]]></style>
</svg>
```
![text][text]

[text]: ./img/text.png "text"

<br/>

---

<br/>

[다음 챕터](./transform.md)