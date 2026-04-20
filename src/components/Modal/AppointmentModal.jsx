import { useEffect, useState } from "react";
import { useAppointmentStore } from "../../store/appointmentStore";
import { createFormData } from "../../utils/formData";
import toast from "react-hot-toast";
import "../../assets/css/senior/appintments.css";
export default function AppointmentModal({ provider_id, onClose }) {

    const { fetchappointmentsnew, appointments, bookAppointment } = useAppointmentStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const [selectedSlot, setSelectedSlot] = useState(null);

    // Fetch available slots for this hospital
    useEffect(() => {
        fetchappointmentsnew({
            provider_id: provider_id,
            status: "Available",
            latest:true
        });
    }, [provider_id]);

    const handleBook = async () => {
        if (!selectedSlot) {
            toast.error("Please select a slot");
            return;
        }

        try {
            const payload = {
                appointment_id: selectedSlot,
                user_id: user?.user_id
            };

            const formData = createFormData(payload);

            await bookAppointment(formData);

            toast.success("Appointment booked");

            setSelectedSlot(null);   // ✅ reset
            onClose();

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                <div className="modal-header">
                    <h3>Select Appointment Slot</h3>
                    <button className="modal-close" onClick={onClose}>✖</button>
                </div>

                <div className="slots">

                    {appointments.length === 0 ? (
                        <p>No slots available</p>
                    ) : (
                        appointments.map((app) => (
                            <div
                                key={app.appointment_id}
                                className={`slot ${selectedSlot === app.appointment_id ? "active" : ""}`}
                                onClick={() => setSelectedSlot(app.appointment_id)}
                            >
                                <p>
                                    {new Date(app.appointment_date).toLocaleDateString("en-IN")}
                                </p>
                                <p>
                                    {new Date(`1970-01-01T${app.appointment_time}`).toLocaleTimeString("en-IN", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        hour12: true
                                    })}
                                </p>
                            </div>
                        ))
                    )}

                </div>

                <div className="modal-actions">
                    <button
                        className="btn green"
                        onClick={handleBook}
                        disabled={!selectedSlot}
                    >
                        Confirm Booking
                    </button>

                    <button className="btn red" onClick={onClose}>
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}