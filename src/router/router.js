import Home from '@/views/Home'

const routes = [
  {path: '/', component: Home},
  {
    path: '/intersectionObserver',
    component: () => import('@/views/intersectionObserver/Index.vue')
  }
]

export default routes
