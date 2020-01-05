import "./bootstrap";
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

import App from "./App.vue";

Vue.use(Vuex);

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

export default app;
