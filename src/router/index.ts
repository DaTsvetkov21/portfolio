import { createRouter, createWebHistory } from 'vue-router'
import { Routes } from './routes'
import * as Vue from 'vue';

import AboutMe from '@/modules/AboutMe/AboutMe.vue'
import Projects from '@/modules/Projects/Projects.vue'
import Contacts from '@/modules/Contacts/Contacts.vue'

const DEFAULT_TITLE = 'D. Tsvetkov';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: Routes.ABOUT_ME.name,
      path: Routes.ABOUT_ME.path,
      component: AboutMe,
      meta: {
        title: `${DEFAULT_TITLE} | About me`,
      }
    },
    {
      name: Routes.PROJECTS.name,
      path: Routes.PROJECTS.path,
      component: Projects,
      meta: {
        title: `${DEFAULT_TITLE} | Projects`,
      }
    },
    {
      name: Routes.CONTACTS.name,
      path: Routes.CONTACTS.path,
      component: Contacts,
      meta: {
        title: `${DEFAULT_TITLE} | Coontacts`,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
      document.title = to.meta && to.meta.title ? String(to.meta.title) : DEFAULT_TITLE;
  })

  next();
});


export default router
