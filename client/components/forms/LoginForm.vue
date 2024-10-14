<template>
  <!-- register form -->
  <form @submit.prevent="execute">
    <!-- email -->
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="_________@___.___"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- password -->
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <PasswordInput placeholder="************" v-bind="componentField" />
        </FormControl>
        <FormMessage />
        <NuxtLink href="/auth/forgot-password" class="underline text-sm"
          >Forgot your password ?</NuxtLink
        >
      </FormItem>
    </FormField>

    <Button class="mb-4" type="submit">
      <span v-if="isLoading">...</span>
      <span v-else>Submit</span>
    </Button>

    <div>
      <NuxtLink href="/auth/sign-up" class="underline text-sm"
        >I don't have an account ?</NuxtLink
      >
    </div>
  </form>
</template>
<script lang="ts" setup>
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import PasswordInput from "../ui/input/PasswordInput.vue";
import { useQuery } from "@/composables/useQuery";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string(),
  })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "yusf.works@gmail.com",
    password: "12345678A;",
  },
});

const onFinish = form.handleSubmit(async (values) => {
  const store = useAuthStore();
  await store.login({
    email: values.email,
    password: values.password,
  });
  const router = useRouter();
  await router.push("/dashboard");
});

const { isLoading, execute } = useQuery(onFinish);
</script>

<style scoped></style>
