<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppTextTitle from '../components/AppTextTitle.vue'
import AppTextBody from '../components/AppTextBody.vue'
import AppTextArea from '../components/AppTextArea.vue'
import ParamCheckItem from '../components/ParamCheckItem.vue'
import AppRequest from '../models/AppRequest'

export default defineComponent({
  components: {
    AppTextTitle,
    AppTextBody,
    AppTextArea,
    ParamCheckItem,
  },
  setup() {
    const route = useRoute();
    const param = route.query[AppRequest.paramName] as string;
    const appRequest = ref(new AppRequest(param || ''));

    return {
      appRequest,
    }
  }
});
</script>

<template>
  <div>
    <AppTextTitle label="パラメータチェック" />
    <AppTextBody label="※本チェックでエラーになった場合、画面にその旨表示します。" />
    <AppTextArea title="リクエストパラメータ" :label="appRequest.originalParamStr || ''" />
  </div>
  <div class="result-items">
    <ParamCheckItem label="テストコード" :checkResult="appRequest.checkAppCode()" />
    <ParamCheckItem label="テストネーム" :checkResult="appRequest.checkAppName()" />
    <ParamCheckItem label="番号" :checkResult="appRequest.checkAppNumber()" />
    <ParamCheckItem label="年月日" :checkResult="appRequest.checkAppDate()" />
    <ParamCheckItem label="時刻" :checkResult="appRequest.checkAppTime()" />
    <ParamCheckItem label="パターン" :checkResult="appRequest.checkAppPattern()" />
  </div>
  <AppDivider />
  <br />
</template>

<style>
.result-items {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
