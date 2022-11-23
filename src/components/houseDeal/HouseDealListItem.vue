<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="house"
      :items-per-page="10"
      class="elevation-1"
    >
    </v-data-table>
  </div>
</template>

<script>
//import { mapActions } from "vuex";

//const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealListItem",
  data() {
    return {
      headers: [
        { text: "층", value: "floor" },
        { text: "면적", value: "area" },
        { text: "가격", value: "dealAmount" },
        { text: "거래일", value: "dealYear" },
      ],
    };
  },
  props: {
    house: Array,
  },
  methods: {
    // ...mapActions(houseDealStore, ["detailHouse"]),
    // selectHouse() {
    //   console.log("# 거래내역 상세보기 listRow: ", this.house);
    //   this.$store.dispatch("getHouse", this.house);
    //   this.detailHouseDeal(this.house);
    // },
  },
};
</script>

<style>
.deal-item {
  background-color: gray;
  display: flex;
}
</style>
