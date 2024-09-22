<template>
  <!-- register form -->
  <form @submit="onFinish">

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

    <Button class="mb-4" type="submit"> Submit </Button>

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
import Button from "@/components/ui/button/Button.vue";
import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { useForm } from "vee-validate";
import { useToast } from "../ui/toast";
import PasswordInput from "../ui/input/PasswordInput.vue";

definePageMeta({
  layout: "auth",
  middleware: "guest"
})

const email = ref('');
const token = ref('');
const route = useRoute();
onMounted(() => {
  // get token and email from url
  email.value = route.query.email?.toString() || "";
  token.value = route.query.token?.toString() || "";
})

const formSchema = toTypedSchema(
  z
    .object({
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
    password: "12345678A;",
    passwordConfirm: "12345678A;",
  },
});

const { toast } = useToast();
const onFinish = form.handleSubmit(async (values) => {
  // console.log(values);
  const store = useAuthStore();
  const router = useRouter();
  try {
    await store.resetPassword({
      token: token.value,
      email: email.value,
      password: values.password,
      password_confirmation: values.passwordConfirm
    });
    await router.push("/login");
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
