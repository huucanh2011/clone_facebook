export default {
  like(payload) {
    return axios.post("/api/like", payload);
  },
  unlike(payload) {
    return axios.post("/api/unlike", payload);
  },
};
