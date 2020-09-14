<template>
  <div id="word-list" class="flex-1 flex items-center justify-center flex-col mb-32">
    <h2 class="text-2xl mb-8 flex items-baseline">
      Score: {{ score }}

      <small class="text-sm ml-2">
        <a href="#" class="text-gray-700" @click="handleReset">Reset</a>
      </small>
    </h2>

    <WordCard
      :word="currentWord"
      :incorrect-answer="incorrectAnswer"
    />

    <div class="max-w-sm w-full flex text-gray-800 mb-24">
      <AnswerButton label="une" @answer="handleAnswer('f')" />
      <div class="mx-2" />
      <AnswerButton label="un" @answer="handleAnswer('m')" />
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
      incorrectAnswer: false
    }
  },
  computed: {
    ...mapState(
      ['currentWord', 'currentWordIndex', 'mistakes', 'score']
    )
  },
  created () {
    this.loadExceptions()
    this.loadWords()

    window.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    ...mapActions([
      'addMistake', 'incrementCurrentWordIndex', 'incrementScore',
      'loadExceptions', 'loadWords', 'reset',
      'showNextWord', 'updateCurrentWord'
    ]),
    handleAnswer(gender) {
      if (this.currentWord.gender === gender) {
        if (!this.incorrectAnswer) {
          this.incrementScore()
        }
        this.incorrectAnswer = false
        this.showNextWord()
      } else {
        this.incorrectAnswer = true
        this.addMistake(this.currentWord)
      }
    },
    keydown(event) {
      if (event.key === 'ArrowLeft') {
        this.handleAnswer('f')
      }
      if (event.key === 'ArrowRight') {
        this.handleAnswer('m')
      }
    },
    handleReset() {
      if (!confirm('Are you sure?')) {
        return
      }

      this.reset()
      this.incorrectAnswer = false
      this.showNextWord()
    }
  }
}
</script>

<style>
</style>
