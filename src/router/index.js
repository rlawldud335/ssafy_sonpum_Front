import Vue from "vue";
import VueRouter from "vue-router";
import AppMain from "../views/AppMain.vue";
import AppHouseDeal from "../views/AppHouseDeal.vue";
import AppHouseProduct from "../views/AppHouseProduct.vue";
import AppBoardReport from "../views/AppBoardReport.vue";
import AppMyPage from "@/views/AppMyPage.vue";
import BoardReportList from "@/components/boardReport/BoardReportList";
import BoardReportWrite from "@/components/boardReport/BoardReportWrite.vue";
import BoardReportDetail from "@/components/boardReport/BoardReportDetail";
import BoardReportUpdate from "@/components/boardReport/BoardReportUpdate";
import MyPageUserInfo from "@/components/mypage/MyPageUserInfo";
import MyHouseProduct from "@/components/mypage/MyHouseProduct";
import MyHouseProductReview from "@/components/mypage/MyHouseProductReview";
import MyBookMark from "@/components/mypage/MyBookMark";
import AppHouseProductDetail from "@/views/AppHouseProductDetail";

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
  },
  {
    path: "/houseProduct",
    name: "houseProduct",
    component: AppHouseProduct,
  },
  {
    path: "/houseProductDetail/:productId",
    name: "houseProductDetail",
    component: AppHouseProductDetail,
  },
  {
    path: "/boardReport",
    name: "boardReport",
    component: AppBoardReport,
    redirect: "/boardReport/list",
    children: [
      {
        path: "list",
        name: "BoardReportList",
        component: BoardReportList,
      },
      {
        path: "write",
        name: "BoardReportWrite",
        component: BoardReportWrite,
      },
      {
        path: "detail/:articleno",
        name: "BoardReportDetail",
        component: BoardReportDetail,
      },
      {
        path: "update/:articleno",
        name: "BoardReportUpdate",
        component: BoardReportUpdate,
      },
    ],
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: AppMyPage,
    redirect: "/mypage/userinfo",
    children: [
      {
        path: "userinfo",
        name: "MyPageUserInfo",
        component: MyPageUserInfo,
      },
      {
        path: "bookmark",
        name: "MyBookMark",
        component: MyBookMark,
      },
      {
        path: "houseproduct",
        name: "MyHouseProduct",
        component: MyHouseProduct,
      },
      {
        path: "review",
        name: "MyHouseProductReview",
        component: MyHouseProductReview,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
