import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index"),
    children: [
      { path: "/", redirect: "home" }, // 子路由默认路由
      { path: "home", neme: "Home", component: () => import("@/views/Home") }, // 首页
      {
        path: "produce",
        neme: "Produce",
        component: () => import("@/views/Produce")
      }, // 产品
      {
        path: "experience",
        neme: "Experience",
        component: () => import("@/views/Experience")
      }, // 体验
      {
        path: "document",
        neme: "Document",
        component: () => import("@/views/Document")
      }, // 文档
      {
        path: "community",
        neme: "Community",
        component: () => import("@/views/Community")
      }, // 社区
      {
        path: "solution",
        neme: "solution",
        component: () => import("@/views/Solution")
      } // 解决方案
    ]
  },
  { path: "/Test", neme: "Test", component: () => import("@/views/Test") }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
