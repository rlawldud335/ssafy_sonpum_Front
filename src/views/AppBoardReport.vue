<template>
  <v-container class="board-report col-lg-8">
    <div class="board-report__title">
      <div style="width: 300px; height: 35px">
        <v-img contain :src="require('@/assets/img/REPORT_BOARD.png')"></v-img>
      </div>
    </div>
    <router-view></router-view>
  </v-container>
</template>

<script>
export default {
  name: "AppBoardReport",
  props: {},
  components: {},
};
</script>

<style>
.board-report {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.board-report__title {
  display: flex;
  margin: 40px 20px 10px 20px;
  text-align: center;
}
</style>
