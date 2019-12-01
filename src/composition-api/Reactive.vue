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
        state.count++;
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
      }, 9001);
    })

    return { state };
  }
}
</script>

<style>

</style>