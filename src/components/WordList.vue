<template>
  <div class="h-screen flex items-center justify-center flex-col">
    <div
      class="p-4 max-w-sm w-full mb-6
        bg-white
        shadow-lg rounded-lg
        font-serif text-center text-3xl text-gray-900
      "
    >
      <span>{{ currentWord.word }}</span>
    </div>

    <div class="max-w-sm w-full flex text-gray-800 font-serif">
      <div class="flex-1 p-3 bg-white shadow-lg rounded-lg text-center">
        une
      </div>
      <div class="mx-2" />
      <div class="flex-1 p-3 bg-white shadow-lg rounded-lg text-center">
        un
      </div>
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
