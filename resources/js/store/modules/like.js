import Like from "../../api/like";

const state = {};

const getters = {};

const actions = {
  async LIKE_POST(context, payload) {
    try {
      const response = await Like.like(payload);
      if (response && response.status === 200) {
        console.log(response);
        context.dispatch('post/FETCH_POSTS', {}, {root: true})
      }
    } catch (error) {
      console.log(error.response.data);
      throw new Error(error.response.data);
    }
  }
};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
