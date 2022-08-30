import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject;
  }
);

axios.interceptors.request.use(
  (res) => {
    console.log(res);
    return res;
  },
  (err) => {
    console.log(err);
    return Promise.reject;
  }
);

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export default http;
