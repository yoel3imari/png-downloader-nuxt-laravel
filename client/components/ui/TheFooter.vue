<template>
  <footer class="text-center pt-6 pb-4 bg-gray-100">
    <span class="font-bold text-neutral">{{ year }}&copy;PNGDownloader</span>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<style lang="scss">

</style>