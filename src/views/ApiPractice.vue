<template>
  <div>
    <hr>
    <h2>composition-api</h2>
    <api-setup :position-x="x"/>
    <reactive />
    <ref />
  </div>
</template>

<script>
import ApiSetup from '@/composition-api/Setup'
import Reactive from '@/composition-api/Reactive'
import Ref from '@/composition-api/Ref'
import {useMousePosition} from '@/utils/mouse'
export default {
  components: {
    ApiSetup,
    Reactive,
    Ref
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>