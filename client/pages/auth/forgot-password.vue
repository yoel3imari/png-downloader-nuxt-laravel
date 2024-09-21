<template>
  <div class="text-center mb-4">
    <h1 class="text-3xl font-extrabold">PNG Downloader</h1>
    <p class="font-medium">Enter your email to receive reset link</p>
  </div>
  <reset-password />
</template>

<script setup lang="ts">
import ResetPassword from '~/components/forms/ResetPassword.vue';
definePageMeta({
  layout: "auth"
})
</script>

<style lang="scss">

</style>