<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppTextTitle from '../components/AppTextTitle.vue';
import AppTextBody from '../components/AppTextBody.vue';
import AppTextArea from '../components/AppTextArea.vue';
import ParamCheckItem from '../components/ParamCheckItem.vue';
import AppRequest from '../models/AppRequest';

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

    const checkAppCodeResult = computed(() => appRequest.value.checkAppCode());
    const checkAppNameResult = computed(() => appRequest.value.checkAppName());
    const checkAppNumberResult = computed(() => appRequest.value.checkAppNumber());
    const checkAppDateResult = computed(() => appRequest.value.checkAppDate());
    const checkAppTimeResult = computed(() => appRequest.value.checkAppTime());
    const checkAppPatternResult = computed(() => appRequest.value.checkAppPattern());

    return {
      appRequest,
      checkAppCodeResult,
      checkAppNameResult,
      checkAppNumberResult,
      checkAppDateResult,
      checkAppTimeResult,
      checkAppPatternResult,
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
    <ParamCheckItem label="テストコード" :checkResult="checkAppCodeResult" />
    <ParamCheckItem label="テストネーム" :checkResult="checkAppNameResult" />
    <ParamCheckItem label="番号" :checkResult="checkAppNumberResult" />
    <ParamCheckItem label="年月日" :checkResult="checkAppDateResult" />
    <ParamCheckItem label="時刻" :checkResult="checkAppTimeResult" />
    <ParamCheckItem label="パターン" :checkResult="checkAppPatternResult" />
  </div>
  <AppDivider />
  <br />
</template>

<style scoped>
.result-items {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
