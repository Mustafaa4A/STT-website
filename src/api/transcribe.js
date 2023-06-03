import axios from "axios";
import { getUserData } from "utils/auth";
const API_URL = "http://127.0.0.1:5000/transcribe/";

export const transcribeAudio = (file) => {
  return new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append("file", file);
    const { token } = getUserData();

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "token": token
      }
    };
    axios.post(`${API_URL}`, formData, config)
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
            message: error.response.data.message
          });
        } else {
          reject({
            status: false,
            message: error.message
          });
        }
      });
  });
};