<template>
  <v-container>
    <v-row justify="end">
      <v-btn class="mr-5" @click="moveWrite()">글쓰기</v-btn>
    </v-row>

    <v-row class="board-report__content">
      <board-report-item v-for="i in 10" :key="i"></board-report-item>
    </v-row>
  </v-container>
</template>

<script>
import BoardReportItem from "@/components/boardReport/BoardReportItem";

export default {
  name: "BoardReportList",
  props: {},
  components: {
    BoardReportItem,
  },
  methods: {
    moveWrite() {
      this.$router.push({ name: "BoardReportWrite" });
    },
  },
};
</script>

<style>
.board-report__content {
  display: flex;
  flex-wrap: wrap;
}
</style>
