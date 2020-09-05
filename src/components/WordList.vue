<template>
  <div class="h-screen flex items-center justify-center flex-col">
    <div
      class="flex items-center justify-center p-4 max-w-sm w-full h-48 mb-6
        bg-white
        shadow-lg rounded-lg
        font-serif text-4xl text-gray-900
      "
    >
      <span>{{ currentWord.word }}</span>
    </div>

    <div class="max-w-sm w-full flex text-gray-800 font-serif">
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
      currentWordIndex: 0
    }
  },
  created () {
    // Fetch words from CSV
    fetch('/data/fr.json')
      .then(response => response.json())
      .then(json => {
        this.words = json
        this.currentWord = this.words[this.currentWordIndex]
      })
  },
  methods: {
    feminine() {
      if (this.currentWord.gender === 'f') {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
      this.nextWord()
    },
    masculine() {
      if (this.currentWord.gender === 'm') {
        console.log('correct')
      } else {
        console.log('incorrect')
      }
      this.nextWord()
    },
    nextWord() {
      this.currentWordIndex++
      this.currentWord = this.words[this.currentWordIndex]
    }
  }
}
</script>

<style>

</style>
