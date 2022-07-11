[이전 챕터](./basic_figure.md)

---

## __1. Path 패스__
#### &nbsp; `<path>`는 __여러개의 직선과 곡선을 합쳐서 복잡한 도형__ 을 그릴 수 있게 한다.

<br/>

#### &nbsp; 직선으로만 이루어진 복잡한 도형은 `polyline`으로도 그릴 수 있지만
#### &nbsp; __곡선을 묘사할 때에는 직선으로 이루어진 `polyline`에 한계가 있다.__

<br/>

#### &nbsp; `path`의 __모양은 `d` 속성 하나로 정의__ 된다.

<br/>

#### &nbsp; `d` 속성은 __여러개의 명령어와 파라미터들__ 로 이루어지며
#### &nbsp; __각 명령은 특정 알파벳으로 시작한다.__

<br/>

#### &nbsp; 예를 들어 위치를 xy좌표계의 (10, 10)으로 이동할 때 __"Move To" 명령__ 을 사용하게 되는데,
#### &nbsp; 이 명령은 __알파벳 M으로 호출__ 한다.("M 10 10"으로 작성)
#### &nbsp; SVG 처리기가 이 문자를 읽게 되면 다른 위치로 이동하라는 명령으로 이해하게 된다.

<br/>

#### &nbsp; 추가적으로 모든 명령어는 2가지 변형이 존재하는데,
#### &nbsp; 알파벳이 __대문자일 경우,__ 뒤따르는 좌표는 페이지의 __절대 좌표__ 를 참조하며,
#### &nbsp; 알파벳이 __소문자__ 일 경우, __마지막 위치에 대한 상대적 좌표__ 로 참조한다.

<br/>

#### &nbsp; `d` 속성의 좌표는 __절대 단위가 붙지 않는다.__

---

<br/>

### __(1-1) 선 명령어__
#### &nbsp; __- Move To 혹은 M__
#### &nbsp; : path를 __그리기 시작할 위치__ 를 정한다.
```svg
M x y
```
#### &nbsp; 혹은
```svg
m dx dy
```

#### &nbsp; __- Line To 혹은 L__
#### &nbsp; __현재 위치에서 새 위치로__ 선을 긋는다.
```svg
L x y (혹은 l dx dy)
```

#### &nbsp; __- 가로선과 세로선을 그리는 축약 명령어__
#### &nbsp; `H` = 가로선 | `V` = 세로선
```svg
H x (혹은 h dx)
V y (혹은 v dy)
```

<br/>

#### &nbsp; 위에서 배운 명령어들을 통해 사각형을 그려보자.
```svg
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- 점 -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```
#### &nbsp; 사각형이 그려지는 과정을 순서대로 이해해보자.
#### &nbsp; __1. `M 10 10`으로 path의 시작점이 (10, 10)의 위치로 설정된다.__
#### &nbsp; __2. `H`로 인해 1에서 설정한 시작점에서 90px만큼의 가로선을 그린다.__
#### &nbsp; __3. `V`로 인해 2의 끝점에서부터 아래로 90px만큼의 세로선을 그린다.__
#### &nbsp; __4. 3에서의 끝점에서 시작하여 끝나는 지점을 `H 10`을 통해 절대 좌표로 설정하여 가로선을 그린다.__
#### &nbsp; __5. 4의 끝점에서부터 시작하여 끝나는 지점을 `L 10 10`을 통해 절대위치로부터 `(10, 10)`으로 설정하여 선을 그림으로써 사각형이 완성된다.__
![path_rect][path_rect]

[path_rect]: ./img/path_rect.png "path_rect"

<br/>

#### &nbsp; __- Close Path 혹은 P(패스 닫기)__
#### &nbsp; : __현 위치에서 시작점으로__ 직선을 그린다.
```svg
Z (혹은 z)
```

<br/>

#### &nbsp; 위 예제의 코드를 Z를 이용해 짧게 줄이자면 아래와 같다.
```svg
<path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

<br/>

#### &nbsp; 위 예제의 코드를 __상대좌표로__ 바꿀 수도 있다.
#### &nbsp; 패스를 움직일 때 __현재 위치로부터 얼마나 움직여야 하는지를__ 기술해준다.
```svg
<path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

<br/>

### __(1-2) 곡선 명령어__
#### &nbsp; __- C(3차 베지어 곡선)__
#### &nbsp; : 3차 베지어 곡선은 __선을 잇는 두 점에 하나씩 제어점을__ 가지고 있다.
#### &nbsp; 그러므로 3차 베지어 곡선을 그리려면 총 3개의 좌표가 필요하다.
```svg
 C x1 y1, x2 y2, x y (혹은 c dx1 dy1, dx2 dy2, dx dy)
 ```
 #### &nbsp; 마지막으로 지정된 좌표 `(x, y)`는 곡선의 __끝점__ 이다.
 #### &nbsp; 나머지 두개는 제어점이며, 기본적으로 __시작점과 끝점에서 곡선의 방향을__ 기술한다.
 ```svg
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
  <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

</svg>
```
![curve][curve]

[curve]: ./img/curve.png "curve"
<br/>

#### &nbsp; __+ 간단한 3차 베지어 곡선 명령어 `S`__
```svg
S x2 y2, x y (혹은 s dx2 dy2, dx dy)
```

#### &nbsp; `S`는 위와 같은 형태의 곡선을 그리지만, 다른 `S`나 `C` 명령어 다음에 올 경우, __첫번째 제어점은 이전에 사용했던 제어점을 뒤집은 것__ 으로 간주한다.
```svg
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```
![Cubic_Bezier][Cubic_Bezier]

[Cubic_Bezier]: ./img/Cubic_Bezier.png "Cubic_Bezier"

<br/>

#### &nbsp; __- Q(2차 베지어 곡선)__
#### &nbsp; : __하나의 제어점이 시작점과 끝점의 방향을__ 결정한다.
```svg
Q x1 y1, x y (혹은 q dx1 dy1, dx dy)
```
```svg
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```
![Quadratic_Bezier][Quadratic_Bezier]

[Quadratic_Bezier]: ./img/Quadratic_Bezier.png "Quadratic_Bezier"

<br/>

#### &nbsp; __+ 간단한 2차 베지어 곡선 명령어 `T`__
```svg
T x y (혹은  t dx dy)
```
#### &nbsp; : __이전에 사용한 제어점으로부터 새로운 제어점을__ 만들어낸다.

```svg
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```
![Shortcut_Quadratic_Bezier][Shortcut_Quadratic_Bezier]

[Shortcut_Quadratic_Bezier]: ./img/Shortcut_Quadratic_Bezier.png "Shortcut_Quadratic_Bezier"

<br/>

### __(1-3) 원호__
#### &nbsp; SVG로 그릴 수 있는 다른 형태의 곡선으로는 A라고 부르는 호(arc)가 있다.
#### &nbsp; __호는 원이나 타원의 일부분__ 을 말하며 x, y축 반지름이 주어졌을 때 두 점을 연결할 수 있는 타원은 2개가 있고 각각의 타원에서 두 점을 잇는 경로 또한 2개씩 있기 때문에 __어떤 상황에서든 네 종류의 호를__ 그릴 수 있다.
```svg
A rx ry x축_회전각 큰_호_플래그 쓸기_방향_플래그 x y
a rx ry x축_회전각 큰_호_플래그 쓸기_방향_플래그 dx dy
```
#### &nbsp; __큰_호_플래그__ 는 __호의 각도가 180도 이상이면 1, 아니면 0__ 으로 설정한다.
#### &nbsp; 즉, 이 플래그는 호가 주어진 __원의 어느 방향을 따라 돌지__ 결정한다.

<br/>

#### &nbsp; __쓸기_방향_플래그__ 는 호의 진행방향이 __양__ 의 각도이면 __1(시계방향)__, __음__ 의 각도 방향이면 __0__ 이다.
![arc_ex][arc_ex]

[arc_ex]: ./img/arc_ex.png "arc_ex"
#### &nbsp; 위 표와 아래 예제를 같이 보면 이해가 쉽다.
```svg 
<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
  <path d="M80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/>
  <path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
  <path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
  <path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
</svg>
```
![arc][arc]

[arc]: ./img/arc.png "arc"

<br/>

---

<br/>

[다음 챕터](./fill_stroke.md)