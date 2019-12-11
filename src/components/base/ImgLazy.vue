<template>
  <div class="lazy-img">
    <div
      v-if="dataUrl"
      :style="{ background }"
      class="lazy-img__placeholder">
      <img 
        :src="placeholder || dataUrl" 
        alt="" 
        v-bind="$attrs" />
    </div>
    <img
      :src="dataUrl" 
      :alt="$attrs.alt || ''"
      v-bind="$attrs"
      class="lazy-img__img">
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
    },
    placeholder: String,
    background: String
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
      const { src, srcset, $el } = this
      let timeOut

      const observer = new IntersectionObserver(([entry]) => {
        const img = $el.querySelector('.lazy-img__img')
        const placeholder = $el.querySelector('.lazy-img__placeholder')

        img.onload = function () {
          delete img.onload
          $el.classList.add(`lazy-img--loaded`)
          if (placeholder) {
            timeOut = setTimeout(() => {
              placeholder.remove()
            }, 300)
          }
        }

        if (entry.isIntersecting) {
          if (srcset) {
            img.srcset = srcset
          }
          img.src = src
          observer.disconnect()
        }
      })
      observer.observe($el)

      this.$once('hook:beforeDestroy', () => {
        observer.disconnect()
        if (timeOut) {
          clearTimeout(timeOut)
        }
      })
    }
  },
}
</script>

<style>
.lazy-img {
  display: inline-block;
  position: relative;
}

.lazy-img__placeholder {
  position: absolute;
  overflow: hidden;
}

.lazy-img__placeholder img {
  transform: scale(1.05);
  filter: blur(10px);
}

.lazy-img__img {
  opacity: 0;
  transition: opacity 300ms ease;
}

.lazy-img--loaded .lazy-img__img {
  opacity: 1;
}
</style>