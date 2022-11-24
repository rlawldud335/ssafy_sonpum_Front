<template>
  <v-container>
    <v-row justify="end">
      <v-btn color="primary" class="mr-5" @click="moveWrite()">글쓰기</v-btn>
    </v-row>

    <v-row class="board-report__content">
      <!-- <board-report-item v-for="i in 10" :key="i"></board-report-item> -->
      <board-report-item
        v-for="(report, index) in reports"
        :key="index"
        :report="report"
      ></board-report-item>
    </v-row>
  </v-container>
</template>

<script>
import BoardReportItem from "@/components/boardReport/BoardReportItem";
import { mapActions, mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "BoardReportList",
  props: {},
  components: {
    BoardReportItem,
  },
  data() {
    return {};
  },
  created() {
    this.getReportArticleList();
  },
  computed: {
    ...mapState(boardStore, ["reports"]),
  },
  methods: {
    ...mapActions(boardStore, ["getReportArticleList"]),
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
