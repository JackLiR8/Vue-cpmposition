<template>
  <div>
    <h2>logic reuse & ref vs reactive</h2>
    <h4>use ref()</h4>
    <p>the mouse is at position x:{{x}}, y:{{y}}</p> 
    <h4>use reactive()</h4>
    <p>mouse position: ({{xp}},{{yp}})</p>
  </div>
</template>

<script>
import {useMousePosition, useMousePositionReactive} from '@/utils/mouse'
export default {
  setup() {
    const { x, y } = useMousePosition();
    const { x: xp, y: yp} = useMousePositionReactive();

    return { x, y, xp, yp }
  }
}
</script>
