import Vue from 'vue'
import Vuex from 'vuex'
import TagsList from './tagsList.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TagsList
  }
})

export default store
