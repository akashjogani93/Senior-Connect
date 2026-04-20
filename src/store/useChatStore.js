import { create } from "zustand";
import { postRequest, getRequest } from "../api/services";
import { API } from "../api/endpoints";

export const useChatStore = create((set) => ({

    conversations: [],
    messages: [],
    loading: false,

    // ✅ Fetch conversation list (left sidebar)
    fetchConversations: async (params = {}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.CHAT.LIST, params);

            set({
                conversations: res?.data?.data || [],
                loading: false,
            });

        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // ✅ Fetch messages between 2 users
    fetchMessages: async (params = {}) => {
        try {
            set({ loading: true });

            const res = await getRequest(API.CHAT.MESSAGES, params);

            set({
                messages: res?.data?.data || [],
                loading: false,
            });

        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

    // ✅ Send message
    sendMessage: async (payload) => {
        try {
            set({ loading: true });

            const res = await postRequest(API.CHAT.SEND, payload);

            set({ loading: false });

            return res.data;

        } catch (error) {
            set({ loading: false });
            throw error;
        }
    },

}));