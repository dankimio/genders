import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mistakes: []
  },
  mutations: {
    ADD_MISTAKE(state, word) {
      state.mistakes.push(word)
    }
  },
  actions: {
    addMistake(context, word) {
      if (context.state.mistakes.find(mistake => mistake.word === word.word)) {
        return
      }
      context.commit('ADD_MISTAKE', word)
    }
  },
  modules: {
  }
})
