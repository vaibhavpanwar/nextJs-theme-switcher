import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: process.env.BASE_URL,
});

const getToken = () => {
  try {
    const token = Cookies.get("auth-token");
    if (!!token) return token;
    return false;
  } catch (error) {
    return false;
  }
};

export const headerSetup = async () => {
  try {
    const token = await getToken();

    API.defaults.headers.common["Accept"] = "application/json";
    API.defaults.headers.common["Content-Type"] = "application/json";
    API.defaults.headers.common["Authorization Bearer"] = token ? token : "";
  } catch (err) {
    console.log(err);
  }
};

export const setAuthHeader = (token) => {
  try {
    API.defaults.headers.common["Authorization Bearer"] = token ? token : "";
  } catch (err) {
    console.log(err);
  }
};

export default API;
