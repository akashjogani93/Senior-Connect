import { useEffect } from "react";
import Navbar from "./components/Navbar";
import "../../assets/css/senior/appintments.css";
import toast from "react-hot-toast";
import { useServiceRequestStore } from "../../store/serviceStore";

function ServiceRequestsSeniorDashboard() {

    const { serviceRequests, fetchServiceRequests } = useServiceRequestStore();

    const user = JSON.parse(localStorage.getItem("user")) || {};

    // ✅ Fetch requests of this senior
    useEffect(() => {
        fetchServiceRequests({ user_id: user?.user_id });
    }, []);

    return (
        <div className="dashboard-page">
            <Navbar />

            <div className="container appointment-container">
                <div className="main-page">

                    <div className="appointment-table">
                        <h4>My Service Requests</h4>

                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Service Type</th>
                                    <th>Description</th>
                                    <th>Preferred Date</th>
                                    <th>Provider</th>
                                    <th>Status</th>
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

                                            {/* TYPE */}
                                            <td style={{ textTransform: "capitalize" }}>
                                                {req.service_type}
                                            </td>

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

                                            {/* PROVIDER */}
                                            <td>{req.provider_name}</td>

                                            {/* STATUS */}
                                            <td>
                                                <span className={`status-badge ${req.status}`}>
                                                    {req.status}
                                                </span>
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

export default ServiceRequestsSeniorDashboard;