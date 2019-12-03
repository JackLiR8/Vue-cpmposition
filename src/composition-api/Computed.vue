<template>
  <div>
    <h3>computed</h3>
    <p>count: {{count}}, double: {{double}}</p>
    <p>num: {{num}}, tripple: {{tripple}}</p>
  </div>
</template>

<script>
import {ref, computed} from '@vue/composition-api'
export default {
  setup() {
    const count = ref(0);
    const num = ref(5);
    /** 
     * Takes a getter function and returns an immutable reactive ref object 
     * for the returned value from the getter.
     */
    const double = computed(() => count.value * 2);
    // double.value = 5;   
    // error: Computed property was assigned to but it has no setter.

    // 传入get(), set() 可以创建一个可写的ref对象
    const tripple = computed({
      get: () => num.value * 3,
      set: val => num.value = val
    });
    tripple.value = 10;

    const timer = setInterval(() => {
      if (count > 10) {
        clearInterval(timer);
        return
      }
      count.value++;
    }, 1000)

    return {count, double, num, tripple}
  }
}
</script>
