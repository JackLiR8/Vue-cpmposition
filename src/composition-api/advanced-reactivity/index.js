/**
 * @file Advanced Reactivity APIs
 */

import {
  customRef,
  markRaw,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw
} from '@vue/composition-api'

// =================== customRef ===========================
// customRef 用于显示地控制依赖的 tracking 和 update triggering
// customReg需要一个工厂函数，该函数接受 track, trigger 两个参数并且需要返回
// 一个包含 get 和 set 的对象
export function useDebounceRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay);
      }
    }
  })
}