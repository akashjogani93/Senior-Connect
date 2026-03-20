import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5002/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

// ✅ Request Interceptor (attach token)
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Response Interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("API Error:", error?.response?.data || error.message);

        // optional: auto logout on 401
        if (error?.response?.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;