/**
 * @file reactivity utils
 */
/* eslint-disable */
import {
  reactive,

  unref,
  toRef,
  toRefs,
  isRef,
  isProxy,
  isReactive,
  isReadonly 
} from '@vue/composition-api'

// ==================== unref ==========================
// 如果参数是 ref, 则返回他的value; 否则返回参数本身  
function useFoo(x/* : number | Ref<number> */) {
  // val = isRef(val) ? val.value : val
  const val = unref(x)
}

// ==================== toRef =========================
// toRef 可把一个响应对象的属性创建为ref, 这个ref可以被传递
// 并与源对象属性相关联
export function useToRef() {
  const state = reactive({
    foo: 1,
    bar: 2
  })
  const fooRef = toRef(state, 'foo')
  fooRef.value++
  console.log('state.foo', state.foo)  // 2

  state.foo++
  console.log('fooRef.value', fooRef.value) // 3
}

// 当你想把prop的ref传给函数的时候，toRef 会很有用
export const toRefScript = {
  setup(props) {
    useSomeFeature(toRef(props, 'foo'))
  }
}

// ===================== toRefs ======================
// toRefs 把一个reactive对象转换成一个普通的对象，该对象的所有属性
// 都是一个指向原对象相关值的ref,这样就可以对返回的对象进行解构/扩展
// 而不会使数据失去响应性
function useToRefs() {
  const state = reactive({foo: 1, bar: 2});

  onMounted(() => {
    const timer = setInterval(() => {
      if (state.foo > 19) {
        clearInterval(timer);
        return;
      }
      state.foo++
    }, 1000);
  })

  return toRefs(state);
  // return state; 若直接返回, 解构/扩展后的数据将失去响应性
}

/* 
=============== isRef =================
检查一个值是否是 ref 对象

=============== isProxy ================
检查一个对象是否是 reactive/readonly 创建的代理

=============== isReactive =================
检查一个对象是否是 reactive 创建的响应式proxy

如果 proxy 是 readonly 创建的，也会返回 true, 
但是会包裹一个由 reactive 创建的 proxy

It also returns true if the proxy is created by readonly, 
but is wrapping another proxy created by reactive.

// ============ isReadonly ===============
检查一个对象是否是 readonly 创建的 readonly proxy
*/