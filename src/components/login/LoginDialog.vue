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
                  <v-text-field label="UserId" required></v-text-field>
                </v-col>
                
                <v-col cols="12">
                  <v-text-field label="Password" type="password" required></v-text-field>
                </v-col>

              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeLoginDialog">Login</v-btn>
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
      user: {
        userid: null,
        userpwd: null,
      }
    };
  },
  props: [],
  computed: {
    ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  },
  methods: {
    ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
    closeLoginDialog() { 
      this.$emit('close-login-dialog');
    },
  }
}
</script>