<template>
  <div></div>
</template>
<script lang="ts" setup>
import { reactive, computed } from "vue";
import type { Credentials } from "~/libs/definitions";
import { useAuthStore } from "~/stores/auth";

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
    // api.error({
    //   message: "Error",
    //   description: error,
    //   placement: "bottomRight",
    // });
  }
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
};
</script>

<style scoped></style>
