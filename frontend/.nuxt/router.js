import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cb8ad25e = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0bad685c = () => interopDefault(import('../pages/logout.vue' /* webpackChunkName: "pages/logout" */))
const _5eda188c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _cb8ad25e,
    name: "login"
  }, {
    path: "/logout",
    component: _0bad685c,
    name: "logout"
  }, {
    path: "/",
    component: _5eda188c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
