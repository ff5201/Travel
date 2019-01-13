import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // state存放全局公用数据
  state: state,
  // 当做批量操作的时候，才用actions     dispatch
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations,
  getters: {
    doubleCity () {
      return state.city + ' ' + state.city
    }
  }
})
