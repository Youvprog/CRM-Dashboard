import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablesView from '../views/TablesView.vue'
import LoginView from '../views/Logs/LoginView.vue'
import CalendarsView from '../views/CalendarsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
     
    },
    {
      path: '/tables',
      name: 'table',
      component: TablesView,
      
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarsView
    },
  ]
})


export default router
