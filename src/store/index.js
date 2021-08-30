import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    username:'',
    mima:''
  },
  mutations: {
    addtoken(state,data){
      state.token = data.token
      state.username = data.username
    },
    tui(state){
      state.token=''
    },
    getmima(state,data){
      state.mima =  data
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
