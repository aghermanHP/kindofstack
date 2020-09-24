import Vue from 'vue'
import Axios from 'axios'

Vue.use(Axios)
Vue.use({
  install (Vue) {
    Vue.prototype.$apiRequestsBaseUrl = Axios.create({
      baseURL: process.env.VUE_APP_BASE_API_URL,
      headers: { 'Access-Control-Allow-Origin': '*' }
    })
  }
})

export default new Axios({ })
