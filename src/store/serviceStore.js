import { create } from "zustand";
import { postRequest, getRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useServiceRequestStore = create((set) => ({
    serviceRequests: [],
    loading: false,

    // ✅ Create / Update Request
    createUpdateServiceRequest: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.SERVICE_REQUEST.CREATE_UPDATE, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // ✅ Fetch Requests (Senior + Provider)
    fetchServiceRequests: async (params = {}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.SERVICE_REQUEST.LIST, params);

            set({
                serviceRequests: res?.data?.data || [],
                loading: false,
            });

        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // ✅ Update Status (Provider)
    updateServiceRequestStatus: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.SERVICE_REQUEST.UPDATE_STATUS, payload);

            set({ loading: false });

            return res.data;

        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

}));