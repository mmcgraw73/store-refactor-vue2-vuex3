import BaseStoreModule from './base'

export default class ChildStoreModule extends BaseStoreModule {
  constructor() {
    super()
    this.namespaced = true

    this.state = {
      ...this.state,
    }

    this.getters = {
      ...this.getters,
    }

    this.actions = {
      ...this.actions,
    }

    this.mutations = {
      ...this.mutations,
    }
  }
}
