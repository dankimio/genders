<template>
  <div
    class="flex items-center justify-center p-4 max-w-sm w-full h-48 mb-6
        dark:text-neutral-100
        bg-white dark:bg-neutral-800
        rounded-lg
        text-4xl text-neutral-900 font-serif
      "
  >
    <span v-if="incorrectAnswer" class="mr-2 text-red-600">
      {{ article }}
    </span>

    <span class="">{{ currentWord.word }}</span>
  </div>
</template>

<script>
import { mapState } from 'pinia'

import { useDefaultStore } from '../store'

export default {
  computed: {
    ...mapState(useDefaultStore, ['currentWord', 'incorrectAnswer']),
    article() {
      return this.currentWord.gender === 'f' ? 'une' : 'un'
    }
  }
}
</script>
