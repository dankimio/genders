<template>
  <div>
    <WordList />
  </div>
</template>

<script>
import WordList from '@/components/WordList.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'French genders game'
  },
  components: {
    WordList
  }
}
</script>
