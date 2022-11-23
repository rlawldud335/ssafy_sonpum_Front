import { noticeListArticle } from "@/api/board.js";

const boardStore = {
  namespaced: true,
  state: {
    notices: [],
    notice: null,
  },
  getters: {},
  mutations: {
    SET_NOTICE_LIST(state, notices) {
      state.notices = notices;
      console.log("# SET_NOTICE_LIST: ", notices);
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
  },
};

export default boardStore;
