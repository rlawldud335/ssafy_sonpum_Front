<template>
  <v-card>
    <v-card-title>
      <span class="headline">로그인</span>
      <v-spacer></v-spacer>
      <v-icon @click="closeLoginDialog">mdi-close</v-icon>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="ID"
              v-model="user.userId"
              required
              @keyup.enter="confirm"
            ></v-text-field>
          </v-col>
          <v-col v-if="isLoginError">ID 또는 Password를 확인해주세요</v-col>
          <v-col cols="12">
            <v-text-field
              label="Password"
              type="password"
              v-model="user.userPwd"
              required
              @keyup.enter="confirm"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <!-- <v-btn color="blue darken-1" text @click="closeLoginDialog">Login</v-btn> -->
      <v-btn color="blue darken-1" text @click="confirm">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "LoginDialog",
  data() {
    return {
      isLoginError: false,
      user: {
        userId: null,
        userPwd: null,
      },
    };
  },
  props: [],
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    async confirm() {
      await this.userConfirm(this.user);
      let token = sessionStorage.getItem("access-token");
      console.log("# access-token 확인: ", token);

      if (this.isLogin) {
        await this.getUserInfo(token);
        this.closeLoginDialog();
      }
    },
    closeLoginDialog() {
      this.$emit("close-login-dialog");
    },
  },
};
</script>
