<template>
  <!-- register form -->
  <form @submit="onFinish">
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
          <PasswordInput
            placeholder="************"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
        <NuxtLink href="/auth/forgot-password" class="underline text-sm">Forgot your password ?</NuxtLink>
      </FormItem>
    </FormField>

    <Button class="mb-4" type="submit"> Submit </Button>

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
import { useToast } from "../ui/toast";
import PasswordInput from "../ui/input/PasswordInput.vue";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string(),
  })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "",
    password: "12345678A;"
  }
});

const { toast } = useToast();
const onFinish = form.handleSubmit(async (values) => {
  // console.log(values);
  const store = useAuthStore();
  const router = useRouter();
  try {
    await store.login({
      email: values.email,
      password: values.password,
    });
    await router.push("/dashboard");
  } catch (error: any) {
    console.error(error);
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive",
    });
  }
});
</script>

<style scoped></style>
