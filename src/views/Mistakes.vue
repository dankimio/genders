<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'My words'
})
</script>

<template>
  <div class="text-neutral-900 dark:text-neutral-100">
    <router-link to="/" class="block mb-4">
      ← Go back
    </router-link>

    <h1 class="text-4xl font-semibold mb-2">
      My words
    </h1>

    <p v-if="mistakes.length === 0" class="text-lg">
      Your incorrect answers will appear here.
    </p>

    <ul class="text-lg font-serif">
      <li v-for="mistake in mistakes" :key="mistake.word">
        {{ mistake.gender === 'f' ? 'une' : 'un' }}
        {{ mistake.word }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'pinia'

import { useDefaultStore } from '../store'

export default {
  computed: {
    ...mapState(useDefaultStore, ['mistakes'])
  }
}
</script>
