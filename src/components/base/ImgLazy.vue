<template>
  <div class="lazy-img">
    <img
      :src="dataUrl" 
      :alt="$attrs.alt || ''"
      v-bind="$attrs">

  </div>
</template>

<script>
export default {
  name: 'ImgLazy',

  inheritAttrs: false,

  props: {
    src: {
      type: String,
      required: true
    }
  },

  computed: {
    dataUrl() {
      const { width, height } = this.$attrs
      if (!width || !height) return ''

      const w = 100
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = (height / width) * w

      return canvas.toDataURL()
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const { src, $el } = this;

      const observer = new IntersectionObserver(([entry]) => {
        const img = $el.querySelector('img')

        if (entry.isIntersecting) {
          img.src = src
          observer.disconnect()
        }
      })
      observer.observe($el)

      this.$once('hook:beforeDestroy', () => {
        observer.disconnect()
      })
    }
  },
}
</script>

<style>
.lazy-img {
  display: inline-block;
}
</style>