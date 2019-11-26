<template>
  <div id="app">
    <basic-demo />
  </div>
</template>

<script>
import BasicDemo from '@/components/BasicDemo'
export default {
  name: 'app',
  components: {
    BasicDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
