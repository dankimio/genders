import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWord: {},
    currentWordIndex: 0,
    mistakes: [],
    score: 0,
    words: []
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
    RESET_CURRENT_WORD_INDEX(state) {
      state.currentWordIndex = 0
    },
    SET_CURRENT_WORD(state, word) {
      state.currentWord = word
    },
    SET_WORDS(state, words) {
      state.words = words
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
    loadWords(context) {
      fetch('/data/fr/words.json')
        .then(response => response.json())
        .then(json => {
          context.commit('SET_WORDS', json)
          context.dispatch('showNextWord')
        })
    },
    reset(context) {
      context.commit('RESET_SCORE')
      context.commit('SET_CURRENT_WORD', {})
      context.commit('RESET_CURRENT_WORD_INDEX')
    },
    showNextWord(context) {
      context.dispatch('incrementCurrentWordIndex')
      context.commit('SET_CURRENT_WORD', context.state.words[context.state.currentWordIndex])
    },
    incrementCurrentWordIndex(context) {
      context.commit('INCREMENT_CURRENT_WORD_INDEX')
    }
  },
  modules: {
  }
})
