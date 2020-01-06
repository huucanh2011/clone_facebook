import axios from "axios";

import JwtService from "./jwt.service";
import { API_URL } from "./config";

axios.defaults.baseURL = API_URL;

const ApiService = {
  setHeader() {
    axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

    axios.defaults.headers.common["Accept"] = "application/json";

    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },

  callerApi(resource, method = "GET", payload) {
    return axios({
      method: method,
      url: resource,
      data: payload
    });
  },

  query(resource, params) {
    return axios.get(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  getAll(resource) {
    return axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  getOne(resource, id) {
    return axios.get(`${resource}/${id}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  update(resource, id, params) {
    return axios.patch(`${resource}/${id}`, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  delete(resource, id) {
    return axios.delete(`${resource}/${id}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  }
};

export default ApiService;
