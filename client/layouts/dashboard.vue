<script setup lang="ts">
import TheSidebar from "~/components/layouts/TheSidebar.vue";
</script>

<template>
  <!-- sidebar -->
  <TheSidebar />
  <div>
    <!-- topbar -->
    <nav></nav>
    <!-- main -->
    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss"></style>
