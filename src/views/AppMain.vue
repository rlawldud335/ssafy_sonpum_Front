<template>
  <v-container>
    <v-row class="pt-3" justify="center">
      <v-col class="col-3">
        <v-img
          class="rounded-lg"
          :src="require('../assets/img/main.gif')"
        ></v-img>
      </v-col>
      <v-card class="col-5" elevation="2"></v-card>
    </v-row>

    <v-row class="pt-2" justify="center">
      <v-card class="col-5" elevation="2"></v-card>
      <div class="col-3">
        <v-img
          class="rounded-lg"
          :src="require('../assets/img/main2.gif')"
        ></v-img>
      </div>
    </v-row>

    <v-row class="pt-3" justify="center">
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

    <v-row justify="center" class="py-10">
      <v-card class="col-7" rounded="lg">
        <v-row justify="center">
          <v-img
            src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
            :aspect-ratio="16 / 9"
            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
            class="elevation-2 col-7"
            style="border-radius: 8px 0px 0px 8px"
          >
          </v-img>

          <v-card-text class="col-5">
            <div class="text-h5 font-weight-bold primary--text">
              1. 매물 찾기
            </div>

            <div class="text-body-1 py-4">
              전세집을 찾는 첫번째 단계. 마음에 드는 집을 찾아보세요.
            </div>

            <v-btn color="error"> 매물 보러 가기</v-btn>
          </v-card-text>
        </v-row>
      </v-card>
    </v-row>

    <v-row justify="center" class="py-10">
      <v-card class="col-7" rounded="lg">
        <v-row justify="center">
          <v-img
            src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
            :aspect-ratio="16 / 9"
            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
            class="elevation-2 col-7"
            style="border-radius: 8px 0px 0px 8px"
          >
          </v-img>

          <v-card-text class="col-5">
            <div class="text-h5 font-weight-bold primary--text">
              2. 시세 찾기
            </div>

            <div class="text-body-1 py-4">
              전세집을 찾는 두번째 단계. 마음에 드는 집의 시세를 찾아보세요.
            </div>

            <v-btn color="error"> 매물 보러 가기</v-btn>
          </v-card-text>
        </v-row>
      </v-card>
    </v-row>

    <v-row justify="center" class="py-10">
      <v-card class="col-7" rounded="lg">
        <v-row justify="center">
          <v-img
            src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
            :aspect-ratio="16 / 9"
            gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
            class="elevation-2 col-7"
            style="border-radius: 8px 0px 0px 8px"
          >
          </v-img>

          <v-card-text class="col-5">
            <div class="text-h5 font-weight-bold primary--text">
              2. 시세 찾기
            </div>

            <div class="text-body-1 py-4"></div>

            <v-btn color="error"> 매물 보러 가기</v-btn>
          </v-card-text>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AppMain",
  props: {},
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
