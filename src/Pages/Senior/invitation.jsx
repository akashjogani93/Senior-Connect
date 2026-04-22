import { use, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/InvitationDashboard.css";
import { useInvitationStore } from "../../store/invitationStore";
import { createFormData } from "../../utils/formData";
import toast from "react-hot-toast";

function InvitationDashboard() {
    const {
        invitations,
        fetchInvitations,
        addUpdateInvitation,
        deleteInvitation,
        loading,
    } = useInvitationStore();

    const user = JSON.parse(localStorage.getItem("user"));

    const [form, setForm] = useState({
        title: "",
        event_type: "Social Gatherings",
        event_date: "",
        city: "",
        description: "",
        address: "",
        status: "Upcoming",
    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchInvitations({ user_id: user?.user_id });
    }, [user?.user_id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let payload = {
                ...form,
                event_date: form.event_date
                    ? new Date(form.event_date).toISOString()
                    : "",
                user_id: user?.user_id,
            };

            if (editId) {
                payload.Invitation_id = editId;
            }

            const formData = createFormData(payload);
            await addUpdateInvitation(formData);

            fetchInvitations({ user_id: user?.user_id });
            toast.success(`Invitation ${editId ? "updated" : "added"} successfully 🎉`);
            setForm({
                title: "",
                event_type: "Social Gatherings",
                event_date: "",
                city: "",
                description: "",
            });

            setEditId(null);
        } catch (err) {
            console.log(err);
        }
    };

    const handleEdit = (inv) => {
        setForm({
            title: inv.title,
            event_type: inv.event_type,
            event_date: inv.event_date
                ? new Date(inv.event_date).toISOString().slice(0, 16)
                : "",
            city: inv.city || "",
            description: inv.description || "",
            address: inv.address || "",
            status: inv.status || "Upcoming",
        });

        setEditId(inv.Invitation_id);
    };

    const handleDelete = async (id) => {
        try {
            await deleteInvitation(id);
            fetchInvitations({ user_id: user?.user_id });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="container invitation-container">

                {/* FORM */}
                <div className="invitation-form">
                    <h4>{editId ? "Update Invitation" : "Add Invitation"}</h4>

                    <form onSubmit={handleSubmit} className="form-grid">

                        {/* ROW 1 */}
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="Title"
                                value={form.title}
                                onChange={(e) =>
                                    setForm({ ...form, title: e.target.value })
                                }
                                required
                            />

                            <select
                                value={form.event_type}
                                onChange={(e) =>
                                    setForm({ ...form, event_type: e.target.value })
                                }
                            >
                                <option value="Social Gatherings">Social Gatherings</option>
                                <option value="Educational">Educational</option>
                                <option value="Health & Wellness">Health & Wellness</option>
                                <option value="Hobbies">Hobbies</option>
                                <option value="religious">religious</option>
                                <option value="community">community</option>
                                <option value="Other">Other</option>
                            </select>

                            <input
                                type="datetime-local"
                                value={form.event_date}
                                onChange={(e) =>
                                    setForm({ ...form, event_date: e.target.value })
                                }
                                required
                            />
                        </div>

                        {/* ROW 2 */}
                        <div className="form-row">
                            <input
                                type="text"
                                placeholder="City"
                                value={form.city}
                                onChange={(e) =>
                                    setForm({ ...form, city: e.target.value })
                                }
                            />

                            <input
                                type="text"
                                placeholder="Address"
                                value={form.address || ""}
                                onChange={(e) =>
                                    setForm({ ...form, address: e.target.value })
                                }
                            />

                            <select
                                value={form.status || "Upcoming"}
                                onChange={(e) =>
                                    setForm({ ...form, status: e.target.value })
                                }
                            >
                                <option value="Upcoming">Upcoming</option>
                                <option value="Ongoing">Ongoing</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>

                        {/* DESCRIPTION FULL WIDTH */}
                        <textarea
                            placeholder="Description"
                            value={form.description}
                            onChange={(e) =>
                                setForm({ ...form, description: e.target.value })
                            }
                            required
                        />

                        <button type="submit" disabled={loading}>
                            {loading ? "Saving..." : editId ? "Update" : "Add"}
                        </button>
                    </form>
                </div>

                <div className="invitation-table">
                    <h4>All Invitations</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>City</th>
                                <th>Address</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {invitations.length === 0 ? (
                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center" }}>
                                        No Invitations Found
                                    </td>
                                </tr>
                            ) : (
                                invitations.map((inv) => (
                                    <tr key={inv.Invitation_id}>
                                        <td>{inv.title}</td>
                                        <td>{inv.event_type}</td>
                                        <td>
                                            {inv.event_date
                                                ? new Date(inv.event_date).toLocaleString("en-IN", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    hour12: true,
                                                })
                                                : "-"}
                                        </td>
                                        <td>{inv.city || "-"}</td>
                                        <td>{inv.address || "-"}</td>
                                        <td>
                                            <span className={`status-badge ${inv.status?.toLowerCase()}`}>
                                                {inv.status || "Upcoming"}
                                            </span>
                                        </td>
                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() => handleEdit(inv)}
                                            >
                                                Edit
                                            </button>
                                            {/* <button
                                                className="btn-delete"
                                                onClick={() => handleDelete(inv.Invitation_id)}
                                            >
                                                Delete
                                            </button> */}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default InvitationDashboard;