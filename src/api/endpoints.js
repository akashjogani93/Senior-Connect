export const API = {
    AUTH: {
        LOGIN: "/login",
        REGISTER: "/register",
        FORGOT_PASSWORD: "/forgotPassword",
        VERIFY_OTP: "/otpVerification",
        RESET_PASSWORD: "/changePassword",
    },

    INVITATION: {
        LIST: "/invitation",
        ADD_UPDATE: "/invitation",
        DELETE: "/invitation/delete"
    },

    APPOINTMENTS:{
        CREATE_UPDATE:"/appointment",
        UPDATE_STATUS:"/appointmentUpdateStatus",
        BOOK_APPOINTMENT:"/bookAppointment",
        LIST:"/appointment",
    },

    SERVICE: {
        LIST: "/service",
    },

    SERVICE_REQUEST: {
        CREATE_UPDATE: "/serviceRequest",
        LIST: "/serviceList",
        UPDATE_STATUS: "/serviceUpdateStatus",
    },

    CHAT: {
        LIST: "/Chatlist",
        MESSAGES: "/chatMessages",
        SEND: "/chatSend",
    }

};