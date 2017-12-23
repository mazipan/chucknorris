import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import SocialSharing from 'vue-social-sharing'

import i18n from './i18n'
import router from './router'
import store from './store'
import App from './App.vue'


Vue.use(SocialSharing)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/chucknorris/images/chucknorris-gif.gif',
  loading: '/chucknorris/images/loading.gif',
  attempt: 1
})

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  i18n,
  router,
  components: {App}
})
