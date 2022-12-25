import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWord: {},
    currentWordIndex: 0,
    incorrectAnswer: false,
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
    RESET_MISTAKES(state) {
      state.mistakes = []
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
    },
    SET_INCORRECT_ANSWER(state, incorrectAnswer = true) {
      state.incorrectAnswer = incorrectAnswer
    }
  },
  actions: {
    addMistake(context) {
      if (context.state.mistakes.find(mistake => mistake.word === context.state.currentWord.word)) {
        return
      }
      context.commit('ADD_MISTAKE', context.state.currentWord)
    },
    incrementScore(context) {
      context.commit('INCREMENT_SCORE')
    },
    loadWords(context) {
      if (context.state.words.length) {
        return
      }

      fetch('/data/fr/words.json')
        .then(response => response.json())
        .then(json => {
          context.commit('SET_WORDS', json)
          context.dispatch('shuffleWords')
          context.dispatch('showNextWord')
        })
    },
    reset(context) {
      context.commit('RESET_SCORE')
      context.commit('SET_CURRENT_WORD', {})
      context.commit('RESET_CURRENT_WORD_INDEX')
      context.commit('RESET_MISTAKES')
      context.commit('SET_INCORRECT_ANSWER', false)

      context.dispatch('shuffleWords')
    },
    setIncorrectAnswer(context, incorrectAnswer = true) {
      context.commit('SET_INCORRECT_ANSWER', incorrectAnswer)
    },
    showNextWord(context) {
      context.commit('INCREMENT_CURRENT_WORD_INDEX')
      context.commit('SET_CURRENT_WORD', context.state.words[context.state.currentWordIndex])
    },
    shuffleWords(context) {
      context.commit('SET_WORDS', context.state.words.sort(() => Math.random() - 0.5))
    },
    incrementCurrentWordIndex(context) {
      context.commit('INCREMENT_CURRENT_WORD_INDEX')
    }
  },
  modules: {
  },
  plugins: []
})
