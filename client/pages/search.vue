<template>
  <!-- filter: term, category -->
  <div>
    <HomeSearch />
    <div>search: {{ term }}</div>
  </div>
</template>

<script setup lang="ts">
import HomeSearch from "~/components/ui/HomeSearch.vue";

const route = useRoute();
const term = ref();

onMounted(() => {
  term.value = route.query.term;
});
</script>

<style lang="scss"></style>
