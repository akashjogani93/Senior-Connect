import { create } from "zustand";
import { postRequest, getRequest, deleteRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useAppointmentStore = create((set) => ({
    appointments: [],
    loading: false,

    createUpdateAppointments: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.APPOINTMENTS.CREATE_UPDATE, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    fetchappointmentsnew: async (params = {}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.APPOINTMENTS.LIST, params);

            set({
                appointments: res?.data?.data || [],
                loading: false,
            });
        } catch (error) {
            set({ loading: false });
            throw error;
        } 
    },
    updateAppointmentStatus: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.APPOINTMENTS.UPDATE_STATUS, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
    bookAppointment: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.APPOINTMENTS.BOOK_APPOINTMENT, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

}));