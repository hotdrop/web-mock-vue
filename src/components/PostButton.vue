<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    postUrl: {
      type: String,
      required: true
    },
    paramStr: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <form :action="postUrl" method="POST">
    <input type="hidden" name="appParams" :value="paramStr" />
    <button class="post-button" type="submit">{{ label }}</button>
  </form>
</template>

<style scoped>
.post-button {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  color: white;
}
</style>
