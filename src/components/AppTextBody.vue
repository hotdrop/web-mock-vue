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
  <p class="text-body">{{ label }}</p>
</template>

<style scoped>
.text-body {
  font-size: 0.875rem;
  text-align: center;
}
</style>
