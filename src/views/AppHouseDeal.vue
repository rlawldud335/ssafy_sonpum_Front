<template>
  <div id="house-deal-main">
    <house-deal-header></house-deal-header>
    <house-deal-list></house-deal-list>
    <div id="house-deal-result">
      <!-- <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in 5" :key="i">
          <v-expansion-panel-header> Item </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels> -->
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
// export default {
//   components: { KakaoMap, HouseDealHeader, HouseDealList },
//   name: "AppHouseDeal",
//   props: {},
//   comments: {
//     KakaoMap,
//   },
//   data() {
//     return {};
//   },
// };
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
