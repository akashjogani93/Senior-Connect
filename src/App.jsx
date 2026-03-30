import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Pages
import Home from './Pages/Public/Home';
import About from './Pages/Public/About';
import Contact from './Pages/Public/Contact';
import Login from './Pages/Public/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import Register from './Pages/Public/Register';
import Services from './Pages/Public/Services';
import Invitations from './Pages/Public/Invitations';

// Dashboard
import Dashboard from './Pages/Senior/Dashboard';
import InvitationDashboard from './Pages/Senior/invitation';


// ✅ Private Route
function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    return token ? children : <Navigate to="/login" />;
}


// ✅ Senior Layout (Protected + Nested Routes)
function SeniorLayout() {
    return (
        <PrivateRoute>
            <div className="senior-layout">
                {/* Future: Sidebar / Header */}
                <Outlet />
            </div>
        </PrivateRoute>
    );
}


// ✅ Layout (Navbar/Footer control)
function AppLayout() {
    const location = useLocation();
    const isDashboard = location.pathname.startsWith("/senior");

    return (
        <div className="d-flex flex-column min-vh-100">

            {!isDashboard && <Navbar />}

            <main className="flex-grow-1">
                <Routes>

                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/invitations" element={<Invitations />} />

                    {/* ✅ Protected Routes */}
                    <Route path="/senior" element={<SeniorLayout />}>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="invitations" element={<InvitationDashboard />} />
                    </Route>

                </Routes>
            </main>

            {!isDashboard && <Footer />}
        </div>
    );
}


// ✅ Main App
function App() {
    return (
        <>
            <Toaster position="top-right" />
            <Router>
                <AppLayout />
            </Router>
        </>
    );
}

export default App;