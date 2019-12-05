<template>
  <div>
    <h3>watch</h3>
    <p>count: {{count}}</p>
  </div>
</template>

<script>
import { watch, ref, reactive } from '@vue/composition-api'
export default {
  setup() {
    const count = ref(100);
    const state = reactive({count: 0});

    watch(() => {
      // 没有依赖的情况下，只在最初(nextTick)执行一次
      // console.log('watch');

      // 有依赖的情况下，每当依赖改变，该函数都会运行一次
      // console.log('watch-count', count.value); 
    })

  /* ------------------- 监听某个值 --------------------
  
    当需要明确watch的值时, 可以通过以下两个方法指定watch的值并获取监听目标的新旧值 */

    // 监听getter
    // watch(() => state.count, (count, prevCount) => {
    //   console.log(`state.count -- newVal: ${count}, oldVal: ${prevCount}`);
    // })
    // 直接监听ref
    // watch(count, (count, prevCount) => {
    //   console.log(`count -- newVal: ${count}, oldVal: ${prevCount}`);
    // })

  /* ------------------ 同时监听多个值 ------------------ */
    const multiStop = watch(
      [count, () => state.count],
      ([c, Sc], [prevC, prevSc]) => {
        console.log(`count -- newVal: ${c}, oldVal: ${prevC}`);
        console.log(`state.count -- newVal: ${Sc}, oldVal: ${prevSc}`);
      }
    )

    /**
     * watch 在 setup里被调用的时候，监听器将会和生命周期挂钩，当组件unmounted的是否会自动停止监听
     * 此外，watch返回一个停止处理器，用于显式的停止监听
     */
    setTimeout(() => {
      multiStop();
    }, 3000);

    const timer = setInterval(() => {
      if (count.value > 104) {
        clearInterval(timer);
        return
      }
      count.value++;
    }, 1000);

    const timer1 = setInterval(() => {
      if (state.count > 6) {
        clearInterval(timer1);
        return
      }
      state.count++;
    }, 1000);

    return { count, state }
  }
}
</script>
