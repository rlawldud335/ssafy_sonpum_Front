import { apiInstance } from "./index.js";

const api = apiInstance();
//const apiForm = apiFormInstance();

/* 시세, 아파트 거래내역 */
function sidoList(success, fail) {
  api.get(`/map/sido`).then(success).catch(fail);
}
function gugunList(sido, success, fail) {
  //api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
  api.get(`/map/gugun/${sido.sidoCode}`).then(success).catch(fail);
}
function dongList(gugun, success, fail) {
  api.get(`/map/dong/${gugun.gugunCode}`).then(success).catch(fail);
}
function addressList(dong, success, fail) {
  //api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
  api.get(`/houseProduct/address/${dong}`).then(success).catch(fail);
}
function houseDealList(params, success, fail) {
  //console.log("## 아파트 거래내역 검색조건: " + params.dongCode);
  console.log("## params: ", params);
  api.post(`/map/apt`, params).then(success).catch(fail);
}

export { sidoList, gugunList, dongList, addressList, houseDealList };
