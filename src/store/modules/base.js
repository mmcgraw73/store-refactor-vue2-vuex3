// import pseudo private package
import { BaseCollectionModule } from '../../../public/imported_npm_package/base_collection_store.ts'

// inside vue app we create...
// this is all common/shared/required properties for every store
export default class BaseReportModule extends BaseCollectionModule {
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
