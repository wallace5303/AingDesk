import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"
import Test from "@/views/test/index.vue"
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Test,
      component:Home
    },
  ],
})

export default router
