<template>
  <div>
    <hr>
    <h2>composition-api</h2>
    <api-setup :position-x="x"/>
    <reactive />
  </div>
</template>

<script>
import ApiSetup from '@/composition-api/Setup'
import Reactive from '@/composition-api/Reactive'
import {useMousePosition} from '@/utils/mouse'
export default {
  components: {
    ApiSetup,
    Reactive
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>