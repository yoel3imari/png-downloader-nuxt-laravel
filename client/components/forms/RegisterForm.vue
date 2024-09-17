<template>
  
  <contextHolder />
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import type { FormInstance } from "ant-design-vue";
import type { Rule } from "ant-design-vue/es/form";

interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const [api, contextHolder] = notification.useNotification();
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
  name: [{ required: true, trigger: "blur" }],
  email: [{ required: true, trigger: "blur" }],
  password: [{ required: true, validator: validatePass, trigger: "change" }],
  confirmPassword: [{ validator: validatePass2, trigger: "change" }],
};

const onFinish = async (values: any) => {
  const store = useAuthStore();
  const router = useRouter();
  try {
    const res = await store.register({
      name: formState.name,
      email: formState.email,
      password: formState.password,
    });
    if (res) {
      router.push("/dashboard");
    }
  } catch (error: any) {
    console.error(error);
    api.error({
      message: "Error",
      description: error.message,
      placement: "bottomRight",
      duration: 3000,
    });
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.error(errorInfo);

  api.error({
    message: "Error",
    description: errorInfo.message,
    placement: "bottomRight",
  });
};
</script>

<style scoped></style>
