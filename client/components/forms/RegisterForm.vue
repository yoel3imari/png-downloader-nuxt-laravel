<template>
  <!-- register form -->
  <form @submit="execute">
    <!-- name -->
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="type your name"
            v-bind="componentField"
          />
        </FormControl>
        <FormDescription> This is your public display name. </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

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
            placeholder="choose a strong password"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- passwordConfirm -->
    <FormField v-slot="{ componentField }" name="passwordConfirm">
      <FormItem>
        <FormLabel>Confirm Password</FormLabel>
        <FormControl>
          <PasswordInput
            placeholder="Re-type the password"
            v-bind="componentField"
            class="pr-10"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button class="mb-4" type="submit">
      <span v-if="isLoading">...</span>
      <span v-else>Submit</span>
    </Button>

    <div>
      <NuxtLink href="/auth/login" class="underline text-sm"
        >I Already have an account ?</NuxtLink
      >
    </div>
  </form>
</template>
<script lang="ts" setup>
import {
  FormControl,
  FormDescription,
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
import { useQuery } from "../../composables/useQuery";

const formSchema = toTypedSchema(
  z
    .object({
      name: z.string(),
      email: z.string().email(),
      password: z
        .string()
        .min(8, "at least 8 characters long")
        .regex(/[A-Z]/, "at least one uppercase letter")
        .regex(/[0-9]/, "at least one number")
        .regex(/[\W_]/, "at least one symbol"),
      passwordConfirm: z.string(),
    })
    .refine((data) => data.passwordConfirm === data.password, {
      message: "must match password",
      path: ["passwordConfirm"],
    })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: "test",
    email: "",
    password: "12345678A;",
    passwordConfirm: "12345678A;",
  },
});

const onFinish = form.handleSubmit(async (values) => {
  // console.log(values);
  const store = useAuthStore();
  await store.register({
    name: values.name,
    email: values.email,
    password: values.password,
  });
  const router = useRouter();
  await router.push("/dashboard");
});

const { isLoading, execute } = useQuery(onFinish);
</script>

<style scoped></style>
