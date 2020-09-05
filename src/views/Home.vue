<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <WordList />
  </div>
</template>

<script>
import WordList from '@/components/WordList.vue'

export default {
  name: 'Home',
  components: {
    WordList
  }
}
</script>
