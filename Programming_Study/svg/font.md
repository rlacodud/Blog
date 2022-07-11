[이전 챕터](./clipping.md)

---

## __1. Font__
#### SVG가 지정되었을 때 웹글꼴에 대한 지원은 브라우저에서 널리 보급되지 않는다. 이를 해결하기 위해 렌더링 시 SVG에 글리프 정보를 포함하는 간단한 수단이 있다.

---

```svg
<font id="Font1" horiz-adv-x="1000">
  <font-face font-family="Super Sans" font-weight="bold" font-style="normal"
      units-per-em="1000" cap-height="600" x-height="400"
      ascent="700" descent="300"
      alphabetic="0" mathematical="350" ideographic="400" hanging="500">
    <font-face-src>
      <font-face-name name="Super Sans Bold"/>
    </font-face-src>
  </font-face>
  <missing-glyph><path d="M0,0h200v200h-200z"/></missing-glyph>
  <glyph unicode="!" horiz-adv-x="300"><!-- Outline of exclam. pt. glyph --></glyph>
  <glyph unicode="@"><!-- Outline of @ glyph --></glyph>
  <!-- more glyphs -->
</font>
```

#### &nbsp; __`<font>` 요소로 시작하여 정의한다.__

<br/>

> #### &nbsp; __- `horiz-adv-x` = 문자의 평균 너비 | 기본적으로 1000이 작업하기에 적절하다.__
> #### &nbsp; __- `<font-face>` = CSS `@font-face`에 해당하는 속성으로 무게, 스타일 등과 같은 글꼴의 기본 속성을 정의한다.__
> #### &nbsp; __- `<font-face-src>` = 지정한 로컬 글꼴(위 예제에서는 Super Sans Bold)을 사용할 수 있는 경우, 해당 글꼴을 사용한다.__
> #### &nbsp; __- `<missing-glyph>` = 글꼴에서 특정 글리프를 찾을 수 없고 대체 메커니즘이 없는 경우, 표시되어야 하는 내용을 정의한다.__
> #### &nbsp; __- `unicode` = 해당 글리프가 나타내는 유니코드 코드포인트를 정의한다.__

<br/>

```svg
<hkern u1="A" u2="V" k="20" />
```
#### &nbsp; 위는 `font`에 정의할 수 있는 추가 요소로 __해당 문자 사이의 거리를 얼마나 줄여야 하는지__ 결정하는 속성이다.

<br/>

#### &nbsp; __+ 원격 글꼴 참조__
#### &nbsp; (1) CSS `@font-face`
```svg
<font id="Super_Sans">
  <!-- and so on -->
</font>

<style type="text/css">
@font-face {
  font-family: "Super Sans";
  src: url(#Super_Sans);
}
</style>

<text font-family="Super Sans">My text uses Super Sans</text>
```

<br/>

#### &nbsp; (2) `<font-face-uri>`(외부글꼴 참조)
```svg
<font>
  <font-face font-family="Super Sans">
    <font-face-src>
      <font-face-uri xlink:href="fonts.svg#Super_Sans" />
    </font-face-src>
  </font-face>
</font>
```