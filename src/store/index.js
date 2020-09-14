import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mistakes: [],
    score: 0
  },
  mutations: {
    ADD_MISTAKE(state, word) {
      state.mistakes.push(word)
    },
    INCREMENT_SCORE(state) {
      state.score += 1
    },
    RESET_SCORE(state) {
      state.score = 0
    }
  },
  actions: {
    addMistake(context, word) {
      if (context.state.mistakes.find(mistake => mistake.word === word.word)) {
        return
      }
      context.commit('ADD_MISTAKE', word)
    },
    incrementScore(context) {
      context.commit('INCREMENT_SCORE')
    },
    resetScore(context) {
      context.commit('RESET_SCORE')
    }
  },
  modules: {
  }
})
