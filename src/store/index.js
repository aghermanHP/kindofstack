import Vue from 'vue'
import Vuex from 'vuex'
import TagsList from './TagsList.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TagsList
  }
})

export default store
