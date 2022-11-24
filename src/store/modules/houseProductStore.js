import { sidoList, gugunList, dongList } from "@/api/house.js";
import {
  houseProductList,
  productDetail,
  userProductList,
  reviewHouseProductList,
  registerHouseProduct,
  deleteHouseProduct,
  reviewProduct,
  //reviewProductList,
} from "@/api/houseProduct.js";

const houseProductStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "시도 선택" }],
    guguns: [{ value: null, text: "구군 선택" }],
    dongs: [{ value: null, text: "동 선택" }],
    products: [],
    product: null,
    userProducts: [],
    userReviews: [],
    searchKey: null,
    searchWord: null,
    reviews: [],
  },
  getters: {
    // ! for. 마커
    products(state) {
      return state.product;
    },
  },
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
      state.product = null;
    },
    CLEAR_USER_PRODUCT_LIST(state) {
      state.userProducts = [];
    },
    CLEAR_USER_REVIEW_LIST(state) {
      state.userReviews = [];
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
    SET_PRODUCT_LIST(state, products) {
      state.products = products;
      console.log("# 아파트 매물: ", products);
    },
    SET_USER_PRODUCT_LIST(state, userProducts) {
      state.userProducts = userProducts;
      console.log("# USER가 등록한 매물: ", userProducts);
    },
    SET_USER_REVIEW_LIST(state, userReviews) {
      state.userReviews = userReviews;
      console.log("# USER가 등록한 리뷰: ", userReviews);
    },
    SET_SEARCH_KEY(state, key) {
      state.searchKey = key;
    },
    SET_SEARCH_WORD(state, word) {
      state.searchWord = word;
    },
    SET_DETAIL_PRODUCT(state, product) {
      state.product = product;
      console.log("# SET_DETAIL_PRODUCT: ", product);
    },
    ADD_USER_PRODUCT_LIST(state, product) {
      //state.userProducts = [];
      state.userProducts.push(product);
      console.log("# ADD_USER_PRODUCT_LIST: ", product);
    },
    SET_REVIEW_LIST(state, reviews) {
      state.reviews = reviews;
      console.log("# SET_REVIEW_LIST: ", reviews);
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
    getProductList: ({ commit }, dong) => {
      console.log("# 검색조건 가져오기 ", dong.dongCode, dong.key, dong.word);
      const params = {
        dongCode: dong.dongCode,
        key: dong.key,
        word: dong.word,
      };

      houseProductList(
        params,
        ({ data }) => {
          console.log("# 매물 리스트 가져오기 성공");
          console.log(data);
          commit("SET_PRODUCT_LIST", data);
        },
        (error) => {
          console.log("# 매물 리스트 가져오기 실패" + error);
        }
      );
    },
    detailProduct: ({ commit }, product) => {
      //commit("SET_DETAIL_PRODUCT", product);
      console.log("# 상세조회할 매물번호 - ", product.houseProductId);

      productDetail(
        product,
        ({ data }) => {
          console.log("# 매물 상세조회 data 가져오기 성공");
          data.houseProductId = product.houseProductId;
          commit("SET_DETAIL_PRODUCT", data);
        },
        (error) => {
          console.log("# 매물 상세조회 data 가져오기 실패 ", error);
        }
      );
    },
    getUserProduct: ({ commit }, userId) => {
      console.log("# 매물 목록을 조회할 USER: ", userId);

      userProductList(
        userId,
        ({ data }) => {
          console.log("# USER가 등록한 매물 목록 가져오기 성공");
          commit("SET_USER_PRODUCT_LIST", data);
        },
        (error) => {
          console.log("# USER가 등록한 매물 목록 가져오기 Fail-", error);
        }
      );
    },
    getUserReview: ({ commit }, userId) => {
      console.log("# 리뷰를 조회할 USER: ", userId);

      reviewHouseProductList(
        userId,
        ({ data }) => {
          console.log("# USER가 등록한 리뷰 목록 가져오기 성공");
          commit("SET_USER_REVIEW_LIST", data);
        },
        (error) => {
          console.log("# USER가 등록한 리뷰 가져오기 Fail-", error);
        }
      );
    },
    registerProduct: ({ commit }, product) => {
      console.log("# 등록할 매물: ", product);
      const userId = product.userId;

      registerHouseProduct(
        product,
        ({ data }) => {
          console.log("# 매물 등록 성공 ", data);

          // 매물 목록 불러오기
          userProductList(
            userId,
            ({ data }) => {
              console.log("# USER가 등록한 매물 목록 가져오기 성공");
              commit("SET_USER_PRODUCT_LIST", data);
            },
            (error) => {
              console.log("# USER가 등록한 매물 목록 가져오기 Fail-", error);
            }
          );
        },
        (error) => {
          console.log("# 매물 등록 FAil- ", error);
        }
      );
    },
    deleteProduct: ({ commit }, houseProductid) => {
      console.log("# 삭제할 매물ID: ", houseProductid);
      
      deleteHouseProduct(
        houseProductid,
        ({ data }) => {
          console.log("# 매물 삭제 성공 ", data);
          const params = {
            dongCode: this.product.dongCode,
            key: "",
            word: "",
          };
    
          houseProductList(
            params,
            ({ data }) => {
              console.log("# 매물 리스트 가져오기 성공");
              console.log(data);
              // 검색조건 clear
              commit("CLEAR_SEARCH_KEY", null);
              commit("CLEAR_SEARCH_WORD", null);
              commit("SET_PRODUCT_LIST", data);
            },
            (error) => {
              console.log("# 매물 리스트 가져오기 실패" + error);
            }
          );
        },
        (error) => {
          console.log("# 매물 삭제 Fail- ", error);
        }
      );
    },
    writeProductReview: ({ commit }, review) => {
      console.log("# 작성할 review: ", review);

      reviewProduct(
        review,
        ({ data }) => {
          console.log("# review 작성 성공 ", data);
          commit();
          // review 목록
          // reviewProductList(
          //   review.houseProductId,
          //   ({ data }) => {
          //     console.log("# 리뷰 리스트 가져오기 성공", data);
          //     commit("SET_REVIEW_LIST", data);
          //   },
          //   (error) => {
          //     console.log("# 리뷰 리스트 가져오기 Fail- ", error);
          //   }
          // );
        },
        (error) => {
          console.log("# review 작성 Fail-  ", error);
        }
      );
    }
  },
};

export default houseProductStore;
