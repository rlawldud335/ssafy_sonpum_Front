<template>
  <v-container class="house-product-detail-main col-lg-8">
    <div class="detail-header">
      <v-carousel
        v-if="product"
        v-model="model"
        height="400px"
        style="width: 40%"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <!-- KakaoMap RoadView -->
      <div>
        <road-view-map></road-view-map>
      </div>

      <div class="detail-content">
        <p>매물 번호: {{ product.houseProductId }}</p>
        <p>판매자 ID: {{ product.userId }}</p>
        <p>
          주소:
          {{ product.roadName }} {{ product.roadNameBonbun }} -
          {{ product.roadNameBubun }}
        </p>
        <p>건축년도: {{ product.buildYear }}</p>
        <p>건물이름: {{ product.apartName }}</p>
        <p>층: {{ product.floor }}</p>
        <p>면적: {{ product.area }}</p>
        <p>거래유형: {{ product.dealType }}</p>
        <!-- <p>lat: {{ product.lat }}</p>
        <p>lng: {{ product.lng }}</p> -->
        <p>
          가격:
          {{
            (parseInt(product.dealAmount.replace(",", "")) * 10000) | price
          }}원
        </p>
        <!-- 0 이면 판매 안된 상태, 1 이면 판매완료 상태 -->
        <p>판매여부: {{ product.stateFlag | stateFlag }}</p>
      </div>
    </div>

    <div>매물 설명: {{ product.content }}</div>

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
import { mapState } from "vuex";
import RoadViewMap from "../map/RoadViewMap.vue";

const houseProductStore = "houseProductStore";

export default {
  name: "HouseProductStore",
  components: {
    RoadViewMap,
  },
  computed: {
    ...mapState(houseProductStore, ["product"]),
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    stateFlag(value) {
      if (value == 1) {
        return "판매완료";
      } else {
        return "판매중";
      }
    },
  },
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
