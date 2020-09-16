<template>
  <div>
    <router-link to="/" class="block mb-2">
      ← Go back
    </router-link>

    <h1 class="text-4xl font-semibold mb-4">
      My words
    </h1>

    <p v-if="mistakes.length === 0" class="text-lg">
      Your incorrect answers will appear here.
    </p>

    <ul class="text-lg">
      <li v-for="mistake in mistakes" :key="mistake.word">
        {{ mistake.gender === 'f' ? 'une' : 'un' }}
        {{ mistake.word }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['mistakes'])
  }
}
</script>
