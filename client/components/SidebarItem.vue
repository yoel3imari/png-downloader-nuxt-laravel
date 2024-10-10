<template>
  <div
    :class="`${item.customClass} ${isActive ? 'bg-secondary' : ''}`"
    class="flex items-center justify-center hover:bg-secondary cursor-pointer"
    @click="handleClick"
  >
    <span class="w-8 h-10 flex items-center justify-center">
      <component
        :is="item.icon"
        :size="themeStore.isdashboardSidebarWide ? 16:24"
      />
    </span>
    <span
      :class="`${
        themeStore.isdashboardSidebarWide || !item.isRoot ? 'block' : 'hidden'
      }`"
      class="flex-1 font-semibold text-start pe-4 transition-transform ease-in-out duration-300"
      >{{ item.label }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { MenuLink } from "~/libs/menus";

const { item, onClick } = defineProps<{
  item: MenuLink;
  onClick?: () => any
}>();
const themeStore = useThemeStore();
const route = useRoute();
const isActive = computed(() => route.path === item.href);

const handleClick = async () => {
  if (onClick) {
    await onClick();
  }
  console.log(item.href);
  return navigateTo(item.href);
}

</script>

<style lang="scss"></style>
