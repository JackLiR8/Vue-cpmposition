<template>
  <div>
    <h3>watch</h3>
    <p>count: {{count}}</p>
    <button @click="plusNum">add: {{num}}</button>
  </div>
</template>

<script>
/**
 * @file watch
 * 1. 基本应用
 * 2. 监听某个值
 * 3. 同时监听多个值
 * 4. 停止监听
 * 5. 消除副作用
 * 6. callback的执行时间
 * 7. 懒调用
 * 8. debugger: onTrack, onTrigger
 */
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
    watch(() => state.count, (count, prevCount) => {
      console.log(`state.count -- newVal: ${count}, oldVal: ${prevCount}`);
    })
    // 直接监听ref
    watch(count, (count, prevCount) => {
      console.log(`count -- newVal: ${count}, oldVal: ${prevCount}`);
    })

  /* ------------------ 同时监听多个值 ------------------ */
    // const multiStop = watch(
    //   [count, () => state.count],
    //   ([c, Sc], [prevC, prevSc]) => {
    //     console.log(`count -- newVal: ${c}, oldVal: ${prevC}`);
    //     console.log(`state.count -- newVal: ${Sc}, oldVal: ${prevSc}`);
    //   }
    // )

  /* ----------------- 停止监听 -----------------------
    watch 在 setup里被调用的时候，监听器将会和生命周期挂钩，当组件unmounted的是否会自动停止监听
    此外，watch返回一个停止处理器，用于显式的停止监听
  */
    // setTimeout(() => {
    //   multiStop();
    // }, 3000);

  /* --------------- 清除副作用 --------------------- 
    有时候，watch 会发生异步副作用，当监听的值发生变化时，需要清除副作用
    watcher 回调函数接受一个清除函数注册器，用于注册一个清除函数
    这个清除函数在watcher 重新运行之前 和 停止监听 的时候调用
  */ 
    // 一般情况时作为第一个参数
    watch(onCleanUp => {
      // ...
      onCleanUp(() => {
        // 监听的值发生变化或者监听器停止的时候，让先前的进行中的异步操作失效
      })
    })

    // 精确监听时作为回调函数的第三个参数
    watch(count, (count, prevCount, onCleanUp) => {
      // ...
      onCleanUp(() => {
        // ...
      })
    })

  /* --------------------- callback的执行时间 ---------------------
    vue的响应系统会缓存watch 的callback并异步调用。
    正常情况下，callback会在组件mounted之后首次调用，
    监听的值发生变化时，callback会在组件updated之后执行

    某些情况下callback需要同步调用或者在组件updated之前调用，
    可以通过 ‘flush’选项(default: 'post')实现
  */
    // 同步执行
    watch(() => { /* ... */}, {
      flush: 'sync'
    })

    // updated之前执行
    watch(() => { /* ... */}, {
      flush: 'pre'
    })

  /* -------------------- debugger ---------------------
      onTrack 会在数据被追踪时调用;
      onTrigger 会在依赖数据发生变化时调用;
      这两个回调函数都接受一个debugger事件参数
  */
    const num = ref(6);
    watch(
      num, 
      () => { /* ... */ },
      {
        onTrack(e) {
          // eslint-disable-next-line
          debugger
          console.log('on-track', e)
        },
        onTrigger(e) {
          // eslint-disable-next-line
          debugger
          console.log('on-trigger', e)
        }
      }
    )
    function plusNum() {
      num.value++
    }

    /* const timer = setInterval(() => {
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
    }, 1000); */

    return { count, state, num, plusNum }
  }
}
</script>
