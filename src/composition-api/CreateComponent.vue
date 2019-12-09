<template>
  <div>
    <h3>createComponent</h3>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api'
export default createComponent({
  props: {
    foo: String
  },
  
  setup(props) {
    console.log(props.foo)
  }
})

/* 
  如果组件里只有setup而没有其他选项，可以直接把setup传给createComponent 

    export default createComponent((props: { foo: String} ) => {
      // ...
    })
*/
</script>
