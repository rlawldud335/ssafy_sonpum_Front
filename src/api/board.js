import { apiInstance } from "./index.js";

const api = apiInstance();

/* 공지사항 */
function noticeListArticle(params, success, fail) {
  console.log("## params: ", params);
  api.post(`/noticeBoard/list`, params).then(success).catch(fail);
}

export { noticeListArticle };
