<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true
    },
    initValue: {
      type: String,
      required: true
    },
    color: {
      type: String as PropType<'blue' | 'red' | 'gray'>,
      required: true
    },
    onChange: {
      type: Function as PropType<(event: Event) => void>,
      required: true
    }
  },
  computed: {
    colorTypes() {
      return {
        blue: { textColor: 'text-blue', borderColor: 'border-blue' },
        red: { textColor: 'text-red', borderColor: 'border-red' },
        gray: { textColor: 'text-gray', borderColor: 'border-gray' }
      }
    },
    textColor() {
      return this.colorTypes[this.color]?.textColor || this.colorTypes.gray.textColor
    },
    borderColor() {
      return this.colorTypes[this.color]?.borderColor || this.colorTypes.gray.borderColor
    }
  }
})
</script>

<template>
  <div class="text-field-container">
    <label :class="['text-label', textColor]" v-text="label"></label>
    <input
      class="input-field focus-outline-none focus-ring-2"
      :class="borderColor"
      :value="initValue"
      @input="onChange"
    />
  </div>
</template>

<style scoped>
.text-field-container {
  display: flex;
  flex-direction: column;
}
.text-label {
  font-weight: 500;
}
.input-field {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #4b5563;
  border-width: 1px;
  border-radius: 0.5rem;
}
.focus-outline-none:focus {
  outline: none;
}
.focus-ring-2:focus {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}
.text-blue {
  color: #1d4ed8;
}
.border-blue {
  border-color: #60a5fa;
}
.text-red {
  color: #b91c1c;
}
.border-red {
  border-color: #f87171;
}
.text-gray {
  color: #9ca3af;
}
.border-gray {
  border-color: #a2a6ab;
}
</style>
