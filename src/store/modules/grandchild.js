import ChildStoreModule from './child'

export default class GrandchildStoreModule extends ChildStoreModule {
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
