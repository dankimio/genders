import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWord: {},
    currentWordIndex: 0,
    mistakes: [],
    score: 0
  },
  mutations: {
    ADD_MISTAKE(state, word) {
      state.mistakes.push(word)
    },
    INCREMENT_CURRENT_WORD_INDEX(state) {
      state.currentWordIndex += 1
    },
    INCREMENT_SCORE(state) {
      state.score += 1
    },
    RESET_SCORE(state) {
      state.score = 0
    },
    SET_CURRENT_WORD(state, word) {
      state.currentWord = word
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
    },
    updateCurrentWord(context, word) {
      context.commit('SET_CURRENT_WORD', word)
    },
    incrementCurrentWordIndex(context) {
      context.commit('INCREMENT_CURRENT_WORD_INDEX')
    }
  },
  modules: {
  }
})
