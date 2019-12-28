<template>
  <div class="target" ref="target"></div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api'
export default {
  props: {
    handleIntersect: Function,
    rootSelector: String
  },
  setup(props) {
    const { handleIntersect, rootSelector } = props;
    let observer = null
    const target = ref(null)
    onMounted(() => {
      const options = {
        root: document.querySelector(rootSelector),
        rootMargin: "200px 0px"
      }
      observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          handleIntersect()
        }
      }, options)

      observer.observe(target.value)
    })

    onBeforeUnmount(() => {
      observer.disconnect()
    })

    return {
      target
    }
  }
}
</script>

<style>
.target {
  width: 100%;
  height: 50px;
  background: transparent;
}
</style>