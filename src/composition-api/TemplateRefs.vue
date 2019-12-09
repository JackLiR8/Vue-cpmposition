<template>
  <div ref="root">
    <h3>template refs</h3>
    <h4>v-for中使用ref</h4>
    <div
      v-for="(item, i) in list"
      :key="i"
      :ref="el => { divs[i] = el }" >
      {{item}}
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from '@vue/composition-api'
export default {
  setup() {
    const root = ref(null)
    const list = reactive([1, 2, 3])
    const divs = ref([])

    onMounted(() => {

       // the DOM element will be assigned to the ref after initial render
      console.log('root.value', root.value)
    })

    return { root, list, divs }
  }
}
</script>
