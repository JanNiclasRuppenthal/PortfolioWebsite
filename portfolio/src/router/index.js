import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import App from '../App.vue'
import Datenschutzerklaerung from '../components/TheDatenschutzerklaerung.vue'
import Impressum from '../components/TheImpressum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'home',
    component: App
  },

  {
    path: '/impressum',
    name: 'impressum',
    component: Impressum
  },
  {
    path: '/datenschutzerklaerung',
    name: 'datenschutzerklaerung',
    component: Datenschutzerklaerung
  }
]

const router = new VueRouter({
  routes
})

export default router
