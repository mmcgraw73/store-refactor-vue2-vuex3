// from an imported npm package

// we have a typeScript npm package where we define our api interfaces, gets, etc..
// in this package we also define a class that 'mimicks' a Vuex store
// once imported and instantiated, this class becomes our BaseModule in the Vue app

import { GET_BASE_COLLECTION_PENDING, GET_BASE_COLLECTION_ERROR, GET_BASE_COLLECTION_SUCCESS } from './constants'

export default class {
  // vuex properties
  public namespaced: boolean
  public state
  public getters
  public actions
  public mutations

  public constructor() {
    this.namespaced = true
    // ** at this point Vuex is undefined
    ;(this.state = {
      // all common/shared properties
      dumbdata: [],
      id: '',
      page: 1,
      name: 'BASE COLLECTION STORE',
    }),
      (this.getters = {
        dumbdata: (state) => state.dumbdata,
        id: (state) => state.id,
        name: (state) => state.name,
        placeholder: (state) => state.placeholder,
      }),
      (this.actions = {
        get: ({ commit }, data, state) => {
          fetch('https://jsonplaceholder.typicode.com/posts/10')
            .then((response) => {
              state.placeholder = response.json
              console.log('state.placeholder', state.placeholder)
              response.json()
            })
            .then((json) => {
              console.log(json)
              commit(GET_BASE_COLLECTION_PENDING, json)
            })
        },
      }),
      (this.mutations = {
        [GET_BASE_COLLECTION_PENDING]: (data) => {
          this.state.dumbdata = data
          console.log('base base base dumb data mutation', data)
        },
      })
  }
}
