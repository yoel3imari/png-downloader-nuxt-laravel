<template>
  <form @submit.prevent="execute">
    <div class="grid grid-cols-2">
      <div>
        <!-- title -->
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormControl>
              <Input
                type="text"
                v-bind="componentField"
                placeholder="At least 5 words"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <!-- description -->
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormControl>
              <Textarea
                v-bind="componentField"
                placeholder="At least 50 characters"
              />
            </FormControl>
          </FormItem>
        </FormField>
        <!-- category -->
        <FormField v-slot="{ componentField }" name="category">
          <FormItem>
            <FormControl>
              <Select v-bind="{ componentField }">
                <SelectTrigger class="min-w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="(i, j) in categStore.categories"
                    :key="j"
                    :value="i.id"
                    >{{ i.name }}</SelectItem
                  >
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        </FormField>
        <!-- tags -->
        <FormField v-slot="{ value }" name="tags">
          <FormItem>
            <FormControl>
              <TagsInput :model-value="value">
                <TagsInputItem v-for="item in value" :key="item" :value="item">
                  <TagsInputItemText />
                  <TagsInputItemDelete />
                </TagsInputItem>

                <TagsInputInput placeholder="Tags..." />
              </TagsInput>
            </FormControl>
          </FormItem>
        </FormField>
      </div>
      <div>
        <!-- file -->
      </div>
    </div>
    <Button class="mb-4" type="submit">
      <span v-if="isLoading">...</span>
      <span v-else>Submit</span>
    </Button>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { useCategoryStore } from "@/stores/categories";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
import { useForm } from "vee-validate";
import { useImageStore } from "~/stores/images";

// get availabe categories
const categStore = useCategoryStore();
onMounted(async () => {
  await categStore.getCategories();
});

const formSchema = toTypedSchema(
  z.object({
    title: z
      .string()
      .min(1, "Title is required")
      .refine((val) => val.trim().split(/\s+/).length >= 5, {
        message: "Title must contain at least 5 words",
      }),
    description: z
      .string()
      .min(50, "Description must be at least 50 characters long"),
    category: z.number().refine((val) => categStore.categories.includes(val), {
      message: "Invalid category",
    }),
    tags: z.array(z.string()).min(5, "At least 5 tags are required"),
    image: z
      .instanceof(File)
      .refine((file) => file.type === "image/png", {
        message: "Image must be a PNG file",
      })
      .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: "Image must be less than 2MB",
      }),
  })
);

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: "",
    description: undefined,
    category: undefined,
    tags: [],
    image: undefined
  }
})

const onSubmit = form.handleSubmit(async (values) => {
  const imageStore = useImageStore();
  const res = await imageStore.uploadImage(values);
  return res;
})

const {isLoading, execute} = useQuery(onSubmit);

</script>

<style lang="scss"></style>
