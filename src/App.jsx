import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

// Page Components
import Home from './Pages/Public/Home';
import About from './Pages/Public/About';
import Contact from './Pages/Public/Contact';
import Login from './Pages/Public/Login';
import ForgotPassword from './components/Auth/ForgotPassword';
import Register from './Pages/Public/Register';
import Services from './Pages/Public/Services';
import Invitations from './Pages/Public/Invitations';

function App() {
    return (
        <>
        <Toaster position="top-right" reverseOrder={false} />
        <Router>
            <div className="d-flex flex-column min-vh-100">
                {/* Persistent Header */}
                <Navbar />

                {/* Main Content Area */}
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/Contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="/Invitations" element={<Invitations />} />
                    </Routes>
                </main>

                {/* Persistent Footer */}
                <Footer />
            </div>
        </Router>
        </>
    );
}

export default App;
