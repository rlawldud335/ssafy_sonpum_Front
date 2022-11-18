<template>
  <v-container class="py-0 fill-height">
    <router-link :to="{name:'main'}">
      <v-img
      contain
      max-height="50"
      max-width="130"
      :src="require('../assets/img/logo1.png')"
    ></v-img>
    </router-link>

    <v-spacer></v-spacer>

    <router-link :to="{name: 'houseDeal'}" class="link">
      <v-btn text> 시세 </v-btn>
    </router-link>
    
    <router-link :to="{name: 'houseProduct'}">
      <v-btn text> 매물 </v-btn>
    </router-link>
    
    <router-link :to="{name:'boardReport'}">
      <v-btn text> 사기 </v-btn>
    </router-link>

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
