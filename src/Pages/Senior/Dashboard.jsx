import Navbar from "./components/Navbar";
import "../../assets/css/senior/dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="container dashboard-bg">
            <div className="dashboard-container">

                {/* Header */}
                <div className="dashboard-header">
                    <div>
                        <h2>Welcome Back 👋</h2>
                        <p>Your health & support at one place</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="dashboard-stats">
                    <div className="stat-card">
                        <div className="icon">🏥</div>
                        <h3>5</h3>
                        <p>Appointments</p>
                    </div>

                    <div className="stat-card">
                        <div className="icon">🛠️</div>
                        <h3>3</h3>
                        <p>Requests</p>
                    </div>

                    <div className="stat-card">
                        <div className="icon">💬</div>
                        <h3>2</h3>
                        <p>Messages</p>
                    </div>
                </div>

                {/* Appointments Table */}
                <div className="dashboard-section">
                    <div className="section-header">
                        <h4>Upcoming Appointments</h4>
                    </div>

                    <div className="table-card">
                        <table className="dashboard-table">
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Doctor</th>
                                    <th>Date & Time</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Doctor Visit</td>
                                    <td>Dr. Sharma</td>
                                    <td>Tomorrow, 10:00 AM</td>
                                    <td>
                                        <span className="status pending">Pending</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Physiotherapy</td>
                                    <td>Home Service</td>
                                    <td>28 March, 4:00 PM</td>
                                    <td>
                                        <span className="status completed">Completed</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Chat Highlight */}
                <div className="dashboard-section">
                    <div className="chat-box">
                        <div>
                            <h4>Need Help? 🤝</h4>
                            <p>Chat with volunteers anytime</p>
                        </div>
                        <button className="btn-chat">Open Chat</button>
                    </div>
                </div>

                {/* Website Redirect Section */}
                <div className="dashboard-section">
                    <div className="service-redirect">
                        <h4>Explore Services</h4>
                        <p>Book or request services from our main website</p>

                        <div className="redirect-buttons">
                            <button className="btn-service">Hospital</button>
                            <button className="btn-service">Caretaker</button>
                            <button className="btn-service">Medicine</button>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}

export default Dashboard;