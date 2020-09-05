<template>
  <div id="word-list" class="min-h-screen flex items-center justify-center flex-col font-serif">
    <h2 class="text-2xl mb-8">
      Score: {{ score }}
    </h2>

    <div
      class="flex items-center justify-center p-4 max-w-sm w-full h-48 mb-6
        bg-white
        shadow-lg rounded-lg
        text-4xl text-gray-900
      "
    >
      <span v-if="incorrectAnswer" class="mr-2 text-red-600">
        {{ article }}
      </span>

      <span class="">{{ currentWord.word }}</span>
    </div>

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
export default {
  data () {
    return {
      words: [],
      currentWord: {},
      currentWordIndex: 0,
      incorrectAnswer: false,
      score: 0
    }
  },
  computed: {
    article() {
      return this.currentWord.gender === 'f' ? 'une' : 'un'
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
