/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router";
import CapfkView from "../views/CapfkView.vue";

const routes = [
  {
    path: "/capfk",
    name: "home",
    component: CapfkView,
  },
  {
    path: "/equipment",
    name: "equipment",
    component: () => import("../views/EquipmentView.vue"),
  },
  {
    path: "/department",
    name: "department",
    component: () => import("../views/DepartmentView.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/createuser",
    name: "createuser",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CreateUserView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
