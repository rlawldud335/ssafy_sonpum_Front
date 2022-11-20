<template>
  <div class="filters">
    <div class="filter">
      <v-btn elevation="2" class="filter-btn" @click="showAmount = !showAmount">금액</v-btn>
      <div v-show="showAmount" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">금액</p>
          <v-icon @click="showAmount = !showAmount">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field :value="amount" suffix="만원 이하"></v-text-field>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn elevation="2" class="filter-btn" @click="showArea = !showArea">면적</v-btn>
      <div v-show="showArea" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">면적</p>
          <v-icon @click="showArea = !showArea">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field :value="area" suffix="평 이상"></v-text-field>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn elevation="2" class="filter-btn" @click="showFloor = !showFloor">층</v-btn>
      <div v-show="showFloor" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">층</p>
          <v-icon @click="showFloor = !showFloor">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field :value="floor" suffix="층 이상"></v-text-field>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn elevation="2" class="filter-btn" @click="showBuildYear = !showBuildYear"
        >건설년도</v-btn
      >
      <div v-show="showBuildYear" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">건설년도</p>
          <v-icon @click="showBuildYear = !showBuildYear">mdi-close</v-icon>
        </div>
        <div>
          <v-text-field :value="buildYear" suffix="년 이상"></v-text-field>
        </div>
      </div>
    </div>

    <div class="filter">
      <v-btn elevation="2" class="filter-btn" @click="showDealDate = !showDealDate">거래기간</v-btn>
      <div v-show="showDealDate" class="filter-content">
        <div class="filter-content-top">
          <p class="filter-content-title">거래기간</p>
          <v-icon @click="showDealDate = !showDealDate">mdi-close</v-icon>
        </div>
        <div>
          <v-date-picker v-model="dealDate" type="month"></v-date-picker>
        </div>
      </div>
    </div>

    <div class="filter-apart-name">
      <v-text-field label="아파트 이름" solo dense hide-details></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "HouseDealHeaderFilters",
  data() {
    return {
      showAmount: false,
      showArea: false,
      showFloor: false,
      showBuildYear: false,
      showDealDate: false,
      amount: 50,
      area: 50,
      floor: 1,
      buildYear: "2022",
      dealDate: "2022-03",
    };
  },
  methods: {},
  watch: {},
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
</style>
