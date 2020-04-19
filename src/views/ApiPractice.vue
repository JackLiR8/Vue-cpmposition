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
    <watch-effect />
    <lifecycle-hooks />
    <template-refs />
    <define-component foo="hello" />
    <fieldset>
      <legend>Advanced Reactivity APIs</legend>
    </fieldset>
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
import WatchEffect from '@/composition-api/WatchEffect'
import LifecycleHooks from '@/composition-api/LifecycleHooks'
import TemplateRefs from '@/composition-api/TemplateRefs'
import DefineComponent from '@/composition-api/DefineComponent'

// import CustomRef from '@/composition-api/advanced-reactivity/CustomRef'
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
    WatchEffect,
    LifecycleHooks,
    TemplateRefs,
    DefineComponent,

    // CustomRef
  },
  setup() {
    const {x} = useMousePosition();
    return {x};
  }
}
</script>

<style>

</style>