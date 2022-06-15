const hostname = window && window.location && window.location.hostname;

let backendHost = {
  getAPIUrl: () => {
   return 'http://localhost:8080/api'
  },
};
export { backendHost };

// export const API_URL = `http://localhost:8080/api`
