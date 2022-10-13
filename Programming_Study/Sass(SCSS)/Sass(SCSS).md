

__Sass(SCSS)__
===

### __1. 배경__
#### &nbsp; 웹 서비스가 확장되고 프로젝트의 규모가 커지면서 필요한 팀원의 수도 늘어남에 따라 CSS 코드는 기하급수적으로 늘어나고 규칙없이 혼잡해졌다. 

<br/>

#### &nbsp; 그로 인해 사이트 유지보수 작업 시, 상당한 수고의 노동이 필요해졌고 이를 해결할 방법을 강구하기 시작한다.  

<br/>
<br/>

### __2. 방식__   
#### &nbsp; Sass(SCSS), Less, Stylus와 같은 친구들은 __CSS 전(예비)처리기(CSS Preprocessor)__ 라고도 불린다.

<br/>

#### __(1) 왜 전처리기 중 Sass(SCSS)를 권장할까?__  

   Sass(SCSS)   |    Less    |    Stylus  
--------------- | ---------- | ------------
Stylus와 비슷한 문법 | 낮은 진입장벽 | 깔끔하고 세련됨
Sass, SCSS 모두 하나의 컴파일러로 컴파일 가능  | 많이 사용되는 전처리기 | 비교적 늦게 나온 전처리기로, 떨어지는 성숙도
가장 오래된 CSS 확장 언어로, 높은 성숙도와 많은 커뮤니티 보유 | 부족한 기능으로 인한 한계 | 컴파일 후 발생하는 사소한 버그

<br/>

#### __(2) 어떻게 사용할까?__ 
##### &nbsp; 이러한 전처리기는 직접 동작시킬 수 없으며 웹에서는 CSS만 동작한다.  
##### &nbsp; 그럼 Sass를 어떻게 사용할 수 있을까? 방식은 아래와 같이 도식화할 수 있다.

<br/>

##### &nbsp; __전처리기로 작성(코딩) -> 웹에서 동작 가능한 표준의 CSS로 컴파일(compile) -> 전역 CSS 번들 파일 생성__ 

<br/>

#### __(3) Sass와 SCSS의 차이점은 무엇일까?__
##### &nbsp; SCSS는 __CSS의 상위집합으로(CSS와 거의 같은 문법),__ Sass(Syntactically Awesome Style Sheets)의 __거의 모든 기능을 지원__ 한다. 

<br/>  

##### &nbsp; 더 쉽고 간단한 차이는 __{ }(중괄호)와 ;(세미콜론)의 유무__ 이다.
##### &nbsp; 아래 예제를 통해 확인해보자.  
 ```Sass  
 <!-- Sass -->
 .list
  width: 100px
  float: left
  li
    color: red
    background: url("./image.jpg")
    &:last-child
      margin-right: -10px
 ```  

```SCSS  
// SCSS
.list {
  width: 100px;
  float: left;
  li {
    color: red;
    background: url("./image.jpg");
    &:last-child {
      margin-right: -10px;
    }
  }
}
```  
##### &nbsp; 위와 같이 선택자의 유효범위를 
##### &nbsp; __Sass는 들여쓰기__ 로 구분하고  
##### &nbsp; __SCSS는 { }(중괄호)__ 로 구분한다.

<br/> 

##### &nbsp; __Mixins의 방식__ 에서도 차이가 있는데 아래 예제를 통해 확인해보자.  
##### * Mixins(믹스인): 재사용 가능한 기능을 만드는 방식.  
```Sass
<!-- Sass -->
=border-radius($radius)
  -webkit-border-radius: $radius
  -moz-border-radius:    $radius
  -ms-border-radius:     $radius
  border-radius:         $radius

.box
  +border-radius(10px)
```  
```SCSS
// SCSS
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```  
##### &nbsp; __Sass는 =와 + 기호__ 로 기능을 사용하고  
##### &nbsp; __SCSS는 @mixin과 @include__ 로 기능을 사용했다.  

<br/>

#### __(4) 컴파일(compile)은 어떻게 하는걸까?__  
##### &nbsp; __[[1] SassMeister](https://www.sassmeister.com/)__
##### &nbsp; 간단한 Sass 코드의 경우, 해당 페이지에서 Sass나 SCSS 문법으로 코딩 시, 실시간으로 CSS 로 변환된다.  
 
<br/>

##### &nbsp; __[[2] node-sass](https://github.com/sass/node-sass)__  
##### &nbsp; Node.js를 컴파일러인 LibSass에 바인딩한 라이브러리이며,  
##### &nbsp; NPM으로 전역 설치하여 사용한다.  

<br/>

##### &nbsp; __*여기서 NPM이란?__
##### &nbsp; Node Package Manager - 말 그대로 자바스크립트 프로그래밍 언어를 위한 패키지 관리자
##### &nbsp; [npm 사용을 위한 node.js 다운로드](https://nodejs.org/ko/)

``` BASH  
$ npm install -g node-sass
```  
##### &nbsp; 컴파일하려는 파일의 경로와 컴파일된 파일이 저장될 결로를 설정한다.  
``` BASH 
$ node-sass [옵션] <입력파일경로> [출력파일경로]
``` 
``` BASH 
$ node-sass scss/main.scss public/main.css
```  
##### &nbsp; 옵션을 적용할 수도 있는데, 다양한 옵션들은 아래 페이지에서 확인 가능하다.  
##### &nbsp; [node-sass CLI](https://github.com/sass/node-sass#command-line-interface)  

<br/>  

##### &nbsp; __[[3] Gulp](https://gulpjs.com/)__  
##### &nbsp; 빌드 자동화 도구(JavaScript Task Runner)로, gulpfile.js를 만들어 아래와 같이 설정한다.  
##### &nbsp; 우선 gulp 명령을 사용하기 위해 전역 설치를 진행한다.  
```BASH
$ npm install -g gulp
```  
##### &nbsp; Gulp와 함께 Sass 컴파일러인 [gulp-sass](https://github.com/dlmanning/gulp-sass)를 개발 의존성(devDependency) 모드로 설치한다.  
##### &nbsp; gulp-sass는 node-sass를 Gulp에서 사용할 수 있도록 만들어진 플러그인이다.  
```BASH
$ npm install --save-dev gulp gulp-sass
```  
``` JAVASCRIPT
// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-sass')

// 일반 컴파일
gulp.task('sass', function () {
  return gulp.src('./src/scss/*.scss')  // 입력 경로
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));  // 출력 경로
});

// 런타임 중 파일 감시
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass']);  // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
});
```  
##### &nbsp; 환경 설정 후 컴파일을 진행한다.  
```BASH
$ gulp sass
```  
##### &nbsp; 런타임 중 파일 감시 모드로 실행 가능하다.  
```BASH
$ gulp sass:watch
```

##### &nbsp; __[[4] Parcel](https://parceljs.org/)__  
##### &nbsp; 웹 애플리케이션 번들러로, 굉장히 단순하게 컴파일 가능하다.  

<br/>

##### &nbsp; 우선 Parcel을 전역으로 설치한다.
```BASH
$ npm install -g parcel-bundler
``` 
##### &nbsp; 프로젝트에 Sass 컴파일러(node-sass)를 설치한다.
```BASH
$ npm install --save-dev node-sass
```  
##### &nbsp; html에 link 태그로 Sass 파일을 연결한다.
```html
<link rel="stylesheet" href="scss/main.scss">
```  
##### &nbsp; dist/에서 컴파일된 Sass 파일을 볼 수 있고, 별도의 포트 번호를 설정하지 않았다면 [http://localhost:1234](http://localhost:1234)에 접속하여 적용 상태를 확인할 수 있다.
```BASH  
$ parcel index.html
# 혹은
$ parcel build index.html
```  

<br/>

### __3. 이제 문법에 대해 알아보자!__ 
##### &nbsp; *해당 문서에서는 기존 CSS와 호환이 쉬운 SCSS를 기준으로 설명한다.  

<br/>

#### &nbsp; __(1) 주석(Comment)__

``` SCSS
// 컴파일되지 않는 주석
/* 컴파일되는 주석 */
```  

<br/>
<br/>

#### &nbsp; __(2) 데이터 종류(Data Types)__

   데이터   |                 설명                 |    예시  
---------- |              ----------              | ------------
Numbers    |                  숫자                | 1, .82, 20px, 2em…
Strings    |                  문자                | bold, relative, "/images/a.png", "dotum"
Colors     |                색상 표현              | red, blue, #FFFF00, rgba(255,0,0,.5)
Booleans   |                  논리                 | true, false
Nulls      |               아무것도 없음            | null
Lists      |      공백이나 ,로 구분된 값의 목록      | (apple, orange, banana), apple orange
Maps       |  Lists와 유사하나 값이 Key: Value 형태  | (apple: a, orange: o, banana: b) 

<br/>

#### __*특이사항__  
##### &nbsp; - Numbers: 숫자에 단위가 있거나 없음.
##### &nbsp; - Strings: 문자에 따옴표가 있거나 없음.
##### &nbsp; - Nulls: 속성값으로 null이 사용되면 컴파일하지 않음.
##### &nbsp; - Lists: ()를 붙이거나 붙이지 않음.
##### &nbsp; - Maps: ()를 꼭 붙여야 함.

<br/>
<br/>

#### &nbsp; __(3) 중첩(Nesting)__  
##### &nbsp; Sass는 상위 선택자의 반복을 피하고 좀 더 편리하게 복잡한 구조를 작성할 수 있다. (BEM과 호환하기 좋은 특징)  
```SCSS
.section {
  width: 100%;
  .list {
    padding: 20px;
    li {
      float: left;
    }
  }
}
```
##### &nbsp; Compiled to CSS:
```CSS
.section {
  width: 100%;
}
.section .list {
  padding: 20px;
}
.section .list li {
  float: left;
}
```  
<br/>
<br/>

#### &nbsp; __(4) 상위 선택자 참조(Ampersand)__  
##### &nbsp; 중첩 안에서 & 키워드는 상위(부모) 선택자를 참조하여 치환한다.  
``` SCSS 
.btn {
  position: absolute;
  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}
```
##### &nbsp; Compiled to CSS:
```CSS
.btn {
  position: absolute;
}
.btn.active {
  color: red;
}
.list li:last-child {
  margin-right: 0;
}
```

#

##### &nbsp; & 키워드는 다음과 같이 응용할 수도 있다.
``` SCSS
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}
```
##### &nbsp; Compiled to CSS:
``` CSS
.fs-small {
  font-size: 12px;
}
.fs-medium {
  font-size: 14px;
}
.fs-large {
  font-size: 16px;
}
```

<br/>
<br/>

#### &nbsp; __(5) 중첩 벗어나기(@at-root)__  
##### &nbsp; 중첩 안에서 생성하되, 중첩 밖에서 사용해야 경우에 유용하다. 
``` SCSS
.list {
  $w: 100px;
  $h: 50px;
  li {
    width: $w;
    height: $h;
  }
  @at-root .box {
    width: $w;
    height: $h;
  }
}
```
##### &nbsp; 위 SCSS 코드에서 .box를 .list 내에 중첩한 상태로 작성하는 이유는  
##### &nbsp; .list에서 생성한 변수 $w, $h를 .box에서도 사용하기 위해 중첩 안에서 작성하되, 중첩을 벗어나도록 @at-root를 이용한 것이다.

<br/>

##### &nbsp; Compiled to CSS:
``` CSS
.list li {
  width: 100px;
  height: 50px;
}
.box {
  width: 100px;
  height: 50px;
}
```
<br/>
<br/>

#### &nbsp; __(6) 중첩된 속성__  
##### &nbsp; font-, margin- 등과 같이 동일한 네임 스페이스를 가지는 속성들은 아래와 같이 간편하게 사용 가능하다.
```SCSS
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    bottom: 40px;
    right: 30px;
  };
}
```
##### &nbsp; Compiled to CSS:
```CSS
.box {
  font-weight: bold;
  font-size: 10px;
  font-family: sans-serif;
  margin-top: 10px;
  margin-left: 20px;
  padding-bottom: 40px;
  padding-right: 30px;
}
```

<br/>
<br/>

#### &nbsp; __(7) 변수(Variables)__  
##### &nbsp; 반복적으로 사용되는 값은 JAVASCRIPT처럼 변수로 지정 가능하다.
``` SCSS 
// $변수이름: 속성값;

$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.box {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}
```
##### &nbsp; Compiled to CSS:
```CSS
.box {
  width: 200px;
  margin-left: 200px;
  background: #e96900 url("/assets/images/bg.jpg");
}
```

<br/>
<br/>

#### &nbsp; __(8) 변수 유효범위(Variables Scope)__  
##### &nbsp; 변수는 선언된 블록({ }) 내에서만 유효범위를 가진다.
```SCSS
.box1 {
  $color: #111;
  background: $color;
}
// Error
.box2 {
  background: $color;
}
```
##### &nbsp; 위 코드에서 $color는 .box1 블록 안에서 설정되었기에 블록 밖에 있는 .box2에서는 사용 불가하다.
##### &nbsp; __*위 (5) 중첩 벗어나기(@at-root)에서 언급했던 내용과 동일하다.__

<br/>

#### &nbsp; __+변수에 변수 할당 또한 가능하다.__
```SCSS
$red: #FF0000;
$blue: #0000FF;

$color-primary: $blue;
$color-danger: $red;

.box {
  color: $color-primary;
  background: $color-danger;
}
```

<br/>
<br/>

#### &nbsp; __(9) 전역 설정(!global)__  
##### &nbsp; !global 플래그 사용 시, 변수의 유효범위를 전역(Global)으로 설정 가능하다.
```SCSS
.box1 {
  $color: #111 !global;
  background: $color;
}
.box2 {
  background: $color;
}
```
##### &nbsp; __*대신 기존에 사용하던 변수와 같은 이름을 사용할 경우, 값이 덮어져 사용될 수 있다.__

<br/>
<br/>

#### &nbsp; __(10) 초깃값 설정(!default)__  
##### &nbsp; !default 플래그는 할당되지 않은 변수의 초깃값을 설정한다.  
##### &nbsp; 즉, 할당되어 있는 변수가 있다면 변수가 기존 할당값을 사용한다.
```SCSS
$color-primary: red;

.box {
  $color-primary: blue !default;
  background: $color-primary;
}
```
##### &nbsp; Compiled to CSS:
```CSS
.box {
  background: red;
}
```
##### &nbsp; __위와 같은 방식은 변수와 값을 설정하지만, 기존 변수가 있을 경우에는 현재 설정하는 변수의 값은 사용하지 않고 기존 변수값을 사용할 때 유용하다.__

<br/>
<br/>

#### &nbsp; __(11) 문자 보간(#{ })__  
##### &nbsp; #{ }를 이용해서 코드의 어디든지 변수값을 넣을 수 있다.
```SCSS
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
```
##### &nbsp; __+Sass의 내장 함수 unquote()는 문자에서 따옴표를 제거한다.__

<br/>

##### &nbsp; Compiled to CSS:
```CSS
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```

<br/>
<br/>

#### &nbsp; __(12) 가져오기(Import)__  
##### &nbsp; @import로 외부에서 가져온 Sass 파일은 모두 단일 CSS 출력 파일로 병합된다.

<br/>

#### &nbsp; __[CSS @import 규칙으로 컴파일되는 상황]__
##### &nbsp; - 파일 확장자가 .css일 때
##### &nbsp; - 파일 이름이 http:// 로 시작하는 경우
##### &nbsp; - url( )이 붙었을 경우
##### &nbsp; - 미디어쿼리가 있는 경우

<br/>
<br/>

#### &nbsp; __(13) 파일 분할(Partials)__  
##### &nbsp; 프로젝트 규모가 커지면 파일들을 header나 side-menu와 같이 각 기능과 부분으로 나눠 유지보수가 쉽도록 관리하게 되어 파일 수가 많아지게 되는데
##### &nbsp; 모든 파일이 컴파일 시, 각각의 .css 파일로 나눠 저장된다면 관리나 성능 차원에서 문제가 될 수 있다.  

<br/>

##### &nbsp; __이런 상황에 필요한 게 Partials 기능이다.__  
##### &nbsp; 파일 이름 앞에 _를 붙여(_header.scss) @import로 가져오면 컴파일 시, header.css 파일로 컴파일하지 않는다.

<br/>

##### &nbsp; 말로만 들었을 때에는 어떤 경우이며 왜 필요한지에 대해 이해하기 어렵다.
##### &nbsp; 아래 예시를 보며 천천히 이해해보자.

<br/>

####  __[1] _ 를 사용하지 않은 경우__
##### &nbsp; 다음과 같이 SCSS 폴더 내에 3개의 SCSS 파일이 들어있다.

```BASH
Sass-App
  # ...
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```
##### &nbsp; 이 중 main.scss에서 header.scss와 side-menu.scss 파일을 사용하기 위해 @import로 가져온다.
```SCSS
// main.scss
@import "header", "side-menu";
```
##### &nbsp; 그 후, 해당 SCSS파일들을 CSS 파일로 컴파일하면 아래와 같이 3개의 SCSS 파일 모두가 CSS 파일로 컴파일된다.
```BASH
Sass-App
  # ...
  ├─css
  │  ├─header.css
  │  ├─side-menu.css
  │  └─main.css
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```
<br/>

####  __[2] _ 를 사용한 경우__
```BASH
Sass-App
  # ...
  ├─scss
  │  ├─_header.scss
  │  ├─_side-menu.scss
  │  └─main.scss
  # ...
```
##### &nbsp; __메인 파일인 main.scss에는 _ 를 사용하지 않는다. (하나의 css 파일로 컴파일되어야 하기 때문)__

<br/>

##### &nbsp; [1]과 같은 방법으로 컴파일 진행 시, 아래와 같이 별도의 파일로 컴파일되지 않고 main.css 내에서 사용 가능하다.
```BASH
Sass-App
  # ...
  ├─css
  │  └─main.css  # main + header + side-menu
  ├─scss
  │  ├─header.scss
  │  ├─side-menu.scss
  │  └─main.scss
  # ...
```
##### &nbsp; 별도의 CSS 파일로 컴파일하지 않는 걸 권장하는 이유는 용량의 측면도 있지만 효율성이 제일 크다.
##### &nbsp; 매 컴파일마다 별도의 CSS 파일로 컴파일할 경우, 변수나 중첩 사용이 가능하다는 SCSS의 강점을 죽이는 것과 다름없기 때문이다.  

<br/>

##### &nbsp; 즉, 필요한 부분별로 하나의 파일로 합쳐서 사용한다면 부분별로 SCSS를 나눠 작성(코딩)한 의미가 더 커지게 된다.

<br/>
<br/>

#### &nbsp; __(14) 연산(Operations)__  
#### &nbsp; [1] 산술 연산자

   종류   |  설명  |  주의사항  
-------- | ------ | ------------
__+__    |  더하기 |  
__-__    |  빼기 |  
__*__    |  곱하기 |  하나 이상의 값이 반드시 숫자(Number)
__/__    |  나누기 |  오른쪽 값이 반드시 숫자(Number)
__%__    |  나머지 |  

##### &nbsp; [2] 비교 연산자

   종류   |  설명    
--------  | ------
__==__    |  동등
__!=__    |  부등
__<__     |  대소 / 보다 작은
__>__     |  대소 / 보다 큰
__<=__    |  대소 및 동등 / 보다 작거나 같은
__>=__    |  대소 및 동등 / 보다 크거나 같은
##### &nbsp; [3] 논리 연산자

   종류   |  설명    
--------  | ------
__and__   |  그리고
__or__    |  또는
__not__   |  부정

<br/>

#### __*나누기 연산의 주의사항__
##### &nbsp; CSS는 속성 값의 숫자를 분리하는 방법(예를 들어 font: 16px / 22px serif; 의 경우, font-size: 16px과 line-height: 22px의 속성값을 분리한다.)
##### &nbsp; 으로 /를 허용하기에 SCSS에서 나누기 연산을 사용해도 CSS로 컴파일되었을 때 나누기 연산으로 사용되지 않을 수 있다.

<br/>

##### &nbsp; __따라서 /를 나누기 연산 기능으로 사용하려면 아래의 조건을 충족해야 한다.__
##### &nbsp; - 값 또는 그 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
##### &nbsp; - 값이 ( )로 묶여있는 경우
##### &nbsp; - 값이 다른 산술 표현식의 일부로 사용되는 경우

<br/>
<br/>

#### &nbsp; __(15) 문자(Strings)__  
##### &nbsp; 문자 연산에는 +가 사용되며
##### &nbsp; __문자 연산의 결과는 첫번째 피연산자를 기준으로 한다.__

<br/>

##### &nbsp; 즉 첫번째 피연산자에 따옴표가 붙어있다면 연산 결과를 따옴표로 묶고
##### &nbsp; 첫번째 피연산자에 따옴표가 붙어있지 않다면 연산 결과도 따옴표를 처리하지 않는다.
```SCSS
div::after {
  content: "Hello " + World;
  // "Hello World"
  flex-flow: row + "-reverse" + " " + wrap;
  // row-reverse wrap
}
```

<br/>

##### __+색상도 연산 가능하다.__
```SCSS
div {
  color: #123456 + #345678;
  // #(12)(34)(56) + #(34)(56)(78)
  // R: 12 + 34 = 46
  // G: 34 + 56 = 8a
  // B: 56 + 78 = ce
  background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
  // R: 50 + 10 = 60
  // G: 100 + 20 = 120
  // B: 150 + 30 = 180
  // A: Alpha channels must be equal
}
```
##### &nbsp; RGBA에서 Alpha값은 연산되지 않으며 서로 동일해야 다른 값의 연산이 가능하다.
##### &nbsp; Alpha값을 연산하기 위해 다음 색상 함수(Color Function)을 사용할 수 있다.
[opacify()](https://sass-lang.com/documentation/modules/color#opacify) / [transparentize](https://sass-lang.com/documentation/modules/color#transparentize)


<br/>
<br/>

#### &nbsp; __(16) 재활용(Mixins)__  
##### &nbsp; 스타일 시트 전체에서 재사용할 CSS 선언 그룹을 정의한다.

<br/>

``` SCSS
// @mixin 믹스인 이름 {
//   스타일;
// }

@mixin large-text {
  font-size: 22px;
  font-weight: bold;
  font-family: sans-serif;
  color: orange;
}
```
##### &nbsp; 사용방법은 아래와 같다.
##### &nbsp; @mixin 지시어로 스타일을 정의한다.
``` SCSS
// @include 믹스인 이름;

h1 {
  @include large-text;
}
div {
  @include large-text;
}
```
##### &nbsp; 선언된 Mixin을 사용(포함)하기 위해 @include를 사용한다.

<br/>
<br/>

#### &nbsp; __(17) 인수(Arguments)__  
```SCSS
// @mixin 믹스인 이름($매개변수) {
//   스타일;
// }
// @include 믹스인 이름(인수);

@mixin dash-line($width, $color) {
  border: $width dashed $color;
}

.box1 { @include dash-line(1px, red); }
.box2 { @include dash-line(4px, blue); }
```
#### &nbsp; __+인수의 기본값 설정__
##### &nbsp; @include 포함 단계에서 별도의 인수가 전달되지 않으면 기본값이 사용된다.
```SCSS
// @mixin 믹스인 이름($매개변수: 기본값) {
//   스타일;
// }

@mixin dash-line($width: 1px, $color: black) {
  border: $width dashed $color;
}

.box1 { @include dash-line; }
.box2 { @include dash-line(4px); }
```
##### &nbsp; 위에서 color의 기본값을 black으로 설정한 뒤, @include 포함 단계에서 별도의 인수를 설정하지 않았으므로 color는 black으로 설정된다.

<br/>

#### &nbsp; __+가변 인수__
##### &nbsp; 입력할 인수의 개수가 불확실한 경우, 가변 인수를 사용한다.
```SCSS
// @mixin 믹스인 이름($매개변수...) {
//   스타일;
// }

// @include 믹스인 이름(인수A, 인수B, 인수C);

// 인수를 순서대로 하나씩 전달 받다가, 3번째 매개변수($bg-values)는 인수의 개수에 상관없이 받음
@mixin bg($width, $height, $bg-values...) {
  width: $width;
  height: $height;
  background: $bg-values;
}

div {
  // 위의 Mixin(bg) 설정에 맞게 인수를 순서대로 전달하다가 3번째 이후부터는 개수에 상관없이 전달
  @include bg(
    100px,
    200px,
    url("/images/a.png") no-repeat 10px 20px,
    url("/images/b.png") no-repeat,
    url("/images/c.png")
  );
}
```
##### &nbsp; __가변 인수는 매개변수 뒤에 ...을 붙여준다.__

<br/>

##### &nbsp; Compiled to CSS:
```CSS
div {
  width: 100px;
  height: 200px;
  background: url("/images/a.png") no-repeat 10px 20px,
              url("/images/b.png") no-repeat,
              url("/images/c.png");
}
```
<br/>

##### &nbsp; __반대로 가변 인수를 전달할 값으로 사용__ 하여 기본값에서 변경될 사항만 매개변수로 기입하고 나머지는 기본값으로 사용 가능하다.
```SCSS
@mixin font(
  $style: normal,
  $weight: normal,
  $size: 16px,
  $family: sans-serif
) {
  font: {
    style: $style;
    weight: $weight;
    size: $size;
    family: $family;
  }
}
div {
  // 매개변수 순서와 개수에 맞게 전달
  $font-values: italic, bold, 16px, sans-serif;
  @include font($font-values...);
}
span {
  // 필요한 값만 키워드 인수로 변수에 담아 전달
  $font-values: (style: italic, size: 22px);
  @include font($font-values...);
}
a {
  // 필요한 값만 키워드 인수로 전달
  @include font((weight: 900, family: monospace)...);
}
```
##### &nbsp; Compiled to CSS:
```CSS
div {
  font-style: italic;
  font-weight: bold;
  font-size: 16px;
  font-family: sans-serif;
}
span {
  font-style: italic;
  font-weight: normal;
  font-size: 22px;
  font-family: sans-serif;
}
a {
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  font-family: monospace;
}
```
<br/>
<br/>

#### &nbsp; __(18) @content__
##### &nbsp; 선언한 Mixin에 @content가 포함되어 있다면 해당 부분에 원하는 스타일 블록 전달 가능하다.
```SCSS
// @mixin 믹스인 이름() {
//   스타일;
//   @content;
// }

// @include 믹스인 이름() {
//   // 스타일 블록
//   스타일;
// }

@mixin icon($url) {
  &::after {
    content: $url;
    @content;
  }
}

.icon2 {
  // icon Mixin에 스타일 블록을 추가하여 사용
  @include icon("/images/icon.png") {
    position: absolute;
  };
}
```
##### &nbsp; Compiled to CSS:
```CSS
.icon2::after {
  content: "/images/icon.png";
  position: absolute;
}
```
##### &nbsp; *Mixin에게 전달된 스타일 블록은 Mixin의 범위가 아닌, __스타일 블록이 정의된 범위__ 에서 적용된다.

<br/>
<br/>

#### &nbsp; __(19) 확장(Extend)__
##### &nbsp; 특정 선택자가 다른 선택자의 모든 스타일을 가져야 하는 경우, 확장 기능을 사용한다.
```SCSS
// @extend 선택자;

.btn {
  padding: 10px;
  margin: 10px;
  background: blue;
}
.btn-danger {
  @extend .btn;
  background: red;
}
```
##### &nbsp; Compiled to CSS:
```CSS
.btn, .btn-danger {
  padding: 10px;
  margin: 10px;
  background: blue;
}
.btn-danger {
  background: red;
}
```
##### &nbsp; __[@extend 사용 시, 고려사항]__
##### &nbsp; - 내 현재 선택자(위의 경우, .btn-danger)가 어디에 첨부될 것인가?
##### &nbsp; - 원치 않는 부작용이 초래될 수 있는가?
##### &nbsp; - 이 한 번의 확장으로 얼마나 큰 CSS가 생성되는가?

<br/>
<br/>

#### &nbsp; __(20) 함수(Functions)__
##### &nbsp; Mixin은 지정한 스타일을 반환하는 반면,
##### &nbsp; 함수는 보통 연산된(Computed) 특정 값을 @return 지시어를 통해 반환한다.
```SCSS
// Mixins
// @mixin 믹스인 이름($매개변수) {
//   스타일;
// }

// Functions
// @function 함수 이름($매개변수) {
//   @return 값
// }

// Mixin
// @include 믹스인 이름(인수);

// Functions
// 함수 이름(인수)

$max-width: 980px;

@function columns($number: 1, $columns: 12) {
  @return $max-width * ($number / $columns)
}

.box_group {
  width: $max-width;

  .box1 {
    width: columns();  // 1
  }
  .box2 {
    width: columns(8);
  }
  .box3 {
    width: columns(3);
  }
}
```
##### &nbsp; __*생성한 함수와 내장 함수의 이름이 충돌할 수 있기에 생성한 함수명에는 별도의 접두어를 붙이는 게 좋다.__

<br/>
<br/>

#### &nbsp; __(21) 조건과 반복(Control Directives / Expressions)__
<br/>

##### &nbsp; __[1] if(함수)__
##### &nbsp; 조건의 값(true, false)에 따라 두 개의 표현식 중 하나만 반환한다.
##### &nbsp; 조건의 값이 true - 표현식1
##### &nbsp; 조건의 값이 false - 표현식2
```SCSS
// if(조건, 표현식1, 표현식2)
$width: 555px;
div {
  width: if($width > 300px, $width, null);
}
```
##### &nbsp; Compiled to CSS:
```CSS
div {
  width: 555px;
}
```
<br/>

##### &nbsp; __[2] @if(지시어)__
##### &nbsp; 조건에 따른 분기 처리가 가능하며, if문과 유사하다.
##### &nbsp; @else, if 지시어를 같이 사용할 수 있다.
```SCSS
// @if
@if (조건) {
  /* 조건이 참일 때 구문 */
}

// @if @else
@if (조건) {
  /* 조건이 참일 때 구문 */
} @else {
  /* 조건이 거짓일 때 구문 */
}

// @if @else if
@if (조건1) {
  /* 조건1이 참일 때 구문 */
} @else if (조건2) {
  /* 조건2가 참일 때 구문 */
} @else {
  /* 모두 거짓일 때 구문 */
}
```
##### &nbsp; __조건에 ( )는 생략 가능하다.__

<br/>

##### &nbsp; __[3] @for__
##### &nbsp; __종료 조건이 해석되는 방식__ 에 따라
##### &nbsp; through와 to 방식으로 나뉜다.
```SCSS
// through
// 종료 만큼 반복
// @for $변수 from 시작 through 종료 {
  // 반복 내용
}

// to
// 종료 직전까지 반복
// @for $변수 from 시작 to 종료 {
  // 반복 내용
}

// 1부터 3번 반복
@for $i from 1 through 3 {
  .through:nth-child(#{$i}) {
    width : 20px * $i
  };
};

// 1부터 3 직전까지만 반복(2번 반복)
@for $i from 1 to 3 {
  .to:nth-child(#{$i}) {
    width : 20px * $i
  };
};
```

<br/>

##### &nbsp; __[4] @each__
##### &nbsp; List와 Map 데이터를 반복할 때 사용하며 for in문과 유사하다.
```SCSS
// @each $변수 in 데이터 {
//   // 반복 내용
// }

// List Data
$fruits: (apple, orange, banana, mango);

.fruits {
  @each $fruit in $fruits {
    li.#{$fruit} {
      background: url("/images/#{$fruit}.png");
    }
  }
}
```
##### &nbsp; Compiled to CSS:
```CSS
.fruits li.apple {
  background: url("/images/apple.png");
}
.fruits li.orange {
  background: url("/images/orange.png");
}
.fruits li.banana {
  background: url("/images/banana.png");
}
.fruits li.mango {
  background: url("/images/mango.png");
}
```
##### &nbsp; __각 데이터의 Length가 같다면__ 동시에 여러개의 List 데이터를 반복 처리할 수 있다.

<br/>

##### &nbsp; Map 데이터를 반복할 경우, 하나의 데이터에 두 개의 변수가 필요하다.
```SCSS
// @each $key변수, $value변수 in 데이터 {
//   // 반복 내용
// }

$fruits-data: (
  apple: korea,
  orange: china,
  banana: japan
);

@each $fruit, $country in $fruits-data {
  .box-#{$fruit} {
    background: url("/images/#{$country}.png");
  }
}
```
##### &nbsp; Compiled to CSS:
```CSS
.box-apple {
  background: url("/images/korea.png");
}
.box-orange {
  background: url("/images/china.png");
}
.box-banana {
  background: url("/images/japan.png");
}
```
<br/>

##### &nbsp; __[5] @while__
##### &nbsp; 조건이 false로 평가될 때까지 내용을 반복한다.
```SCSS
// @while 조건 {
//   // 반복 내용
// }

$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 2px * $i;
  }
  $i: $i - 2;
}
```
##### &nbsp; Compiled to CSS:
```CSS
.item-6 { width: 12px; }
.item-4 { width: 8px; }
.item-2 { width: 4px; }
```
<br/>
<br/>

#### &nbsp; __(22) 내장 함수(Built-in Functions)__
##### &nbsp; Sass에서 기본적으로 제공하는 함수이다.
##### &nbsp; 모든 내장 함수에 대해 확인하고 싶으면 아래 페이지에서 확인하자.
&nbsp; [Sass Built-in Functions](https://sass-lang.com/documentation/modules)

<br/>

##### &nbsp; __[1] 색상(RGB / HSL / Opacity)__
##### &nbsp; - mix($color1, $color2): 두 개의 색을 섞는다. 
##### &nbsp; - lighten($color, $amount): 더 밝은색을 만든다.
##### &nbsp; - darken($color, $amount): 더 어두운색을 만든다.
##### &nbsp; - saturate($color, $amount): 색상의 채도를 올린다.
##### &nbsp; - desaturate($color, $amount): 색상의 채도를 낮춘다.
##### &nbsp; - grayscale($color): 색상을 회색으로 변환한다.
##### &nbsp; - invert($color): 색상을 반전시킨다.
##### &nbsp; - rgba($color, $alpha): 색상의 투명도를 변경한다.
##### &nbsp; - opacify($color, $amount) / fade-in($color, $amount): 색상을 더 불투명하게 만든다.
##### &nbsp; - transparentize($color, $amount) / fade-out($color, $amount): 색상을 더 투명하게 만든다.

<br/>

##### &nbsp; __[2] 문자(String)__
##### &nbsp; - unquote($string): 문자에서 따옴표를 제거한다.
##### &nbsp; - quote($string): 문자에서 따옴표를 추가한다.
##### &nbsp; - str-insert($string, $insert, $index): 문자의 index번째에 특정 문자를 삽입한다.
##### &nbsp; - str-index($string, $substring): 문자에서 특정 문자의 첫 index를 반환한다.
##### &nbsp; - str-slice($string, $start-at, [$end-at]): 문자에서 특정 문자(몇번째 글자부터 몇번째 글자까지)를 추출한다.
##### &nbsp; - to-upper-case($string): 문자를 대문자로 변환한다.
##### &nbsp; - to-lower-case($string): 문자를 소문자로 변환한다.

<br/>

##### &nbsp; __[3] 숫자(Number)__
##### &nbsp; - percentage($number): 숫자(단위 무시)를 백분위로 변환한다.
##### &nbsp; - round($number): 정수로 반올림한다.
##### &nbsp; - ceil($number): 정수로 올림한다.
##### &nbsp; - floor($number): 정수로 내림(버림)한다.
##### &nbsp; - abs($number): 숫자의 절대값을 반환한다.
##### &nbsp; - min($numbers…): 숫자 중 최소값을 찾는다.
##### &nbsp; - max($numbers…): 숫자 중 최대값을 찾는다.
##### &nbsp; - random(): 0부터 1 사이의 난수를 반환한다.

<br/>

##### &nbsp; __[4] List__
##### &nbsp;&nbsp; __*모든 List 내장 함수는 기존 List 데이터를 갱신하지 않고 새 List 데이터를 반환한다.__
##### &nbsp;&nbsp; __*모든 List 내장 함수는 Map 데이터에서도 사용 가능하다.__

<br/>

##### &nbsp; - length($list): List의 개수를 반환한다.
##### &nbsp; - nth($list, $n): List에서 n번째 값을 반환한다.
##### &nbsp; - set-nth($list, $n, $value): List에서 n번째 값을 다른 값으로 변경한다.
##### &nbsp; - join($list1, $list2, [$separator]): 두개의 List를 하나로 결합한다.
##### &nbsp; - zip($lists…): 여러 List들을 하나의 다차원 List로 결합한다.
##### &nbsp; - index($list, $value): List에서 특정 값의 index를 반환한다.

<br/>

##### &nbsp; __[5] Map__
##### &nbsp; __*모든 Map 내장 함수는 기존 Map 데이터를 갱신하지 않고 새 Map 데이터를 반환한다.__

<br/>

##### &nbsp; - map-get($map, $key): Map에서 특정 key의 value를 반환한다.
##### &nbsp; - map-merge($map1, $map2): 두개의 Map을 병합하여 새로운 Map을 만든다.
##### &nbsp; - map-keys($map): Map에서 모든 key를 List로 반환한다.
##### &nbsp; - map-values($map): Map에서 모든 value를 List로 반환한다.

<br/>

##### &nbsp; __[6] 관리(Introspection)__
##### &nbsp; - variable-exists(name): 변수가 현재 범위에 존재하는지 여부를 반환한다. (인수는 $없이 변수의 이름만 사용한다.)
##### &nbsp; - unit($number): 숫자의 단위를 반환한다.
##### &nbsp; - unitless($number): 숫자에 단위가 있는지 여부를 반환한다.
##### &nbsp; - comparable($number1, $number2): 두개의 숫자가 연산 가능한지 여부를 반환한다.