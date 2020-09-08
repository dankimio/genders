<template>
  <div id="word-list" class="min-h-screen flex items-center justify-center flex-col font-serif">
    <h2 class="text-2xl mb-8">
      Score: {{ score }}
    </h2>

    <WordCard
      :word="currentWord"
      :incorrect-answer="incorrectAnswer"
    />

    <div class="max-w-sm w-full flex text-gray-800">
      <button
        class="flex-1 p-3
          bg-white shadow-lg hover:shadow-xl rounded-lg
          transition-shadow duration-150
          text-center text-lg"
        @click="feminine"
      >
        une
      </button>
      <div class="mx-2" />
      <button
        class="flex-1 p-3
          bg-white shadow-lg hover:shadow-xl rounded-lg
          transition-shadow duration-150
          text-center text-lg"
        @click="masculine"
      >
        un
      </button>
    </div>
  </div>
</template>

<script>
import WordCard from './WordCard'

export default {
  components: { WordCard },
  data () {
    return {
      words: [],
      currentWord: {},
      currentWordIndex: 0,
      incorrectAnswer: false,
      score: 0
    }
  },
  created () {
    this.currentWordIndex = parseInt(localStorage.getItem('currentWordIndex')) || 0
    this.score = parseInt(localStorage.getItem('score')) || 0

    // Fetch words from CSV
    fetch('/data/fr.json')
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
    feminine() {
      if (this.currentWord.gender === 'f') {
        console.log('correct')
        if (!this.incorrectAnswer) {
          this.score++
        }
        this.incorrectAnswer = false
        this.nextWord()
      } else {
        console.log('incorrect')
        this.incorrectAnswer = true
      }
    },
    masculine() {
      if (this.currentWord.gender === 'm') {
        console.log('correct')
        if (!this.incorrectAnswer) {
          this.score++
        }
        this.incorrectAnswer = false
        this.nextWord()
      } else {
        console.log('incorrect')
        this.incorrectAnswer = true
      }
    },
    nextWord() {
      this.currentWordIndex++
      this.currentWord = this.words[this.currentWordIndex]

      localStorage.setItem('currentWordIndex', this.currentWordIndex)
      localStorage.setItem('score', this.score)
    },
    keydown(event) {
      if (event.key === 'ArrowLeft') {
        this.feminine()
      }
      if (event.key === 'ArrowRight') {
        this.masculine()
      }
    }
  }
}
</script>

<style>
#word-list {
  min-height: -webkit-fill-available;
}
</style>
