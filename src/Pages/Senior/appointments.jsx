import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import { useInvitationStore } from "../../store/invitationStore";
import { createFormData } from "../../utils/formData";
import toast from "react-hot-toast";
import { useAppointmentStore } from "../../store/appointmentStore";

function AppointmentsDashboard() {

    const { createUpdateAppointments, loading, fetchappointmentsnew, appointments, updateAppointmentStatus } = useAppointmentStore();
    const user = JSON.parse(localStorage.getItem("user")) || {};
    const [form, setForm] = useState({
        appointment_date: "",
        appointment_time: "",
    });

    useEffect(() => {
        fetchappointmentsnew({ provider_id: user?.user_id });
    }, [user?.user_id]);



    const [editId, setEditId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let payload = {
                ...form,
                provider_id: user?.user_id,
            };

            if (editId) {
                payload.appointment_id = editId;
            }

            const formData = createFormData(payload);

            let result = await createUpdateAppointments(formData);
            fetchappointmentsnew({ provider_id: user?.user_id });

            toast.success(`Slot ${editId ? "updated" : "added"} successfully`);

            setForm({
                appointment_date: "",
                appointment_time: "",
            });

            setEditId(null);
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (app) => {
        setForm({
            appointment_date: app.appointment_date,
            appointment_time: app.appointment_time,
        });

        setEditId(app.appointment_id);
    };

    const handleStatusChange = async (id, status) => {
        try {
            let payload = {
                appointment_id: id,
                status: status
            };

            const formData = createFormData(payload);

            await updateAppointmentStatus(formData);

            fetchappointmentsnew({ provider_id: user?.user_id });

            toast.success(`Appointment ${status}`);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="container appointment-container">
                <div className="main-page">
                <div className="appointment-form">
                    <h4>{editId ? "Update Slot" : "Add Slot"}</h4>
                </div>
                <form onSubmit={handleSubmit} className="form-grid">
                    <div className="form-row">
                        <input
                            type="date"
                            value={form.appointment_date}
                            onChange={(e) =>
                                setForm({ ...form, appointment_date: e.target.value })
                            }
                            required
                        />

                        <input
                            type="time"
                            value={form.appointment_time}
                            onChange={(e) =>
                                setForm({ ...form, appointment_time: e.target.value })
                            }
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? "Saving..." : editId ? "Update" : "Add"}
                    </button>
                </form>
                <br></br>
                <div className="appointment-table">
                    <h4>All Appointments</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Status</th>
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {appointments.length === 0 ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center" }}>
                                        No Slots Found
                                    </td>
                                </tr>
                            ) : (
                                appointments.map((app) => (
                                    <tr key={app.appointment_id}>
                                        <td>
                                            {app.appointment_date
                                                ? new Date(app.appointment_date).toLocaleDateString("en-IN", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })
                                                : "-"}
                                        </td>
                                        <td>
                                            {app.appointment_time
                                                ? new Date(`1970-01-01T${app.appointment_time}`).toLocaleTimeString("en-IN", {
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                })
                                                : "-"}
                                        </td>

                                        <td>
                                            <span className={`status-badge ${app.status?.toLowerCase()}`}>
                                                {app.status}
                                            </span>
                                        </td>

                                        <td>
                                            {app.user_name || "Available"}
                                        </td>

                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() => handleEdit(app)}
                                            >
                                                Edit
                                            </button>

                                            {app.status === "Pending" && (
                                                <>
                                                    <button
                                                        className="btn-accept"
                                                        onClick={() => handleStatusChange(app.appointment_id, "Confirmed")}
                                                    >
                                                        Accept
                                                    </button>

                                                    <button
                                                        className="btn-reject"
                                                        onClick={() => handleStatusChange(app.appointment_id, "Cancelled")}
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AppointmentsDashboard;