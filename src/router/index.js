import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import cssCatalog from '../components/publicComents/tree/cssCatalogTree'
import shape from '../components/cssStudy/shape.vue'

import esTest from '../components/esStudy/esTest.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: cssCatalog
  },
  {
    path: '/css',
    name: 'css目录',
    component: cssCatalog,
    children: [
      {
        path: '/css/shape',
        name: '形状',
        component: shape
      }
    ]
  },
  {
    path: '/esTest',
    name: 'esTest',
    component: esTest
  }
]

const router = new VueRouter({
  routes
})

export default router
