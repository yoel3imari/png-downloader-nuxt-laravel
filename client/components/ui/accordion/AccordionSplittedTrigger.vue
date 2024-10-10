<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import {
  AccordionHeader,
  AccordionTrigger,
  type AccordionTriggerProps,
} from "radix-vue";
import { ChevronDown } from "lucide-vue-next";
import { cn } from "~/libs/utils";

const props = defineProps<
  AccordionTriggerProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <AccordionHeader class="flex w-full">
    <div class="flex-1 border-e">
        <slot />
      </div>
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="
        cn(
          'w-10 h-10 flex items-center justify-center py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class
        )
      "
    >
      
      <!-- <div class="border-s h-full w-8 flex items-center justify-end"> -->
        <slot name="icon">
          <ChevronDown
            class="h-4 w-4 shrink-0 transition-transform duration-200"
          />
        </slot>
      <!-- </div> -->
    </AccordionTrigger>
  </AccordionHeader>
</template>
