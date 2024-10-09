// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          rel: "preload",
          href: "/assets/css/main.css",
          as: "style",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
      ],
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "shadcn-nuxt",
  ],
  plugins: ["~/plugins/axios"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      "Noto Sans": true,
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
});
