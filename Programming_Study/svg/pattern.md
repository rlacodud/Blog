[이전 챕터](./gradient.md)

---

## __1. Pattern__
#### 그라디언트와 마찬가지로 __`defs` 섹션에__ 정의된다.
```svg
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
  <!-- Gradient 속성 정의 -->
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white"/>
      <stop offset="95%" stop-color="blue"/>
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red"/>
      <stop offset="95%" stop-color="orange"/>
    </linearGradient>

  <!-- pattern 요소에 Gradient 적용 -->
    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
      <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200"/>
</svg>
```

![pattern][pattern]

[pattern]: ./img/pattern.png "pattern"

#### &nbsp; 패턴이 4번 반복되게끔 200 * 200 사이즈의 사각형 안에 각 패턴 크기를 50으로 설정하였다.
#### &nbsp; 이와 같이 `pattern` 요소에는 __`x`, `y`, `width`, `height`와 같은 위치와 크기에 대한 속성__ 을 설정할 수 있다.

<br/>

---

<br/>

[다음 챕터](./text.md)