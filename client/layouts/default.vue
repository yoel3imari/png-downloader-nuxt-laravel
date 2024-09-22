<template>
  <div class="bg-gray-50 min-h-screen h-full">
    <TheHeader></TheHeader>
    <main class="h-full bg-gray-100 px-2 md:px-4 lg:px-6 py-4">
      <slot />
    </main>
  </div>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheFooter from "~/components/TheFooter.vue";
import TheHeader from "~/components/TheHeader.vue";
</script>

<style lang="scss"></style>
