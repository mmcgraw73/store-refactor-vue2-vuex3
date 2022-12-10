import BaseStoreModule from './base'

export default class ChildStoreModule extends BaseStoreModule {
  constructor() {
    super()
    this.namespaced = true

    this.state = {
      ...this.state,
      baseID: 11,
    }

    this.getters = {
      ...this.getters,
      baseID: (state) => state.baseID,
    }

    this.actions = {
      ...this.actions,
    }

    this.mutations = {
      ...this.mutations,
    }
  }
}
