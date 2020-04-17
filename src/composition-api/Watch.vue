<template>
  <div>
    <h3>watch</h3>
    <div>
      {{state.count}}
      <button @click="increaseState">increase state</button>
    </div>
    <div>
      {{count}}
      <button @click="increaseCount">increase count</button>
    </div>
  </div>
</template>

<script>
/* 
  和watchEffect相比， watch允许我们：
    1. 懒执行副作用
    2. 更明确哪个状态触发watch运行
    3. 获取监听状态的老值和新值
*/
import { reactive, ref, watch } from '@vue/composition-api'
export default {
  setup() {
    // watching a getter
    const state = reactive({ count: 0 })
    watch(() => state.count, (count, /* prevCount */) => {
      console.log('watch getter', count)
    })
    function increaseState() {
      state.count++
    }

    // directly watching a ref
    const count = ref(0)
    watch(count, (count, /* prevCount */) => {
      console.log('watch ref', count)
    })
    function increaseCount() {
      count.value++
    }

    // 监听多个值
    /* 
    const foo = ref('foo')
    const bar = ref('bar')
    watch([foo, bar], ([foo, bar], [prevFoo, prevBar]) => {
      console.log(`watch foo & bar:
        foo: ${prevFoo} -> ${foo}
        bar: ${prevBar} -> ${bar}`)
    }) 
    */

    return {
      state,
      count,
      increaseState,
      increaseCount
    }
  }
}
</script>
