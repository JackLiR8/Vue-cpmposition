<template>
  <div id="app">
    <basic-demo />
    <mouse-position />
    <api-practice />
    <demo-display />
  </div>
</template>

<script>
import BasicDemo from '@/components/BasicDemo'
import MousePosition from '@/components/MousePosition'
import ApiPractice from '@/views/ApiPractice'
import DemoDisplay from '@/views/DemoDisplay'
export default {
  name: 'app',
  components: {
    BasicDemo,
    MousePosition,
    ApiPractice,
    DemoDisplay
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
