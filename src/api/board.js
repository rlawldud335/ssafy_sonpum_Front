import { apiInstance } from "./index.js";

const api = apiInstance();

/* 공지사항 */
function noticeListArticle(params, success, fail) {
  console.log("## params: ", params);
  api.post(`/noticeBoard/list`, params).then(success).catch(fail);
}

/* 사기수법 */
function reportListArticle(params, success, fail) {
  console.log("## params: ", params);
  api.post(`/reportBoard/list`, params).then(success).catch(fail);
}
function detailReport(articleno, success, fail) {
  console.log("## articleno: ", articleno);
  api.get(`/reportBoard/${articleno}`).then(success).catch(fail);
}

export { noticeListArticle, reportListArticle, detailReport };
