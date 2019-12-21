<template>
  <div class="observer" ref="root"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
export default {
  setup(props) {
    const root = ref(null)
    let observer = ref(null)
    onMounted(() => {
      observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          console.log('intersecting')
        }
      })

      observer.observe(root.value)
    })

    onUnmounted(() => {
      observer.disconnect()
    })

    return {
      root
    }
  }
}
</script>

<style>

</style>