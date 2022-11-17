<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <the-header-navbar></the-header-navbar>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar.vue";

export default {
  name: "App",
  data: () => ({}),
  components: {
    TheHeaderNavbar,
  },
};
</script>
