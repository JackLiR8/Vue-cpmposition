<template>
<div>
  <h2>basic-demo</h2>
  <button @click="increment">
    Count is: {{state.count}}, double is: {{state.double}}
  </button>
  <hr>
</div>
</template>

<script>
import {reactive, computed} from '@vue/composition-api';
export default {
  setup() {
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
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