/**
 * @file Advanced Reactivity APIs
 */

import {
  customRef,
  markRaw,
  shallowReactive,
  shallowReadonly,
  shallowRef,
  toRaw,

  isReactive
} from '@vue/composition-api'
import { isReactive } from '@vue/composition-api/dist/reactivity'

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

// =================== markRaw =======================
// 标记一个对象，这个对象永不能转为 proxy, 返回对象本身
export function useMarkRaw() {
  const foo = markRaw({})
  console.log(isReactive(foo))  // false

  // 嵌套在其他对象中时，依然正常工作
  const bar = reactive({ foo })
  console.log(isReactive(bar.foo))  // false
}

// markRaw 和 shallowXXX APIs 让你有选择的阻止默认的深层 reactive/readonly 转换
// 和在state中嵌套原生、非代理对象
// 有如下几个理由：
//   1. 一些值不应该转为响应式的，如第三方类的实例， Vue component object
//   2. 渲染不可更改数据的大列表的时候，可跳过响应式转换

// 它们之所以被当作高级的是因为 raw opt-out 仅发生在根层面上
// 所以如果你在一个响应式对象里设置一个嵌套的，没标记的原生对象，然后重新获取
// 你实际上得到的是被代理后的版本
// 这可能会导致 identity hazards: i.e. performing an operation that relies
// on object identity but using both the raw and the proxied version
// of the same object:
const foo = markRaw({
  nested: {}
})

const bar = reactive({
  // although `foo` is marked as raw, foo.nested is not.
  nested: foo.nested
})

console.log(foo.nested === bar.nested) // false

// Identity hazards are in general rare. But to properly utilize
// these APIs while safely avoiding identity hazards requires a solid
// understanding of how the reactivity system works.

// ======================= shallowReadonly =====================
// Create a proxy that makes its own properties readonly,
// but does not perform deep readonly conversion of nested
// objects (exposes raw values).
// 创建一个仅把自身属性变为 readonly 的代理，不会对嵌套其中的对象进行深层的只读转换（暴露原生对象）
export function useShollowReadonly() {
  const state = shallowReadonly({
    foo: 1,
    nested: {
      bar: 2
    }
  })
  
  // mutating state's own properties will fail
  state.foo++
  // ...but works on nested objects
  isReadonly(state.nested) // false
  state.nested.bar++ // works
}

// ======================== shallowReactive =====================
// 创建一个仅追踪根属性的响应式代理，不会对嵌套其中的对象进行深层的响应式转换（暴露原生对象）
export function useShallowReactive() {
  const state = shallowReactive({
    foo: 1,
    nested: {
      bar: 2
    }
  })
  
  // mutating state's own properties is reactive
  state.foo++
  // ...but does not convert nested objects
  isReactive(state.nested) // false
  state.nested.bar++ // non-reactive
}

// ================== shallowRef =====================
// 创建一个 ref, 追踪它的 value 值的变动， 但它的 value 却不是响应式的
// Create a ref that tracks its own .value mutation but doesn't
// make its value reactive.
export function useShallowRef() {
  const foo = shallowRef({})
  // mutating the ref's value is reactive
  foo.value = {}
  // but the value will not be converted.
  isReactive(foo.value) // false
}

// ================== toRaw =======================
// Return the raw, original object of a reactive or readonly proxy. 
// This is an escape hatch that can be used to temporarily read without
// incurring proxy access / tracking overhead or write without triggering
// changes. It is not recommended to hold a persistent reference to the 
// original object. Use with caution.

const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo) // true
