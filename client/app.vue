<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
<script setup lang="ts">
import Toaster from "~/components/ui/toast/Toaster.vue";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - PNG Downloader` : "PNG Downloader";
  },
});
const mode = useColorMode();
onMounted(() => {
  mode.value = "light";
})
</script>
