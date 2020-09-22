import Axios from 'axios'
import { SETTAGS } from './mutationTypes'
import { FETCHTAGS } from '@/store/actionTypes'
import { TAGS } from '@/store/gettersTypes'

const tagsList = {
  state: () => ({
    tags: null
  }),
  mutations: {
    [SETTAGS] (state, payload) {
      state.tags = payload
    }
  },
  actions: {
    [FETCHTAGS] ({ commit }) {
      Axios.get(process.env.VUE_APP_BASE_API_URL + 'tags')
        .then((response) => {
          const tags = response.data
          commit(SETTAGS, tags)
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
