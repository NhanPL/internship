import axios from "axios";

const https = axios.create();

// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    const newConfig = config;
    newConfig.headers = {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": token ? `Bearer ${token}` : null,
    }
    return newConfig;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default https;