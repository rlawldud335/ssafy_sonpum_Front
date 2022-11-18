import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "../views/AppMain.vue";
import AppHouseDeal from "../views/AppHouseDeal.vue";
import AppHouseProduct from "../views/AppHouseProduct.vue";
import AppBoardReport from "../views/AppBoardReport.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/houseDeal",
    name: "houseDeal",
    component: AppHouseDeal,
  }, {
    path: "/houseProduct",
    name: "houseProduct",
    component: AppHouseProduct
  },
  {
    path: "/boardReport",
    name: "boardReport",
    component: AppBoardReport
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
