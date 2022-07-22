import axios from "axios";
import { backendHost as API_URL } from "../../config/config";


let ApiService = {
  get: (url, payload, headers, callback) => {
    axios
      .get(API_URL.getAPIUrl() + url, {
        params: payload,
        headers:
          headers === null
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        if (responseData) {
          callback && callback(responseData.data, null);
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          // if (error.response.data.detail !== "Not found.") {
          //   alert(error.response.data.detail);
          //   global.navigate("/");
          // }
          callback && callback(null, error.response.data);
        }
      });
  },

  post: (url, data, headers, callback) => {
    axios
      .post(API_URL.getAPIUrl() + url, data, {
        headers:
          (headers === null || Object.keys(headers).length === 0)
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        callback && callback(responseData.data, null, data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          if (error.response.data.detail === "Not found.") {
            alert(error.response.data.detail);
            global.navigate("/");
          }
          callback && callback(null, error.response.data, data);
        }
      });
  },
  del: (url, payload, headers, callback) => {
    axios
      .delete(API_URL.getAPIUrl() + url, {
        params: payload,
        headers:
          (headers === null || Object.keys(headers).length === 0)
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          callback && callback(null, error.response.data);
        }
      });
  },
  patch: (url, data, headers, callback) => {
    axios
      .patch(API_URL.getAPIUrl() + url, data, {
        headers:
          (headers === null || Object.keys(headers).length === 0)
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        callback && callback(responseData.data, null, data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          callback && callback(null, error.response.data, data);
        }
      });
  },

  put: (url, data, headers, callback) => {
    axios
      .put(API_URL.getAPIUrl() + url, data, {
        headers:
          (headers === null || Object.keys(headers).length === 0)
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate("/");
          }
          callback && callback(null, error.response.data);
        }
      });
  },
  patchFile: (url, data, headers, callback) => {
    axios
      .patch(API_URL.getAPIUrl() + url, data, {
        headers:
          (headers === null || Object.keys(headers).length === 0)
            ? {}
            : {
              Authorization: `${headers.Token}`,
            },
      })
      .then((responseData) => {
        callback && callback(responseData.data, null);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            window.location.replace("/");
            return;
          }
          if (error.response.data.detail) {
            alert(error.response.data.detail);
            global.navigate("/");
          }
          callback && callback(null, error.response.data);
        }
      });
  },
};

export default ApiService;
