<template>
  <aside class="relative hidden md:flex md:flex-col h-screen border-r">
    <div class="absolute top-5 w-6 h-6 bg-background -right-3 cursor-pointer" @click="themeStore.toggleDashboardSidebar">
      <PanelRightOpen v-if="themeStore.isdashboardSidebarWide" />
      <PanelRightClose v-else />
    </div>
    <div class="h-16 border-b transition-all ease-in-out duration-300">
      <NuxtLink class="font-bold text-xl flex h-full w-full">
        <div class="w-16 min-w-16 h-full">
          <div class="h-full w-16 flex items-center justify-center">
            <Aperture :size="32" />
          </div>
        </div>
        <h1
          class="whitespace-nowrap transition-all ease-in-out duration-300 flex items-center justify-start w-full"
          :class="
            themeStore.isdashboardSidebarWide
              ? 'block opacity-100'
              : 'opacity-0 w-0 hidden'
          "
        >
          PNG Downloader
        </h1>
      </NuxtLink>
    </div>
    <!-- body -->
    <div class="flex-grow overflow-y-auto overflow-x-hidden">
      <ul class="">
        <li v-for="(item, i) in bodyItems" :key="i" class="h-10">
          <SidebarList :item="item" />
        </li>
      </ul>
    </div>
    <!-- footer -->
    <div
      v-if="footerItem"
      class="p-2 h-16 border-t flex items-center justify-center"
    >
      <!--TODO: replace with user avatar -->
      <SidebarItem
        :item="footerItem"
        :is-parent="true"
        :on-click="authStore.logout"
      />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { dashboardSidebarMenu } from "~/libs/menus";
import SidebarList from "./Sidebar/SidebarList.vue";
import { useThemeStore } from "../../stores/theme";
import { Aperture, PanelRightClose, PanelRightOpen } from "lucide-vue-next";
import { useAuthStore } from "../../stores/auth";
import SidebarItem from "./Sidebar/SidebarItem.vue";

const themeStore = useThemeStore();
const authStore = useAuthStore();
const bodyItems = computed(() => dashboardSidebarMenu.slice(0, -1));
const footerItem = computed(
  () => dashboardSidebarMenu[dashboardSidebarMenu.length - 1]
);

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
