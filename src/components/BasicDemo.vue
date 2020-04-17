<template>
<div>
  <h2>basic-demo</h2>
  <button @click="increment">
    Count is: {{state.count}}, double is: {{state.double}}
  </button>
  <h4>watch</h4>
  <div class="watch-display"></div>
  <h4>ref</h4>
  <button @click="add">
    ref count is {{count}}
  </button>
  <hr>
</div>
</template>

<script>
import {reactive, computed, watchEffect, ref} from '@vue/composition-api';
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    watchEffect(() => {
      document.querySelector('.watch-display').innerHTML = `count is ${state.count}`
    })

    function increment() {
      state.count++;
    }

    const count = ref(0)

    function add() {
      count.value++
    }

    return {
      state,
      increment,
      count,
      add
    }
  }
}
</script>