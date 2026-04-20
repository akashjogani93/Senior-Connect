import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import toast from "react-hot-toast";
import { createFormData } from "../../utils/formData";
import { useAppointmentStore } from "../../store/appointmentStore";

function AppointmentsSeniorDashboard() {
    const { appointments, fetchappointmentsnew, bookAppointment } = useAppointmentStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    // Fetch only available slots
    useEffect(() => {
        fetchappointmentsnew({ user_id: user?.user_id });
    }, []);

    const handleBook = async (id) => {
        try {
            let payload = {
                appointment_id: id,
                user_id: user?.user_id,
            };

            const formData = createFormData(payload);

            await bookAppointment(formData);

           fetchappointmentsnew({ user_id: user?.user_id });

            toast.success("Appointment booked successfully");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="container appointment-container">
                <div className="main-page">
                <div className="appointment-table">
                <h4>Booked Appointments</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Provider</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.length === 0 ? (
                            <tr>
                                <td colSpan="4" style={{ textAlign: "center" }}>
                                    No Slots Available
                                </td>
                            </tr>
                        ) : (
                            appointments.map((app) => (
                                <tr key={app.appointment_id}>

                                    {/* DATE */}
                                    <td>
                                        {app.appointment_date
                                            ? new Date(app.appointment_date).toLocaleDateString("en-IN", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })
                                            : "-"}
                                    </td>

                                    {/* TIME */}
                                    <td>
                                        {app.appointment_time
                                            ? new Date(`1970-01-01T${app.appointment_time}`).toLocaleTimeString("en-IN", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                                hour12: true,
                                            })
                                            : "-"}
                                    </td>

                                    {/* PROVIDER */}
                                    <td>
                                        {app.provider_name}
                                    </td>
                                     <td>
                                        {app.status}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                </div>
                </div>

            </div>
        </div>
    );
}

export default AppointmentsSeniorDashboard;