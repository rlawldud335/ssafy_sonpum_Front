import { apiInstance } from "./index.js";

const api = apiInstance();

async function userIdCheck(userid,success, fail) { 
  await api.get(`/user/idCheck/${userid}`).then(success).catch(fail);
}

async function registerUser(user, success, fail) { 
  await api.post(`/user/register`, user).then(success).catch(fail);
}

export { userIdCheck,registerUser };
