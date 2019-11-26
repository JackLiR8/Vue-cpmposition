<template>
<div>
  <h2>basic-demo</h2>
  <button @click="increment">
    Count is: {{state.count}}, double is: {{state.double}}
  </button>
  <h4>watch</h4>
  <div class="watch-display"></div>
  <hr>
</div>
</template>

<script>
import {reactive, computed, watch} from '@vue/composition-api';
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    watch(() => {
      document.querySelector('.watch-display').innerHTML = `count is ${state.count}`
    })

    function increment() {
      state.count++;
    }

    return {
      state,
      increment
    }
  }
}
</script>