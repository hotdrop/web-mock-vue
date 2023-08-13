<script lang="ts">
import { defineComponent, ref } from 'vue';
import AppTextTitle from '../components/AppTextTitle.vue';
import AppTextBody from '../components/AppTextBody.vue';
import AppTextArea from '../components/AppTextArea.vue';
import AppDivider from '../components/AppDivider.vue';

export default defineComponent({
  components: {
    AppTextTitle,
    AppTextBody,
    AppTextArea,
  },
  setup() {
    const successClass = ref('tab-success-select');
    const errorClass = ref('tab-error-unselect');
    const suspendClass = ref('tab-suspend-unselect');

    const selectTab = ref('success');

    const setTab = (newTab: string) => {
      selectTab.value = newTab;
      successClass.value = newTab === 'success' ? 'tab-success-select' : 'tab-success-unselect';
      errorClass.value = newTab === 'error' ? 'tab-error-select' : 'tab-error-unselect';
      suspendClass.value = newTab === 'suspend' ? 'tab-suspend-select' : 'tab-suspend-unselect';
    };

    return {
      selectTab,
      successClass,
      errorClass,
      suspendClass,
      setTab,
    }
  }
  
});
</script>

<template>
  <main class="main-container">
    <AppTextTitle label="結果確認" />
    <AppTextBody label="モックサイトはここで終了です。レスポンスの種類を選択してボタンを押してください。" />
    <div class="tab-container">
      <button :class="successClass" @click="setTab('success')">成功</button>
      <button :class="errorClass" @click="setTab('error')">エラー</button>
      <button :class="suspendClass" @click="setTab('suspend')">中断</button>
    </div>
    <AppDivider />
    <div v-if="selectTab === 'success'">
      <!-- 成功のコンテンツ -->
    </div>
    <div v-if="selectTab === 'error'">
      <!-- エラーのコンテンツ -->
    </div>
    <div v-if="selectTab === 'suspend'">
      <!-- 中断のコンテンツ -->
    </div>
    <!-- 以下、共通のコンテンツ -->
  </main>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 16px;
}
.tab-container {
  text-align: center;
  margin: 16px;
}

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
  background-color: #ff0000;
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