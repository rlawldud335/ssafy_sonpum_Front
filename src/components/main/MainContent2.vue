<template>
  <div>
    <v-row class="pt-1 pb-7" justify="center">
      <v-col class="col-10">
        <div class="main-tabs">
          <v-row class="pt-7">
            <v-col class="offset-2">
              <p class="main-tabs-title">어떤 집을 찾으시나요?</p>
              <v-row>
                <div class="main-tabs-item tab-active mx-1">
                  <p>시세</p>
                </div>
                <div class="main-tabs-item mx-1">
                  <p>매물</p>
                </div>
              </v-row>
            </v-col>
          </v-row>

          <v-row justify="center">
            <div class="col-3">
              <v-select
                rounded
                :items="items"
                label="시도 선택"
                solo
              ></v-select>
            </div>
            <div class="col-3">
              <v-select
                rounded
                :items="items"
                label="구군 선택"
                solo
              ></v-select>
            </div>
            <div class="col-3">
              <v-select rounded :items="items" label="동 선택" solo></v-select>
            </div>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "MainContent2",
  props: {
    attractionInfo: String,
  },
};
</script>

<style>
.main-tabs {
  margin: 30px;
  background: linear-gradient(45deg, #886fbf, #3876f2 70%);
  border-radius: 20px;
}

.main-tabs-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.main-tabs-item p {
  padding: 0;
  margin: 0;
  color: white;
  font-size: 0.9rem;
}

.tab-active {
  border-bottom: whitesmoke solid 3px;
}

.main-tabs-title {
  color: whitesmoke;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
