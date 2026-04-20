import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import toast from "react-hot-toast";
import { createFormData } from "../../utils/formData";
import { useServiceRequestStore } from "../../store/serviceStore";

function ServiceRequestsProviderDashboard() {

    const {
        serviceRequests,
        fetchServiceRequests,
        updateServiceRequestStatus
    } = useServiceRequestStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    // ✅ Fetch only provider-specific + business_type requests
    useEffect(() => {
        if (user?.user_id && user?.business_type) {
            fetchServiceRequests({
                provider_id: user.user_id,
                service_type: user.business_type
            });
        }
    }, [user?.user_id]);

    // ✅ Accept / Reject
    const handleStatusChange = async (id, status) => {
        try {
            let payload = {
                service_id: id,
                status: status
            };

            const formData = createFormData(payload);

            await updateServiceRequestStatus(formData);

            fetchServiceRequests({
                provider_id: user.user_id,
                service_type: user.business_type
            });

            toast.success(`Request ${status}`);
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
                        <h4>Service Requests</h4>

                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>User</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {serviceRequests.length === 0 ? (
                                    <tr>
                                        <td colSpan="6" style={{ textAlign: "center" }}>
                                            No Requests Found
                                        </td>
                                    </tr>
                                ) : (
                                    serviceRequests.map((req) => (
                                        <tr key={req.service_id}>

                                            {/* TITLE */}
                                            <td>{req.request_title}</td>

                                            {/* DESCRIPTION */}
                                            <td>{req.service_description}</td>

                                            {/* DATE */}
                                            <td>
                                                {req.preferred_date
                                                    ? new Date(req.preferred_date).toLocaleDateString("en-IN", {
                                                        day: "2-digit",
                                                        month: "short",
                                                        year: "numeric",
                                                    })
                                                    : "-"}
                                            </td>

                                            {/* USER */}
                                            <td>{req.user_name}</td>

                                            {/* STATUS */}
                                            <td>
                                                <span className={`status-badge ${req.status}`}>
                                                    {req.status}
                                                </span>
                                            </td>

                                            {/* ACTION */}
                                            <td>
                                                {req.status === "pending" && (
                                                    <>
                                                        <button
                                                            className="btn-accept"
                                                            onClick={() =>
                                                                handleStatusChange(req.service_id, "accepted")
                                                            }
                                                        >
                                                            Accept
                                                        </button>

                                                        <button
                                                            className="btn-reject"
                                                            onClick={() =>
                                                                handleStatusChange(req.service_id, "rejected")
                                                            }
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
        </div>
    );
}

export default ServiceRequestsProviderDashboard;