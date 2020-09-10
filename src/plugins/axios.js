import Vue from 'vue'
import Axios from 'axios'

Vue.use(Axios)
Vue.use({
  install (Vue) {
    Vue.prototype.$api_requests_base_url = Axios.create({ baseURL: process.env.VUE_APP_BASE_API_URL })
  }
})

export default new Axios({ })
