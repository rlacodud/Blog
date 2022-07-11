[이전 챕터](./text.md)

---

## __1. Transform__
### __(1) `translate()`__
#### &nbsp; 요소를 이동하는 등의 행동을 위해 `translate()` 속성이 존재한다.
```svg
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
</svg>
```
#### &nbsp; 위 예에서는 (0, 0) 대신 (30, 40)의 위치에 사각형을 렌더링한다.

<br/>

### __(2) `rotate()`__
#### &nbsp; `rotate()`는 도 단위로 제공된다.
```svg
<svg width="31" height="31">
    <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
</svg>
```

<br/>

#### &nbsp; `transform`의 여러가지 속성을 사용할 경우, 공백을 통해 구분한다.
```svg
<svg width="40" height="50" style="background-color:#bff;">
    <rect x="0" y="0" width="10" height="10" transform="translate(30,40) rotate(45)" />
</svg>
```

<br/>

### __(3) `skewX()` `skewY()`__
#### &nbsp; 요소가 기울어지는 정도를 결정하는 각도를 설정한다.

<br/>

### __(4) `scale()`__
#### &nbsp; 요소의 크기를 변경하며, x 스케일 인자와 y 스케일 인자를 필요로 한다.
#### &nbsp; 두번째 숫자가 생략되면 첫번째 숫자와 동일한 것으로 간주한다.

<br/>

### __(5) `matrix()`__
#### &nbsp; 이전 좌표계의 좌표를 새 좌표계로 매핑하는 변환을 사용한다.

<br/>

---

<br/>

[다음 챕터](./clipping.md)