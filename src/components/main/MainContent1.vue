<template>
  <div style="margin-top: 50px; margin-bottom: 70px">
    <v-row class="pt-3" justify="center">
      <v-col cols="3" class="mx-3">
        <v-img class="rounded-lg" :src="require('@/assets/img/main.gif')"></v-img>
      </v-col>
      <div class="col-5 main-content-card" elevation="2" style="padding: 0px">
        <div class="background-color-filter">
          <div style="margin-bottom: 30px">SONPUM</div>
          <div style="font-size: 1.8rem; font-weight: bold">지금 이 순간에도</div>
          <div style="font-size: 1.8rem; font-weight: bold">SONPUM은 성장하고 있습니다.</div>
        </div>
      </div>
    </v-row>

    <v-row class="pt-3" justify="center">
      <div class="col-5 main-content-card" elevation="2" style="padding: 0px">
        <div class="background-color-filter" style="background-color: #2fd69c">
          <div style="margin-bottom: 30px">SONPUM</div>
          <div style="font-size: 1.8rem; font-weight: bold">미래의 삶을 만드는 집</div>
          <div style="font-size: 1.8rem; font-weight: bold">혁신으로부터 시작합니다.</div>
        </div>
      </div>
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

<style>
.main-content-card {
  border-radius: 5%;
  background-image: url("@/assets/img/main3.jpg");
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.background-color-filter {
  width: 100%;
  height: 100%;
  background-color: #2fbdd6;
  opacity: 0.8;
  border-radius: 5%;
  padding: 30px;
  color: white;
}
</style>
