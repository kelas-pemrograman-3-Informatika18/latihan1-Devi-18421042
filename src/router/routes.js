
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/loginpage.vue') },
      { path: 'registerr', component: () => import('pages/registerr.vue') }
    ]
  },

  {
    path: '/home',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/loginpage.vue') },
      { path: 'registerr', component: () => import('pages/registerr.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
