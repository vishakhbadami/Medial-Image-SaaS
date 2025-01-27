export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-saas-app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Add global styles if needed (e.g., Tailwind’s base styles, etc.)
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Add plugins for additional functionality if necessary
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@naive-ui/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Additional build settings, e.g., optimizations, external libraries, etc.
  },

  // TailwindCSS Configuration: https://tailwindcss.com/docs/configuration
  tailwindcss: {
    config: {
      darkMode: 'class',
    },
  },

  compatibilityDate: '2025-01-26',
};