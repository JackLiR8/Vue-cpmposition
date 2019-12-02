<template>
  <div>
    <h3>ref</h3>
    <p>ref-obj obj.foo:{{obj.foo}}, obj.bar:{{obj.bar}}</p>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from '@vue/composition-api'
export default {
  setup() {
    /* 
      1. ref 接受一个参数， 返回一个可响应的，可更改的 ref 对象, 该ref对象只有一个属性：.value 指向传入的参数
      2. 在template中获取setup 返回的ref，无需通过.value取值， 返回的ref会自动unwrap */
    const count = ref(0);

    // 如果传给ref的是一个对象，reactive会将该对象变成可响应的
    const obj = ref({foo: 1, bar: 2});

    // 如果ref被当作reactive对象的属性，那么ref也会自动unwrap
    const state = reactive({
      count
    });
    console.group('ref')
    console.log(state.count);   // 0

    state.count = 1;
    console.log(count.value);   // 1

    // 若一个新的ref被赋值给一个当前值是ref的属性， 旧的ref将会被替代， state.count的变动不再影响count
    const otherCount = ref(2);
    state.count = otherCount;
    console.log(state.count)  // 2
    console.log(count.value)  // 1
    console.groupEnd();

    onMounted(() => {
      changeObj(obj);
    });

    function changeObj(obj) {
      const timer = setInterval(() => {
        obj.value.foo++;
        obj.value.bar++;
      }, 1000);

      setTimeout(() => {
        clearInterval(timer);
      }, 7001);
    }

    return { count, obj, state };
  }
}
</script>

<style>

</style>