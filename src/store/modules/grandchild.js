import ChildStoreModule from './child'
import { SET_NAME } from '@/store/constants'

export default class GrandchildStoreModule extends ChildStoreModule {
  constructor() {
    super()
    this.namespaced = true

    this.state = {
      ...this.state,
      grandchildName: 'unnamed grandchild',
    }

    this.getters = {
      ...this.getters,
      name: (state) => state.name,
      grandchildName: (state) => state.grandchildName,
    }

    this.actions = {
      ...this.actions,
      updatefakeID: ({ commit }, state, getters) => {
        fetch('https://jsonplaceholder.typicode.com/posts/10')
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            commit(RESET_BASE_ID, json.id)
          })
      },
      changeNameGrandchild: ({ commit, getters }, name) => {
        console.log('old name', getters.grandchildName)
        console.log('new name', name)
        commit(SET_NAME, name)
      },
    }

    this.mutations = {
      ...this.mutations,
      [SET_NAME]: (state, name) => {
        state.grandchildName = name
        console.log('new grandchild name', state.grandchildName)
      },
    }
  }
}
