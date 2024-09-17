<template>
  <footer class="pt-6 pb-4 px-2 md:px-6 bg-primary text-secondary">
    <div>
      <ul class="w-full flex flex-col items-start gap-2">
        <li v-for="r in routes" :key="r.name">
          <NuxtLink :href="r.path">{{ r.name }}</NuxtLink>
        </li>
      </ul>
    </div>
    <span class="font-bold text-neutral">{{ year }}&copy;PNGDownloader</span>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

const routes = useRouter().getRoutes()

onMounted(() => {
  console.log(routes);
})
</script>

<style lang="scss">

</style>