import "./bootstrap";
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";

import App from "./App.vue";

Vue.use(Vuex);

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

export default app;
