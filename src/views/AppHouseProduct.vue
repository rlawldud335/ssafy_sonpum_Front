<template>
  <div id="house-deal-main">
    <house-deal-header></house-deal-header>
    <div id="house-deal-result">
      <div>매물 검색 결과</div>
      <div
        id="house-deal-content"
        style="display: flex; flex-wrap: wrap; overflow: scroll; height: 100%"
      >
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
        <house-product-item></house-product-item>
      </div>
    </div>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import HouseDealHeader from "@/components/houseDeal/HouseDealHeader.vue";
import HouseProductItem from "@/components/houseProduct/HouseProductItem.vue";

export default {
  components: { KakaoMap, HouseDealHeader, HouseProductItem },
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
#house-deal-main {
  height: 85vh;
  position: relative;
}

#house-deal-result {
  position: absolute;
  right: 0px;
  width: 40vw;
  background-color: white;
  padding: 20px;
  z-index: 4;
}
</style>
