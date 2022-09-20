[01_vue](./01_vue.md)

<br>

# __Vue Component__

#### Vue에서 중요한 Component에 대해 더 확실히 이해할 수 있도록 레이아웃을 다루는 Vue 프로젝트를 생성해보자.
## __1. 프로젝트 생성__
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

---

<br>

## __2. `.vue`의 기본 구조__

#### 위 파일의 구조를 통해 .vue 의 기본 구조를 알 수 있다.
```vue
// html
<template>
</template> 

// script
<script>
  export default {};
</script> 

// style
<style>
</style> 
```

<br>

#### Vue의 style에서는 __`scoped`라는 옵션으로 Component의 style 범위(scope)를 지정할 수 있다.__
#### App.vue의 style을 다음과 같이 수정해보자.
```vue
<style scoped>
div {
   color: #03a9f4;
}
</style>
```
#### 위와 같이 수정하면 __App.vue 내에만 존재하는__ div 태그에만 색상을 변경한다 는 의미가 된다.

<br>

---

<br>

## __3. Component 생성__
#### layout을 구성하기 위해 Components 폴더 안에 `Header`, `Menu`, `Content`.vue 파일을 생성해보자.
```vue
<template>
  <div>
    Component 이름
  </div>
</template>

<script>
export default {
  name: 'Component 이름_',
}
</script>

<style scoped>

</style>
```

<br>

>#### (1) __Component 파일들의 이름은 대문자로__ 시작해야 한다.
>#### (2) vue 파일 생성 후 __기본 구조는 `< + 엔터`를 통해 빠르게 생성 가능하다.__
>#### (3) script 내에 해당 component의 이름을 입력해야 하는데 이 때 __multi-word로 작성하지 않으면 오류가 생긴다.__
>#### 그렇기에 주로 필자는 `Component 이름_` 형태를 사용하는 편이다.

<br>

---

<br>

## __4. Component 불러오기__
#### 이어서 Component들을 App.vue로 불러와서 보이게 할텐데 App.vue의 script에 아래와 같은 코드를 작성해준다.
```vue
// App.vue
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
>#### __`@`는 절대 경로(src 아래)를__ 가리킨다.

<br>

#### 여기서 주의해야 할 점은 Component를 사용하는 방법이다.
#### 3가지의 절차를 거쳐야 하는데 다음과 같다.
>#### 1. `import` 를 통해 해당 Component 파일을 불러온다.
>#### 2. `components` 에 Component를 등록한다.
>#### 3. `template` 내부에서 사용한다.
>#### <br>
>#### 이 3가지의 절차 중 하나라도 이행하지 않는다면 오류가 생긴다.

<br>

#### Component는 아래와 같이 태그를 통해 사용하면 된다.
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

## __5. Style 적용__
#### Component를 감싸고 있는 div 태그에 `wrap`이라는 class를 주고 style을 설정해보자.
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
```vue
.wrap {position: sticky; height: 50px; border-bottom: 1px solid #ebebeb;}
```

<br>

![header_style][header_style]

[header_style]: ./img/header_style.png "header_style"

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

#### 이와 같이 재사용될 구조는 외부에서 Component로 생성한 뒤, 이를 불러옴으로써 사용 가능하다.
#### 다음 시간에는 __data를 다룰 때 필수적인 `state`와 `props`__ 에 대해 알아보자.

<br>

[03_vue_state_props](./03_vue_state_props.md)