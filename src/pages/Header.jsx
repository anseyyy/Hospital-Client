import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHospital, FaHeartbeat, FaCalendarAlt, FaGlobe, FaUserShield, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { Button } from "react-bootstrap";
import "./Pages.css";



function Header() {
    const { isAuthenticated, user, logout } = useAuth();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    const handleLogout = () => {
        logout();
        setIsMobileMenuOpen(false); // Close mobile menu on logout
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="header-premium">
                <div className="header-inner">
                    {/* Left: Brand */}
                    <div className="header-brand">
                        <Link to={'/'} className="brand-main" onClick={handleLinkClick}>
                            <div className="brand-mark">W</div>
                            <div className="brand-text">
                                <div className="brand-name">WellSpring</div>
                                <div className="brand-tagline">Hospital</div>
                            </div>
                        </Link>
                    </div>

                    {/* Center: Desktop Navigation */}
                    <nav className="nav-main">
                        <Link
                            to="/all-specialities"
                            className={isActive("/all-specialities") ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            <FaHeartbeat />
                            Our Specialties
                        </Link>

                        <Link
                            to="/meetWellSpring"
                            className={isActive("/meetWellSpring") ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Meet WellSpring
                        </Link>

                        <Link
                            to="/careers"
                            className={isActive("/careers") ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Careers
                        </Link>

                        <Link
                            to="/contactus"
                            className={isActive("/contactus") ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>

                        <Link
                            to="/feedback"
                            className={isActive("/feedback") ? "nav-link active" : "nav-link"}
                            onClick={handleLinkClick}
                        >
                            Feedback
                        </Link>
                    </nav>

                    {/* Right: Desktop Actions */}
                    <div className="header-actions">
                        <button className="lang-pill">
                            <FaGlobe />
                            EN
                        </button>

                        {/* Admin Section */}
                        {isAuthenticated ? (
                            <div className="d-flex align-items-center">
                                <Link to="/admin" className="btn-admin me-2" onClick={handleLinkClick}>
                                    <FaUserShield />
                                    Admin Panel
                                </Link>
                                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                                    <FaSignOutAlt className="me-1" />
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Link to="/admin/login" className="btn-admin" onClick={handleLinkClick}>
                                <FaUserShield />
                                Admin Login
                            </Link>
                        )}

                        <Link to="/appointment" className="btn-header-primary" onClick={handleLinkClick}>
                            <FaCalendarAlt />
                            Book Appointment
                        </Link>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="mobile-menu-toggle d-md-none"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay d-md-none" onClick={toggleMobileMenu}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="mobile-menu-header">
                            <div className="mobile-brand">
                                <Link to={'/'} className="brand-main" onClick={handleLinkClick}>
                                    <div className="brand-mark">W</div>
                                    <div className="brand-text">
                                        <div className="brand-name">WellSpring</div>
                                        <div className="brand-tagline">Hospital</div>
                                    </div>
                                </Link>
                            </div>
                            <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                                <FaTimes />
                            </button>
                        </div>

                        <nav className="mobile-nav">
                            <Link
                                to="/all-specialities"
                                className={isActive("/all-specialities") ? "mobile-nav-link active" : "mobile-nav-link"}
                                onClick={handleLinkClick}
                            >
                                <FaHeartbeat />
                                Our Specialties
                            </Link>

                            <Link
                                to="/meetWellSpring"
                                className={isActive("/meetWellSpring") ? "mobile-nav-link active" : "mobile-nav-link"}
                                onClick={handleLinkClick}
                            >
                                Meet WellSpring
                            </Link>

                            <Link
                                to="/careers"
                                className={isActive("/careers") ? "mobile-nav-link active" : "mobile-nav-link"}
                                onClick={handleLinkClick}
                            >
                                Careers
                            </Link>

                            <Link
                                to="/contactus"
                                className={isActive("/contactus") ? "mobile-nav-link active" : "mobile-nav-link"}
                                onClick={handleLinkClick}
                            >
                                Contact
                            </Link>

                            <Link
                                to="/feedback"
                                className={isActive("/feedback") ? "mobile-nav-link active" : "mobile-nav-link"}
                                onClick={handleLinkClick}
                            >
                                Feedback
                            </Link>
                        </nav>

                        <div className="mobile-actions">
                            {/* Admin Section */}
                            {isAuthenticated ? (
                                <div className="mobile-admin-section">
                                    <Link to="/admin" className="btn-admin w-100 mb-2" onClick={handleLinkClick}>
                                        <FaUserShield />
                                        Admin Panel
                                    </Link>
                                    <Button variant="outline-danger" size="sm" onClick={handleLogout} className="w-100">
                                        <FaSignOutAlt className="me-1" />
                                        Logout
                                    </Button>
                                </div>
                            ) : (
                                <Link to="/admin/login" className="btn-admin w-100" onClick={handleLinkClick}>
                                    <FaUserShield />
                                    Admin Login
                                </Link>
                            )}

                            <Link to="/appointment" className="btn-header-primary w-100 mt-2" onClick={handleLinkClick}>
                                <FaCalendarAlt />
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;