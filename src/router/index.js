import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/views/home/home')
const Category = () => import('@/views/category/category')
const Profile = () => import('@/views/profile/profile')
const Cart = () => import('@/views/cart/cart')
const Detail = () => import('@/views/detail/detail')
Vue.use(Router)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home', 
    component: Home
  },
  {
    path: '/category', 
    component: Category
  },
  {
    path: '/cart', 
    component: Cart
  },
  {
    path: '/profile', 
    component: Profile
  },
  {
    path: '/detail/:id', 
    component: Detail
  }

]
const router = new Router({
  routes,
  mode: 'history'
})
export default router