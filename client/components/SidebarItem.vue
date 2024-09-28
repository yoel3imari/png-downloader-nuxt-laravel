<template>
  <NuxtLink
    :href="item.href"
    :class="`${item.customClass} ${isActive ? 'bg-secondary' : ''}`"
    class="flex items-center justify-center hover:bg-secondary rounded-lg"
  >
    <span class="w-12 h-12 flex items-center justify-center">
      <component :is="item.icon" />
    </span>
    <span class="flex-1 text-md font-semibold">{{ item.label }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuLink } from "~/libs/menus";

const props = defineProps<{
  item: MenuLink;
}>();

const route = useRoute();
const isActive = computed(() => route.path === props.item.href);
</script>

<style lang="scss"></style>
