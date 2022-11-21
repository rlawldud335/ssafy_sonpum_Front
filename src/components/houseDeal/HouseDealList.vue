<template>
  <v-expansion-panels v-if="houses && houses.length != 0">
    <house-deal-list-item
      v-for="(house, index) in houses"
      :key="index"
      :house="house"
    />
  </v-expansion-panels>
  <v-expansion-panels v-else>
    <v-col>거래내역이 없습니다.</v-col>
  </v-expansion-panels>
</template>

<script>
import HouseDealListItem from "@/components/houseDeal/HouseDealListItem";
import { mapState } from "vuex";

const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealList",
  components: {
    HouseDealListItem,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(houseDealStore, ["houses"]),
  },
};
</script>
