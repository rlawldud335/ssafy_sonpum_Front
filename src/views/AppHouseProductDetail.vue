<template>
  <v-container class="house-product-detail-main col-lg-8">
    <div class="detail-header">
      <v-carousel v-model="model" height="400px" style="width: 40%">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <div class="detail-content">
        <p>매물 정보</p>
        <p>주소</p>
        <p>건물이름</p>
        <p>층</p>
        <p>면적</p>
        <p>거래유형</p>
        <p>가격</p>
      </div>
    </div>

    <div>매물 설명</div>

    <div>매물 부가 조회</div>

    <div>전세 안정성 검사</div>

    <div style="display: flex; justify-content: space-around">
      <v-btn color="primary">매물 삭제하기</v-btn>
      <v-btn color="primary">매물 수정하기</v-btn>
      <v-btn color="error">매물 신고하기</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AppProductDetail",
  props: {},
  data() {
    return {
      model: 0,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
    };
  },
};
</script>

<style>
.house-product-detail-main {
  background-color: white;
}

.detail-header {
  display: flex;
  padding: 10px;
}
</style>
