<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col items-center justify-center w-fit min-w-[500px] bg-white px-4 py-8 rounded-lg shadow"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "guest",
});
</script>

<style lang="scss"></style>
