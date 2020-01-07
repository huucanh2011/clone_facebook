import Vue from "vue";
import Vuex from "vuex";

import authentication from "./modules/authentication";
import post from "./modules/post";
import like from "./modules/like";
import user from "./modules/user";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    authentication,
    post,
    like,
    user
  },

  strict: debug
});
