<template>
  <v-col cols="4">
    <v-hover>
      <template v-slot:default="{ hover }">
        <router-link
          :to="{
            name: 'BoardReportDetail',
            params: { articleno: 10 },
          }"
        >
          <v-card class="ma-4">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>
            <v-card-text>
              <h2 class="text-h6 primary--text">Magento Forests</h2>
              Travel to the best outdoor experience on planet Earth. A vacation you will never
              forget!
            </v-card-text>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#3876f2">
                <v-btn>더보기</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </router-link>
      </template>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: "BoardReportItem",
  methods: {},
};
</script>

<style></style>
