<script lang="ts">
import { defineComponent } from 'vue';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default defineComponent({
  components: {
    FontAwesomeIcon
  },
  props: {
    label: {
      type: String,
      required: true
    },
    checkResult: {
      type: Array,
      required: true
    }
  },
  computed: {
    result() {
      return this.checkResult[0];
    },
    detailLabel() {
      return this.checkResult[1];
    },
    icon() {
      return this.result ? faCheckCircle : faTimesCircle;
    },
    iconColor() {
      return this.result ? 'text-green' : 'text-red';
    }
  }
});
</script>

<template>
  <div class="param-check-item">
    <span :class="iconColor">
      <font-awesome-icon :icon="icon" class="icon-size" />
    </span>
    <div>
      <p :class="iconColor">{{ label }}</p>
      <p :class="iconColor">{{ detailLabel }}</p>
    </div>
  </div>
</template>

<style scoped>
.param-check-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
}
.text-green {
  color: #25b882;
}
.text-red {
  color: #f87171;
}
.icon-size {
  font-size: 1.5rem;
}
</style>
