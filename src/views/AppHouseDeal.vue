<template>
  <div class="house-deal-main">
    <house-deal-header></house-deal-header>
    <div class="house-deal-content">
      <div class="house-deal-map">
        <house-deal-kakao-map></house-deal-kakao-map>
      </div>
      <div class="house-deal-result">
        <house-deal-list></house-deal-list>
      </div>
    </div>
  </div>
</template>

<script>
import HouseDealKakaoMap from "@/components/houseDeal/HouseDealKakaoMap.vue";
import HouseDealHeader from "@/components/houseDeal/HouseDealHeader.vue";
import HouseDealList from "@/components/houseDeal/HouseDealList.vue";

export default {
  name: "AppHouseDeal",
  components: {
    HouseDealHeader,
    HouseDealList,
    HouseDealKakaoMap,
  },
};
</script>

<style>
.house-deal-main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.house-deal-content {
}

.house-deal-result {
  width: 40%;
  height: calc(100vh - 130px);
  background-color: white;
  padding: 20px;
  z-index: 4;
  overflow: scroll;
}

.house-deal-map {
  width: 60%;
}
</style>
