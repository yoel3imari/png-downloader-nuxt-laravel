<template>
  <!-- has children -->
  <template v-if="item.hasChildren">
    <!-- wide -->
    <!-- when sidebar is wide display as accordions -->
    <!-- open if active or has active child -->
    <Accordion
      v-if="themeStore.isdashboardSidebarWide"
      type="single"
      class="w-full"
      collapsible
      default-value="item"
    >
      <AccordionItem
        :value="item.label"
      >
        <AccordionSplittedTrigger class="">
          <SidebarItem :item="item" />
        </AccordionSplittedTrigger>
        <AccordionContent class="ms-4 border-s">
          <SidebarList v-for="(i, j) in item.children" :key="j" :item="i" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <!-- short -->
    <!-- when sidebar is minimal show as popovers -->
    <!-- show just parrent for now -->
    <Popover v-else ref="popoverContent" :open="isOpen">
      <PopoverTrigger
        class="w-full relative"
        @mouseover="() => (isOpen = true)"
        @click="
          (e) => {
            e.preventDefault();
            // if (item.isRoot)
            isOpen = false;
            return navigateTo(item.href);
          }
        "
      >
        <div class="popover-flesh"></div>
        <SidebarItem :item="item" />
      </PopoverTrigger>
      <PopoverContent
        v-click-outside="() => (isOpen = false)"
        side="left"
        :side-offset="5"
        align="start"
        class="w-fit p-0 rounded-none"
      >
        <SidebarList v-for="(m, n) in item.children" :key="n" :item="m" />
      </PopoverContent>
    </Popover>
  </template>
  <!-- no children -->
  <SidebarItem v-else :item="item" />
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionSplittedTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import type { MenuLink } from "~/libs/menus";
import SidebarItem from "./SidebarItem.vue";
import { onClickOutside } from "@vueuse/core";
defineProps<{
  item: MenuLink;
}>();
const themeStore = useThemeStore();
const isOpen = ref(false);
const popoverContent = ref(null);

onClickOutside(popoverContent, (e: MouseEvent) => {
  e.preventDefault();
  isOpen.value = false;
});
</script>

<style lang="scss">
.popover-flesh::after {
  content: "\203A";
  position: absolute;
  top: 8px;
  right: 4px;
  color: var(--primary);
}
</style>
