<template>
  <!-- has children -->
  <template v-if="item.hasChildren">
    <!-- wide -->
    <!-- when sidebar is wide display as accordions -->
    <Accordion
      v-if="themeStore.isdashboardSidebarWide"
      type="single"
      class="w-full border-none"
      collapsible
      default-value="item"
    >
      <AccordionItem :value="item.label">
        <AccordionSplittedTrigger
          class="hover:bg-secondary rounded-lg p-0 pr-4"
        >
          <SidebarItem :item="item" />
        </AccordionSplittedTrigger>
        <AccordionContent class="ps-4 border-s">
          <SidebarList v-for="(i, j) in item.children" :key="j" :item="i" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <!-- short -->
    <!-- when sidebar is minimal show as popovers -->
    <!-- show just parrent for now -->
    <SidebarItem v-else :item="item" />
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
import type { MenuLink } from "~/libs/menus";
import SidebarItem from "./SidebarItem.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSubTrigger,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

defineProps<{
  item: MenuLink;
}>();
const themeStore = useThemeStore();
</script>

<style lang="scss"></style>
