<script setup lang="ts">
import TheSidebar from "~/components/layouts/TheSidebar.vue";
import { useThemeStore } from "../stores/theme";
import ModeDropdown from "~/components/ModeDropdown.vue";

const themeStore = useThemeStore();
</script>

<template>
  <div
    class="grid grid-cols-1 transition-[grid-template-columns] ease-in-out duration-200"
    :class="`${
      themeStore.isdashboardSidebarWide
        ? 'md:grid-cols-[16rem_1fr]'
        : 'md:grid-cols-[4rem_1fr]'
    }`"
  >
    <!-- sidebar -->
    <TheSidebar />
    <div>
      <!-- topbar -->
      <nav class="h-16 w-full flex items-center justify-end border-b">
        <div>
          <ModeDropdown />
        </div>
      </nav>
      <!-- main -->
      <main>
        <slot />
        <div>
          <button @click="themeStore.toggleDashboardSidebar">toggle</button>
        </div>
      </main>
    </div>
  </div>
</template>

<style lang="scss"></style>
