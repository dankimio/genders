<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="p-4 max-w-sm w-full
        bg-white
        shadow-lg rounded-lg
        font-serif text-center text-3xl
      "
    >
      <span>{{ currentWord.word }}</span>
      &nbsp;
      <span>{{ currentWord.gender }}</span>
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
