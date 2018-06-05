import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
/* eslint-disable*/

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
