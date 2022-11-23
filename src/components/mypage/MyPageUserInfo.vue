<template>
  <div class="myhouse-product-main">
    <div class="myhouse-product-title">
      <span>회원정보</span>
      <div>
        <p>ID {{ userInfo.userId }}</p>
        <p>이름 {{ userInfo.userName }}</p>
        <p>이메일 {{ userInfo.email }}</p>
        <p>가입날짜 {{ userInfo.joindate }}</p>
        <p>핸드폰 번호 {{ userInfo.phoneNumber }}</p>
        <!-- <p v-if="userInfo.role.equals('CORP')">신고 횟수 {{ userInfo.reportCount }}</p> -->
      </div>
      <div>
        <v-btn class="primary mx-3">수정하기</v-btn>
        <v-btn @click="withdrawalExcutor()" class="error">탈퇴하기</v-btn>
      </div>
    </div>

    <div>회원정보</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "MyPageUserInfo",
  components: {},
  data() {
    return {};
  },
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

<style>
.user-info-main {
  display: flex;
  background-color: #cbd4e5;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  box-shadow: 0 5px 18px -7px rgb(133, 133, 133);
}
.user-id {
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  font-size: 1.5rem;
  margin: 10px;
}

.user-profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3876f2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  color: white;
}
</style>
