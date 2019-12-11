<template>
  <div>
    <hr>
    <h2>lazy-loading img</h2>
    <img-lazy
      v-for="(link, i) in imgs" 
      :key="i"
      :src="link"
      :width="600"
      :height="600" />
  </div>
</template>

<script>
import ImgLazy from '@/components/base/ImgLazy'
export default {
  components: {
     ImgLazy
  },

  data() {
    return {
      imgs: [
        'https://cn.vuejs.org/images/logo.png',
        'https://nodejs.org/static/images/logo.svg',
        'https://tse3-mm.cn.bing.net/th?id=OIP.OPLlMkjnP_pxn4a6Q_Vm1wHaHa&w=156&h=160&c=7&o=5&cb=11&pid=1.7',
        'https://tse3-mm.cn.bing.net/th?id=OIP.pDo6F7hy8PXzgdifSG9QxQHaKF&w=136&h=160&c=7&o=5&cb=11&pid=1.7',
        'https://tse3-mm.cn.bing.net/th?id=OIP.O8PqivtfoVF_9CagvYHF0AHaGG&w=264&h=205&c=7&o=5&cb=11&pid=1.7'
      ]
    }
  },
}
</script>

<style>

</style>