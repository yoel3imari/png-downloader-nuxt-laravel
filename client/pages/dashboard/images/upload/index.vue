<template>
<div>upload new image</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
  middleware: "auth",
})
onMounted(() => {
  setPageLayout('dashboard');
})
</script>

<style lang="scss">

</style>