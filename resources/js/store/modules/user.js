import User from "../../api/user";

const state = {
  user: {},
  posts: []
};

const getters = {
  user(state) {
    return state.user;
  },
  postsUser(state) {
    return state.posts;
  }
};

const actions = {
  async GET_USER_PROFILE(context, id) {
    try {
      const response = await User.getUser(id);
      if (response && response.status === 200) {
        context.commit("USER_PROFILE", response.data.user);
        context.commit("USER_POSTS", response.data.posts);
      }
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
};

const mutations = {
  USER_PROFILE(state, data) {
    state.user = data;
  },

  USER_POSTS(state, posts) {
    state.posts = posts;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
