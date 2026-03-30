import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/InvitationDashboard.css";
import { useInvitationStore } from "../../store/invitationStore";

function InvitationDashboard() {
    const {
        invitations,
        fetchInvitations,
        addUpdateInvitation,
        deleteInvitation,
        loading,
    } = useInvitationStore();

    const [form, setForm] = useState({
        title: "",
        event_type: "birthday",
        event_date: "",
        city: "",
    });

    const [editId, setEditId] = useState(null);

    // 🔁 Load Invitations
    useEffect(() => {
        fetchInvitations();
    }, []);

    // ➕ Add / ✏️ Update
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = editId
                ? { ...form, id: editId }
                : form;

            await addUpdateInvitation(payload);

            // refresh list
            fetchInvitations();

            // reset form
            setForm({
                title: "",
                event_type: "birthday",
                event_date: "",
                city: "",
            });

            setEditId(null);
        } catch (err) {
            console.log(err);
        }
    };

    // ✏️ Edit
    const handleEdit = (inv) => {
        setForm({
            title: inv.title,
            event_type: inv.event_type,
            event_date: inv.event_date,
            city: inv.city || "",
        });
        setEditId(inv.id);
    };

    // ❌ Delete
    const handleDelete = async (id) => {
        try {
            await deleteInvitation(id);
            fetchInvitations();
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

                    <form onSubmit={handleSubmit}>
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
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="religious">Religious</option>
                            <option value="community">Community</option>
                        </select>

                        <input
                            type="date"
                            value={form.event_date}
                            onChange={(e) =>
                                setForm({ ...form, event_date: e.target.value })
                            }
                            required
                        />

                        <input
                            type="text"
                            placeholder="City"
                            value={form.city}
                            onChange={(e) =>
                                setForm({ ...form, city: e.target.value })
                            }
                        />

                        <button type="submit" disabled={loading}>
                            {loading
                                ? "Saving..."
                                : editId
                                ? "Update"
                                : "Add"}
                        </button>
                    </form>
                </div>

                {/* TABLE */}
                <div className="invitation-table">
                    <h4>All Invitations</h4>

                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th>City</th>
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
                                    <tr key={inv.id}>
                                        <td>{inv.title}</td>
                                        <td>{inv.event_type}</td>
                                        <td>{inv.event_date}</td>
                                        <td>{inv.city || "-"}</td>
                                        <td>
                                            <button
                                                className="btn-edit"
                                                onClick={() => handleEdit(inv)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn-delete"
                                                onClick={() => handleDelete(inv.id)}
                                            >
                                                Delete
                                            </button>
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