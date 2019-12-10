<template>
  <div>
    <hr>
    <h2>lazy-loading img</h2>
    <img-lazy :src="'123'" />
  </div>
</template>

<script>
import ImgLazy from '@/components/base/ImgLazy'
export default {
  components: {
     ImgLazy
  }
}
</script>

<style>

</style>