<template>
  <aside
    class="hidden md:flex md:flex-col h-screen border-r pb-2"
    @mouseover="openSidebarOnHover"
    @mouseleave="closeSidebarOnHover"
  >
    <div
      id="header"
      class="p-4 h-16 flex items-center transition-transform ease-in-out duration-300"
      :class="
        themeStore.isdashboardSidebarWide ? 'translate-x-0' : 'translate-x-1'
      "
    >
      <NuxtLink class="flex items-center gap-2 text-center font-bold text-xl">
        <span>
          <Aperture />
        </span>
        <h1
          class="whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300"
          :class="
            themeStore.isdashboardSidebarWide
              ? 'translate-x-0 opacity-100'
              : '-translate-x-96 opacity-0 hidden'
          "
        >
          PNG Downloader
        </h1>
        
      </NuxtLink>
    </div>
    <!-- body -->
    <div id="body" class="border-t h-full overflow-auto">
      <ul class="px-2 py-1">
        <li v-for="(item, i) in bodyItems" :key="i" class="py-1">
          <SidebarList :item="item" />
        </li>
      </ul>
    </div>
    <!-- footer -->
    <div v-if="footerItem" id="footer" class="px-2 pt-2 border-t">
      <SidebarItem :item="footerItem" :is-parent="true" :on-click="authStore.logout" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { dashboardSidebarMenu } from "~/libs/menus";
import SidebarList from "../SidebarList.vue";
import { useThemeStore } from "../../stores/theme";
import { Aperture } from "lucide-vue-next";
import { useAuthStore } from '../../stores/auth';
const themeStore = useThemeStore();
const authStore = useAuthStore()
const bodyItems = computed(() => dashboardSidebarMenu.slice(0, -1));
const footerItem = computed(
  () => dashboardSidebarMenu[dashboardSidebarMenu.length - 1]
);

const openSidebarOnHover = () => {
  if (!themeStore.isdashboardSidebarWide && !themeStore.isHovered) {
    themeStore.isHovered = true;
    themeStore.openDashboardSidebar();
  }
};

const closeSidebarOnHover = () => {
  if (themeStore.isdashboardSidebarWide && themeStore.isHovered) {
    themeStore.isHovered = false;
    themeStore.closeDashboardSidebar();
  }
};
</script>

<style lang="scss">
/* Webkit browsers (Chrome, Safari, Edge) */
#body::-webkit-scrollbar {
  width: 5px;
}

#body::-webkit-scrollbar-track {
  background: transparent;
}

#body::-webkit-scrollbar-thumb {
  background: #e0e0e0;
}
</style>
