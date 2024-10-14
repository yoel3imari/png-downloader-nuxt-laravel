<script setup lang="ts">
import { Icon } from "@iconify/vue";

const colorMode = useColorMode();
const toggleMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
};
</script>

<template>
  <div
    class="border p-2 rounded-full cursor-pointer transition-all"
    @click="toggleMode"
  >
    <Icon
      v-if="colorMode === 'light'"
      icon="radix-icons:moon"
      class="h-[1.2rem] w-[1.2rem]"
    />
    <Icon
      v-else
      icon="radix-icons:sun"
      class="h-[1.2rem] w-[1.2rem]"
    />
  </div>
</template>
