<template>
  <v-container style="height: 100%; padding-left: 10%; padding-right: 10%">
    <v-row style="height: 100%">
      <v-col cols="3">
        <div class="mypage-profile">
          <div class="mypage-profile-image"></div>
          <div class="mypage-user-name">userId</div>
          <div class="mypage-user-role">관리자</div>
        </div>

        <v-divider></v-divider>

        <div class="mypage-btns">
          <router-link :to="{ name: 'MyPageUserInfo' }">
            <v-btn class="mx-2" text> 회원정보 </v-btn>
          </router-link>

          <router-link :to="{ name: 'MyBookMark' }">
            <v-btn class="mx-2" text> 내가 북마크한 매물 </v-btn>
          </router-link>

          <router-link :to="{ name: 'MyHouseProduct' }">
            <v-btn class="mx-2" text> 내가 등록한 매물 </v-btn>
          </router-link>

          <router-link :to="{ name: 'MyHouseProductReview' }">
            <v-btn class="mx-2" text> 내가 등록한 매물 리뷰 </v-btn>
          </router-link>
        </div>
      </v-col>

      <v-col cols="9" style="border-left: 1px solid #dbdbdb">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import MyPageUserInfo from "@/components/mypage/MyPageUserInfo.vue";
export default {
  // components: { MyPageUserInfo },
};
</script>

<style>
.mypage-profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.mypage-user-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
}

.mypage-user-role {
  margin-bottom: 10px;
}

.mypage-profile-image {
  width: 100px;
  height: 100px;
  background-color: rgb(102, 102, 213);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  box-shadow: 0 5px 18px -7px rgba(0, 0, 0, 1);
}
.mypage-list-btn {
  padding: 10px;
  margin: 10px;
  border-radius: 15px;
}

.mypage-btns {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
}
.mypage-btns button {
  margin: 3px;
}
</style>
