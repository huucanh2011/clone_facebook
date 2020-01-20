import "./bootstrap";
import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";

import App from "./App.vue";

import moment from "moment";

Vue.use(Vuex);

// const eventBus = new Vue();
// Vue.prototype.$eventBus = eventBus;

window.eventBus = new Vue()

Vue.filter("myDate", function(created) {
  return moment(created).fromNow();
});

const app = new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

export default app;
