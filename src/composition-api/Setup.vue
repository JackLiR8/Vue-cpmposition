<template>
  <div>
    <h3>setup</h3>
    <div>x from parent: {{x}}</div>
  </div>
</template>

<script>
import { ref, watchEffect } from '@vue/composition-api'
export default {
  props: {
    positionX: Number
  },

  /**
   * @param {Object} props - 组件props
   * @param {Object} context - 包含2.x APIs 的对象
   * attrs, emit(), listeners, parent, refs, root, slots;
   * attrs, slots 可以直接通过解构获得
   * 
   * 注意：
   * setup() 内部不能获取指向组件实例的this, 因为setup在2.x 的配置之前执行 
   */
  setup(props, context) {
    const x = ref(0);
    console.log('setup arg2 - context', context);

    watchEffect(() => {
      x.value = props.positionX;
    });

    return { x };
  }
}
</script>
