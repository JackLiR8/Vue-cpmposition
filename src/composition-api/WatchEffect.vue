<template>
  <div>
    <h3>watchEffect</h3>
    <div>
      {{count}}
      <button @click="increase">plus</button>
      <button @click="stop">unwatch</button>
    </div>
  </div>
</template>

<script>
/* 
  watchEffect
  追踪到依赖时立即执行回调函数，且在依赖更新时重新执行回调函数
*/
import { ref, watchEffect } from '@vue/composition-api'
export default {
  setup() {
    const count = ref(0)

    // 1.Stopping the Watcher
    //   watchEffect 在 setup 或生命周期钩子里调用时，watcher会关联组件
    //   的生命周期并在组件 unmounted 时自动停止
    //   watchEffect 会返回一个处理函数，用于显式地停止 watcher
    const stop = watchEffect(() => {
      console.log('watchEffect', count.value)
    })
    function increase() {
      count.value++
    }

  
    // 2.Side Effect InValidation
    //   有时候 watch的回调函数会执行已经失效的需要被清除的异步副作用
    //   effect function 接受一个 onInvalidate 函数，用于注册一个使副作用失效的回调函数

    //   invalidation callback 在以下情况会被调用：
    //     1) effect 将要重新执行
    //     2) watcher 停止时
    watchEffect(onInvalidate => {

      onInvalidate(() => {
        // id has changed or watcher is stopped.
        // invalidate previously pending async operation
      })
    })

    return { count, increase, stop }
  }
}
</script>
