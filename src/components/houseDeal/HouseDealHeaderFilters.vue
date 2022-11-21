<template>
  <div class="filters">
    <div class="filter">
      <v-btn
        elevation="2"
        class="filter-btn"
        @click="
          closedShow();
          showAmount = true;
        "
        :style="{
          'background-color': selected.key == 'amount' ? '#886fbf' : '',
          color: selected.key == 'amount' ? 'white' : 'black',
        }"
        >금액</v-btn
      >
      <div v-show="showAmount" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">금액</p>
          <v-icon @click="showAmount = !showAmount">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field
            v-model="filterData.amount"
            suffix="만원 이하"
          ></v-text-field>
        </div>
        <div class="filter-select-btn">
          <v-btn color="primary" @click="selectFilter('amount')"
            >필터적용</v-btn
          >
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn
        elevation="2"
        class="filter-btn"
        @click="
          closedShow();
          showArea = true;
        "
        :style="{
          'background-color': selected.key == 'area' ? '#886fbf' : '',
          color: selected.key == 'area' ? 'white' : 'black',
        }"
        >면적</v-btn
      >
      <div v-show="showArea" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">면적</p>
          <v-icon @click="showArea = !showArea">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field
            v-model="filterData.area"
            suffix="평 이상"
          ></v-text-field>
        </div>
        <div class="filter-select-btn">
          <v-btn color="primary" @click="selectFilter('area')">필터적용</v-btn>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn
        elevation="2"
        class="filter-btn"
        @click="
          closedShow();
          showFloor = true;
        "
        :style="{
          'background-color': selected.key == 'floor' ? '#886fbf' : '',
          color: selected.key == 'floor' ? 'white' : 'black',
        }"
        >층</v-btn
      >
      <div v-show="showFloor" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">층</p>
          <v-icon @click="showFloor = !showFloor">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field
            v-model="filterData.floor"
            suffix="층 이상"
          ></v-text-field>
        </div>
        <div class="filter-select-btn">
          <v-btn color="primary" @click="selectFilter('floor')">필터적용</v-btn>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn
        elevation="2"
        class="filter-btn"
        @click="
          closedShow();
          showBuildYear = true;
        "
        :style="{
          'background-color': selected.key == 'buildYear' ? '#886fbf' : '',
          color: selected.key == 'buildYear' ? 'white' : 'black',
        }"
        >건설년도</v-btn
      >
      <div v-show="showBuildYear" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">건설년도</p>
          <v-icon @click="showBuildYear = !showBuildYear">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field
            v-model="filterData.buildYear"
            suffix="년 이상"
          ></v-text-field>
        </div>
        <div class="filter-select-btn">
          <v-btn color="primary" @click="selectFilter('buildYear')"
            >필터적용</v-btn
          >
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn
        elevation="2"
        class="filter-btn"
        @click="
          closedShow();
          showDealDate = true;
        "
        :style="{
          'background-color': selected.key == 'dealDate' ? '#886fbf' : '',
          color: selected.key == 'dealDate' ? 'white' : 'black',
        }"
        >거래기간</v-btn
      >
      <div v-show="showDealDate" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">거래기간</p>
          <v-icon @click="showDealDate = !showDealDate">mdi-close</v-icon>
        </div>
        <div>
          <v-date-picker
            v-model="filterData.dealDate"
            type="month"
          ></v-date-picker>
        </div>
        <div class="filter-select-btn">
          <v-btn color="primary" @click="selectFilter('dealDate')"
            >필터적용</v-btn
          >
        </div>
      </div>
    </div>

    <div class="filter-apart-name">
      <v-text-field
        v-model="filterData.aptName"
        label="아파트 이름"
        solo
        dense
        hide-details
        @keyup="onAptName"
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

const houseDealStore = "houseDealStore";

export default {
  name: "HouseDealHeaderFilters",
  data() {
    return {
      showAmount: false,
      showArea: false,
      showFloor: false,
      showBuildYear: false,
      showDealDate: false,
      filterData: {
        amount: 0,
        area: 0,
        floor: 0,
        buildYear: "2022",
        dealDate: "2020-03",
        aptName: "",
      },
      selected: {
        key: "",
        word: "",
      },
    };
  },
  computed: {
    ...mapState(houseDealStore, ["searchKey", "searchWord"]),
  },
  methods: {
    ...mapMutations(houseDealStore, [
      "CLEAR_SEARCH_KEY",
      "CLEAR_SEARCH_WORD",
      "SET_SEARCH_KEY",
      "SET_SEARCH_WORD",
    ]),
    selectFilter(select) {
      if (select == this.selected.key) {
        this.selected.key = "";
        this.CLEAR_SEARCH_KEY(this.selected.key);
        this.CLEAR_SEARCH_WORD(this.selected.word);
      } else {
        this.selected.key = select;
        this.selected.word = this.filterData[select];
        this.SET_SEARCH_KEY(this.selected.key);
        this.SET_SEARCH_WORD(this.selected.word);
      }
    },
    onAptName() {
      if (this.filterData.aptName != "") {
        this.selected.key = "aptName";
        this.selected.word = this.filterData.aptName;
        this.SET_SEARCH_KEY(this.selected.key);
        this.SET_SEARCH_WORD(this.selected.word);
      }
    },
    closedShow() {
      this.showAmount = false;
      this.showArea = false;
      this.showFloor = false;
      this.showBuildYear = false;
      this.showDealDate = false;
    },
  },
};
</script>

<style>
.filters {
  display: flex;
  align-items: center;
}

.filter {
  margin: 0px 5px;
}

.filter-btn {
  position: relative;
}

.filter-content {
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  position: absolute;
  top: 50px;
  z-index: 5;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
}
.filter-content-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.filter-content-title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.filter-amount {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-apart-name {
  display: flex;
  align-items: center;
  margin: 0px 20px;
}

.filter-select-btn {
  display: flex;
  justify-content: center;
}
</style>
