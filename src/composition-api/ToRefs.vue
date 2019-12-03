<template>
  <div>
    <h3>toRefs</h3>
    <p>foo: {{foo}}, bar: {{bar}}</p>
  </div>
</template>

<script>
import {reactive, onMounted, toRefs} from '@vue/composition-api'

/**
 * toRefs 把一个reactive对象转换成一个plain对象，该对象的所有属性都是一个指向原对象相关值的ref,
 * 这样就可以对返回的对象进行解构/扩展而不会使数据失去响应性
 */
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
export default {
  setup() {
    const { foo, bar } = useToRefs();

    return { foo, bar};
  }
}
</script>
