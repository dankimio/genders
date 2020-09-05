<template>
  <div>
    <p>Word list</p>

    <ul>
      <li v-for="word in words" v-bind:key="word">{{ word }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      words: ['Hello', 'world', 'test']
    }
  },
  created () {
    // Fetch words from CSV
  }
}
</script>

<style>

</style>
