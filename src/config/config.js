const hostname = window && window.location && window.location.hostname;

let backendHost = {
  getAPIUrl: () => {
    if (hostname === 'localhost') {
      return `http://localhost:8081/api`
    } else
      return 'http://54.89.153.255:8081/api'
  },
};
export { backendHost };

// export const API_URL = `http://localhost:8080/api`
