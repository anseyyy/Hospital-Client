import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaTachometerAlt, FaSignOutAlt, FaUserShield, FaHome } from 'react-icons/fa';
Container

function AdminHeader() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <Navbar bg="dark" variant="dark" className="admin-navbar-custom">
      <Container fluid>
        <Navbar.Brand className="admin-brand">
          <FaTachometerAlt className="me-2" />
          WellSpring Hospital Admin
        </Navbar.Brand>

        <Nav className="ms-auto d-flex align-items-center">
          <Button
            variant="outline-light"
            size="sm"
            className="me-3 home-btn"
            onClick={handleHomeRedirect}
          >
            <FaHome className="me-1" />
            Go to Website
          </Button>

          <div className="admin-user-info me-3">
            <FaUserShield className="me-2 text-light" />
            <span className="text-light fw-semibold">{user?.name}</span>
            <small className="text-muted ms-2">({user?.role})</small>
          </div>

          <Button
            variant="outline-danger"
            size="sm"
            onClick={handleLogout}
            className="admin-logout-btn"
          >
            <FaSignOutAlt className="me-1" />
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;