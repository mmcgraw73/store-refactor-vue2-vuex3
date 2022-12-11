import BaseStoreModule from './base'
import { RESET_BASE_ID } from '@/store/constants'

export default class ChildStoreModule extends BaseStoreModule {
  constructor() {
    super()
    this.namespaced = true

    this.state = {
      ...this.state,
    }

    this.getters = {
      ...this.getters,
      fakeID: (state) => state.fakeID,
    }

    this.actions = {
      ...this.actions,
      updatefakeID: ({ commit }) => {
        fetch('https://jsonplaceholder.typicode.com/posts/10')
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            commit(RESET_BASE_ID, json.id)
          })
      },
    }

    this.mutations = {
      ...this.mutations,
      [RESET_BASE_ID]: (state, id) => {
        state.fakeID = id
        console.log('CHILD MUTATATION - FAKE ID', id)
      },
    }
  }
}
