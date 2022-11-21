import { sidoList, gugunList, dongList, houseDealList } from "@/api/house.js";

const houseDealStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "시를 선택하세요" }],
    guguns: [{ value: null, text: "구/군을 선택하세요" }],
    dongs: [{ value: null, text: "동을 선택하세요" }],
    houses: [],
    house: null,
    searchKey: null,
    searchWord: null,
  },
  getters: {},
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "시를 선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "구/군을 선택하세요" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "동을 선택하세요" }];
    },
    CLEAR_APT_LIST(state) {
      state.houses = [];
      state.house = null;
    },
    CLEAR_SEARCH_KEY(state) {
      state.searchKey = null;
    },
    CLEAR_SEARCH_WORD(state) {
      state.searchWord = null;
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
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
      //console.log("# 아파트 거래내역 ", houses);
    },
    SET_DETAIL_HOUSE(state, house) {
      state.house = house;
    },
    SET_SEARCH_KEY(state, key) {
      state.searchKey = key;
    },
    SET_SEARCH_WORD(state, word) {
      state.searchWord = word;
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
    getHouseList: ({ commit }, dong) => {
      console.log("# 검색조건 가져오기 ", dong.dongCode, dong.key, dong.word);
      const params = {
        dongCode: dong.dongCode,
        key: dong.searchKey,
        word: dong.searchWord,
      };

      houseDealList(
        params,
        ({ data }) => {
          console.log("# 거래내역 가져오기 성공");
          commit("SET_HOUSE_LIST", data);
        },
        (error) => {
          console.log("# actions - houseDealList 에러: " + error);
        }
      );
    },
  },
};

export default houseDealStore;
