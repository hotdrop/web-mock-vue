<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <p class="text-title">{{ label }}</p>
</template>

<style scoped>
.text-title {
  font-size: 1.5rem;
  text-align: center;
}
</style>
