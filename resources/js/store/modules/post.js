import Post from "../../api/post";

const state = {
  posts: [],
  isLoading: true
};

const getters = {
  posts(state) {
    return state.posts;
  },

  isLoading(state) {
    return state.isLoading;
  }
};

const actions = {
  async FETCH_POSTS(context) {
    context.commit("SET_LOADING");
    try {
      const response = await Post.getAll();
      if (response && response.status === 200) {
        context.commit("FETCH_POSTS", response.data);
      }
    } catch (error) {
      throw new Error(error.response.data);
    }
  },

  async ADD_POST(context, payload) {
    try {
      axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

      const response = await Post.create(payload);
      if (response && response.status === 201) {
        context.commit("ADD_POST", response.data);
      }
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
};

const mutations = {
  SET_LOADING(state) {
    state.isLoading = true;
  },

  FETCH_POSTS(state, data) {
    state.posts = data;
    state.isLoading = false;
  },

  ADD_POST(state, data) {
    state.posts.unshift(data);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
