import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/capfk",
    name: "capfk",
    component: () => import("../views/CapfkView.vue"),
  },
  {
    path: "/",
    name: "mainscreen",
    component: () => import("../views/MainScreenView.vue"),
  },
  {
    path: "/createuser",
    name: "createuser",
    component: () => import("../views/CreateUserView.vue"),
  },
  {
    path: "/equipmentitem",
    name: "equipmentitem",
    component: () => import("../views/EquipmentItemView.vue"),
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
