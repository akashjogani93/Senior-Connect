import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../../store/authStore';

export default function Navbar() {
    const navigate = useNavigate();
    // Helper to close menu when a link
    const [isOpen, setIsOpen] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"));
    const { logout } = useAuthStore();
    const userName = user?.name || "";
    console.log("User in Navbar:", user);
    const closeMenu = () => setIsOpen(false)
    const handleLogout = () => {
        logout(); // your zustand logout
        localStorage.removeItem("user");
        closeMenu();
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container">
                {/* Use Link instead of <a> */}
                <Link className="navbar-brand d-flex align-items-center fw-bold fs-3" to="/" onClick={closeMenu}>
                    Senior<span className="text-primary">Connect</span>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto align-items-center">
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/senior/dashboard" onClick={closeMenu}>Dashboard</Link>
                        </li> */}
                        {user && user.role === 'senior' && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/senior/Senior_appointments" onClick={closeMenu}>Appoitments</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/senior/services" onClick={closeMenu}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/senior/invitations" onClick={closeMenu}>Invitations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/senior/messages" onClick={closeMenu}>Messages</Link>
                                </li>
                            </>
                        )}
                        {user && user.role === 'provider' && user.business_type === 'hospital' && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/senior/appointments" onClick={closeMenu}>
                                    Appointments
                                </Link>
                            </li>
                        )}
                        {user && user.role === "provider" &&
                            ["caretaker", "medical_store"].includes(user.business_type) && (

                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="/senior/services_providor"
                                        onClick={closeMenu}
                                    >
                                        Services
                                    </Link>
                                </li>
                            )}

                        {user && user.role === "provider" && user.business_type === "volunteer" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/senior/messages" onClick={closeMenu}>
                                    Messages
                                </Link>
                            </li>
                        )}

                        <li className="nav-item">
                            <Link className="nav-link" to="/senior/profile" onClick={closeMenu}>My Profile</Link>
                        </li>
                        <li className="nav-item ms-lg-3 d-flex align-items-center gap-2">
                            <span className="fw-semibold text-primary">
                                👋 {userName}
                            </span>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}