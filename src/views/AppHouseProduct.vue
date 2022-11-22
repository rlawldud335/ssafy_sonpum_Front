<template>
  <div class="house-product-main">
    <house-product-header></house-product-header>
    <div class="house-product-content">
      <div class="house-product-map">
        <kakao-map></kakao-map>
      </div>
      <div class="house-product-result">
        <house-product-list></house-product-list>
      </div>
    </div>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import HouseProductHeader from "@/components/houseProduct/HouseProductHeader.vue";
import HouseProductList from "@/components/houseProduct/HouseProductList.vue";

export default {
  components: {
    KakaoMap,
    HouseProductHeader,
    HouseProductList,
  },
  name: "AppHouseProduct",
  props: {},
  comments: {
    KakaoMap,
  },
  data() {
    return {};
  },
};
</script>

<style>
.house-product-main {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.house-product-content {
  display: flex;
}

.house-product-result {
  width: 40%;
  height: calc(100vh - 130px);
  background-color: white;
  padding: 20px;
  z-index: 4;
  overflow: scroll;
}

.house-product-map {
  width: 60%;
}
</style>
