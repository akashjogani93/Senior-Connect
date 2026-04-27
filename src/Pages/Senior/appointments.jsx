import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import { useAppointmentStore } from "../../store/appointmentStore";
import { createFormData } from "../../utils/formData";
import toast from "react-hot-toast";

function AppointmentsDashboard() {

    const { createUpdateAppointments, loading, fetchappointmentsnew, appointments, updateAppointmentStatus } = useAppointmentStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    const [form, setForm] = useState({
        appointment_date: "",
        from_time: "",
        to_time: "",
        duration: 30
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchappointmentsnew({ provider_id: user?.user_id });
    }, [user?.user_id]);

    // ✅ SLOT GENERATOR
    const generateTimeSlots = (from, to, duration) => {
        let slots = [];

        let start = new Date(`1970-01-01T${from}`);
        let end = new Date(`1970-01-01T${to}`);

        while (start < end) {
            let hours = String(start.getHours()).padStart(2, "0");
            let minutes = String(start.getMinutes()).padStart(2, "0");

            slots.push(`${hours}:${minutes}:00`);

            start.setMinutes(start.getMinutes() + parseInt(duration));
        }

        return slots;
    };

    // ✅ SUBMIT HANDLER
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // 👉 If editing (old logic)
            if (editId) {
                let payload = {
                    appointment_date: form.appointment_date,
                    appointment_time: form.from_time,
                    provider_id: user?.user_id,
                    appointment_id: editId
                };

                const formData = createFormData(payload);
                await createUpdateAppointments(formData);

                toast.success("Slot updated successfully");
            } else {
                // 👉 Generate multiple slots
                const slots = generateTimeSlots(
                    form.from_time,
                    form.to_time,
                    form.duration
                );

                if (slots.length === 0) {
                    toast.error("Invalid time range");
                    return;
                }

                // 🔥 Create all slots
                await Promise.all(
                    slots.map((time) => {
                        let payload = {
                            appointment_date: form.appointment_date,
                            appointment_time: time,
                            provider_id: user?.user_id,
                        };

                        const formData = createFormData(payload);
                        return createUpdateAppointments(formData);
                    })
                );

                toast.success("Slots generated successfully 🚀");
            }

            fetchappointmentsnew({ provider_id: user?.user_id });

            // Reset form
            setForm({
                appointment_date: "",
                from_time: "",
                to_time: "",
                duration: 30
            });

            setEditId(null);

        } catch (err) {
            console.log(err);
        }
    };

    // ✅ EDIT
    const handleEdit = (app) => {
        setForm({
            appointment_date: app.appointment_date,
            from_time: app.appointment_time,
            to_time: app.appointment_time,
            duration: 30
        });

        setEditId(app.appointment_id);
    };

    // ✅ STATUS CHANGE
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
                        <h4>{editId ? "Update Slot" : "Generate Slots"}</h4>
                    </div>

                    <form onSubmit={handleSubmit} className="form-grid">

                        <div className="form-row">
                            {/* DATE */}
                            <input
                                type="date"
                                value={form.appointment_date}
                                onChange={(e) =>
                                    setForm({ ...form, appointment_date: e.target.value })
                                }
                                required
                            />

                            {/* FROM TIME */}
                            <input
                                type="time"
                                value={form.from_time}
                                onChange={(e) =>
                                    setForm({ ...form, from_time: e.target.value })
                                }
                                required
                            />

                            {/* TO TIME */}
                            <input
                                type="time"
                                value={form.to_time}
                                onChange={(e) =>
                                    setForm({ ...form, to_time: e.target.value })
                                }
                                required
                            />

                            {/* DURATION */}
                            <input
                                type="number"
                                placeholder="Duration (min)"
                                value={form.duration}
                                onChange={(e) =>
                                    setForm({ ...form, duration: e.target.value })
                                }
                                required
                                min="5"
                            />
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? "Saving..." : editId ? "Update Slot" : "Generate Slots"}
                        </button>
                    </form>

                    <br />

                    {/* TABLE */}
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
                                                {new Date(app.appointment_date).toLocaleDateString("en-IN")}
                                            </td>

                                            <td>
                                                {new Date(`1970-01-01T${app.appointment_time}`)
                                                    .toLocaleTimeString("en-IN", {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                        hour12: true,
                                                    })}
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
                                                {/* <button
                                                    className="btn-edit"
                                                    onClick={() => handleEdit(app)}
                                                >
                                                    Edit
                                                </button> */}

                                                {app.status === "Pending" && (
                                                    <div style={{ display: "flex", gap: "8px" }}>
                                                        <button
                                                            onClick={() => handleStatusChange(app.appointment_id, "Confirmed")}
                                                            style={{
                                                                backgroundColor: "#28a745",
                                                                color: "#fff",
                                                                border: "none",
                                                                padding: "6px 12px",
                                                                borderRadius: "6px",
                                                                cursor: "pointer",
                                                                fontSize: "13px",
                                                                fontWeight: "500",
                                                                transition: "0.2s"
                                                            }}
                                                            onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
                                                            onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
                                                        >
                                                            ✔ Accept
                                                        </button>

                                                        <button
                                                            onClick={() => handleStatusChange(app.appointment_id, "Cancelled")}
                                                            style={{
                                                                backgroundColor: "#dc3545",
                                                                color: "#fff",
                                                                border: "none",
                                                                padding: "6px 12px",
                                                                borderRadius: "6px",
                                                                cursor: "pointer",
                                                                fontSize: "13px",
                                                                fontWeight: "500",
                                                                transition: "0.2s"
                                                            }}
                                                            onMouseOver={(e) => e.target.style.backgroundColor = "#c82333"}
                                                            onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}
                                                        >
                                                            ✖ Reject
                                                        </button>
                                                    </div>
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
        </div>
    );
}

export default AppointmentsDashboard;