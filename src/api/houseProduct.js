import { apiInstance } from "./index.js";

const api = apiInstance();

/* 아파트 매물 */
function houseProductList(params, success, fail) {
  //console.log("## 아파트 거래내역 검색조건: " + params.dongCode);
  console.log("## params: ", params);
  api.post(`/houseProduct/list`, params).then(success).catch(fail);
}
function productDetail(product, success, fail) {
  console.log("## product: ", product);
  api.get(`/houseProduct/${product.houseProductId}`).then(success).catch(fail);
}

/* 마이페이지 - 매물 관련 */
function userProductList(userid, success, fail) {
  console.log("## userId: ", userid);
  api.get(`/mypage/product/${userid}`).then(success).catch(fail);
}

export { houseProductList, productDetail, userProductList };
