import { create } from "zustand";
import { postRequest, getRequest, deleteRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useInvitationStore = create((set) => ({
    invitations: [],
    loading: false,

    fetchInvitations: async (params={}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.INVITATION.LIST,params);

            set({
                invitations: res?.data?.data || [],
                loading: false,
            });
        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

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