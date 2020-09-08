<template>
  <div
    class="flex items-center justify-center p-4 max-w-sm w-full h-48 mb-6
        bg-white
        shadow-lg rounded-lg
        text-4xl text-gray-900
      "
  >
    <span v-if="incorrectAnswer" class="mr-2 text-red-600">
      {{ article }}
    </span>

    <span class="">{{ word.word }}</span>
  </div>
</template>

<script>
export default {
  props: {
    word: { type: Object, required: true },
    incorrectAnswer: { type: Boolean, required: true }
  },
  computed: {
    article() {
      return this.word.gender === 'f' ? 'une' : 'un'
    }
  }
}
</script>
