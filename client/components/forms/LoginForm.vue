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
      <a-input v-model:value="formState.email" type="email" autocomplete="true">
        <template #prefix>
          <UserOutlined class="site-form-item-icon" />
        </template>
      </a-input>
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      autocomplete
      class="mb-8"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" autocomplete="true">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item class="mb-4">
      <!-- :disabled="disabled" -->
      <button :disabled="disabled" type="submit" class="tw-btn">Log in</button>
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
  <contextHolder />
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { Credentials } from "~/utils/definitions";
import { useAuthStore } from "~/stores/auth";

const [api, contextHolder] = notification.useNotification();
const formState = reactive<Credentials>({
  email: "",
  password: "",
});
const disabled = computed(() => {
  return !(formState.email && formState.password);
});
const onFinish = async (values: Credentials) => {
  const store = useAuthStore();
  const router = useRouter();
  try {
    const res = await store.login(values);
    if (res) {
      router.push('/dashboard')
    }
  } catch (error: any) {
    api.error({
      message: "Error",
      description: error,
      placement: "bottomRight",
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};
</script>

<style scoped></style>
