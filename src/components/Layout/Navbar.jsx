import { useState } from 'react'
import { Link } from 'react-router-dom' // 1. Import Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Helper to close menu when a link is clicked (good for mobile UX)
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
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeMenu}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/invitations" onClick={closeMenu}>Invitations</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav-item ms-lg-4">
              <Link className="btn btn-primary-custom" to="/login" onClick={closeMenu}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}