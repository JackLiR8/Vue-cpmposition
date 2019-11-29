<template>
  <div>
    <h2>logic reuse</h2>
    <p>the mouse is at position x:{{x}}, y:{{y}}</p> 
  </div>
</template>

<script>
import {useMousePosition} from '@/utils/mouse'
export default {
  setup() {
    const { x, y } = useMousePosition()

    return { x, y }
  }
}
</script>
