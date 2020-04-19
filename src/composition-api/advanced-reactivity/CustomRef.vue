<template>
  <div>
    <h2>customRef</h2>
    <input type="text" v-model="text">
  </div>
</template>

<script>
import { useDebounceRef } from './index'
export default {
  name: 'CustomRef',

  setup() {
    return {
      text: useDebounceRef('hello')
    }
  }
}
</script>
