import axiosInstance from "./axios";

// GET
export const getRequest = (url, params = {}) => {
    return axiosInstance.get(url, { params });
};

// POST
export const postRequest = (url, data = {}, config = {}) => {
    return axiosInstance.post(url, data, config);
};

// PUT
export const putRequest = (url, data = {}) => {
    return axiosInstance.put(url, data);
};

// DELETE
export const deleteRequest = (url) => {
    return axiosInstance.delete(url);
};