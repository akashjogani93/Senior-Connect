import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User in Navbar:", user);
    const closeMenu = () => setIsOpen(false)

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
                        <li className="nav-item">
                            <Link className="nav-link" to="/senior/dashboard" onClick={closeMenu}>Dashboard</Link>
                        </li>
                        {user && user.role === 'senior' && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/senior/appointments" onClick={closeMenu}>Appoitments</Link>
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
                        <li className="nav-item">
                            <Link className="nav-link" to="/senior/profile" onClick={closeMenu}>My Profile</Link>
                        </li>
                        <li className="nav-item ms-lg-4">
                            <Link className="btn btn-primary-custom" to="/login" onClick={closeMenu}>Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}