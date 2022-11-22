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
    <house-product-header-filters></house-product-header-filters>
    <v-btn class="error" v-on:click="productList">검색</v-btn>
  </div>
</template>

<script>
//import HouseProductHeaderFilters from "./HouseProductHeaderFilters.vue";
import HouseProductHeaderFilters from "@/components/houseProduct/HouseProductHeaderFilters.vue";
import { mapState, mapActions, mapMutations } from "vuex";

const houseProductStore = "houseProductStore";

export default {
  name: "HouseProductHeader",
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
    ...mapState(houseProductStore, [
      "sidos",
      "guguns",
      "dongs",
      "products",
      "searchKey",
      "searchWord",
    ]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    // this.CLEAR_PRODUCT_LIST();
    this.getSido();
  },
  components: {
    HouseProductHeaderFilters,
  },
  methods: {
    ...mapActions(houseProductStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getProductList",
    ]),
    ...mapMutations(houseProductStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "CLEAR_PRODUCT_LIST",
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
    productList() {
      console.log("# Header - 검색조건 ", this.searchKey, this.searchWord);
      //if (this.dongCode) this.getProductList(this.dongCode);
      if (this.dongCode) {
        this.getProductList({
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
