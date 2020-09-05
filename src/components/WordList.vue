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
          text-center"
      >
        une
      </button>
      <div class="mx-2" />
      <button
        class="flex-1 p-3
          bg-white shadow-lg hover:shadow-xl rounded-lg
          transition-shadow duration-150
          text-center"
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
      currentWord: {}
    }
  },
  created () {
    // Fetch words from CSV
    fetch('/data/fr.json')
      .then(response => response.json())
      .then(json => {
        this.words = json
        this.currentWord = this.words[0]
      })
  }
}
</script>

<style>

</style>
