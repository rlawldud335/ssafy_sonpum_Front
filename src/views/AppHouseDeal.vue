<template>
  <div id="house-deal-main">
    <house-deal-header></house-deal-header>
    <div id="house-deal-result">
      <house-deal-list></house-deal-list>
    </div>
    <kakao-map></kakao-map>
  </div>
</template>

<script>
import KakaoMap from "@/components/map/KakaoMap.vue";
import HouseDealHeader from "@/components/houseDeal/HouseDealHeader.vue";
import HouseDealList from "@/components/houseDeal/HouseDealList.vue";

export default {
  name: "AppHouseDeal",
  components: {
    HouseDealHeader,
    HouseDealList,
    KakaoMap,
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
  overflow: scroll;
}
</style>
