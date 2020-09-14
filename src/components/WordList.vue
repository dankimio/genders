<template>
  <div id="word-list" class="flex-1 flex items-center justify-center flex-col mb-32">
    <h2 class="text-2xl mb-8 flex items-baseline">
      Score: {{ score }}

      <small class="text-sm ml-2">
        <a href="#" class="text-gray-700" @click="reset">Reset</a>
      </small>
    </h2>

    <WordCard
      :word="currentWord"
      :incorrect-answer="incorrectAnswer"
    />

    <div class="max-w-sm w-full flex text-gray-800 mb-24">
      <AnswerButton label="une" @answer="feminine" />
      <div class="mx-2" />
      <AnswerButton label="un" @answer="masculine" />
    </div>

    <div
      class="text-gray-700 text-center max-w-sm h-8"
    >
      <span
        v-for="mistake in mistakes"
        v-show="mistakes.length > 0"
        :key="mistake.word"
        class="mr-3"
      >
        {{ mistake.word }}
      </span>
    </div>
  </div>
</template>

<script>
import WordCard from './WordCard'
import AnswerButton from './AnswerButton'

import { mapActions, mapState } from 'vuex'

export default {
  components: { WordCard, AnswerButton },
  data () {
    return {
      exceptions: [],
      words: [],
      currentWord: {},
      currentWordIndex: 0,
      incorrectAnswer: false
    }
  },
  computed: {
    ...mapState(['mistakes', 'score'])
  },
  created () {
    this.currentWordIndex = parseInt(localStorage.getItem('currentWordIndex')) || 0

    fetch('/data/fr/exceptions.json')
      .then(response => response.json())
      .then(json => {
        this.exceptions = json
      })

    fetch('/data/fr/words.json')
      .then(response => response.json())
      .then(json => {
        this.words = json
        this.currentWord = this.words[this.currentWordIndex]
      })

    window.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    ...mapActions(['addMistake', 'incrementScore']),
    feminine() {
      if (this.currentWord.gender === 'f') {
        if (!this.incorrectAnswer) {
          this.score++
        }
        this.incorrectAnswer = false
        this.nextWord()
      } else {
        this.incorrectAnswer = true
        this.addMistake(this.currentWord)
      }
    },
    masculine() {
      if (this.currentWord.gender === 'm') {
        if (!this.incorrectAnswer) {
          this.incrementScore()
        }
        this.incorrectAnswer = false
        this.nextWord()
      } else {
        this.incorrectAnswer = true
        this.addMistake(this.currentWord)
      }
    },
    nextWord() {
      do {
        this.currentWordIndex++
        this.currentWord = this.words[this.currentWordIndex]
      } while (this.exceptions.includes(this.currentWord.word))

      localStorage.setItem('currentWordIndex', this.currentWordIndex)
    },
    keydown(event) {
      if (event.key === 'ArrowLeft') {
        this.feminine()
      }
      if (event.key === 'ArrowRight') {
        this.masculine()
      }
    },
    reset() {
      if (!confirm('Are you sure?')) {
        return
      }

      this.currentWord = {}
      this.currentWordIndex = 0
      this.incorrectAnswer = false
      this.score = 0
      this.nextWord()
    }
  }
}
</script>

<style>
</style>
