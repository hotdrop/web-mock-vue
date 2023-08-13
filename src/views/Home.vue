<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppTextTitle from '../components/AppTextTitle.vue';
import AppTextBody from '../components/AppTextBody.vue';

const router = useRouter();

const navigateToCheck = () => {
  router.push('/check')
};
</script>

<template>
  <main class="home-container">
    <AppTextTitle label="モックWebサイト" />
    <AppTextBody
      label="このWebサイトは、Android/iOSで作られたネイティブアプリからWebViewで外部サイトへ連携する機能のモックを想定しています。"
    />
    <br />
    <button @click="navigateToCheck" class="navigate-button">チェック処理に進む</button>
  </main>
</template>

<style scoped>
.home-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.navigate-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigate-button:hover {
  background-color: #0056b3;
}
</style>
