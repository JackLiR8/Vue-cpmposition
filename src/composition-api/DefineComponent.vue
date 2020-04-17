<template>
  <div>
    <h3>defineComponent</h3>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    foo: String
  },
  
  setup(props) {
    console.log(props.foo)
  }
})

/* 
  如果组件里只有setup而没有其他选项，可以直接把setup传给defineComponent 

    export default defineComponent((props: { foo: String} ) => {
      // ...
    })
*/
</script>
