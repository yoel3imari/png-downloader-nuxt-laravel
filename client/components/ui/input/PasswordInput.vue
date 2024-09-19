<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "~/libs/utils";
import { Eye, EyeOff } from "lucide-vue-next";
import { useFormField } from "../form/useFormField";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});

const { error } = useFormField();

const pwHidden = ref(true);
const togglePassword = () => (pwHidden.value = !pwHidden.value);
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <input
      v-model="modelValue"
      :type="pwHidden ? 'password' : 'text'"
      :class="
        cn(
          error ? 'border-destructive' : 'border-input',
          'flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />
    <span
      class="absolute end-0 inset-y-0 flex items-center justify-center w-10"
    >
      <button
        class="flex items-center justify-center w-full h-full"
        @click="togglePassword"
      >
        <Eye v-if="pwHidden" :size="16" />
        <EyeOff v-else :size="16" />
      </button>
    </span>
  </div>
</template>
