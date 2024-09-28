<template>
  <!-- has children -->
  <Accordion
    v-if="item.hasChildren"
    type="single"
    class="w-full border-none"
    collapsible
    default-value="item"
  >
    <AccordionItem :value="item.label">
      <AccordionTrigger class="hover:bg-secondary rounded-lg p-0 pr-4">
        <SidebarItem :item="item" />
      </AccordionTrigger>
      <AccordionContent class="ps-4 border-s">
        <SidebarDropdown v-for="(i, j) in item.children" :key="j" :item="i" />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  <!-- no children -->
  <SidebarItem v-else :item="item" />
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import type { MenuLink } from "~/libs/menus";
import SidebarItem from './SidebarItem.vue';

defineProps<{
  item: MenuLink;
}>();
</script>

<style lang="scss"></style>
