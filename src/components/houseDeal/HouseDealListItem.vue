<template>
  <v-col>{{ house.apartName }}</v-col>
</template>

<script>
//import { mapActions } from "vuex";

//const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealListItem",
  data() {
    return {};
  },
  props: {
    house: Object,
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
