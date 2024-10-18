<template>

<div>
  <UploadImageForm />
</div>

</template>

<script setup lang="ts">
import UploadImageForm from '~/components/forms/UploadImageForm.vue';

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