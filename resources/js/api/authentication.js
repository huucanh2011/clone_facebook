export default {
  register(credentials) {
    return axios.post("/api/auth/register", credentials);
  },

  login(credentials) {
    return axios.post("/api/auth/login", credentials);
  },

  me() {
    return axios.get("/api/auth/me");
  },

  logout() {
    return axios.get("/api/auth/logout");
  }
};
