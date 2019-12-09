<template>
  <div>
    <hr>
    <h2>composition-api</h2>
    <api-setup :position-x="x"/>
    <reactive />
    <ref />
    <to-refs />
    <computed />
    <!-- <readonly /> -->
    <watch />
    <lifecycle-hooks />
    <template-refs />
    <create-component foo="hello" />
  </div>
</template>

<script>
import ApiSetup from '@/composition-api/Setup'
import Reactive from '@/composition-api/Reactive'
import Ref from '@/composition-api/Ref'
import ToRefs from '@/composition-api/ToRefs'
import Computed from '@/composition-api/Computed'
// import Readonly from '@/composition-api/Readonly'
import Watch from '@/composition-api/Watch'
import LifecycleHooks from '@/composition-api/LifecycleHooks'
import TemplateRefs from '@/composition-api/TemplateRefs'
import CreateComponent from '@/composition-api/CreateComponent'
import {useMousePosition} from '@/utils/mouse'
export default {
  components: {
    ApiSetup,
    Reactive,
    Ref,
    ToRefs,
    Computed,
    // Readonly,
    Watch,
    LifecycleHooks,
    TemplateRefs,
    CreateComponent
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>