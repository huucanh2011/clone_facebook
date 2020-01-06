import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  linkActiveClass: "active",

  routes: [
    {
      path: "/login",
      name: "login",
      props: true,
      component: () => import("../views/Login.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
      beforeEnter: checkInfo
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("../views/Profile.vue"),
      beforeEnter: checkInfo
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

async function checkInfo(to, from, next) {
  await store.dispatch("authentication/CHECK_AUTH");
  next();
}
