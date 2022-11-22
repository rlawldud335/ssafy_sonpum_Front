<template>
  <div v-if="houses && houses.length != 0">
    <v-expansion-panels>
      <v-expansion-panel v-for="(house, index) in houses" :key="index">
        <v-expansion-panel-header>
          {{ house[0].apartName + " (" + house.length + ")" }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <house-deal-list-item :house="house"></house-deal-list-item>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>
    <v-col>거래내역이 없습니다.</v-col>
  </div>
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
  methods: {
    print() {
      console.log(this.houses);
    },
  },
};
</script>
