import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// module import
import memberStore from "@/store/modules/memberStore";
import houseDealStore from "@/store/modules/houseDealStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    memberStore,
    houseDealStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // modules: {
  //   memberStore,
  // },
});
