import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import index from '../views/Index.vue'
import AddPage from '../views/AddOrder.vue'
import orderList from '../views/orderList.vue'
import Goods from '../views/Goods.vue'
import Drivers from '../views/Drivers.vue'
import Stores from '../views/Stores.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/AddPage',
    name: 'AddPage',
    component: AddPage
  },
  {
    path: '/orderList',
    name: 'orderList',
    component: orderList
  },
  {
    path: '/Goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/Drivers',
    name: 'Drivers',
    component: Drivers
  },
  {
    path: '/Stores',
    name: 'Stores',
    component: Stores
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
