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
      updatefakeID: ({ commit }, id) => {
        commit(RESET_BASE_ID, id)
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
