import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",

  linkActiveClass: "active",

  routes: [
    {
      path: "/login",
      name: "login",
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
      component: () => import("../views/Home.vue")
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("../views/Profile.vue")
    }
  ]
});
