<template>
  <div style="margin-top: 50px; margin-bottom: 70px">
    <v-row class="pt-3" justify="center">
      <v-col cols="3" class="mx-3">
        <v-img class="rounded-lg" :src="require('@/assets/img/main.gif')"></v-img>
      </v-col>
      <v-card class="col-5" elevation="2"></v-card>
    </v-row>

    <v-row class="pt-2" justify="center">
      <v-card class="col-5" elevation="2"></v-card>
      <v-col cols="3" class="mx-3">
        <v-img class="rounded-lg" :src="require('@/assets/img/main2.gif')"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MainContent1",
  props: {
    mapInfo: String,
  },
};
</script>

<style></style>
