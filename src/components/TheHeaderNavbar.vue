<template>
  <v-container class="py-0 fill-height">
    <v-img
      contain
      max-height="50"
      max-width="130"
      :src="require('../assets/img/logo1.png')"
    ></v-img>

    <v-spacer></v-spacer>

    <v-btn text> 시세 </v-btn>
    <v-btn text> 매물 </v-btn>
    <v-btn text> 사기 </v-btn>

    <v-responsive max-width="260">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
      ></v-text-field>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: "TheHeaderNavbar",
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style></style>
