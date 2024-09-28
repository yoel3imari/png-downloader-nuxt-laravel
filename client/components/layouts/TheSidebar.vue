<template>
  <div class="hidden md:block h-full w-72 border-r">
    <div id="header" class="p-4 h-16 flex items-center justify-center">
      <NuxtLink class="text-center font-bold text-xl">
        <h1>PNG Downloader</h1>
      </NuxtLink>
    </div>
    <div id="body" class="border-t">
      <ul class="px-2 py-1">
        <li v-for="(item, i) in dashboardSidebarMenu" :key="i" class="py-1">
          <SidebarDropdown :item="item" />
        </li>
      </ul>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script setup lang="ts">
import { dashboardSidebarMenu } from "~/libs/menus";
import SidebarDropdown from "../SidebarDropdown.vue";
</script>

<style lang="scss"></style>
