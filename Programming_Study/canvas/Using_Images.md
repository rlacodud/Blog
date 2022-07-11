[이전 챕터](./Draw_Text.md)

---

## __6. 이미지 사용하기__
#### 이미지를 사용하는 기능은 `<canvas>`의 가장 흥미로운 기능 중 하나이다.
#### 게임의 그래픽 배경이나 다이나믹한 사진들에 유용한 기능이며
#### PNG, GIF, JPEG 등 __브라우저에서 지원되는 포맷형태__ 라면 어떠한 외부 이미지라도 사용될 수 있다.

<br/>

#### 이미지를 canvas로 불러오는 것은 기본적으로 두 단계를 필요로 한다.
#### &nbsp; __1. `HTMLImageElement` object를 참조하거나 다른 `<canvas>` 요소를 소스로 사용한다. 이는 URL을 가지고 이미지를 사용할 수 있다.__
#### &nbsp; __2. `drawImage()` function을 사용하여 canvas에 나타난 이미지 위에 그림을 그린다.__

---

<br/>

### &nbsp; __(1) 이미지 불러오기__
#### &nbsp; canvas API는 아래의 데이터 타입을 이미지 소스로 사용할 수 있다.
> #### &nbsp; __- HTMLImageElement__
> #### &nbsp; : `<img>` element와 마찬가지로, `Image()` constructor를 통해 만들어진 이미지이다.  
> #### &nbsp; __- SVGImageElement__
> #### &nbsp; : `<img>` element를 사용해 불러온 이미지이다.  
> #### &nbsp; __- HTMLVideoElement__
> #### &nbsp; : HTML `<video>` 요소를 이미지 소스로 사용하여 비디오의 현재 프레임을 이미지로 불러온다.
> #### &nbsp; __- HTMLCanvasElement__
> #### &nbsp; : 다른 `<canvas>` 요소를 이미지 소스로 사용한다.

<br/>

### &nbsp; __(2) 같은 페이지의 이미지 사용하기__
#### &nbsp; __- `document.images` 모음__
#### &nbsp; __- `document.getElementByTagName()` 메소드__
#### &nbsp; __- (사용하고자 하는 특정한 이미지의 ID를 알 경우) `document.getElementById()` 를 사용하여 특정한 이미지를 참고할 수 있다.__

<br/>

### &nbsp; __(3) 처음부터 이미지 만들기__
#### &nbsp; 스크립트 내에서 처음부터 `HTMLImageElement` object를 생성할 수 있다.
```javascript
var img = new Image();   // Create new img element
img.src = 'myImage.png'; // Set source path
```

#### &nbsp; 만약 이미지 로딩이 다 끝나기 전에 `drawImage()`를 호출한다면, 아무것도 실행되지 않을테니 아래와 같이 스크립트를 작성하여 로딩이 된 후 이벤트가 실행될 수 있도록 하자.
```javascript
var img = new Image();   // Create new img element
img.addEventListener('load', function() {
    // execute drawImage statements here
  }, false);
img.src = 'myImage.png'; // Set source path
```

<br/>

---

<br/>

[다음 챕터](./transformations.md)