<template>
  <header
    class="bg-secondary px-2 md:px-4 lg:px-6 w-full min-h-14 flex items-center"
  >
    <div class="flex items-center justify-between w-full">
      <div id="logo" class="w-max">
        <NuxtLink href="/"
          ><h1 class="text-2xl font-extrabold  text-nowrap">PNG Downloader</h1></NuxtLink
        >
      </div>

      <div id="navbar" class="w-full">
        <ul class="m-0 flex items-center justify-center gap-6">
          <li>
            <NuxtLink href="#">Galaxy</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">IPhone 16</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">Cat</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">Arrows</NuxtLink>
          </li>
          <li>
            <NuxtLink href="#">Youtube</NuxtLink>
          </li>
        </ul>
      </div>

      <div id="options" class="flex items-center gap-4">
        <NuxtLink href="/auth/sin-up">
          <button class="tw-btn text-sm">Sign up</button>
        </NuxtLink>
        <NuxtLink href="/auth/login" class="">Login</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
