<template>
  <form action="">
    <div class="grid grid-cols-2">
      <div>
        <!-- title -->
        <!-- description -->
        <!-- category -->
        <!-- tags -->
      </div>
      <div>
        <!-- file -->
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

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
    category: z.string().refine((val) => availableCategories.includes(val), {
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

// get availabe categories
onMounted(() => {
  
})

</script>

<style lang="scss"></style>
