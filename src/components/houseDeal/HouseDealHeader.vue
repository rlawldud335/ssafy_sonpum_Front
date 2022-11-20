<template>
  <div class="house-deal-header">
    <div class="address-selects">
      <v-select
        class="mx-2"
        :items="sidoList"
        item-text="sidoName"
        item-value="sidoCode"
        label="시도 선택"
        dense
        solo
        hide-details
        v-model="sidoCode"
        @change="getGugunList"
      ></v-select>
      <v-select
        class="mx-2"
        :items="gugunList"
        item-text="gugunName"
        item-value="gugunCode"
        label="구군 선택"
        dense
        solo
        hide-details
        v-model="gugunCode"
        @change="getDongList"
      ></v-select>
      <v-select
        class="mx-2"
        :items="dongList"
        item-text="dongName"
        item-value="dongCode"
        label="동 선택"
        dense
        solo
        hide-details
        v-model="dongCode"
      ></v-select>
    </div>
    <house-deal-header-filters></house-deal-header-filters>
    <v-btn class="error" v-on:click="getAptDealList">검색</v-btn>
  </div>
</template>

<script>
import HouseDealHeaderFilters from "@/components/houseDeal/HouseDealHeaderFilters.vue";
import { apiSidoList, apiGugunList, apiDongList } from "@/api/house.js";

export default {
  name: "HouseDealHeader",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      sidoList: [],
      gugunList: [],
      dongList: [],
      filters: {},
      aptDealList: [],
    };
  },
  created() {
    apiSidoList(
      ({ data }) => {
        this.sidoList = data;
      },
      () => {
        console.log("apiSidoList Fail");
      }
    );
  },
  components: {
    HouseDealHeaderFilters,
  },
  methods: {
    getGugunList() {
      if (this.sidoCode) {
        apiGugunList(
          { sido: this.sidoCode },
          ({ data }) => {
            this.gugunList = data;
          },
          () => {
            console.log("apiGugunList Fail");
          }
        );
      }
    },

    getDongList() {
      if (this.gugunCode) {
        apiDongList(
          { gugun: this.gugunCode },
          ({ data }) => {
            this.dongList = data;
          },
          () => {
            console.log("apiDongList Fail");
          }
        );
      }
    },

    getAptDealList() {
      console.log(this.dongCode);
    },
  },
};
</script>

<style>
.house-deal-header {
  display: flex;
  width: 100vw;
  height: 60px;
  background-color: #3876f2;
  align-items: center;
  justify-content: space-around;
}

.address-selects {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>
