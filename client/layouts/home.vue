<template>
  <div class="bg-gray-100 min-h-screen h-full">
    <slot />
    <TheFooter></TheFooter>
  </div>
</template>

<script setup lang="ts">
import TheFooter from "~/components/ui/TheFooter.vue";
</script>

<style lang="scss"></style>
