<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const computedValue = computed(() => `[${props.title}]\n${props.label || ''}`)
    return { computedValue }
  }
});
</script>

<template>
  <textarea class="app-text-area" :value="computedValue" readonly rows="6" />
</template>

<style scoped>
.app-text-area {
  border: 2px solid #000;
  border-radius: 0.5rem;
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
