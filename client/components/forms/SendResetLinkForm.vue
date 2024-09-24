<template>
  <!-- register form -->
  <form @submit="execute">
    <!-- email -->
    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="type your email to receive reset link"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button class="mb-4" type="submit"> 
      <span v-if="isLoading">...</span>
      <span v-else>Send Link</span>  
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
import { useToast } from "../ui/toast";

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email(),
  })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    email: "",
  },
});

const { toast } = useToast();
const onFinish = form.handleSubmit(async (values) => {
  // console.log(values);
  const store = useAuthStore();
  const router = useRouter();
  const res = await store.sendResetLink({
    email: values.email,
  });
  toast({
    title: "Link Sent",
    description: res.data.status,
  });
  await router.push("/dashboard");
});
const { isLoading, execute } = useQuery(onFinish);
</script>

<style scoped></style>
