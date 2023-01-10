import BaseStoreModule from './base'
import { RESET_BASE_ID, SET_NAME } from '@/store/constants'

export default class ChildStoreModule extends BaseStoreModule {
  constructor() {
    super()
    this.namespaced = true

    this.state = {
      ...this.state,
      childName: 'unnamed child',
    }

    this.getters = {
      ...this.getters,
      fakeID: (state) => state.fakeID,
      name: (state) => state.name,
      childName: (state) => state.childName,
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
      changeNameChild: ({ commit, getters }, name) => {
        console.log('old child name', getters.childName)
        commit(SET_NAME, name)
      },
    }

    this.mutations = {
      ...this.mutations,
      [RESET_BASE_ID]: (state, id) => {
        state.fakeID = id
        console.log('CHILD MUTATATION - FAKE ID', id)
      },
      [SET_NAME]: (state, name) => {
        state.childName = name
        console.log('new child name', state.childName)
      },
    }
  }
}
