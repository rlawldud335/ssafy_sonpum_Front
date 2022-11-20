<template>
  <v-container class="py-0 fill-height">
    <router-link :to="{ name: 'main' }">
      <v-img
        contain
        max-height="50"
        max-width="130"
        :src="require('../assets/img/logo1.png')"
      ></v-img>
    </router-link>

    <v-spacer></v-spacer>

    <div>
      <router-link :to="{ name: 'houseDeal' }">
        <v-btn class="mx-2" text> 시세 </v-btn>
      </router-link>

      <router-link :to="{ name: 'houseProduct' }" class="link">
        <v-btn class="mx-2" text> 매물 </v-btn>
      </router-link>

      <router-link :to="{ name: 'boardReport' }" class="link">
        <v-btn class="mx-2" text> 사기 </v-btn>
      </router-link>
    </div>

    <span class="ml-2 mr-10">|</span>

    <v-btn @click="moveMyPage()">
      <v-badge top bordered color="red" offset-x="10" offset-y="10" dot>
        <v-avatar color="purple" size="27px">
          <span class="white--text text-h7">USR</span>
        </v-avatar>
      </v-badge>
      <span class="pl-1">김싸피 사용자</span>
    </v-btn>

    <div>
      <v-dialog v-model="loginDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ml-2 white--text" color="#3876f2" dark v-bind="attrs" v-on="on">
            로그인
          </v-btn>
        </template>
        <login-dialog v-on:close-login-dialog="closeLoginDialog"></login-dialog>
      </v-dialog>

      <v-dialog v-model="signUpDialog" max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="ml-2 error" dark v-bind="attrs" v-on="on"> 회원가입 </v-btn>
        </template>
        <sign-up-dialog v-on:close-signup-dialog="closeSignUpDialog"></sign-up-dialog>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import LoginDialog from "@/components/login/LoginDialog.vue";
import SignUpDialog from "@/components/signUp/SignUpDialog.vue";

export default {
  name: "TheHeaderNavbar",
  data() {
    return {
      loginDialog: false,
      signUpDialog: false,
    };
  },
  components: {
    LoginDialog,
    SignUpDialog,
  },
  computed: {},
  methods: {
    closeLoginDialog() {
      this.loginDialog = false;
    },
    closeSignUpDialog() {
      this.signUpDialog = false;
    },
    moveMyPage() {
      this.$router.push({ name: "MyPage" });
    },
  },
};
</script>

<style></style>
