// --
// pseudo private package import
// this file would be in npm modules directory
// this represents our api npm package that handles get requests & token authorization
// --

import BaseCollectionModule from '@/assets/imported_npm_package/base_collection_store.ts'
import { RESET_ALL_NAMES } from '@/store/constants'

// inside vue app we create...
// this is all common/shared/required properties for every store
export default class BaseStoreModule extends BaseCollectionModule {
  constructor() {
    // js class requirement for allowing 'extends'
    // - will get error accessing 'this' before 'super()' has been called without
    super()
    this.namespaced = true
    console.log('context', this)
    this.state = {
      ...this.state,
      fakeID: 0,
      baseName: 'BASE STORE MODULE',
    }

    this.getters = {
      ...this.getters,
      fakeID: (state) => state.fakeID,
      gettersLong: () => this.getters.length,
      baseName: (state) => state.baseName,
    }

    this.actions = {
      ...this.actions,
      resetAllNames: ({ commit, state, getters }) => {
        commit(RESET_ALL_NAMES)
      },
    }

    this.mutations = {
      ...this.mutations,
      [RESET_ALL_NAMES]: (state) => {
        state.grandchildName = state.baseName
        state.childName = state.baseName
        state.baseName = state.baseName
      },
    }
  }
}
