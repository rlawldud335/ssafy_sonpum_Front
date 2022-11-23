import {
  noticeListArticle,
  reportListArticle,
  detailReport,
} from "@/api/board.js";

const boardStore = {
  namespaced: true,
  state: {
    notices: [],
    notice: null,
    reports: [],
    report: null,
  },
  getters: {},
  mutations: {
    SET_NOTICE_LIST(state, notices) {
      state.notices = notices;
      console.log("# SET_NOTICE_LIST: ", notices);
    },
    SET_REPORT_LIST(state, reports) {
      state.reports = reports;
      console.log("# SET_REPORT_LIST: ", reports);
    },
    SET_DETAIL_REPORT(state, report) {
      state.report = report;
      console.log("# SET_REPORT_LIST: ", report);
    },
  },
  actions: {
    getNoticeList: ({ commit }, search) => {
      if (search != null && search != "") {
        const search = {
          key: "subject",
          word: search,
        };
      }
      console.log("# 공지사항 목록 - 검색조건: ", search);

      noticeListArticle(
        search,
        ({ data }) => {
          console.log("# 공지사항 목록 가져오기 성공: ", data);
          commit("SET_NOTICE_LIST", data);
        },
        (error) => {
          console.log("# 공지사항 목록 가져오기 Fail- ", error);
        }
      );
    },
    getReportArticleList: ({ commit }, params) => {
      if (params != null && params != "") {
        const params = {
          key: params.key,
          word: params.word,
        };
      }
      console.log("# 사기수법 목록 - 검색조건: ", params);

      reportListArticle(
        params,
        ({ data }) => {
          console.log("# 사기수법 게시글 목록 가져오기 성공 ", data);
          commit("SET_REPORT_LIST", data);
        },
        (error) => {
          console.log("# 사기수법 게시글 가져오기 Fail- ", error);
        }
      );
    },
    getDetailReportArticle: ({ commit }, report) => {
      console.log("# 사기수법 상세조회할 게시글 번호: ", report);

      detailReport(
        report.articleNo,
        ({ data }) => {
          console.log("# 사기수법 상세조회 data 가져오기 성공");
          commit("SET_DETAIL_PRODUCT", data);
        },
        (error) => {
          console.log("# 사기수법 상세조회 data 가져오기 Fail- ", error);
        }
      );
    },
  },
};

export default boardStore;