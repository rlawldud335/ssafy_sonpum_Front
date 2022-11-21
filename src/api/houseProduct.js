import { apiInstance } from "./index.js";

const api = apiInstance();
//const apiForm = apiFormInstance();

function houseProductList(params, success, fail) {
  console.log("## 아파트 거래내역 검색조건: " + params.dongCode);
  console.log("## params: ", params);
  api.post(`/houseProduct/list`, params).then(success).catch(fail);
}

export { houseProductList };
