<template>
<h1>Dashboard home</h1>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
})
onBeforeMount(() => {
  setPageLayout('dashboard');
})
</script>

<style lang="scss">

</style>