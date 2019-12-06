<template>
  <div>
    <h3>lifecycle hooks</h3>
    <span>count: {{count}}</span>&nbsp;
    <button @click="plusCount">plus</button>
  </div>
</template>

<script>
/**
 * @file lifecycle
 * 
 * setup() -> onBeforeMount -> onMounted
 * onBeforeUpdate -> onUpdated
 * onBeforeUnmount -> onUnmounted
 * onErrorCaptured
 * 
 * 两个用于调试的新钩子(类似于watch的onTrack, onTrigger)
 * onRenderTracked
 * onRenderTriggered
 */

import {ref, onMounted, onUnmounted, onUpdated} from '@vue/composition-api'

export default {
  setup() {
    onMounted(() => { console.log('mounted') });
    onUnmounted(() => { console.log('unmounted')});
    onUpdated(() => console.log('updated'));
    /* 
      钩子函数在setup中只能同步执行，否则报错: "onMounted" get called outside of "setup()"
      因为vue需要通过全局声明定位当前激活的组件实例

      setTimeout(() => {
        onMounted(() => { console.log('mounted') });
      }, 1000); 
    */

    const count = ref(66);
    function plusCount() {
      count.value++;
    }

    return {count, plusCount}
  }
}
</script>
