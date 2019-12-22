<template>
  <div>
    <lazy-imgs />
    <infinite-scroll />
  </div>
</template>

<script>
import LazyImgs from './components/LazyImgs'
import InfiniteScroll from './components/InfiniteScroll'
export default {
  components: {
    LazyImgs,
    InfiniteScroll,
  }
}
</script>

<style>

</style>