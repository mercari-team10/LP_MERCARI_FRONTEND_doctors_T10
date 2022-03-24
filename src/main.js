import Vue from 'vue'
import '@babel/polyfill'
import 'mutationobserver-shim'
import './Utils/fliter'
import App from './App.vue'
import router from './router'
import store from './store'
import Raphael from 'raphael/raphael'
import './plugins'
import './registerServiceWorker'
import i18n from './i18n'
import VueCookies from 'vue-cookies'

global.Raphael = Raphael
Vue.config.productionTip = false

Vue.use(VueCookies)

let vm = new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  const currentUser = Vue.$cookies.get('DoctorAuth')
  const requiresAuth = to.meta.auth
  if (requiresAuth && !currentUser) next({ path: '/auth/sign-in1' })
  else if (!requiresAuth && currentUser) next({ name: '' })
  else {
    next()
  }
})

window.vm = vm
