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
      data: ['default value'],
      id: '',
      page: 1,
    }),
      (this.getters = {
        data: (state) => state.data,
        orgId: (state) => state.orgId,
      }),
      (this.actions = {
        get: ({ commit, dispatch }) => {
          commit(GET_BASE_COLLECTION_PENDING)

          return dispatch('load')
        },
        load: () => {
          throw new Error('You have not defined a `load` action in your vuex module.')
        },
        next: ({ dispatch, getters }) => {
          const page = getters.page + 1

          return dispatch('setPage', page)
        },
        previous: ({ dispatch, getters }) => {
          const page = getters.page - 1

          return dispatch('setPage', page)
        },
      })
  }
}
