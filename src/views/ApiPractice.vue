<template>
  <div>
    <hr>
    <h2>composition-api</h2>
    <api-setup :position-x="x"/>
    <reactive />
    <ref />
    <to-refs />
    <computed />
  </div>
</template>

<script>
import ApiSetup from '@/composition-api/Setup'
import Reactive from '@/composition-api/Reactive'
import Ref from '@/composition-api/Ref'
import ToRefs from '@/composition-api/ToRefs'
import Computed from '@/composition-api/Computed'
import {useMousePosition} from '@/utils/mouse'
export default {
  components: {
    ApiSetup,
    Reactive,
    Ref,
    ToRefs,
    Computed,
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>