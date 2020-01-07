import Authentication from "../../api/authentication";
import JwtService from "../../utilities/jwt.service";

const state = {
  user: {},
  likes: [],
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },

  currentUserLike(state) {
    return state.likes;
  },

  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  REGISTER(context, credentials) {
    return new Promise((resolve, reject) => {
      Authentication.register(credentials)
        .then(response => {
          if (response && response.status === 200) {
            resolve(response);
          }
        })
        .catch(error => {
          if (error && error.response.status === 400) {
            reject(error);
          }
        });
    });
  },

  LOGIN(context, credentials) {
    return new Promise((resolve, reject) => {
      Authentication.login(credentials)
        .then(response => {
          if (response && response.status === 200) {
            context.commit("SET_AUTH", response.data);
            resolve(response);
          }
        })
        .catch(error => {
          if (
            error &&
            (error.response.status === 401 || error.response.status === 400)
          ) {
            reject(error);
          }
        });
    });
  },

  CHECK_AUTH(context) {
    if (JwtService.getToken()) {
      axios.defaults.headers.common["Accept"] = "application/json";

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${JwtService.getToken()}`;
      return new Promise((resolve, reject) => {
        Authentication.me()
          .then(response => {
            if (response && response.status === 200) {
              context.commit("SET_AUTH", response.data);
              resolve(response);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    } else {
      context.commit("PURGE_AUTH");
    }
  },

  LOGOUT(context) {
    Authentication.logout().then(response => {
      context.commit("PURGE_AUTH");
    });
  }
};

const mutations = {
  SET_AUTH(state, data) {
    state.isAuthenticated = true;
    state.user = data.user;
    state.likes = data.user.likes;
    JwtService.saveToken(data.access_token);
  },

  PURGE_AUTH(state) {
    state.isAuthenticated = false;
    state.user = null;
    JwtService.destroyToken();
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
