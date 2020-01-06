export default {
  getAll() {
    return axios.get("/api/posts");
  },

  create(payload) {
    return axios.post("/api/posts", payload);
  },

  update(id, payload) {
    return axios.patch(`/api/posts/${id}`, payload);
  },

  delete(id) {
    return axios.delete(`/api/posts/${id}`);
  }
};
