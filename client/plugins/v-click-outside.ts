import { defineNuxtPlugin } from '#app';
import vClickOutside from 'v-click-outside';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside);
});
