import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw, useRouter, useRoute } from 'vue-router';
import firebase from "firebase";

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/login',
    component: () => import ('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
