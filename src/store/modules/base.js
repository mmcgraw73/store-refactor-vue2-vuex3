// import pseudo private package
import BaseCollectionModule from '@/assets/imported_npm_package/base_collection_store.ts'

// inside vue app we create...
// this is all common/shared/required properties for every store
export default class BaseStoreModule extends BaseCollectionModule {
  constructor() {
    super()
    this.namespaced = true
    console.log('context', this)
    this.state = {
      ...this.state,
      fakeID: 0,
    }

    this.getters = {
      ...this.getters,
      fakeID: (state) => state.fakeID,
    }

    this.actions = {
      ...this.actions,
    }

    this.mutations = {
      ...this.mutations,
    }
  }
}
