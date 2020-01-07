export default {
  like(payload) {
    return axios.post("/api/like", payload);
  },
};
