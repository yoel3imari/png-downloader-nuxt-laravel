<template>
  <a-form
    :model="formState"
    name="normal_login"
    class="login-form"
    layout="vertical"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <a-form-item
      label="Email"
      name="email"
      class="min-w-[300px]"
      :rules="[{ required: true, message: 'Please input a valid email!' }]"
    >
      <a-input v-model:value="formState.email" type="email">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      class="mb-8"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item class="mb-4">
      <!-- :disabled="disabled" -->
      <button
        :disabled="disabled"
        type="submit"
        class="tw-btn"
      >
        Log in
      </button>
    </a-form-item>

    <div class="flex gap-4">
      <div>
        <NuxtLink href="/auth/forgot-password" class="underline"
          >Forgot your password?</NuxtLink
        >
      </div>
      <div>
        <NuxtLink href="/auth/sign-up" class="underline"
          >Create an account!</NuxtLink
        >
      </div>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
interface FormState {
  email: string;
  password: string;
}
const formState = reactive<FormState>({
  email: "",
  password: "",
});
const disabled = computed(() => {
  return !(formState.email && formState.password);
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped></style>
