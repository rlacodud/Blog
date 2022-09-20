[02_vue_component](./02_vue_component.md)

<br>

# __Vue State Props__

## __1. State와 Props__
#### 우리가 이전에 html을 다뤄서 작업할 때와는 다르게 __vue는 document에 직접적인 접근을 하여 DOM를 제어하지 않는다.__
#### 그대신 __`state`라는 상태를 이용하여__ DOM을 관리한다.

<br>

#### 쉽게 말해 __`state`는 나의 data | `props`는 누구로부터 받는 data__ 이다.
#### 여기서 '누구'는 보통 __부모 Component 또는 뒤에서 배울 상태머신(vuex)__ 이다.

<br>

---

<br>

## __2. 프로젝트 생성__
#### 제대로 이해하기 위해 예제를 만들어보자.
#### components 폴더에 `Box`라는 component 파일을 생성하고 아래와 같이 __`Box`의 넓이와 높이를 `data` 함수를 이용해 `state`로 생성 및 저장하자.__
```vue
// Box.vue
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

---

<br>

## __3. v-bind__
#### 이제 위에서 생성한 넓이와 높이 `data`를 이용해서 box를 그려볼텐데
#### __vue에 관련된 무엇인가를 적용할 때에는 `v-bind`__ 라는 것을 이용해야 한다.

<br>

#### 예를 들어 html 태그에 인라인으로 style을 적용할 때에는 다음과 같이 __`v-bind:style` 또는 v-bind를 생략한 `:style`의 형태로__ 이용한다.
```html
<div v-bind:style="{color: #ebebeb}"></div>
<div :style="{color: #ebebeb}"></div>
```

<br>

#### 그럼 Box에 `state`값을 바탕으로 style을 적용해보자.
```vue
<template>
  <div class="box" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>

<style>
  .box {border: 1px solid #000;}
</style>
```

<br>

#### 이 `Box` Component를 App.vue에서 불러온다면 화면에 박스가 만들어지게 된다.

<br>

#### 이제 여러색상의 박스를 만들어볼텐데 그러기 위해 다음과 같이 색상 class를 추가해보자.
```html
<style>
  .box {border: 1px solid #000;}
  .blue {background: #009bff;}
  .purple {background: #8f46ff;}
  .green {background: #00bcac;}
</style>
```
#### 이 색상 class를 Box별로 적용해주고 싶으면 __해당 class들을 `Box` component를 사용하고 있는 App.vue에서 전달해줘야 한다.__
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

#### `Box`가 전달받을 값을 `props`라고 하는데 이는 Box.vue애서 __받을 `props`의 이름과 `type`을 적어줌으로써__ 전달받을 수 있다.
```html
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

>#### 여기서 __`props`가 내려오지 않았을 경우를 대비하기 위해 `default`값__ 또한 줄 수 있다.
```vue
props: {
  color: {type: String, default: ''}
}
```

<br>

#### 이제 __App.vue에서 내려주는__ `color`값을 넘겨받을 수 있게 됐다.

<br>

#### 이 값을 `Box` component에 class로 적용해주면 된다.
#### __`props`나 `state`를 바탕으로 class를 적용해주기 위해서는 마찬가지로 `v-bind:class` 또는 `:class`를 이용해야 한다.__
```vue
<template>
  <div 
  :class="['box', color]" :style="{width: width + 'px', height: height + 'px'}"></div>
</template>
```
#### `box`에 `''`를 붙인 이유는 __`box`는 변수와 같은 데이터가 아닌, 문자열이기__ 때문이다.

<br>

#### 다시 한번 요약하자면 __본인이 가진 `data`가 `state`__
#### __부모로부터 전달받는 `data`가 `props`이다.__