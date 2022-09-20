[06_vue_data_binding](./06_vue_data_binding.md)

<br>

# __Vue Computed  watch__
## __1. Computed__
#### __연산 결과를 캐싱해주는__ `computed`에 대해 알아보자.

<br>

#### 터미널에 아래와 같이 명령어를 입력하여 새로운 프로젝트를 생성하고 
```terminal
vue create computed_watch
```

<br>

#### App.vue를 다음과 같이 작성하자.
```html
<template>
<div id="app">
  {{message}}
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      message: 'Hello vue!'
    }
  },
}
</script>

<style>
</style>
```

<br>

#### 여기서 'Hello vue!'라는 `state`값을 뒤집어서 표현하기 위해 아래와 같이 코드를 추가해보자.
```html
<template>
<div id="app">
  {{message}}
  <h2>뒤집힌 message</h2>
  {{message.split("").reverse().join("")}}
</div>
</template>
```

<br>

#### 위처럼 `template` 영역에 연산처리를 넣을 수 있지만 __`state` 또는 `props`가 변경될 때마다__ re-render되기 때문에 매번 연산처리를 해야된다는 부담감이 있다.

<br>

#### 이런 부담을 줄이고자 우리는 __`computed`라는 것을 이용하여 연산결과를 캐싱하여 사용할 수 있다.__
```html
<template>
<div id="app">
  {{message}}
  <h2>뒤집힌 message</h2>
  {{reverseMessage}}
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      message: 'Hello vue!'
    }
  },
  computed: {
    reverseMessage() {
      return this.message.split("").reverse().join("")
      }
    }
  }
</script>
```
#### `computed`는 대상을 따라 연산결과가 캐싱된다.
#### 예를 들어 대상인 message가 변경되지 않는다면 이미 연산처리된 즉, 캐싱되어있는 reverseMessage를 가져온다.

<br>

#### `method`에서도 같은 결과를 가져오지만 함수의 경우에는 re-render될 때마다 실행되기 때문에 캐싱 이득을 취할 수 없다.

<br>

---

<br>

## __2. Watch__
#### __`watch`는 `state`나 `props`를 감시하고 해당 값이 변경되었을 때의 행동을__ 지정할 수 있다.
```html
<template>
<!-- <div id="app">
  {{message}}
  <h2>뒤집힌 message</h2>
  {{reverseMessage}}
</div> -->

<div id="app">
  <input v-model="firstName"/>
  <input v-model="lastName"/>

  <h2>full name</h2>
  <span>{{fullName}}</span>
</div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      message: 'Hello vue!',
      firstName: '',
      lastName: ''
    }
  },
  watch: {
    firstName (val) {
      this.fullName = `${val} ${this.lastName}`
    },
    lastName (val) {
      this.fullName = `${this.firstName} ${val}`
    }
  },
}
```
#### 하지만 위와 같은 처리에는 `watch`를 사용하는 건 좋은 방법이 아니다.
#### `computed`가 있기 때문이다.

<br>

#### __`watch`는 언제 변하는지 예측이 어려울 때__ 많이 사용된다.
#### 예를 들어 비동기 통신의 경우이다.

<br>

#### 우리가 __어떤 데이터를 요청했을 때__ 이 값이 1초 뒤에 올지 3초 뒤에 올지 예측이 어려울 때 그 값을 `watch`를 통해 감시하고 있다가 해당 값에 대한 응답이 왔을 때 후처리를 해줄 수 있도록 한다.

<br>

#### __`computed`는 위에서 알아본 것처럼 복잡한 연산을 캐싱처리하기__ 위해 사용된다.

<br>

#### 이렇게 `computed`와 `watch`에 대해 알아봤다.