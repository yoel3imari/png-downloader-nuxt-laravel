<template>
  <div class="w-full h-full">
    <div
      id="hero"
      class="h-[calc(100vh-40%)] min-h-[360px] bg-center bg-cover flex flex-col items-center justify-center w-full"
    >
      <h1 class="text-lime-500 text-4xl font-extrabold bg-lime-100 bg-opacity-10">
        Download PNG Images For Free
      </h1>
      <!-- search bar here -->
      <HomeSearch />
      <!-- popular tags -->
      <div class="flex items-center justify-center gap-2">
        <TheTag v-for="i in 5" :key="i" tag="bubble" custom-class="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeSearch from "~/components/HomeSearch.vue";
import TheTag from "~/components/TheTag.vue";
useHead({
  title: "Download PNG Images for free",
});
definePageMeta({
  layout: "home",
});
</script>

<style lang="scss">
#hero {
  background: linear-gradient(0deg, rgba(30, 30, 30, 0.6), rgba(0, 0, 0, 0.5)),
    url("images/hero_bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
