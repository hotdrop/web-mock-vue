<script setup lang="ts">
import AppTextTitle from '../components/AppTextTitle.vue'
import AppTextBody from '../components/AppTextBody.vue'
import AppTextArea from '../components/AppTextArea.vue'
import ParamCheckItem from '../components/ParamCheckItem.vue'
</script>

<template>
  <div>
    <AppTextTitle label="パラメータチェック" />
    <AppTextBody label="※本チェックでエラーになった場合、画面にその旨表示します。" />
    <AppTextArea title="リクエストパラメータ" label="テスト" />
  </div>
  <div class="result-items">
    <ParamCheckItem label="テストコード" :checkResult="[true, 'チェックOK']" />
    <ParamCheckItem label="テストネーム" :checkResult="[false, 'チェックNG']" />
    <ParamCheckItem label="番号" :checkResult="[true, 'チェックOK']" />
    <ParamCheckItem label="年月日" :checkResult="[false, 'チェックNG']" />
    <ParamCheckItem label="時刻" :checkResult="[true, 'チェックOK']" />
    <ParamCheckItem label="パターン" :checkResult="[false, 'チェックNG']" />
  </div>
  <AppDivider />
</template>

<style>
.result-items {
  padding: 1rem;
}
</style>
