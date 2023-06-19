import axios from "axios";
const API_URL = `http://127.0.0.1:5000/auth`;

export const register = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/register`, user)
      .then(response => {
        if (response.data.status) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          resolve({
            status: false,
            message: response.data.message
          });
        }
      })
      .catch(error => {
        if (error.response) {
          reject({
            status: false,
            message:error.response.data.message
          });
        } else {
          reject({
            status: false,
            message: error.message
          });
        }
      });
  });
}

export const login = (user) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}/login`, user)
      .then(response => {
        if (response.data.status) {
          resolve({
            status: true,
            data: response.data.data
          });
        } else {
          resolve({
            status: false,
            message: response.data.message
          });
        }
      })
      .catch(error => {
        if (error.response) {
          reject({
            status: false,
            message:error.response.data.message
          });
        } else {
          reject({
            status: false,
            message: error.message
          });
        }
      })
  })
}