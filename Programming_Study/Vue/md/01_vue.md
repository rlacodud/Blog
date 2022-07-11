# __Vue__

## __1. Vue란?__
#### Vue는 사용자 인터페이스를 만들기 위한 진보적인 프레임워크이다.
#### React와 비슷하게 Component 기반의 SPA(Single Page Application) 사이트를 구축할 수 있다.

<br>

#### 여기서 Component와 SPA가 무엇인지에 대해서는 React 소개 시 설명한 부분이 있으니 링크를 참고하기 바란다.

<br>

#### 잘 알듯이 프레임워크의 3대장인 React와 Angular를 두고 왜 Vue를 공부해야 하냐고 묻는다면 단연 __쉬워서__ 라고 할 수 있다.

<br>

---

<br>

## __2. Vue CLI란?__
#### React와는 조금 다르게 Vue에는 기본 개발 환경을 설정해주는 도구인 Vue CLI가 존재한다.
#### Vue CLI가 기본적인 프로젝트 세팅을 해주기 때문에 폴더 구조에 대한 고민, lint, build 등에 대한 고민을 덜을 수 있다.

>#### __여기서 CLI란?__
>#### 명령 줄 인터페이스(Command Line Interface) 또는 명령어 인터페이스로,
>#### 텍스트 터미널을 통해 사용자와 컴퓨터가 상호작용하는 방식을 뜻한다.
>#### 즉, 작업 명령은 사용자가 컴퓨터 키보드 등을 통해 문자열의 형태로 입력하며 컴퓨터로부터의 출력 역시 문자열의 형태로 주어진다.

<br>

### __(1) Vue CLI 설치__
#### 우선, npm 또는 yarn이 설치되어야 진행 가능하다.
#### 우리는 npm을 이용하여 진행할 것이다.
```terminal
npm install -g @vue/cli
```
#### 위 설치 명령어를 입력하여 설치를 진행 후 아래 명령어를 입력했을 때 vue의 version이 나온다면 설치가 잘 완료된 것이다.
```terminal
vue --version
```

<br>

### __(2) 프로젝트 생성__
#### 아래 명령어를 통해 프로젝트를 생성한다.
```terminal
vue create 프로젝트명
```
#### 위 명령어를 입력하면 설정에 대한 선택지가 주어지는데
#### 보통 default (babel, eslint)를 선택하여 기본적인 세팅을 완료한다.

<br>

#### 프로젝트 생성이 완료되고 나면 아래 명령어를 이용하여 dev 서버를 실행해준다.
```terminal
npm run serve
```
![tutorial][tutorial]

[tutorial]: ./img/tutorial.png "tutorial"
#### React와 동일하게 우리가 Vue 프로젝트를 생성할 때마다 보게 될 초기 화면이다.

<br>

---

<br>

## __3. Component__
### __(1) 프로젝트 생성__
#### Component에 대해 더 확실히 이해할 수 있도록 레이아웃을 다루는 Vue 프로젝트를 생성해보자.
```terminal
vue create page_layout
```
#### 위 명령어로 Vue 프로젝트를 생성하고 `/src/App.vue`를 다음과 같이 수정하자.
```vue
<template>
  <div>
    안녕하세요
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
```

<br>

#### 위 파일의 구조를 통해 .vue 의 기본 구조를 알 수 있다.
```vue
<template>
</template>

<script>
  export default {};
</script>

<style>
</style>
```

<br>

#### Vue의 style에서는 scoped라는 옵션으로 Component의 style 범위(scope)를 지정할 수 있다.
#### App.vue의 style을 다음과 같이 수정해보자.
```vue
<style scoped>
div {
   color: #03a9f4;
}
</style>
```
#### 위와 같이 수정하면 App.vue 내에만 존재하는 div 태그에만 색상을 변경한다 는 의미가 된다.

<br>

### __(2) Component 생성__
#### Layout을 구성하기 위해 Components 폴더 안에 Header, Menu, Content.vue 파일을 생성해보자.
#### Component 파일들의 이름은 대문자로 시작해야 한다.
#### vue 파일 생성 후 기본 구조는 `< + 엔터`를 통해 생성 가능하다.
```vue
<template>
  <div>
    Component 이름
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
```

<br>

#### Component들을 App.vue로 불러와서 보이게 할텐데 App.vue의 script에 아래와 같은 코드를 작성해준다.
```vue
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Content,
  }
}
</script>

<style scoped>
</style>
```

<br>

>#### Content의 경우를 보면 `'@/components/Content.vue'` 와 같은 방식으로 경로를 설정해두었는데
>#### @는 절대 경로(src 아래)를 가리킨다.

<br>

#### 여기서 주의해야 할 점은 Component를 사용하는 방법이다.
#### 3가지의 절차를 거쳐야 하는데 다음과 같다.
#### 1. `import` 를 통해 해당 Component 파일을 불러온다.
#### 2. components 에 Component를 등록한다.
#### 3. template 내부에서 사용한다.

<br>

#### 이 3가지의 절차 중 하나라도 이행하지 않는다면 오류가 뜬다.

<br>

#### 아래와 같이 태그를 통해 사용하면 된다.
```vue
<template>
  <div>
    <Header/>
    <div>
      <Menu/>
      <Content/>
    </div>
  </div>
</template>
```

<br>

### __(3) Style 적용__
#### Component를 감싸고 있는 div 태그에 wrap이라는 클래스를 주고 style을 설정해보자.
```vue
<template>
  <div>
    <Header/>
    <div class="wrap">
      <Menu/>
      <Content/>
    </div>
  </div>
</template>

<style scoped>
  .wrap {display: flex;}
</style>
```

<br>

#### 이어서 Header.vue의 style을 수정해보자.
![header_style][header_style]

[header_style]: ./img/header_style.png "header_style"

<br>

#### 수정 후 화면을 보면 위와 같은 구조일 것이다.
#### 이어서 Menu, Content의 div에 flex를 각각 1, 2로 설정함으로써 레이아웃을 나누자.
```vue
// Menu.vue
<style scoped>
  div {flex: 1;}
</style>

// Content.vue
<style scoped>
  div {flex: 2;}
</style>
```

<br>

#### 그럼 아래와 같이 레이아웃이 완성된다.
![total_style][total_style]

[total_style]: ./img/total_style.png "total_style"

<br>

---

<br>

## __4. State와 Props__
##### 우리가 평범한 프로젝트를 다룰 때와는 다르게 vue는 document에 직접적인 접근을 하여 DOM를 제어하지 않는다.
#### 그대신 `state`라는 상태를 이용하여 DOM을 관리한다.

<br>

#### 쉽게 말해 state는 나의 data | props는 누구로부터 받는 data이다.
#### 여기서 누구는 보통 부모 Component 또는 뒤에서 배울 상태머신(vuex)이다.

<br>

#### 제대로 이해하기 위해 예제를 만들어보자.
#### components 폴더에 box라는 component 파일을 생성하고 아래와 같이 Box의 넓이와 높이를 data 함수를 이용해 state로 생성 및 저장하자.
```vue
<script>
export default {
  data() {
    return {
      width: 40,
      height: 40
    }
  },
}
</script>
```

<br>

#### 이제 위에서 생성한 넓이와 높이 data를 이용해서 box를 그려볼텐데
#### vue에 관련된 무엇인가를 적용할 때에는 `v-bind`라는 것을 이용해야 한다.

<br>

#### 예를 들어 html 태그에 인라인으로 style을 적용할 때에는 다음과 같이 `v-bind:style` 또는 v-bind를 생략한 `:style`의 형태로 이용한다.
```html
<div v-bind:style="{color: #ebebeb}"></div>
<div :style="{color: #ebebeb}"></div>
```

<br>

#### 그럼 Box에 state값을 바탕으로 style을 적용해보자.
```vue
<template>
  <div class="box" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<style>
  .box {border: 1px solid #000;}
</style>
```

<br>

#### 이 Box Component를 App.vue에서 불러온다면 화면에 박스가 만들어지게 된다.

<br>

#### 이제 여러색상의 박스를 만들어볼텐데 그러기 위해 다음과 같이 색상 class를 추가해보자.
```vue
<style>
  .box {border: 1px solid #000;}
  .blue {background: #009bff;}
  .purple {background: #8f46ff;}
  .green {background: #00bcac;}
</style>
```
#### 이 색상 class를 Box별로 적용해주고 싶으면 해당 class들을 Box component를 사용하고 있는 App.vue에서 전달해줘야 한다.
```vue
<template>
  <div>
    <Header/>
    <div class="wrap">
      <Menu/>
      <Content/>
    </div>
    <Box color="blue"/>
    <Box color="purple"/>
    <Box color="green"/>
    <Box color="blue"/>
    <Box color="purple"/>
  </div>
</template>
```

<br>

#### Box가 전달받을 값을 props라고 하는데 이는 Box.vue애서 받을 props의 이름과 type을 적어줌으로써 전달받을 수 있다.
```vue
// Box.vue
<script>
export default {
  name: 'Box_',
  props: {
    color: String
  },
  data() {
    return {
      width: 40,
      height: 80
    }
  },
}
</script>
```

<br>

>#### 여기서 props가 내려오지 않았을 경우를 대비하기 위해 default값 또한 줄 수 있다.
```vue
props: {
  color: {type: String, default: ''}
}
```

<br>

#### 이제 App.vue에서 내려주는 color값을 넘겨받을 수 있게 됐다.
#### 이 값을 Box component에 class로 적용해주면 된다.
#### props나 state를 바탕으로 class를 적용해주기 위해서는 마찬가지로 `v-bind:class` 또는 `:class`를 이용해야 한다.
```vue
<template>
  <div 
  :class="['box', color]" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>
```
#### box에 ''를 붙인 이유는 box는 변수와 같은 데이터가 아닌, 문자열이기 때문이다.

<br>

---

<br>

## __5. v-for__
#### component가 반복될 때 이를 효율적으로 구성할 수 있는 방법이 있다.
#### 예제를 통해 알아보자.

<br>

### __(1) 프로젝트 생성__
#### App.vue는 우리가 이전에 프로젝트를 생성했을 때의 초기상태와 동일하게 한다.

<br>

### __(2) 데이터__
#### component에 사용될 webtoon 데이터를 준비한다.
```vue
export default {
  name: 'App',
  components: {
  },
  date() {
    return {
      webtoons: [
        {
          name: "햄스터와 그녀",
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:
            "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54"
        },
        {
          name: "프롬 스타",
          link: "http://webtoon.daum.net/webtoon/view/fromstar",
          img:
            "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1"
        },
        {
          name: "위대한 로맨스",
          link: "http://webtoon.daum.net/webtoon/view/greatromance",
          img:
            "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085"
        },
        {
          name: "빛나는 손을",
          link: "http://webtoon.daum.net/webtoon/view/Hand",
          img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001"
        }
      ]
    }
  }
}
</script>
```
#### 위와 같이 해당 vue 파일 내부에 data로 넣어도 되지만 data가 많고 복잡할 경우 js 파일로 따로 생성하여 전달하는 경우도 있다.
```js
// data.js
export default: [
  {
    name: "햄스터와 그녀",
    link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
    img:
      "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54"
  },
  {
    name: "프롬 스타",
    link: "http://webtoon.daum.net/webtoon/view/fromstar",
    img:
      "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1"
  },
  {
    name: "위대한 로맨스",
    link: "http://webtoon.daum.net/webtoon/view/greatromance",
    img:
      "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085"
  },
  {
    name: "빛나는 손을",
    link: "http://webtoon.daum.net/webtoon/view/Hand",
    img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001"
  }
]

// App.vue
<script>
import data from './assets/data';

export default {
  name: 'App',
  data() {
    return {
      data: data
    }
  }
}
</script>
```

<br>

### __(3) Component__
#### Webtoon.vue 파일을 생성하고 다음과 같이 작성하자.
```vue
<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap"></ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {type: Array, default: () => []}
  }
}
</script>

<style>

</style>
```
#### 그 후 해당 Webtoon.vue component를 App.vue에서 불러오고 props를 전달해준다.
```vue
// App.vue
<template>
<div id="app">
  <Webtoon :items="webtoons"/>
</div>
</template>

<script>
import Webtoon from './components/Webtoon.vue';

export default {
  name: 'App',
  components: {
    Webtoon
  },
// ...
```

<br>

### __(4) v-for__
#### 이제 v-for 디렉티브를 이용하여 리스트를 렌더링해볼텐데 v-for는 아래와 같은 방식으로 사용한다.
```vue
<div v-for="i in 10" :key={i}>{i}</div>
```
#### 리스트 렌더링되는 component는 항상 key라는 props값이 필요하다.
#### 그 이유는 가상돔에서 리스트 component에서 변경된 부분을 감지할 때 key값을 이용하여 구분하기 때문에 리스트 렌더링 시에는 항상 key값이 필요하다.

<br>

#### 10의 자리에는 해당 리스트가 반복되는 횟수를 의미한다.

<br>

#### v-for를 이용해 Webtoon component를 구성해보자.
```vue
// Webtoon.vue
<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap">
      <li class="item" v-for="(item, idx) in items" :key="{idx}">
        <a :href="item.link" target="_blank">
          <img :src="item.img">
          <span class="tit">제목: {{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
```
#### 태그 내에 변수를 사용할 경우에는 `{{변수명}}` 와 같은 형식을 이용한다.