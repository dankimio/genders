<template>
  <div id="word-list" class="flex-1 flex items-center justify-center flex-col mb-32">
    <h2 class="text-2xl mb-8 flex items-baseline dark:text-neutral-200">
      Score: {{ score }}

      <small class="text-sm ml-2">
        <a href="#" class="text-neutral-700 dark:text-neutral-400" @click="handleReset">Reset</a>
      </small>
    </h2>

    <WordCard />

    <div class="max-w-sm w-full flex text-neutral-800">
      <AnswerButton label="une" @answer="handleAnswer('f')" />
      <div class="mx-2" />
      <AnswerButton label="un" @answer="handleAnswer('m')" />
    </div>
  </div>
</template>

<script>
import WordCard from './WordCard.vue'
import AnswerButton from './AnswerButton.vue'

import { mapActions, mapState } from 'pinia'
import { useDefaultStore } from '../store'

export default {
  components: { WordCard, AnswerButton },
  data () {
    return {}
  },
  computed: {
    ...mapState(
      useDefaultStore,
      ['currentWord', 'currentWordIndex', 'score']
    )
  },
  created () {
    this.loadWords()

    window.addEventListener('keydown', this.keydown)
  },
  beforeDestroy() {
    window.removeEventListener('keydown', this.keydown)
  },
  methods: {
    ...mapActions(
      useDefaultStore,
      [
        'addMistake', 'incrementCurrentWordIndex', 'incrementScore',
        'loadWords', 'reset', 'setIncorrectAnswer',
        'showNextWord', 'updateCurrentWord'
      ]
    ),
    handleAnswer(gender) {
      if (this.currentWord.gender === gender) {
        if (!this.incorrectAnswer) {
          this.incrementScore()
        }
        this.setIncorrectAnswer(false)
        this.showNextWord()
      } else {
        this.setIncorrectAnswer()
        this.addMistake()
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
      this.showNextWord()
    }
  }
}
</script>
