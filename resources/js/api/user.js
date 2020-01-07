export default {
  getUser(id) {
    return axios.get(`/api/profile/${id}`);
  }
};
