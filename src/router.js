import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/home.vue'
import Test from './pages/extra.vue'


export const routes = [
  {
    name: 'global-feed',
    path: '/',
    component: Home,
  },
  {
    name: 'test',
    path: '/test',
    component: Test,
  },
  // {
  //   name: 'tag',
  //   path: '/tag/:tag',
  //   component: Home,
  // },
  // {
  //   name: 'article',
  //   path: '/article/:slug',
  //   component: () => import('./pages/Article.vue'),
  // },
  // {
  //   name: 'edit-article',
  //   path: '/article/:slug/edit',
  //   component: () => import('./pages/EditArticle.vue'),
  // },
  // {
  //   name: 'create-article',
  //   path: '/article/create',
  //   component: () => import('./pages/EditArticle.vue'),
  // },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: () => import('./pages/Login.vue'),
  //   beforeEnter: () => !isAuthorized(),
  // },
  // {
  //   name: 'register',
  //   path: '/register',
  //   component: () => import('./pages/Register.vue'),
  //   beforeEnter: () => !isAuthorized(),
  // },
  // {
  //   name: 'profile',
  //   path: '/profile/:username',
  //   component: () => import('./pages/Profile.vue'),
  // },
  // {
  //   name: 'profile-favorites',
  //   path: '/profile/:username/favorites',
  //   component: () => import('./pages/Profile.vue'),
  // },
  // {
  //   name: 'settings',
  //   path: '/settings',
  //   component: () => import('./pages/Settings.vue'),
  // },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export function routerPush (name, params) {
  if (params !== undefined) {
    return router.push({
      name,
      params,
    })
  } else {
    return router.push({ name })
  }
}
