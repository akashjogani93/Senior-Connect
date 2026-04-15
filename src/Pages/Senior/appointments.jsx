import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import { useInvitationStore } from "../../store/invitationStore";
import { createFormData } from "../../utils/formData";
import toast from "react-hot-toast";

function AppointmentsDashboard() {
    return (
        <div className="dashboard-page">
            <Navbar />
        </div>
    )
}

export default AppointmentsDashboard;