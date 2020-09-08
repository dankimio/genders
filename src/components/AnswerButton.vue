<template>
  <button
    class="flex-1 p-3
          bg-white shadow-lg hover:shadow-xl rounded-lg
          transition-shadow duration-150
          text-center text-lg"
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
