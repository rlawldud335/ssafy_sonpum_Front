import axios from "axios";
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
function deleteHouseProduct(houseProductid, success, fail) {
  console.log("## houseProductid: ", houseProductid);
  api.delete(`/houseProduct/${houseProductid}`).then(success).catch(fail);
}

/* 마이페이지 - 매물 관련 */
function userProductList(userid, success, fail) {
  console.log("## userId: ", userid);
  api.get(`/mypage/product/${userid}`).then(success).catch(fail);
}
function reviewHouseProductList(writerUserid, success, fail) {
  console.log("## userId: ", writerUserid);
  api.get(`/mypage/review/${writerUserid}`).then(success).catch(fail);
}
function registerHouseProduct(inputProduct, success, fail) {
  console.log("## 매물 등록 params: ", inputProduct);

  const form = new FormData();
  form.append("userId", inputProduct.userId);
  form.append("floor", inputProduct.floor);
  form.append("addressId", inputProduct.addressId);
  form.append("buildYear", inputProduct.buildYear);
  form.append("dealAmount", inputProduct.dealAmount);
  form.append("area", inputProduct.area);
  form.append("dealType", inputProduct.dealType);
  form.append("content", inputProduct.content);
  form.append("files", inputProduct.files);

  axios
    .post("http://localhost:9999/vue/houseProduct/register", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(success)
    .catch(fail);
}

export {
  houseProductList,
  productDetail,
  userProductList,
  reviewHouseProductList,
  registerHouseProduct,
  deleteHouseProduct,
};
