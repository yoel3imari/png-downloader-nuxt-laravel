<template>
  <div class="text-center mb-4">
    <h1 class="text-3xl font-extrabold">PNG Downloader</h1>
    <p class="font-medium">Welcome! Login to start uploading picture</p>
  </div>
  <login-form />
</template>

<script setup lang="ts">
import LoginForm from "~/components/forms/LoginForm.vue"

definePageMeta({
  layout: "auth",
  middleware: "guest",
});
onMounted(() => {
  setPageLayout('auth');
})
</script>

<style lang="scss"></style>
