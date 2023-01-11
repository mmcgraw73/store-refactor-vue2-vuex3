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
      updatefakeID: ({ commit, state, getters }) => {
        // fetch('https://api.api-ninjas.com/v1/hobbies?category=general').then((response) => console.log('r', response))
        // .then((json) => {
        //   console.log(json)
        //   commit(RESET_BASE_ID, json.id)
        // })
      },
      changeNameGrandchild: ({ commit, getters }) => {
        console.log('old grandchild name', getters.grandchildName)
        fetch('https://api.api-ninjas.com/v1/hobbies?category=general', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'OhWGGA5O+mifNb+kNOaC6A==bxPKqej4Zo1EiA20',
          },
        })
          .then((response) => response.json())
          .then((json) => {
            //console.log('hobby', json.hobby)
            commit(SET_NAME, json.hobby)
          })
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
