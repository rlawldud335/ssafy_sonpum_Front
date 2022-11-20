<template>
  <v-container>
    <main-content-1></main-content-1>
    <main-content-2></main-content-2>
    <main-content-3></main-content-3>
    <board-notice></board-notice>
    <div style="height: 70px"></div>
  </v-container>
</template>

<script>
import MainContent1 from "@/components/main/MainContent1.vue";
import MainContent2 from "@/components/main/MainContent2.vue";
import MainContent3 from "@/components/main/MainContent3.vue";
import BoardNotice from "@/components/boardNotice/BoardNotice.vue";

export default {
  name: "AppMain",
  components: { MainContent1, MainContent2, MainContent3, BoardNotice },
  props: {},
};
</script>

<style></style>
