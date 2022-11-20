<template>
    <v-card>
      <V-form ref="form" lazy-validation>
        <v-card-title>
          <span class="text-h5">회원가입</span>
          <v-spacer></v-spacer>
            <v-icon @click="closeSignUpDialog">mdi-close</v-icon>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-radio-group
      v-model="user.role"
      row
    >
      <v-radio
        label="회원"
        value="USER"
      ></v-radio>
      <v-radio
        label="기업 회원"
        value="CORP"
      ></v-radio>
    </v-radio-group>

                <v-col
                cols="12">
                <v-text-field
                  label="userId*"
                  required
                  :rules="rules.userIdRule"
                  v-model="user.userId"
                  :error-messages="errors"
                  @keyup="idCheck"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12">
                <v-text-field
                  label="userName*"
                  :rules="rules.userNameRule"
                  required
                  v-model="user.userName"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  :rules="rules.userPwdRule"
                  v-model="user.userPwd"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
              >
                <v-text-field
                  label="Email*"
                  required
                  v-model="user.email"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="Phone"
                  required
                  v-model="user.phoneNumber"
                ></v-text-field>
              </v-col>
              
              
              
              
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="signupUser"
          >
            SIGNUP
          </v-btn>
        </v-card-actions>
      </V-form>
      </v-card>
</template>

<script>
import { userIdCheck,registerUser } from "@/api/user.js";

export default {
  name: "SignUpDialog",
  data() {
    return {
      user: {
        userId : "",
        userName : "",
        userPwd: "",
        email: "",
        phoneNumber: "",
        role : "USER",
      },
      rules: {
        userIdRule: [
        v => !!v || '아이디는 필수 입력사항입니다.',
        v => /^[a-zA-Z0-9]*$/.test(v) || '아이디는 영문+숫자만 입력 가능합니다.',
        v => !( v && v.length >= 15) || '아이디는 15자 이상 입력할 수 없습니다.',
        ],
        userNameRule: [
        v => !!v || '이름은 필수 입력사항입니다.',
        v => !(v && v.length >= 30) || '이름은 30자 이상 입력할 수 없습니다.',
        v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
        ],
        userPwdRule: [
        v => !!v || '비밀번호는 필수 입력사항입니다.',
        v => !(v && v.length < 8) || '비밀번호는 8자 이상 입력해야 합니다.',
        v => /[~!@#$%^&*()_+|<>?:{}]/.test(v) || '비밀번호에는 특수문자를 하나 이상 포함해야 합니다.'
        ],
      },
      errors:[]
    };
  },
  methods: {
    closeSignUpDialog() { 
      this.$emit('close-signup-dialog');
    },
    idCheck() { 
      if (this.user.userId) { 
        userIdCheck(this.user.userId,
        ({data}) => {
          this.errors = data == 'fail' ? ['중복된 아이디'] :[]; },
        () => { this.errors=['통신에러']})
      }
    },
    signupUser() { 
      const validate = this.$refs.form.validate();
      if (validate) {
        registerUser(this.user, ({ data }) => {
          if (data == "success") {
            this.closeSignUpDialog();
            alert("가입성공!");
          } else {
            alert("가입실패!");
          }
        }, () => { console.log("error") })
      }
    }
  }
}
</script>