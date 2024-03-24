import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import RahgiriPosti from '../views/RahgiriPosti.vue'
import RulesView from '../views/RulesView.vue'
import MethodsendView from '../views/MethodsendView.vue'
import PeymentmethodView from '../views/PeymentmethodView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/rahgiriposti',
    name: 'rahgiriposti',
    component: RahgiriPosti
  },
  {
    path: '/rules',
    name: 'rules',
    component: RulesView
  },
  {
    path: '/methodsend',
    name: 'methodsend',
    component: MethodsendView
  },
  {
    path: '/peymentmethod',
    name: 'peymentmethod',
    component: PeymentmethodView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
