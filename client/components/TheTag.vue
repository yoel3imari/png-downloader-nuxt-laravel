<template>
  <NuxtLink :href="`/tags/${tag}`">
    <div
      class="hover:bg-neutral hover:text-narrow border border-yellow-500 px-2 py-1 rounded text-yellow-500 bg-yellow-100 bg-opacity-10 font-bold flex items-center justify-center gap-2"
      :class="customClass"
    >
    <!-- <span>&t</span> -->
      <!-- <Icon name="solar:hashtag-bold" /> -->
      <span>#{{ tag }}</span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { tag, customClass} = defineProps<{
  tag: string
  customClass: string
}>();
</script>

<style lang="scss"></style>
