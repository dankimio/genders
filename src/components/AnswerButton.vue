<template>
  <button
    class="flex-1 p-3
          dark:text-neutral-100
          bg-white rounded-lg
          hover:bg-gray-50
          dark:bg-neutral-800
          dark:hover:bg-neutral-700
          hover:-translate-y-0.5
          transition-all duration-150
          text-center text-lg font-serif"
    @click="answer"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true }
  },
  methods: {
    answer() {
      this.$emit('answer')
    }
  }
}
</script>
