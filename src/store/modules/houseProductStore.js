import { sidoList, gugunList, dongList } from "@/api/house.js";
import { houseProductList } from "@/api/houseProduct.js";

const houseProductStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "시도 선택" }],
    guguns: [{ value: null, text: "구군 선택" }],
    dongs: [{ value: null, text: "동 선택" }],
    products: [],
    filter: {},
  },
  getters: {},
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "시도 선택" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "구군 선택" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "동 선택" }];
    },
    CLEAR_PRODUCT_LIST(state) {
      state.products = [];
    },
    CLEAR_FILTER(state) {
      state.filter = {};
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach(function (code) {
        //console.log("# SET_SIDO_LIST: " + code.sidoCode + " " + code.sidoName);
        state.sidos.push({ value: code.sidoCode, text: code.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST(state, dongs) {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    SET_PRODUCT_LIST(state, products) {
      state.products = products;
    },
    SET_FILTER(state, filter) {
      state.filter = filter;
    },
  },
  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          console.log("# 시도코드 가져오기 성공");
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log("# actions - sidoList 에러: " + error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      console.log("# 구군 가져오기 - 시도코드: " + sidoCode);
      //const params = { sido: sidoCode };
      const params = { sidoCode };

      gugunList(
        params,
        ({ data }) => {
          console.log("# 구/군 코드 가져오기 성공");
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log("# actions - gugunList 에러: " + error);
        }
      );
    },
    getDong: ({ commit }, gugunCode) => {
      console.log("# 동 가져오기 - 구군코드: " + gugunCode);
      //const params = { gugun: gugunCode };
      const params = { gugunCode };

      dongList(
        params,
        ({ data }) => {
          console.log("# 동 코드 가져오기 성공");
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log("# actions - dongList 에러: " + error);
        }
      );
    },
    getProductList: ({ commit }, dongCode, key, word) => {
      const params = {
        dongCode,
        key,
        word,
      };
      houseProductList(
        params,
        ({ data }) => {
          console.log("# 매물 리스트 가져오기 성공");
          commit("SET_PRODUCT_LIST", data);
        },
        (error) => {
          console.log("# 매물 리스트 가져오기 실패" + error);
        }
      );
    },
  },
};

export default houseProductStore;
