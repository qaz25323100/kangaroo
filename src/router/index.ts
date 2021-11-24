import { createRouter, createWebHistory } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: () => import('/@/views/Home.vue')
  },
  {
    path: '/About',
    name: 'About',
    Component: About,
    component: () => import('/@/views/About.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})