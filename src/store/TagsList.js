import Axios from 'axios'
const tagsList = {
  namespaced: true,
  state: () => ({
    allTags: null
  }),
  mutations: {
    setTags (state, payload) {
      state.allTags = payload
    }
  },
  actions: {
    TagsAction ({ commit }) {
      Axios.get(process.env.VUE_APP_BASE_API_URL + 'tags')
        .then((response) => {
          const tags = response.data
          commit('setTags', tags)
        })
    }
  },
  getters: {
    tags (state) {
      return state.allTags
    }
  }
}
export default tagsList
