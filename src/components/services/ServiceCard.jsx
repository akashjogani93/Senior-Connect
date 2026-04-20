import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppointmentModal from "../Modal/AppointmentModal";
import toast from "react-hot-toast";
import ServiceRequestModal from "../Modal/ServiceRequestModal";

export default function ServiceCard({ service }) {

    const [open, setOpen] = useState(false);
    const [requestOpen, setRequestOpen] = useState(false);
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user")) || null;

    const handleBookClick = () => {
        // ❌ Not logged in
        if (!user) {
            navigate("/login");
            return;
        }

        // ❌ Not senior
        if (user.role !== "senior") {
            toast.error("Only senior users can book appointments");
            return;
        }

        // ✅ Allowed
        setOpen(true);
    };

    const handleRequestClick = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        if (user.role !== "senior") {
            toast.error("Only senior users can send requests");
            return;
        }

        setRequestOpen(true);
    };

    const handleChatClick = () => {
        if (!user) {
            navigate("/login");
            return;
        }
        if (user.role !== "senior") {
            toast.error("Only senior users can send requests");
            return;
        }

        navigate(`/senior/messages/${service.user_id}`);
    };

    return (
        <>
            <div className="service-card">

                <div className="card-top">
                    <span className="category">{service.business_type}</span>
                    <span className="status">{service.city}</span>
                </div>

                <h2>{service.name}</h2>
                <p className="address">{service.address}</p>
                <p className="phone">{service.phone}</p>

                <div className="card-buttons">

                    {/* 🏥 Hospital → Book */}
                    {service.business_type === "hospital" && (
                        <button className="btn blue" onClick={handleBookClick}>
                            Book
                        </button>
                    )}

                    {/* 🧑 Caretaker & 🏥 Medical Store → Request */}
                    {(service.business_type === "caretaker" || service.business_type === "medical_store") && (
                        <button className="btn green" onClick={handleRequestClick}>
                            Request
                        </button>
                    )}

                    {/* 💬 Volunteer → Chat */}
                    {service.business_type === "volunteer" && (
                        <button className="btn orange" onClick={handleChatClick}>
                            Chat
                        </button>
                    )}
                </div>

            </div>

            {open && (
                <AppointmentModal
                    provider_id={service.user_id}
                    onClose={() => setOpen(false)}
                />
            )}

            {requestOpen && (
                <ServiceRequestModal
                    provider_id={service.user_id}
                    service_type={service.business_type}
                    onClose={() => setRequestOpen(false)}
                />
            )}
        </>
    );
}