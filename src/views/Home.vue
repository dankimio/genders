<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'French genders game'
})
</script>

<template>
  <div>
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
