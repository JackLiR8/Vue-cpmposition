<template>
  <div>
    <h3>reactive</h3>
    <p>count {{state.count}}</p>
  </div>
</template>

<script>
import {reactive, onMounted} from '@vue/composition-api'
export default {
  setup() {
    /* reactive 接受一个对象，返回一个proxy对象。等于2.x 里的Vue.observable() */
    const state = reactive({count: 0});

    onMounted(() => {
      const timer = setInterval(() => {
        if (state.count > 6) {
          clearInterval(timer);
          return;
        }
        state.count++;
      }, 1000);
    })

    return { state };
  }
}
</script>
