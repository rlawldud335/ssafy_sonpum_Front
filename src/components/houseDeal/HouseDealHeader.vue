<template>
  <div class="house-deal-header">
    <div class="address-selects">
      <v-select
        class="mx-2"
        label="시도 선택"
        dense
        solo
        hide-details
        :items="sidos"
        v-model="sidoCode"
        @change="gugunList"
      ></v-select>
      <v-select
        class="mx-2"
        label="구군 선택"
        dense
        solo
        hide-details
        :items="guguns"
        v-model="gugunCode"
        @change="dongList"
      ></v-select>
      <v-select
        class="mx-2"
        label="동 선택"
        dense
        solo
        hide-details
        :items="dongs"
        v-model="dongCode"
      ></v-select>
    </div>
    <house-deal-header-filters></house-deal-header-filters>
    <v-btn class="error" v-on:click="houseList">검색</v-btn>
  </div>
</template>

<script>
import HouseDealHeaderFilters from "@/components/houseDeal/HouseDealHeaderFilters.vue";
import { mapState, mapActions, mapMutations } from "vuex";

const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealHeader",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      key: null,
      word: null,
    };
  },
  computed: {
    ...mapState(houseDealStore, [
      "sidos",
      "guguns",
      "dongs",
      "houses",
      "searchKey",
      "searchWord",
    ]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_APT_LIST();
    this.getSido();
  },
  components: {
    HouseDealHeaderFilters,
  },
  methods: {
    ...mapActions(houseDealStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
    ]),
    ...mapMutations(houseDealStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_APT_LIST",
    ]),
    gugunList() {
      console.log("# 얻어온 sidoCode: " + this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      console.log("# 얻어온 gugunCode: " + this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },
    houseList() {
      //console.log("# 얻어온 dongCode: " + this.dongCode);
      console.log("# Header - 검색조건 ", this.searchKey, this.searchWord);
      if (this.dongCode) {
        this.getHouseList({
          dongCode: this.dongCode,
          key: this.searchKey,
          word: this.searchWord,
        });
      }
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
