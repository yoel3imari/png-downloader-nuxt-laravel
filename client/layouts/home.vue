<template>
  <div class="bg-backround text-foreground min-h-screen h-full">
    <slot />
  </div>
  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import TheFooter from "~/components/TheFooter.vue";

</script>

<style lang="scss"></style>
