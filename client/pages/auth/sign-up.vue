<template>
  <div class="text-center mb-4">
    <h1 class="text-3xl font-extrabold">PNG Downloader</h1>
    <p class="font-medium">Welcome! Register to start uploading picture</p>
  </div>
  <register-form />
</template>

<script setup lang="ts">
import RegisterForm from '~/components/forms/RegisterForm.vue';
definePageMeta({
  layout: "auth"
})
</script>

<style lang="scss">

</style>