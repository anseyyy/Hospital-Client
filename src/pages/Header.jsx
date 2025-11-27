import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHospital, FaHeartbeat, FaCalendarAlt, FaGlobe, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import "./Pages.css";



function Header() {
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();
    
    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        logout();
    };
    
    return (
        <header className="header-premium">
            <div className="header-inner">
                <div className="header-brand">
                    <Link to={'/'} className="brand-main">
                        <div className="brand-mark">R</div>
                        <div className="brand-text">
                            <div className="brand-name">Rynott</div>
                            <div className="brand-tagline">Hospital</div>
                        </div>
                    </Link>
                </div>
                    {/* Center: Navigation */}
                    <nav className="nav-main">
                        

                        <Link
                            to="/all-specialities"
                            className={isActive("/all-specialities") ? "nav-link active" : "nav-link"}
                        >
                            <FaHeartbeat />
                            Our Specialties
                        </Link>

                        <Link
                            to="/meetRynott"
                            className={isActive("/meetRynott") ? "nav-link active" : "nav-link"}
                        >
                            Meet Rynott
                        </Link>

                        <Link
                            to="/careers"
                            className={isActive("/careers") ? "nav-link active" : "nav-link"}
                        >
                            Careers
                        </Link>

                        <Link
                            to="/contactus"
                            className={isActive("/contactus") ? "nav-link active" : "nav-link"}
                        >
                            Contact
                        </Link>

                        <Link
                            to="/feedback"
                            className={isActive("/feedback") ? "nav-link active" : "nav-link"}
                        >
                            Feedback
                        </Link>
                    </nav>

                    {/* Right: Actions */}
                    <div className="header-actions">
                        <button className="lang-pill">
                            <FaGlobe />
                            EN
                        </button>
                        
                        {/* Admin Section */}
                        {isAuthenticated ? (
                            <div className="d-flex align-items-center">
                                <Link to="/admin" className="btn-admin me-2">
                                    <FaUserShield />
                                    Admin Panel
                                </Link>
                                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                                    <FaSignOutAlt className="me-1" />
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Link to="/admin/login" className="btn-admin">
                                <FaUserShield />
                                Admin Login
                            </Link>
                        )}
                        
                        <Link to="/appointment" className="btn-header-primary">
                            <FaCalendarAlt />
                            Book Appointment
                        </Link>
                    </div>
            </div>
        </header>

    );
}

export default Header;