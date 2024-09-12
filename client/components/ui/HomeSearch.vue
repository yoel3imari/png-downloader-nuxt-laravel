<template>
  <div
    class="fixed bottom-0 left-0 right-0 px-6 py-8 bg-secondary shadow-lg md:relative md:bg-transparent md:shadow-none w-full"
  >
    <div class="w-full h-full flex items-center justify-center">
      <div
        class="flex items-center justify-center min-w-[360px] w-[60%] max-w-[900px] h-16 shadow"
      >
        <input
          id="search"
          v-model="term"
          type="text"
          name="term"
          class="w-full focus:outline-none font-bold ps-6 h-full rounded-s-xl bg-secondary border-2 border-primary"
          placeholder="Search..."
          @keyup.enter="handleSearch"
        />
        <button
          type="submit"
          class="flex items-center justify-center h-full w-20 bg-primary text-secondary rounded-e-lg"
          @click.prevent="handleSearch"
        >
          <Icon name="heroicons-solid:magnifying-glass" class="text-3xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const term = ref();
onMounted(() => {
  if (route.query.term) {
    term.value = route.query.term;
  }
});
const handleSearch = () => {
  if (term.value) {
    navigateTo(`/search?term=${term.value}`);
  }
};
</script>

<style lang="scss"></style>
