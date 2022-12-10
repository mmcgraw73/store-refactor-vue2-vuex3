import Vue from 'vue'
import Vuex from 'vuex'

// modules
import BaseModule from './modules/base'
import ChildModule from './modules/child'
import GrandChildModule from './modules/grandchild'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    baseModuleStore: new BaseModule(),
    childModuleStore: new ChildModule(),
    grandChildModuleStore: new GrandChildModule(),
  },
})
