<template>
  <a-form
    ref="formRef"
    :model="formState"
    name="normal_signup"
    layout="vertical"
    :rules="rules"
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
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item
      label="Confirm Password"
      name="confirmPassword"
      :rules="[{ required: true, message: 'Please confirm your password!' }]"
    >
      <a-input-password v-model:value="formState.confirmPassword">
        <template #prefix>
          <LockOutlined class="site-form-item-icon" />
        </template>
      </a-input-password>
    </a-form-item>

    <a-form-item class="mb-4 mt-8">
      <button :disabled="disabled" type="submit" class="tw-btn">Sign up</button>
    </a-form-item>

    <div class="flex gap-4">
      <div>
        <NuxtLink href="/auth/login" class="underline"
          >I already have an account!</NuxtLink
        >
      </div>
    </div>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";

interface FormState {
  name?: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const formRef = ref<FormInstance>();
const formState = reactive<FormState>({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const disabled = computed(() => {
  return !(formState.email && formState.password && formState.confirmPassword);
});

const validatePass = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password");
  } else {
    if (formState.password !== "") {
      formRef?.value?.validateFields("confirmPassword");
    }
    return Promise.resolve();
  }
};
const validatePass2 = async (_rule: Rule, value: string) => {
  if (value === "") {
    return Promise.reject("Please input the password again");
  } else if (value !== formState.password) {
    return Promise.reject("Two inputs don't match!");
  } else {
    return Promise.resolve();
  }
};
const rules: Record<string, Rule[]> = {
  email: [{ required: true, trigger: "blur" }],
  password: [{ required: true, validator: validatePass, trigger: "change" }],
  confirmPassword: [{ validator: validatePass2, trigger: "change" }],
};

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style scoped></style>
