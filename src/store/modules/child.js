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
        fetch('https://api.api-ninjas.com/v1/randomword', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'OhWGGA5O+mifNb+kNOaC6A==bxPKqej4Zo1EiA20',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json)
            commit(RESET_BASE_ID, json.word)
          })
      },
      changeNameChild: ({ commit, getters }, name) => {
        fetch('https://api.api-ninjas.com/v1/hobbies?category=general', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'OhWGGA5O+mifNb+kNOaC6A==bxPKqej4Zo1EiA20',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            commit(SET_NAME, json.hobby)
          })
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
