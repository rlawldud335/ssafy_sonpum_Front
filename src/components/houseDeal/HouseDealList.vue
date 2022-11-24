<template>
  <div v-if="houses != null && houses.length != 0">
    <v-expansion-panels>
      <v-expansion-panel v-for="(house, index) in houses" :key="index">
        <v-expansion-panel-header style="font-size: 1rem">
          {{ house[0].apartName + " (" + house.length + ")" }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p style="font-size: 0.9rem">년도별 가격 변화</p>
          <div style="margin: 20px">
            <v-sheet
              class="v-sheet--offset mx-auto"
              color="#3876f2"
              elevation="12"
              max-width="calc(100% - 32px)"
            >
              <v-sparkline
                :labels="makeChartLabel(house)"
                :value="makeChartValue(house)"
                color="white"
                line-width="2"
                padding="16"
              ></v-sparkline>
            </v-sheet>
          </div>

          <div>
            <p style="font-size: 0.9rem">거래 목록</p>
            <house-deal-list-item :house="house"></house-deal-list-item>
          </div>
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
    return {
      chartList: {},
    };
  },
  computed: {
    ...mapState(houseDealStore, ["houses"]),
  },
  watch: {
    houses() {
      // this.makeChartList();
    },
  },
  methods: {
    makeChartList() {
      for (let key in this.houses) {
        const house = this.houses[key];
        const avg = {};
        const cnt = {};
        house.forEach((h) => {
          if (!avg[h.dealYear]) {
            avg[h.dealYear] = parseInt(h.dealAmount.replace(/,/g, ""));
            cnt[h.dealYear] = 1;
          } else {
            avg[h.dealYear] += parseInt(h.dealAmount.replace(/,/g, ""));
            cnt[h.dealYear] = cnt[h.dealYear] + 1;
          }
        });
        for (let y in avg) {
          avg[y] = avg[y] / cnt[y];
        }
        this.chartList[key] = { label: null, value: null };
        this.chartList[key].label = Object.keys(avg);
        this.chartList[key].value = Object.values(avg);
      }
    },
    makeChartLabel(house) {
      const avg = {};
      const cnt = {};
      house.forEach((h) => {
        if (!avg[h.dealYear]) {
          avg[h.dealYear] = parseInt(h.dealAmount.replace(/,/g, ""));
          cnt[h.dealYear] = 1;
        } else {
          avg[h.dealYear] += parseInt(h.dealAmount.replace(/,/g, ""));
          cnt[h.dealYear] = cnt[h.dealYear] + 1;
        }
      });
      for (let y in avg) {
        avg[y] = avg[y] / cnt[y];
      }
      return Object.keys(avg);
    },
    makeChartValue(house) {
      const avg = {};
      const cnt = {};
      house.forEach((h) => {
        if (!avg[h.dealYear]) {
          avg[h.dealYear] = parseInt(h.dealAmount.replace(/,/g, ""));
          cnt[h.dealYear] = 1;
        } else {
          avg[h.dealYear] += parseInt(h.dealAmount.replace(/,/g, ""));
          cnt[h.dealYear] = cnt[h.dealYear] + 1;
        }
      });
      for (let y in avg) {
        avg[y] = avg[y] / cnt[y];
      }
      return Object.values(avg);
    },
  },
};
</script>
