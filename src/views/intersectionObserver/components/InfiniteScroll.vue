<template>
  <div>
    <fieldset>
      <legend><h2>infinite scroll</h2></legend>
        <ol class="infinite-scroll-box">
          <li v-for="item in items" :key="item.id">
            {{item.name}}
          </li>
          <Observer 
            :handle-intersect="getData"
            root-selector=".infinite-scroll-box" />
        </ol>
    </fieldset>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import Observer from '@/components/base/Observer'
export default {
  components: {
    Observer
  },
  setup() {
    let items = ref([])
    let page = 1
    async function getData() {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=40`
      )
      page++
      const newItems = await res.json()
      if (newItems) {
        items.value = [...items.value, ...newItems]
      }
    }

    return {
      items,
      getData
    }
  }
}
</script>

<style scoped>
* {text-align: left}
ol {
  height: 300px;
  width: 600px;
  margin: auto;
  border: 4px solid lightsteelblue;
  overflow-y: scroll;
}
li {
  height: 20px;
  border-bottom: 1px solid lightcoral;
}
</style>