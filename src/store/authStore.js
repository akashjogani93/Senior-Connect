import { create } from "zustand";
import { getRequest, postRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useAuthStore = create((set) => ({
    loading: false,
    services:[],
    register: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.AUTH.REGISTER, payload);
            set({ loading: false });

            return res.data; // return response
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    login: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.AUTH.LOGIN, payload);
            const user = res.data.data;
            const token = res.data.accessToken;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            set({
                user,
                token,
                loading: false,
            });
            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
    forgetpassword: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.AUTH.FORGOT_PASSWORD, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
    otpverification: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.AUTH.VERIFY_OTP, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
    changepassword: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.AUTH.RESET_PASSWORD, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
    logout: () => {
        localStorage.removeItem("token");

        set({
            user: null,
            token: null,
        });
        
    },

    fetchServices: async (params = {}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.SERVICE.LIST, params);
            console.log(res);
            set({
                services: res?.data?.data || [],
                loading: false,
            });
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
}));