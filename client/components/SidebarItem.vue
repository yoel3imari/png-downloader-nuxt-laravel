<template>
  <div
    :class="`${item.customClass || ''} ${isActive ? 'bg-secondary' : ''}`"
    class="h-10 w-full flex items-center justify-start hover:bg-secondary cursor-pointer transition-all duration-300 ease-in-out"
    @click="handleClick"
  >
    <div
      class="h-10 w-16 min-w-16 "
    >
      <div class="w-16 h-full flex items-center justify-center">
        <component
        :is="item.icon"
        :size="24"
        class="h-full"
      />
      </div>
    </div>
    <span
      :class="`${
        themeStore.isdashboardSidebarWide || !item.isRoot
          ? 'opacity-100 block'
          : 'opacity-0 w-0 hidden'
      }`"
      class="text-start pe-4 transition-all duration-300 ease-in-out"
      >{{ item.label }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { MenuLink } from "~/libs/menus";

const { item, onClick } = defineProps<{
  item: MenuLink;
  onClick?: () => any;
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
};
</script>

<style lang="scss"></style>
