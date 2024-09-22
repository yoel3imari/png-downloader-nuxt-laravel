<template>
  <div class="text-center mb-4">
    <h1 class="text-3xl font-extrabold">PNG Downloader</h1>
    <p class="font-medium">Great! Now enter a new password and confirm it</p>
  </div>
  <ResetPasswordForm />
</template>

<script setup lang="ts">
import ResetPasswordForm from '~/components/forms/ResetPasswordForm.vue';
definePageMeta({
  layout: "auth",
  middleware: "guest"
})
</script>

<style lang="scss">

</style>