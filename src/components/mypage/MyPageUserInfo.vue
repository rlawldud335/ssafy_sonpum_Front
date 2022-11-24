<template>
  <div class="mypage-userinfo-main">
    <div class="mypage-userinfo-title">
      <span>회원정보</span>
      <div>
        <v-btn class="primary mx-3">수정하기</v-btn>
        <v-btn @click="withdrawalExcutor()" class="error">탈퇴하기</v-btn>
      </div>
    </div>
    <div class="mypage-userinfo-content">
      <div class="user-info-layout">
        <p class="user-info-layout-title">ID</p>
        <p class="user-info-layout-content">
          {{ userInfo.userId }}
        </p>
      </div>
      <v-divider></v-divider>
      <div class="user-info-layout">
        <p class="user-info-layout-title">이름</p>
        <p class="user-info-layout-content">
          {{ userInfo.userName }}
        </p>
      </div>
      <v-divider></v-divider>
      <div class="user-info-layout">
        <p class="user-info-layout-title">이메일</p>
        <p class="user-info-layout-content">
          {{ userInfo.email }}
        </p>
      </div>
      <v-divider></v-divider>
      <div class="user-info-layout">
        <p class="user-info-layout-title">가입날짜</p>
        <p class="user-info-layout-content">2022 / 11 / 10</p>
      </div>
      <v-divider></v-divider>
      <div class="user-info-layout">
        <p class="user-info-layout-title">전화번호</p>
        <p class="user-info-layout-content">
          {{ userInfo.phoneNumber }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "MyPageUserInfo",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userWithdrawal"]),
    withdrawalExcutor() {
      this.userWithdrawal(this.userInfo.userId);
    },
  },
};
</script>

<style scoped>
.mypage-userinfo-main {
  padding: 20px;
}

.mypage-userinfo-title {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 1.1rem;
  font-weight: bold;
}

.mypage-userinfo-content {
  padding: 50px;
}

.user-info-layout {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.user-info-layout-title {
  font-size: 0.9rem;
  font-weight: bold;
  width: 40%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.user-info-layout-content {
  font-size: 1rem;
  width: 80%;
}
.v-application p {
  margin: 0px;
}
</style>
