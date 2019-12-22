<template>
  <div>
    <nav-top />
    <basic-demo />
    <mouse-position />
    <api-practice />
  </div>
</template>

<script>
import BasicDemo from '@/components/BasicDemo'
import MousePosition from '@/components/MousePosition'
import ApiPractice from '@/views/ApiPractice'
import NavTop from "@/components/NavTop";
export default {
  name: 'app',
  components: {
    BasicDemo,
    MousePosition,
    ApiPractice,
    NavTop
  }
}
</script>
