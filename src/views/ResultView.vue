<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import AppResultTabs from '../components/AppResultTabs.vue'
import AppTextTitle from '../components/AppTextTitle.vue'
import AppTextBody from '../components/AppTextBody.vue'
import AppTextArea from '../components/AppTextArea.vue'
import AppTextField from '../components/AppTextField.vue'
import AppDivider from '../components/AppDivider.vue'
import PostButton from '../components/PostButton.vue'

import AppRequest from '@/models/AppRequest'
import AppResponse from '@/models/AppResponse'

export default defineComponent({
  components: {
    AppResultTabs,
    AppTextTitle,
    AppTextBody,
    AppTextArea,
    AppTextField,
    AppDivider,
    PostButton
  },
  setup() {
    // 成功、エラー、中断の各タブの選択処理
    const selectTab = ref('success')

    const route = useRoute()
    const param = route.query[AppRequest.paramName] as string
    const appRequest = new AppRequest(param || '')
    const appResponse = ref(new AppResponse(appRequest))

    const postUrl = ref(AppResponse.successPostUrl)
    const errorPostUrl = AppResponse.errorPostUrl
    const suspendPostUrl = AppResponse.suspendPostUrl

    const handleInputPostUrlChange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement
      postUrl.value = inputElement.value
    }

    const handleInputAppCodeChange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement
      const newResponse = appResponse.value.copyWith({ appCode: inputElement.value })
      appResponse.value = newResponse
    }

    const handleInputAppNameChange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement
      const newResponse = appResponse.value.copyWith({ appName: inputElement.value })
      appResponse.value = newResponse
    }

    return {
      selectTab,
      appResponse,
      postUrl,
      errorPostUrl,
      suspendPostUrl,
      handleInputPostUrlChange,
      handleInputAppCodeChange,
      handleInputAppNameChange
    }
  }
})
</script>

<template>
  <main class="main-container">
    <AppTextTitle label="結果確認" />
    <AppTextBody
      label="モックサイトはここで終了です。レスポンスの種類を選択してボタンを押してください。"
    />
    <div class="tab-container">
      <AppResultTabs v-model:selectedTab="selectTab" />
    </div>
    <AppDivider />
    <div v-if="selectTab === 'success'">
      <p class="response-edit-label success-text">レスポンスを編集する</p>
      <AppTextField
        label="POST先のURL"
        :initValue="postUrl"
        color="blue"
        @change="handleInputPostUrlChange"
      />
      <br />
      <AppTextField
        label="テストコード"
        :initValue="`${appResponse.appCode}`"
        color="blue"
        @change="handleInputAppCodeChange"
      />
      <br />
      <AppTextField
        label="テストネーム"
        :initValue="`${appResponse.appName}`"
        color="blue"
        @change="handleInputAppNameChange"
      />
    </div>
    <div v-if="selectTab === 'error'">
      <p class="response-edit-label error-text">レスポンスを編集する</p>
      <AppTextField
        label="POST先のURL"
        :initValue="errorPostUrl"
        color="red"
        @change="handleInputPostUrlChange"
      />
      <br />
      <AppTextField
        label="テストコード"
        :initValue="`${appResponse.appCode}`"
        color="red"
        @change="handleInputAppCodeChange"
      />
      <br />
      <AppTextField
        label="テストネーム"
        :initValue="`${appResponse.appName}`"
        color="red"
        @change="handleInputAppNameChange"
      />
    </div>
    <div v-if="selectTab === 'suspend'">
      <p class="response-edit-label suspend-text">レスポンスを編集する</p>
      <AppTextField
        label="POST先のURL"
        :initValue="suspendPostUrl"
        color="gray"
        @change="handleInputPostUrlChange"
      />
      <br />
      <AppTextField
        label="テストコード"
        :initValue="`${appResponse.appCode}`"
        color="gray"
        @change="handleInputAppCodeChange"
      />
      <br />
      <AppTextField
        label="テストネーム"
        :initValue="`${appResponse.appName}`"
        color="gray"
        @change="handleInputAppNameChange"
      />
    </div>
    <br />
    <AppTextArea title="レスポンスのパラメータ" :label="`${appResponse.toShowString() || ''}`" />
    <br />
    <div class="post-button-div">
      <PostButton label="終了する" :postUrl="postUrl" :paramStr="appResponse.toParamString()" />
    </div>
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

.response-edit-label {
  font-weight: 700;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.post-button-div {
  text-align: center;
}

.success-text {
  color: #1d4ed8;
}

.error-text {
  color: #ff6969;
}

.suspend-text {
  color: #a2a6ab;
}
</style>
