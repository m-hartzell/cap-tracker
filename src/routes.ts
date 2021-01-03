import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "./pages/Home.vue";
import CapList from "./pages/CapList.vue";
import CapAdd from "./pages/CapAdd.vue";
import CapDetail from "./pages/CapDetail.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/:capId/detail",
        component: CapDetail,
      },
      {
        path: "/:capId/add",
        component: CapAdd,
      },
    ],
  },
  {
    path: "/list",
    component: CapList,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
