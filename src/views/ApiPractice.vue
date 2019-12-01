<template>
  <div>
    <hr>
    <h2>composition-api</h2>
    <api-setup :position-x="x"/>
  </div>
</template>

<script>
import ApiSetup from '@/composition-api/Setup'
import {useMousePosition} from '@/utils/mouse'
export default {
  components: {
    ApiSetup
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>