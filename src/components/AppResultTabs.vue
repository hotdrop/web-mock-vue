<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    selectedTab: String,
  },
  setup(props, { emit }) {
    const successClass = ref(props.selectedTab === 'success' ? 'tab-success-select' : 'tab-success-unselect');
    const errorClass = ref(props.selectedTab === 'error' ? 'tab-error-select' : 'tab-error-unselect');
    const suspendClass = ref(props.selectedTab === 'suspend' ? 'tab-suspend-select' : 'tab-suspend-unselect');

    const setTab = (newTab: string) => {
      emit('update:selectedTab', newTab);
      successClass.value = newTab === 'success' ? 'tab-success-select' : 'tab-success-unselect';
      errorClass.value = newTab === 'error' ? 'tab-error-select' : 'tab-error-unselect';
      suspendClass.value = newTab === 'suspend' ? 'tab-suspend-select' : 'tab-suspend-unselect';
    };

    return {
      successClass,
      errorClass,
      suspendClass,
      setTab,
    }
  }
});
</script>

<template>
  <div>
    <button :class="successClass" @click="setTab('success')">成功</button>
    <button :class="errorClass" @click="setTab('error')">エラー</button>
    <button :class="suspendClass" @click="setTab('suspend')">中断</button>
  </div>
</template>

<style scoped>
.tab-success-select {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  border-top-left-radius: 0.875rem;
  border-bottom-left-radius: 0.875rem;
  background-color: #60a5fa;
  color: #ffffff;
}

.tab-success-unselect {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  border-top-left-radius: 0.875rem;
  border-bottom-left-radius: 0.875rem;
  background-color: #ffffff;
  color: #000000;
}

.tab-error-select {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  background-color: #ff6969;
  color: #ffffff;
}

.tab-error-unselect {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  background-color: #ffffff;
  color: #000000;
}

.tab-suspend-select {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  border-top-right-radius: 0.875rem;
  border-bottom-right-radius: 0.875rem;
  background-color: #808080;
  color: #ffffff;
}

.tab-suspend-unselect {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 1px solid #cbd5e0;
  border-top-right-radius: 0.875rem;
  border-bottom-right-radius: 0.875rem;
  background-color: #ffffff;
  color: #000000;
}
</style>