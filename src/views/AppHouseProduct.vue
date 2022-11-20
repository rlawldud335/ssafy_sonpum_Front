<template>
  <div id="house-deal-main">
    <house-deal-header></house-deal-header>
    <div id="house-deal-result">
      <div>
        <p>매물 검색 결과</p>
      </div>
    </div>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import HouseDealHeader from "@/components/houseDeal/HouseDealHeader.vue";

export default {
  components: { KakaoMap, HouseDealHeader },
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
  height: 100%;
  position: relative;
}

#house-deal-result {
  position: absolute;
  right: 0px;
  width: 40vw;
  height: 100%;
  background-color: white;
  padding: 20px;
  z-index: 4;
}
</style>
