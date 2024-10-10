<script setup lang="ts">
import TheSidebar from "~/components/layouts/TheSidebar.vue";
import { useThemeStore } from "../stores/theme";
const themeStore = useThemeStore();
definePageMeta({
  middleware: "auth",
});
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
      <nav></nav>
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
