<template>
  <v-container>
    <div class="detail-main">
      <div class="detail-title">
        <p>{{ report.subject }}</p>
      </div>
      <div style="height: 200px">
        <v-img
          style="width: 100%; height: 100%"
          filled
          src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
        ></v-img>
      </div>

      <div class="detail-autor">
        <p>By [{{ report.userId }}] 작성자</p>
      </div>
      <div class="detail-info">
        <p>
          작성일[{{ report.regitime | regitime }}] | 조회수 [{{ report.hit }}]
        </p>
      </div>

      <v-divider></v-divider>
      <div v-html="report.content" class="detail-content"></div>

      <div class="detail-btn">
        <v-btn @click="moveListPage()">목록</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

const boardStore = "boardStore";

export default {
  name: "boardStore",
  data() {
    return {};
  },
  computed: {
    ...mapState(boardStore, ["report"]),
  },
  methods: {
    moveListPage() {
      this.$router.push({ name: "BoardReportList" });
    },
  },
  filters: {
    regitime(value) {
      return value;
    },
  },
};
</script>

<style>
.detail-main {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
}

.detail-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.detail-autor {
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  margin: 20px;
}

.detail-info {
  margin: 10px;
  text-align: end;
}

.detail-content {
  /* background-color: rgb(231, 231, 231); */
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
}

.detail-btn {
  display: flex;
  justify-content: center;
}
</style>
