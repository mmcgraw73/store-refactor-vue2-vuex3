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
      baseID: (state) => state.baseID,
    }

    this.actions = {
      ...this.actions,
      updateBaseID: ({ commit }, id) => {
        commit(RESET_BASE_ID, id)
      },
    }

    this.mutations = {
      ...this.mutations,
      [RESET_BASE_ID]: (state, id) => {
        state.baseID = id
        console.log('CHILD MUTATATION - BASE ID', id)
      },
    }
  }
}
