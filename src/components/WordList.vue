<template>
  <div>
    <p>Word list</p>

    <div>
      <span>{{ currentWord.word }}</span> |
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
