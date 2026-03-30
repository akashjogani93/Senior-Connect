import { create } from "zustand";
import { postRequest, getRequest, deleteRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useInvitationStore = create((set) => ({
    invitations: [],
    loading: false,

    // 📌 LIST
    fetchInvitations: async () => {
        try {
            set({ loading: true });

            const res = await getRequest(API.INVITATION.LIST);

            set({
                invitations: res?.data?.data || [],
                loading: false,
            });
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // 📌 ADD / UPDATE
    addUpdateInvitation: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.INVITATION.ADD_UPDATE, payload);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // 📌 DELETE
    deleteInvitation: async (id) => {
        try {
            set({ loading: true });

            const res = await deleteRequest(`${API.INVITATION.DELETE}/${id}`);

            set({ loading: false });

            return res.data;
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },
}));