import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import Axios from '@/plugins/axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  Axios,
  render: h => h(App)
}).$mount('#app')
