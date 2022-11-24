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
          background-color: #f7cf91;
          border-radius: 20px;
        "
      >
        <v-img
          :src="require('@/assets/img/house3.jpg')"
          style="width: 100%; height: 100%; border-radius: 20px"
          contain
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
          직접 지역에 방문하지 않고 SONPUM을 통해 <br />
          원하는 지역과 조건의 매물을 쉽게 찾아볼 수 있습니다!
        </div>
        <router-link :to="{ name: 'houseDeal' }">
          <v-btn color="#3876f2" class="white--text" width="100%">
            매물 보러 가기</v-btn
          >
        </router-link>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin: 70px 0px">
      <div
        style="
          width: 40%;
          height: 250px;
          background-color: #c7daeb;
          border-radius: 20px;
        "
      >
        <v-img
          :src="require('@/assets/img/money8.jpg')"
          style="width: 100%; height: 100%; border-radius: 20px"
          contain
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
          국토교통부 아파트 실거래가와 시세를 지도에서 한눈에!<br />
          원하는 지역의 아파트에 대한 거래내역 정보를 확인해보세요
        </div>
        <router-link :to="{ name: 'houseProduct' }" class="link">
          <v-btn color="#3876f2" class="white--text" width="100%">
            시세 보러 가기</v-btn
          >
        </router-link>
      </div>
    </div>

    <div style="display: flex; justify-content: center; margin: 70px 0px">
      <div
        style="
          width: 40%;
          height: 250px;
          background-color: #bca1e4;
          border-radius: 20px;
        "
      >
        <v-img
          :src="require('@/assets/img/community2.jpg')"
          style="width: 100%; height: 100%; border-radius: 20px"
          contain
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
        <div class="text-h5 font-weight-bold primary--text">3. 소통 하기</div>
        <div class="text-body-1 py-4">
          사람들과 자유롭게 정보를 공유하세요.<br />
          신종 전세 사기 수법 및 예방책을 공유하고 확인할 수 있습니다!
        </div>
        <router-link :to="{ name: 'boardReport' }" class="link">
          <v-btn color="#3876f2" class="white--text" width="100%">
            커뮤니티 보러 가기
          </v-btn>
        </router-link>
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
