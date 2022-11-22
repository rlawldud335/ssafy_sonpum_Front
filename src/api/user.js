import { apiInstance } from "./index.js";

const api = apiInstance();

/* 로그인, 회원가입 */
async function login(user, success, fail) {
  console.log("## 로그인 params: ", user);
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userId, success, fail) {
  console.log("## 회원 token 받아오기: ", userId);
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userId}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  console.log("## 회원 token 재발급: ", user);
  // asxios header에 refresh-token 세팅
  api.defaults.headers["refresh-token"] =
    sessionStorage.getItem("refresh-token");
  await api.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  console.log("## logout : ", userid);
  await api.get(`/user/logout/${userid}`).then(success).catch(fail);
}

async function userIdCheck(userid, success, fail) {
  await api.get(`/user/idCheck/${userid}`).then(success).catch(fail);
}

async function registerUser(user, success, fail) {
  await api.post(`/user/register`, user).then(success).catch(fail);
}

export {
  login,
  findById,
  tokenRegeneration,
  logout,
  userIdCheck,
  registerUser,
};
