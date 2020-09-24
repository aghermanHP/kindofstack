import Axios from 'axios'
import { SET_TAGS } from './mutationTypes'
import { FETCH_TAGS } from '@/store/actionTypes'
import { TAGS } from '@/store/gettersTypes'

const tagsList = {
  state: () => ({
    tags: []
  }),
  mutations: {
    [SET_TAGS] (state, payload) {
      state.tags = payload
    }
  },
  actions: {
    [FETCH_TAGS] ({ commit }) {
      Axios.get(process.env.VUE_APP_BASE_API_URL + 'tags')
        .then((response) => {
          const tags = response.data
          commit(SET_TAGS, tags)
        })
    }
  },
  getters: {
    [TAGS] (state) {
      return state.tags
    }
  }
}
export default tagsList
