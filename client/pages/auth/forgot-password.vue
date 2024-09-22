<template>
  <div class="text-center mb-4">
    <h1 class="text-3xl font-extrabold">PNG Downloader</h1>
    <p class="font-medium">Enter your email to receive reset link</p>
  </div>
  <SendResetLinkForm />
</template>

<script setup lang="ts">
import SendResetLinkForm from "~/components/forms/SendResetLinkForm.vue";
definePageMeta({
  layout: "auth",
  middleware: "guest"
});
</script>

<style lang="scss"></style>
