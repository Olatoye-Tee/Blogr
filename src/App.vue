<template>
  <v-app>
    <v-main class="pa-0">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>

import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Footer
},

  data: () => ({
    //
  }),
}
</script>
