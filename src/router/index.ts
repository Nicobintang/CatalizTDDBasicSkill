import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SupportView from '@/views/SupportView.vue'
import TvHomeView from '@/views/TvHomeview.vue'
import SignIn from '../components/SignIn.vue'
import SignOut from '../components/SignOut.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },
    {
      path: '/tvhome',
      name: 'tvhome',
      component: TvHomeView,
    },
    { path: '/sign-in', component: SignIn },
    { path: '/sign-out', component: SignOut },
  ]
})

export default router;
