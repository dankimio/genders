import { defineStore } from 'pinia'

export const store = defineStore('default', {
  state: () => {
    return {
      currentWord: {},
      currentWordIndex: 0,
      incorrectAnswer: false,
      mistakes: [],
      score: 0,
      words: []
    }
  },
  actions: {
    addMistake() {
      if (this.mistakes.find(mistake => mistake.word === this.currentWord.word)) {
        return
      }
      this.mistakes.push(this.currentWord)
    },
    incrementScore() {
      this.score += 1
    },
    async loadWords() {
      if (this.words.length) {
        return
      }

      fetch('/data/fr/words.json')
        .then(response => response.json())
        .then(json => {
          this.words = json
          this.shuffleWords()
          this.showNextWord()
        })
    },
    reset() {
      this.score = 0
      this.currentWord = {}
      this.currentWordIndex = 0
      this.mistakes = []
      this.incorrectAnswer = false

      this.shuffleWords()
    },
    setIncorrectAnswer(incorrectAnswer = true) {
      this.incorrectAnswer = incorrectAnswer
    },
    showNextWord() {
      this.currentWordIndex += 1
      this.currentWord = this.words[this.currentWordIndex]
    },
    shuffleWords() {
      this.words = this.words.sort(() => Math.random() - 0.5)
    },
    incrementCurrentWordIndex() {
      this.currentWordIndex += 1
    }
  }
})
