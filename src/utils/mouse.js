/**
 * @file mouse position logic reuse
 */
import {ref, reactive, onMounted, onUnmounted, toRefs} from '@vue/composition-api'

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  function update(e) {
    x.value = e.pageX
    y.value = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}

/**
 * reactive 替换 ref
 * reactive 产生的对象不能解构（destructured）和扩展(spread), 否则对象里的原始数据类型会失去响应性
 * 可以使用toRefs() 把对象里的原始数据类型转为ref, 这样即使在结构和扩展之后，原始数据类型的属性依然具有响应性
 */
export function useMousePositionReactive() {
  const pos = reactive({
    x: 0,
    y: 0
  })

  function update(e) {
    pos.x = e.pageX
    pos.y = e.pageY
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  // 此处若不使用toRefs包裹，解构/扩展后获得的基本数据类型数据会失去响应性
  return toRefs(pos);
}