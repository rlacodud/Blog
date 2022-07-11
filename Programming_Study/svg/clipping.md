[이전 챕터](./transform.md)

---

## __1. Clipping and Masking__
### __(1) Clipping__
#### &nbsp; 다른 부분으로 정의된 요소의 일부를 제거하는 것 | 반투명 효과는 불가능하다.

<br/>

### __+ clip 생성__
```svg
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cut-off-bottom">
      <rect x="0" y="0" width="200" height="100" />
    </clipPath>
  </defs>

  <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
</svg>
```
![clip][clip]

[clip]: ./img/clip.png "clip"
#### &nbsp; (100, 100)을 중심으로 반지름이 100인 원이 그려진다.
#### &nbsp; 이 원은 clip-path의 경로에 있는 svg를 참조하게 되고 그로 인해 사각형이 존재하는 위치와 영역인 canvas의 위쪽 절반이 검은색으로 칠해짐과 동시에 원의 아래쪽 절반은 안 보이게 된다.

<br/>

### __(2) Masking__
#### &nbsp; 마스크의 투명도와 명도를 고려하여 부드러운 외곽을 만들 수 있다.

```svg
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="Gradient">
      <stop offset="0" stop-color="black" />
      <stop offset="1" stop-color="white" />
    </linearGradient>
    <mask id="Mask">
      <rect x="0" y="0" width="200" height="200" fill="url(#Gradient)"  />
    </mask>
  </defs>

  <rect x="0" y="0" width="200" height="200" fill="green" />
  <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
</svg>
```
![masking][masking]

[masking]: ./img/masking.png "masking"
#### &nbsp; 흑백 그라데이션으로 채워진 Gradient Mask를 빨간색 직사각형 영역에서 mask 속성으로서 참조함으로써 녹색에서 빨간색으로 그라데이션이 표시되게 된다.

<br/>

### __(3) `opacity`__
#### &nbsp; 전체 요소에 대한 투명도를 설정한다.
```svg
<rect x="0" y="0" width="100" height="100" opacity=".5" />
```
#### &nbsp; 이전에 언급했듯 `stroke`와 `fill`에서도 개별적으로 투명도를 설정할 수 있는데
#### &nbsp; `stroke`는 `fill` 위에 그려지기에 `fill` 요소에 `stroke` 불투명도를 설정하면 `fill` 이 `stroke`의 절반에서, 나머지 절반은 배경에서 보여진다.
```svg
<svg width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect x="0" y="0" width="200" height="200" fill="blue" />
  <circle cx="100" cy="100" r="50" stroke="yellow" stroke-width="40" stroke-opacity=".5" fill="red" />
</svg>
```
![opacity][opacity]

[opacity]: ./img/opacity.png "opacity"
<br/>

---

<br/>

[다음 챕터](./font.md)