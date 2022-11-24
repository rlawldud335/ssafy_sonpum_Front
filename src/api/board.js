import axios from "axios";
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
function reportWriteArticle(report, success, fail) {
  console.log("## 사기수법 게시글 등록 params: ", report);

  const form = new FormData();
  form.append("userId", report.userId);
  form.append("subject", report.subject);
  form.append("content", report.content);
  form.append("files", report.files);

  axios
    .post("http://localhost:9999/vue/reportBoard/", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then(success)
    .catch(fail);
}

export {
  noticeListArticle,
  reportListArticle,
  detailReport,
  reportWriteArticle,
};
