<template>
  <v-container>
    <div
      style="
        display: flex;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;
      "
    >
      <v-img
        contain
        max-height="80"
        max-width="300"
        :src="require('@/assets/img/HOW_TO_USE_SONPUM.png')"
      ></v-img>
    </div>

    <div style="display: flex; justify-content: center; margin: 70px 0px">
      <div
        style="
          width: 40%;
          height: 250px;
          background-color: gray;
          border-radius: 20px;
        "
      >
        <v-img
          :src="require('@/assets/img/house.jpg')"
          style="width: 100%; height: 100%; border-radius: 20px"
        ></v-img>
      </div>
      <div
        style="
          width: 30%;
          height: 250px;
          margin-left: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 10px;
        "
      >
        <div class="text-h5 font-weight-bold primary--text">1. 매물 찾기</div>
        <div class="text-body-1 py-4">
          빠르게 원하는 조건의 아파트 매물을 찾아보세요!
        </div>
        <v-btn color="#3876f2" class="white--text"> 매물 보러 가기</v-btn>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin: 70px 0px">
      <div
        style="
          width: 40%;
          height: 250px;
          background-color: gray;
          border-radius: 20px;
        "
      >
        <v-img
          :src="require('@/assets/img/money.jpg')"
          style="width: 100%; height: 100%; border-radius: 20px"
        ></v-img>
      </div>
      <div
        style="
          width: 30%;
          height: 250px;
          margin-left: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 10px;
        "
      >
        <div class="text-h5 font-weight-bold primary--text">2. 시세 찾기</div>
        <div class="text-body-1 py-4">
          원하는 지역을 선택하여 최근 아파트 거래내역을 살펴보세요!
        </div>
        <v-btn color="#3876f2" class="white--text"> 시세 보러 가기</v-btn>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin: 70px 0px">
      <div
        style="
          width: 40%;
          height: 250px;
          background-color: gray;
          border-radius: 20px;
        "
      ></div>
      <div
        style="
          width: 30%;
          height: 250px;
          margin-left: 60px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 10px;
        "
      >
        <div class="text-h5 font-weight-bold primary--text">3. 사기 찾기</div>
        <div class="text-body-1 py-4">
          It should work with colors defined in your theme as well e.g.
          primary--text and similar.
        </div>
        <v-btn color="#3876f2" class="white--text"> 사기 보러 가기</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MainContent3",
  props: {
    attractionInfo: String,
  },
};
</script>
