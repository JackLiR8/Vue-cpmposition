<template>
  <div class="observer" ref="mark"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from '@vue/composition-api'
export default {
  props: {
    handleIntersect: Function
  },
  setup(props) {
    const { handleIntersect } = props;
    let observer = null
    const mark = ref(null)
    onMounted(() => {
      const options = {
        root: document.querySelector('.infinite-scroll-box'),
        rootMargin: "200px 0px"
      }
      observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          handleIntersect()
        }
      }, options)

      observer.observe(mark.value)
    })

    onUnmounted(() => {
      observer.disconnect()
    })

    return {
      mark
    }
  }
}
</script>

<style>
.observer {
  width: 100%;
  height: 50px;
  background: transparent;
}
</style>