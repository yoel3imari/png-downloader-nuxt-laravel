<template>
  <NuxtLink
    :href="item.href"
    :class="`${item.customClass} ${isActive ? 'bg-secondary' : ''}`"
    class="flex items-center justify-center hover:bg-secondary rounded-lg"
    @click.prevent="onClick"
  >
    <span class="w-8 h-10 flex items-center justify-center">
      <component
        :is="item.icon"
        :size="themeStore.isdashboardSidebarWide ? 16:24"
      />
    </span>
    <span
      :class="`${
        themeStore.isdashboardSidebarWide && isParent ? 'block' : 'hidden'
      }`"
      class="flex-1 font-semibold text-start transition-transform ease-in-out duration-300"
      >{{ item.label }}</span
    >
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuLink } from "~/libs/menus";

const { item, isParent = true, onClick } = defineProps<{
  item: MenuLink;
  isParent?: boolean;
  onClick: () => any
}>();
const themeStore = useThemeStore();
const route = useRoute();
const isActive = computed(() => route.path === item.href);
</script>

<style lang="scss"></style>
