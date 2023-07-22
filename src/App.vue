<template>
  <div id="app" class="min-h-screen flex flex-col bg-gray-100 dark:bg-neutral-900 font-sans">
    <router-view class="container flex-1 flex flex-col mx-auto px-8 pt-6" />

    <nav class="text-center text-neutral-800 dark:text-neutral-300 py-4 mb-2">
      <router-link to="/rules" class="mr-4">Rules</router-link>
      <router-link to="/my-words">My words</router-link>
      <sup v-if="mistakes.length > 0" class="ml-1.5 px-1.5 py-0.5 bg-gray-600 rounded-full text-white text-xs">
        {{ mistakes.length }}
      </sup>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'pinia'

import { useDefaultStore } from './store'

export default {
  // metaInfo: {
  //   title: 'French Genders Game'
  // },
  computed: {
    ...mapState(useDefaultStore, ['mistakes'])
  }
}
</script>

<style src="./assets/tailwind.css">
</style>

<style>
#app {
  min-height: -webkit-fill-available;
}

a {
  @apply underline;
}

a sup {
  @apply no-underline;
}
</style>
