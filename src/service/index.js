import axios from "axios";
import * as localStorageUtil from "../utilities/localStorage";

const API = axios.create({
    baseURL: "https://api.jipeek.com/",
    headers: {
        "Content-Type": "application/json",
        Accept: "*/*"
    }
});

API.interceptors.request.use(async function (config) {
    const token = localStorageUtil.loadObject("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token.access}`;
    }

    return config;
});

export default API;
